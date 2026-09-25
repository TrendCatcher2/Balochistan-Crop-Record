import React, { useState, useMemo } from 'react';
import { BalochistanAgriStation } from '../types';
import { BALOCHISTAN_AGRI_STATIONS, BALOCHISTAN_AGRI_DEPT_META } from '../data/balochistanAgriData';
import { 
  Building2, 
  MapPin, 
  Compass, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Phone, 
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Search,
  Filter,
  Flame,
  Award,
  BookOpen,
  Send
} from 'lucide-react';

interface BalochistanStationsViewProps {
  onSelectStation?: (station: BalochistanAgriStation) => void;
  selectedStationId?: string;
  onLocateOnMap?: (station: BalochistanAgriStation) => void;
}

type StationCategoryFilter = 'all' | 'dg' | 'district' | 'research' | 'nursery';

export const BalochistanStationsView: React.FC<BalochistanStationsViewProps> = ({
  onSelectStation,
  selectedStationId,
  onLocateOnMap
}) => {
  const [activeStationId, setActiveStationId] = useState<string>(selectedStationId || BALOCHISTAN_AGRI_STATIONS[0].id);
  const [categoryFilter, setCategoryFilter] = useState<StationCategoryFilter>('all');
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const divisions = useMemo(() => {
    const set = new Set<string>();
    BALOCHISTAN_AGRI_STATIONS.forEach(s => {
      if (s.division) set.add(s.division);
    });
    return Array.from(set).sort();
  }, []);

  const filteredStations = useMemo(() => {
    return BALOCHISTAN_AGRI_STATIONS.filter(s => {
      // Category filter
      if (categoryFilter === 'dg' && s.stationType !== 'DG Headquarters & Sub-Department') return false;
      if (categoryFilter === 'district' && s.stationType !== 'District Deputy Director Office') return false;
      if (categoryFilter === 'research' && s.stationType !== 'Research Institute' && s.stationType !== 'Adaptive Trial Station') return false;
      if (categoryFilter === 'nursery' && s.stationType !== 'Government Seed Nursery' && s.stationType !== 'Model Extension Farm') return false;

      // Division filter
      if (selectedDivision !== 'all' && s.division !== selectedDivision) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = s.name.toLowerCase().includes(query);
        const matchesDistrict = s.district.toLowerCase().includes(query);
        const matchesOfficer = s.officerInCharge.toLowerCase().includes(query);
        const matchesType = s.stationType.toLowerCase().includes(query);
        const matchesCrop = s.focusCrops.some(c => c.toLowerCase().includes(query));
        return matchesName || matchesDistrict || matchesOfficer || matchesType || matchesCrop;
      }

      return true;
    });
  }, [categoryFilter, selectedDivision, searchQuery]);

  const selectedStation = useMemo(() => {
    return BALOCHISTAN_AGRI_STATIONS.find(s => s.id === activeStationId) || filteredStations[0] || BALOCHISTAN_AGRI_STATIONS[0];
  }, [activeStationId, filteredStations]);

  const handleStationClick = (station: BalochistanAgriStation) => {
    setActiveStationId(station.id);
    onSelectStation?.(station);
  };

  const isDgSubDept = selectedStation.stationType === 'DG Headquarters & Sub-Department';
  const isDistrictOffice = selectedStation.stationType === 'District Deputy Director Office';

  return (
    <div className="space-y-4">
      
      {/* Official Directory Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#0a2e20] to-stone-900 text-white rounded-2xl p-4 shadow-sm border border-emerald-800">
        <div className="flex items-center justify-between text-xs pb-1.5 border-b border-emerald-800">
          <span className="font-extrabold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-amber-400" />
            DG Extension & District Agronomy Network
          </span>
          <span className="bg-amber-400 text-emerald-950 font-black px-2 py-0.5 rounded-full text-[10px]">
            {BALOCHISTAN_AGRI_STATIONS.length} Provincial Facilities
          </span>
        </div>
        <h3 className="text-base font-display font-black text-white mt-2">
          Directorate General Agriculture (Extension) Balochistan & District Directorate Network
        </h3>
        <p className="text-xs text-stone-300 mt-1">
          Complete institutional roster: Rani Bagh Sariab DG apex sub-directorates, all 36 District Deputy Director Extension offices, ARI research stations, and experimental trial farms across Balochistan.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setCategoryFilter('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
            categoryFilter === 'all'
              ? 'bg-emerald-900 text-amber-300 border-emerald-700 shadow-xs'
              : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
          }`}
        >
          All Facilities ({BALOCHISTAN_AGRI_STATIONS.length})
        </button>

        <button
          onClick={() => setCategoryFilter('dg')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
            categoryFilter === 'dg'
              ? 'bg-emerald-900 text-amber-300 border-emerald-700 shadow-xs'
              : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
          }`}
        >
          🏛️ DG Office & Sub-Departments (Rani Bagh)
        </button>

        <button
          onClick={() => setCategoryFilter('district')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
            categoryFilter === 'district'
              ? 'bg-emerald-900 text-amber-300 border-emerald-700 shadow-xs'
              : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
          }`}
        >
          🏢 District Deputy Director Offices (36)
        </button>

        <button
          onClick={() => setCategoryFilter('research')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
            categoryFilter === 'research'
              ? 'bg-emerald-900 text-amber-300 border-emerald-700 shadow-xs'
              : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
          }`}
        >
          🔬 Research Institutes & Trials
        </button>

        <button
          onClick={() => setCategoryFilter('nursery')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
            categoryFilter === 'nursery'
              ? 'bg-emerald-900 text-amber-300 border-emerald-700 shadow-xs'
              : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
          }`}
        >
          🌱 Nurseries & Model Farms
        </button>
      </div>

      {/* Division Selector & Instant Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search district, directorate, crop, or officer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-2 bg-white border border-stone-300 rounded-xl text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-xs font-medium"
          />
        </div>

        <div className="relative">
          <Filter className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="w-full pl-8 pr-3 py-2 bg-white border border-stone-300 rounded-xl text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-xs font-medium cursor-pointer"
          >
            <option value="all">All Administrative Divisions ({divisions.length})</option>
            {divisions.map((div) => (
              <option key={div} value={div}>{div}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Station / Office Dossier Card */}
      {selectedStation && (
        <div className="bg-white border-2 border-emerald-900/40 rounded-3xl p-4 shadow-sm space-y-3 animate-in fade-in duration-150">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {isDgSubDept ? '🏛️' : isDistrictOffice ? '🏢' : '🔬'}
                </span>
                <h4 className="text-base font-display font-black text-emerald-950">
                  {selectedStation.name}
                </h4>
              </div>
              <span className="text-xs text-stone-600 font-semibold block mt-0.5">
                {selectedStation.institution} • {selectedStation.district} ({selectedStation.division})
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className={`font-black text-[11px] px-2.5 py-1 rounded-xl border ${
                isDgSubDept
                  ? 'bg-amber-100 text-amber-950 border-amber-300'
                  : isDistrictOffice
                  ? 'bg-blue-100 text-blue-950 border-blue-300'
                  : 'bg-emerald-100 text-emerald-950 border-emerald-300'
              }`}>
                {selectedStation.stationType}
              </span>
            </div>
          </div>

          {/* Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-[#fbf9f4] p-2.5 rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-500 font-bold block">Facility Area:</span>
              <span className="font-mono font-black text-emerald-900 text-sm">{selectedStation.acreageHectares} Hectares</span>
              <span className="text-[10px] text-stone-400 block">Est. {selectedStation.establishedYear}</span>
            </div>

            <div className="bg-[#fbf9f4] p-2.5 rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-500 font-bold block">Altitude (MSL):</span>
              <span className="font-mono font-black text-stone-800 text-sm">{selectedStation.elevationMeters}m</span>
              <span className="text-[10px] text-stone-400 block">{selectedStation.coordinates.lat.toFixed(3)}°N, {selectedStation.coordinates.lng.toFixed(3)}°E</span>
            </div>

            <div className="bg-[#fbf9f4] p-2.5 rounded-xl border border-stone-200 sm:col-span-2">
              <span className="text-[10px] text-stone-500 font-bold block">Officer in Charge:</span>
              <span className="font-bold text-emerald-950 text-xs block">{selectedStation.officerInCharge}</span>
              <span className="text-[10px] text-stone-600 line-clamp-1 mt-0.5">{selectedStation.contactOffice}</span>
            </div>
          </div>

          {/* District Jurisdiction / Apex Scope */}
          {selectedStation.jurisdiction && (
            <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-xs">
              <strong className="text-stone-800 block text-[11px] mb-0.5">Jurisdiction / Field Coverage:</strong>
              <span className="text-stone-700">{selectedStation.jurisdiction}</span>
            </div>
          )}

          {/* Sub-Departments of DG Office Rani Bagh Sariab */}
          {selectedStation.subDepartments && selectedStation.subDepartments.length > 0 && (
            <div className="bg-amber-50/70 p-3 rounded-2xl border border-amber-200 text-xs space-y-1.5">
              <strong className="text-amber-950 font-bold block flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-700" />
                DG Office Rani Bagh & Sariab Specialized Sub-Directorates:
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                {selectedStation.subDepartments.map((sub, idx) => (
                  <div key={idx} className="bg-white p-2 rounded-xl border border-amber-200 font-semibold text-emerald-950 text-[11px] flex items-center gap-1.5 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Departmental Functions */}
          {selectedStation.keyFunctions && selectedStation.keyFunctions.length > 0 && (
            <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200 text-xs space-y-1">
              <strong className="text-emerald-950 font-bold block flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Core Departmental Mandates & Services:
              </strong>
              <ul className="list-disc pl-4 space-y-0.5 text-stone-700">
                {selectedStation.keyFunctions.map((fn, idx) => (
                  <li key={idx} className="leading-tight">{fn}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Focus Crops */}
          <div className="bg-[#f7f5ed] p-3 rounded-2xl border border-[#ded7c4] space-y-1.5 text-xs">
            <strong className="text-emerald-950 block">Focus Crops & Field Programs:</strong>
            <div className="flex flex-wrap gap-1">
              {selectedStation.focusCrops.map((crop) => (
                <span key={crop} className="bg-white text-emerald-900 font-bold px-2.5 py-0.5 rounded-lg border border-emerald-300 text-xs shadow-2xs">
                  🌾 {crop}
                </span>
              ))}
            </div>
          </div>

          {/* Water Architecture */}
          <div className="bg-[#f7f5ed] p-3 rounded-2xl border border-[#ded7c4] text-xs text-stone-800 space-y-1">
            <strong className="text-emerald-950 block">Irrigation & Hydrological Setup:</strong>
            <p className="leading-relaxed">{selectedStation.waterArchitecture}</p>
          </div>

          {/* Current Research Trial / Field Priority */}
          <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
            <strong className="block font-bold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-700" />
              Active Extension & Research Focus:
            </strong>
            <p className="text-stone-700 leading-relaxed">{selectedStation.currentResearchTrial}</p>
          </div>
        </div>
      )}

      {/* Directory List of All Matching Stations & District Offices */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-stone-700 uppercase tracking-wider block">
            Offices & Stations Directory ({filteredStations.length}):
          </span>
          <span className="text-[10px] text-stone-500 font-bold">
            Showing all matching facilities
          </span>
        </div>

        <div className="space-y-1.5 max-h-72 overflow-y-auto no-scrollbar">
          {filteredStations.map((station) => {
            const isSelected = selectedStation?.id === station.id;
            const isSubDept = station.stationType === 'DG Headquarters & Sub-Department';
            const isDD = station.stationType === 'District Deputy Director Office';

            return (
              <button
                key={station.id}
                onClick={() => handleStationClick(station)}
                className={`w-full p-2.5 rounded-2xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 border-amber-300 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-700'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base shrink-0">
                    {isSubDept ? '🏛️' : isDD ? '🏢' : '🔬'}
                  </span>
                  <div>
                    <span className="font-bold block leading-tight">{station.name}</span>
                    <span className="text-[10px] text-stone-500 font-normal">
                      {station.district} • {station.division} • {station.stationType}
                    </span>
                  </div>
                </div>

                <div className="text-right font-mono text-[10px] shrink-0 ml-2">
                  <span className="bg-white/90 px-2 py-0.5 rounded-full border border-stone-200 font-bold text-stone-700">
                    {station.acreageHectares} ha
                  </span>
                </div>
              </button>
            );
          })}

          {filteredStations.length === 0 && (
            <div className="p-6 text-center text-stone-500 text-xs bg-white rounded-2xl border border-stone-200">
              No agricultural stations or offices match your query "{searchQuery}".
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
