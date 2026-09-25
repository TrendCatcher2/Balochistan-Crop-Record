import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import { DateFarm, TreeScanResult, CropScanContext, BalochistanAgriStation } from '../types';
import { MAKRAN_FARMS, SIMULATED_TREE_CROWNS } from '../data/datePalmData';
import { BALOCHISTAN_AGRI_STATIONS } from '../data/balochistanAgriData';
import { 
  Plus, 
  Minus, 
  Compass, 
  Crosshair, 
  Layers, 
  MapPin, 
  Activity, 
  Sparkles,
  Building2,
  TreePalm
} from 'lucide-react';
import { PalmIcon } from './Icons';

export type MapTileProvider = 'satellite' | 'streets' | 'topo';
export type DistrictFilter = 
  | 'all' 
  | 'Kech (Turbat)' 
  | 'Panjgur' 
  | 'Gwadar' 
  | 'Quetta / Ziarat' 
  | 'Lasbela / Hub' 
  | 'Khuzdar / Kalat' 
  | 'Nasirabad';

interface MapCanvasProps {
  selectedFarmId?: string;
  selectedStationId?: string;
  activeDistrict?: DistrictFilter;
  onDistrictChange?: (district: DistrictFilter) => void;
  onFarmClick: (farm: DateFarm) => void;
  onStationClick?: (station: BalochistanAgriStation) => void;
  onTreeScanUpdate?: (scanResult: TreeScanResult) => void;
  isTreeCounterActive: boolean;
  onToggleTreeCounter: () => void;
  onTriggerCropScan?: (scanContext: CropScanContext) => void;
  isCropScanning?: boolean;
}

// Center Coordinates across Balochistan Agro-Zones
const TURBAT_CENTER: [number, number] = [25.9964, 63.0450];
const PANJGUR_CENTER: [number, number] = [26.9644, 64.0903];
const GWADAR_CENTER: [number, number] = [25.4670, 62.4580];
const QUETTA_CENTER: [number, number] = [30.1798, 66.9750];
const LASBELA_CENTER: [number, number] = [25.8050, 66.6200];
const KHUZDAR_CENTER: [number, number] = [27.8100, 66.6100];
const NASIRABAD_CENTER: [number, number] = [28.5800, 68.2100];
const BALOCHISTAN_OVERVIEW: [number, number] = [27.8, 65.5];

// Map Tile Layer Providers
const TILE_LAYERS = {
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri, Maxar, Earthstar Geographics'
  },
  streets: {
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; CARTO &copy; OpenStreetMap'
  },
  topo: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri Topo'
  }
};

export const MapCanvas: React.FC<MapCanvasProps> = ({
  selectedFarmId,
  selectedStationId,
  activeDistrict = 'all',
  onDistrictChange,
  onFarmClick,
  onStationClick,
  onTreeScanUpdate,
  isTreeCounterActive,
  onToggleTreeCounter,
  onTriggerCropScan,
  isCropScanning = false
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const currentTileLayerRef = useRef<L.TileLayer | null>(null);
  
  const farmsLayerRef = useRef<L.LayerGroup | null>(null);
  const stationsLayerRef = useRef<L.LayerGroup | null>(null);
  const treeScanCircleRef = useRef<L.Circle | null>(null);
  const crownMarkersGroupRef = useRef<L.LayerGroup | null>(null);

  const [activeTileType, setActiveTileType] = useState<MapTileProvider>('satellite');
  const [currentZoom, setCurrentZoom] = useState<number>(11);
  const [scanRadiusMeters, setScanRadiusMeters] = useState<number>(180);

  // Initialize Map strictly centered on Balochistan
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: TURBAT_CENTER,
      zoom: 11,
      minZoom: 6,
      maxZoom: 18,
      zoomControl: false
    });

    mapInstanceRef.current = map;

    const baseTile = L.tileLayer(TILE_LAYERS.satellite.url, {
      attribution: TILE_LAYERS.satellite.attribution,
      maxZoom: 18
    }).addTo(map);
    currentTileLayerRef.current = baseTile;

    farmsLayerRef.current = L.layerGroup().addTo(map);
    stationsLayerRef.current = L.layerGroup().addTo(map);
    crownMarkersGroupRef.current = L.layerGroup().addTo(map);

    map.on('zoomend', () => {
      setCurrentZoom(map.getZoom());
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Map Tile Layer
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (currentTileLayerRef.current) {
      map.removeLayer(currentTileLayerRef.current);
    }

    const newTile = L.tileLayer(TILE_LAYERS[activeTileType].url, {
      attribution: TILE_LAYERS[activeTileType].attribution,
      maxZoom: 18
    }).addTo(map);

    newTile.bringToBack();
    currentTileLayerRef.current = newTile;
  }, [activeTileType]);

  // Render Date Palm Farms across Balochistan (Turbat, Panjgur, Gwadar, etc.)
  useEffect(() => {
    const map = mapInstanceRef.current;
    const group = farmsLayerRef.current;
    if (!map || !group) return;

    group.clearLayers();

    // Filter farms according to active district
    const displayedFarms = MAKRAN_FARMS.filter(f => {
      if (activeDistrict === 'all') return true;
      if (activeDistrict === 'Kech (Turbat)') return f.district.includes('Kech') || f.district.includes('Turbat');
      if (activeDistrict === 'Panjgur') return f.district.includes('Panjgur');
      if (activeDistrict === 'Gwadar') return f.district.includes('Gwadar');
      return true;
    });

    displayedFarms.forEach((farm) => {
      const isSelected = selectedFarmId === farm.id;

      // Custom HTML Pin Icon
      const pinHtml = `
        <div class="relative group cursor-pointer transition-transform transform hover:scale-110">
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-2xl shadow-2xl border-2 transition-all ${
            isSelected 
              ? 'bg-amber-400 border-amber-100 text-emerald-950 font-black scale-110 ring-4 ring-amber-400/50' 
              : 'bg-emerald-950/95 backdrop-blur-md border-emerald-400/80 text-white font-bold'
          }">
            <span class="w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-emerald-950 animate-ping' : 'bg-amber-400'}"></span>
            <div class="flex flex-col leading-none">
              <span class="text-xs tracking-tight whitespace-nowrap">${farm.name.split(' ')[0]}</span>
              <span class="text-[8px] opacity-80">${farm.district.replace(' (Turbat)', '')}</span>
            </div>
            <span class="text-[10px] font-mono px-1 rounded ${isSelected ? 'bg-emerald-950 text-amber-300' : 'bg-emerald-900 text-emerald-200'}">
              ${(farm.estimatedTreeCount / 1000).toFixed(0)}k
            </span>
          </div>
          <div class="w-2 h-2 bg-emerald-950 transform rotate-45 mx-auto -mt-1 shadow-sm"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'custom-farm-pin',
        iconSize: [130, 42],
        iconAnchor: [65, 38]
      });

      const marker = L.marker([farm.coordinates.lat, farm.coordinates.lng], { icon: customIcon }).addTo(group);
      
      marker.bindTooltip(`
        <div style="font-family: system-ui, sans-serif; padding: 6px 8px; min-width: 220px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
            <span style="font-weight: 800; font-size: 13px; color: #064e3b;">${farm.name}</span>
            <span style="font-size: 9px; font-weight: 700; background: #dcfce7; color: #166534; padding: 1px 6px; border-radius: 9999px;">
              ${farm.district}
            </span>
          </div>
          <div style="font-size: 10px; color: #57534e; margin-bottom: 4px;">
            ${farm.subRegion} • Alt: ${farm.altitudeMeters}m MSL
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin: 4px 0; background: #f9f8f4; padding: 4px; border-radius: 6px;">
            <div>
              <span style="font-size: 9px; color: #78716c; display: block;">Trees Count:</span>
              <strong style="font-size: 12px; color: #064e3b; font-family: monospace;">${farm.estimatedTreeCount.toLocaleString()}</strong>
            </div>
            <div>
              <span style="font-size: 9px; color: #78716c; display: block;">Annual Yield:</span>
              <strong style="font-size: 12px; color: #b45309; font-family: monospace;">${farm.annualYieldTons.toLocaleString()} MT</strong>
            </div>
          </div>
          <div style="font-size: 10px; margin-top: 4px; color: #1e293b;">
            <strong>Status:</strong> <span style="color: #047857; font-weight: 600;">${farm.operationalStatus}</span>
          </div>
          <div style="font-size: 10px; margin-top: 2px; color: #1e293b;">
            <strong>Water Source:</strong> <span>${farm.waterSource}</span>
          </div>
        </div>
      `, { direction: 'top', offset: [0, -32], opacity: 0.98 });

      marker.on('click', () => onFarmClick(farm));
    });
  }, [selectedFarmId, activeDistrict, onFarmClick]);

  // Render Agriculture Extension Department Research Stations & Model Farms
  useEffect(() => {
    const map = mapInstanceRef.current;
    const group = stationsLayerRef.current;
    if (!map || !group) return;

    group.clearLayers();

    BALOCHISTAN_AGRI_STATIONS.forEach((station) => {
      const isSelected = selectedStationId === station.id;
      const isDg = station.stationType === 'DG Headquarters & Sub-Department';
      const isDD = station.stationType === 'District Deputy Director Office';
      const isResearch = station.stationType === 'Research Institute' || station.stationType === 'Adaptive Trial Station';
      
      const badgeIcon = isDg ? '🏛️' : isDD ? '🏢' : isResearch ? '🔬' : '🌱';
      const tagText = isDg ? 'DG-HQ' : isDD ? 'DD-Ext' : isResearch ? 'ARI' : 'Nursery';
      const badgeBg = isDg ? 'bg-amber-400 text-emerald-950' : isDD ? 'bg-blue-600 text-white' : isResearch ? 'bg-emerald-600 text-white' : 'bg-lime-600 text-white';

      const stationHtml = `
        <div class="relative group cursor-pointer transition-transform transform hover:scale-110">
          <div class="flex items-center gap-1.5 px-2 py-1 rounded-2xl shadow-2xl border-2 transition-all ${
            isSelected
              ? 'bg-amber-400 border-white text-emerald-950 font-black scale-110 ring-4 ring-amber-400/50'
              : isDg
              ? 'bg-emerald-950/95 backdrop-blur-md border-amber-400 text-white font-bold'
              : isDD
              ? 'bg-[#0f2438]/95 backdrop-blur-md border-blue-400 text-white font-bold'
              : 'bg-emerald-900/95 backdrop-blur-md border-emerald-400/90 text-white font-bold'
          }">
            <span class="text-xs">${badgeIcon}</span>
            <div class="flex flex-col leading-none max-w-[90px] overflow-hidden">
              <span class="text-[11px] font-black tracking-tight truncate">${station.name.split(' ')[0]}</span>
              <span class="text-[8px] text-amber-200 font-semibold truncate">${station.district}</span>
            </div>
            <span class="text-[8px] font-mono px-1 py-0.2 rounded font-black uppercase ${badgeBg}">
              ${tagText}
            </span>
          </div>
          <div class="w-2 h-2 ${isDg ? 'bg-emerald-950' : isDD ? 'bg-[#0f2438]' : 'bg-emerald-900'} transform rotate-45 mx-auto -mt-1 shadow-sm"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: stationHtml,
        className: 'custom-station-pin',
        iconSize: [140, 40],
        iconAnchor: [70, 36]
      });

      const marker = L.marker([station.coordinates.lat, station.coordinates.lng], { icon: customIcon }).addTo(group);

      marker.bindTooltip(`
        <div style="font-family: system-ui, sans-serif; padding: 6px 8px; min-width: 250px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
            <span style="font-weight: 800; font-size: 13px; color: #047857;">${station.name}</span>
            <span style="font-size: 9px; font-weight: 700; background: #fef3c7; color: #92400e; padding: 1px 6px; border-radius: 9999px;">
              ${station.stationType}
            </span>
          </div>
          <div style="font-size: 10px; color: #475569; margin-bottom: 4px;">
            ${station.institution} • ${station.division}
          </div>
          <div style="font-size: 10px; color: #0f172a; margin-bottom: 4px; padding: 4px; background: #f1f5f9; border-radius: 6px;">
            <strong>Officer in Charge:</strong> ${station.officerInCharge}<br/>
            <strong>Facility Size:</strong> ${station.acreageHectares} Hectares • Est. ${station.establishedYear}
          </div>
          <div style="font-size: 10px; color: #334155;">
            <strong>Focus Crops / Mandate:</strong> ${station.focusCrops.slice(0, 4).join(', ')}
          </div>
        </div>
      `, { direction: 'top', offset: [0, -32], opacity: 0.98 });

      marker.on('click', () => {
        onStationClick?.(station);
      });
    });
  }, [selectedStationId, onStationClick]);

  // Center/Fly to selected entity or district
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (selectedFarmId) {
      const farm = MAKRAN_FARMS.find(f => f.id === selectedFarmId);
      if (farm) {
        map.flyTo([farm.coordinates.lat, farm.coordinates.lng], 14, {
          duration: 1.2,
          easeLinearity: 0.25
        });
        return;
      }
    }

    if (selectedStationId) {
      const station = BALOCHISTAN_AGRI_STATIONS.find(s => s.id === selectedStationId);
      if (station) {
        map.flyTo([station.coordinates.lat, station.coordinates.lng], 14, {
          duration: 1.2,
          easeLinearity: 0.25
        });
      }
    }
  }, [selectedFarmId, selectedStationId]);

  // Handle District View Jump across all Balochistan
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (activeDistrict === 'Kech (Turbat)') {
      map.flyTo(TURBAT_CENTER, 12, { duration: 1.2 });
    } else if (activeDistrict === 'Panjgur') {
      map.flyTo(PANJGUR_CENTER, 12, { duration: 1.2 });
    } else if (activeDistrict === 'Gwadar') {
      map.flyTo(GWADAR_CENTER, 11, { duration: 1.2 });
    } else if (activeDistrict === 'Quetta / Ziarat') {
      map.flyTo(QUETTA_CENTER, 10, { duration: 1.4 });
    } else if (activeDistrict === 'Lasbela / Hub') {
      map.flyTo(LASBELA_CENTER, 10, { duration: 1.4 });
    } else if (activeDistrict === 'Khuzdar / Kalat') {
      map.flyTo(KHUZDAR_CENTER, 10, { duration: 1.4 });
    } else if (activeDistrict === 'Nasirabad') {
      map.flyTo(NASIRABAD_CENTER, 10, { duration: 1.4 });
    } else if (activeDistrict === 'all') {
      map.flyTo(BALOCHISTAN_OVERVIEW, 7, { duration: 1.4 });
    }
  }, [activeDistrict]);

  // Perform Tree Count Function
  const performTreeCountAt = useCallback((lat: number, lng: number) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    let nearestFarm: DateFarm | undefined;
    let minDistance = Infinity;

    MAKRAN_FARMS.forEach(farm => {
      const dLat = farm.coordinates.lat - lat;
      const dLng = farm.coordinates.lng - lng;
      const dist = Math.sqrt(dLat * dLat + dLng * dLng);
      if (dist < minDistance) {
        minDistance = dist;
        nearestFarm = farm;
      }
    });

    const isInsideBalochistan = lat >= 24.5 && lat <= 32.2 && lng >= 60.5 && lng <= 70.2;
    const isInsideMakran = lat >= 25.0 && lat <= 27.6 && lng >= 61.8 && lng <= 65.2;
    const areaHectares = Math.PI * Math.pow(scanRadiusMeters, 2) / 10000;

    let density = 0;
    let treeCount = 0;
    let primaryVariety = "Date Palm & Mixed Orchard";

    if (minDistance < 0.12 && nearestFarm) {
      density = nearestFarm.treeDensityPerHa;
      treeCount = Math.round(areaHectares * density);
      primaryVariety = nearestFarm.dominantVarieties[0];
    } else if (isInsideMakran) {
      density = 118;
      treeCount = Math.round(areaHectares * density * 0.9);
      primaryVariety = "Mozawati & Begum Jangi (Alluvial Belt)";
    } else if (lat > 29.5) {
      density = 280;
      treeCount = Math.round(areaHectares * density * 0.85);
      primaryVariety = "Apple (Tor Kulu) & Table Grapes";
    } else {
      density = 95;
      treeCount = Math.round(areaHectares * density * 0.7);
      primaryVariety = "Horticultural Stand (Balochistan)";
    }

    const estimatedAnnualYieldTons = Number((treeCount * 0.084).toFixed(1));
    const dailyWaterNeedLiters = treeCount * 45;

    const scanResult: TreeScanResult = {
      lat,
      lng,
      radiusMeters: scanRadiusMeters,
      areaHectares: Number(areaHectares.toFixed(2)),
      detectedTreesCount: treeCount,
      densityPerHa: density,
      estimatedAnnualYieldTons,
      dailyWaterNeedLiters,
      canopyCoveragePercent: isInsideMakran ? 78 : 62,
      ndviHealthScore: isInsideBalochistan ? 0.82 : 0.45,
      nearestFarmName: minDistance < 0.2 && nearestFarm ? nearestFarm.name : undefined,
      primaryVariety,
      sampleCrowns: SIMULATED_TREE_CROWNS
    };

    onTreeScanUpdate?.(scanResult);

    // Update Circle layer smoothly
    if (!treeScanCircleRef.current) {
      treeScanCircleRef.current = L.circle([lat, lng], {
        radius: scanRadiusMeters,
        color: '#f59e0b',
        weight: 2.5,
        fillColor: '#fbbf24',
        fillOpacity: 0.22,
        dashArray: '5, 5'
      }).addTo(map);
    } else {
      treeScanCircleRef.current.setLatLng([lat, lng]);
      treeScanCircleRef.current.setRadius(scanRadiusMeters);
    }

    // Update crown dot markers
    if (crownMarkersGroupRef.current) {
      crownMarkersGroupRef.current.clearLayers();
      
      SIMULATED_TREE_CROWNS.forEach((crown) => {
        const offsetLat = (crown.relY / 50) * (scanRadiusMeters / 111320);
        const offsetLng = (crown.relX / 50) * (scanRadiusMeters / (111320 * Math.cos(lat * Math.PI / 180)));

        const crownDot = L.circleMarker([lat + offsetLat, lng + offsetLng], {
          radius: crown.radius,
          fillColor: crown.health === 'optimal' ? '#10b981' : crown.health === 'young' ? '#f59e0b' : '#38bdf8',
          fillOpacity: 0.9,
          color: '#ffffff',
          weight: 1.2
        });
        crownMarkersGroupRef.current?.addLayer(crownDot);
      });
    }
  }, [scanRadiusMeters, onTreeScanUpdate]);

  // Robust Tree Counter Scanner Event Listeners (Fixed scanning error)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const handleMapClick = (e: L.LeafletMouseEvent) => {
      if (!isTreeCounterActive) return;
      performTreeCountAt(e.latlng.lat, e.latlng.lng);
    };

    if (isTreeCounterActive) {
      map.on('click', handleMapClick);
      const center = map.getCenter();
      performTreeCountAt(center.lat, center.lng);
    } else {
      map.off('click', handleMapClick);
      if (treeScanCircleRef.current) {
        map.removeLayer(treeScanCircleRef.current);
        treeScanCircleRef.current = null;
      }
      if (crownMarkersGroupRef.current) {
        crownMarkersGroupRef.current.clearLayers();
      }
    }

    return () => {
      map.off('click', handleMapClick);
    };
  }, [isTreeCounterActive, performTreeCountAt]);

  // Satellite Crop Health Scan Trigger
  const handleTriggerCropScan = () => {
    if (!mapInstanceRef.current) return;
    const center = mapInstanceRef.current.getCenter();
    const zoom = mapInstanceRef.current.getZoom();

    let nearestFarm = MAKRAN_FARMS[0];
    let minD = Infinity;
    MAKRAN_FARMS.forEach((farm) => {
      const d = Math.hypot(farm.coordinates.lat - center.lat, farm.coordinates.lng - center.lng);
      if (d < minD) {
        minD = d;
        nearestFarm = farm;
      }
    });

    const isKech = nearestFarm.district.includes('Kech') || nearestFarm.district.includes('Turbat');
    const isPanjgur = nearestFarm.district.includes('Panjgur');
    const areaName = minD < 0.25 ? nearestFarm.name : `${nearestFarm.district} Oasis Corridor`;

    const scanContext: CropScanContext = {
      areaName,
      district: nearestFarm.district,
      coordinates: { lat: center.lat, lng: center.lng },
      zoomLevel: zoom,
      currentNdvi: nearestFarm.canopyNDVI,
      deltaNdvi14d: -0.04,
      estimatedTreeCount: nearestFarm.estimatedTreeCount,
      dominantVarieties: nearestFarm.dominantVarieties,
      waterSource: nearestFarm.waterSource,
      ambientTempC: isKech ? 48.2 : isPanjgur ? 41.5 : 37.0,
      humidityPercent: isKech ? 18 : isPanjgur ? 44 : 62,
      operationalStatus: nearestFarm.operationalStatus
    };

    onTriggerCropScan?.(scanContext);
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-900 select-none">
      {/* Real Leaflet Map Viewport Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Satellite Crop Scan Active Multi-spectral Radar Overlay */}
      {isCropScanning && (
        <div className="absolute inset-0 z-30 pointer-events-none bg-emerald-950/20 backdrop-blur-[1px] flex flex-col items-center justify-center">
          <div className="relative w-80 h-80 border-2 border-emerald-400/60 rounded-full flex items-center justify-center animate-ping opacity-35" />
          <div className="absolute bg-[#062419]/95 text-white border-2 border-amber-400 px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-3.5 max-w-md text-center">
            <span className="w-6 h-6 border-3 border-amber-400 border-t-transparent rounded-full animate-spin shrink-0" />
            <div className="text-left">
              <div className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Sentinel-2 Crop Health Scan Active
              </div>
              <div className="text-[11px] text-emerald-200 mt-0.5">
                Acquiring Red-Edge & NIR Multispectral Bands for Balochistan Crop Health Analysis...
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Floating Navigation Toolbar: Balochistan District Focus Ribbon */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 pointer-events-auto max-w-[90vw]">
        
        {/* District Selector Filter Pills */}
        <div className="bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[70vw]">
          <span className="text-[10px] font-extrabold text-emerald-950 uppercase tracking-wider pl-1.5 pr-1 flex items-center gap-1 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            District:
          </span>

          <button
            onClick={() => onDistrictChange?.('all')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 ${
              activeDistrict === 'all'
                ? 'bg-emerald-950 text-amber-300'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            All Balochistan
          </button>

          <button
            onClick={() => onDistrictChange?.('Kech (Turbat)')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
              activeDistrict === 'Kech (Turbat)'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
            }`}
          >
            <span>🌴 Turbat (Kech)</span>
          </button>

          <button
            onClick={() => onDistrictChange?.('Panjgur')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
              activeDistrict === 'Panjgur'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
            }`}
          >
            <span>🌿 Panjgur</span>
          </button>

          <button
            onClick={() => onDistrictChange?.('Gwadar')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
              activeDistrict === 'Gwadar'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
            }`}
          >
            <span>🌊 Gwadar</span>
          </button>

          <button
            onClick={() => onDistrictChange?.('Quetta / Ziarat')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
              activeDistrict === 'Quetta / Ziarat'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
            }`}
          >
            <span>🍎 Quetta / Ziarat</span>
          </button>

          <button
            onClick={() => onDistrictChange?.('Lasbela / Hub')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
              activeDistrict === 'Lasbela / Hub'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
            }`}
          >
            <span>🥭 Lasbela / Hub</span>
          </button>

          <button
            onClick={() => onDistrictChange?.('Khuzdar / Kalat')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
              activeDistrict === 'Khuzdar / Kalat'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
            }`}
          >
            <span>🫒 Khuzdar / Kalat</span>
          </button>

          <button
            onClick={() => onDistrictChange?.('Nasirabad')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
              activeDistrict === 'Nasirabad'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
            }`}
          >
            <span>🌾 Nasirabad</span>
          </button>
        </div>

        {/* Tree Counter Radar Toggle Button */}
        <button
          onClick={onToggleTreeCounter}
          className={`flex items-center gap-2 px-3 py-2 rounded-2xl text-xs font-extrabold transition-all shadow-xl border shrink-0 ${
            isTreeCounterActive
              ? 'bg-amber-500 text-emerald-950 border-amber-300 ring-4 ring-amber-400/40 animate-pulse'
              : 'bg-white/95 text-emerald-950 border-stone-200 hover:bg-amber-50'
          }`}
          title="Click anywhere on the map to count trees & compute canopy coverage"
        >
          <Crosshair className={`w-4 h-4 ${isTreeCounterActive ? 'text-emerald-950' : 'text-amber-600'}`} />
          <span>{isTreeCounterActive ? 'Tree Counter: ON' : 'Scan & Count'}</span>
        </button>

        {/* Satellite Crop Health Scan Trigger Button */}
        <button
          onClick={handleTriggerCropScan}
          disabled={isCropScanning}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-black bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-amber-300 border border-amber-400/60 shadow-xl hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 cursor-pointer shrink-0"
          title="Analyze current map area's recent NDVI changes with Gemini AI"
        >
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>Satellite Crop Health Scan</span>
        </button>
      </div>

      {/* Map Control Floating Panel (Bottom Left) */}
      <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2 pointer-events-auto">
        
        {/* Layer Selector */}
        <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-stone-200 flex flex-col gap-1">
          <button
            onClick={() => setActiveTileType('satellite')}
            className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTileType === 'satellite'
                ? 'bg-emerald-950 text-amber-300 shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
            title="Maxar High-Resolution Satellite View"
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Satellite Imagery</span>
          </button>

          <button
            onClick={() => setActiveTileType('streets')}
            className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTileType === 'streets'
                ? 'bg-emerald-950 text-amber-300 shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
            title="Cartographic Street & Road View"
          >
            <Compass className="w-4 h-4" />
            <span className="hidden sm:inline">Topographic Roads</span>
          </button>
        </div>

        {/* Zoom In / Out Controls */}
        <div className="bg-white/95 backdrop-blur-md p-1 rounded-2xl shadow-xl border border-stone-200 flex flex-col items-center">
          <button
            onClick={() => mapInstanceRef.current?.zoomIn()}
            className="p-2 hover:bg-stone-100 rounded-xl text-stone-800 font-bold transition-all"
            title="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="w-4 h-px bg-stone-200" />
          <button
            onClick={() => mapInstanceRef.current?.zoomOut()}
            className="p-2 hover:bg-stone-100 rounded-xl text-stone-800 font-bold transition-all"
            title="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Map Legend (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-stone-200 pointer-events-auto text-xs space-y-1.5 hidden md:block">
        <div className="text-[10px] font-black uppercase text-stone-500 tracking-wider">
          Balochistan Map Legend
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-900 border border-amber-400" />
          <span className="text-stone-700 font-medium">Date Palm Groves & Oases</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-amber-400 border border-emerald-900" />
          <span className="text-stone-700 font-medium">Agri Extension Research Stations (ARI)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
          <span className="text-stone-700 font-medium">Subterranean Karez / Solar Tube-Well</span>
        </div>
      </div>
    </div>
  );
};

export default MapCanvas;
