import React, { useState, useMemo } from 'react';
import { 
  BalochistanCrop, 
  CropPhenologyProfile, 
  MonthPhenologyDetail, 
  PhenologicalWindowType 
} from '../types';
import { BALOCHISTAN_CROPS } from '../data/balochistanAgriData';
import { 
  CROP_PHENOLOGY_DATABASE, 
  getCropPhenologyProfile, 
  MONTH_NAMES, 
  MONTH_SHORTS 
} from '../data/cropPhenologyData';
import { 
  Calendar, 
  Flower2, 
  Sprout, 
  Wheat, 
  Sparkles, 
  Clock, 
  Droplet, 
  Sun, 
  ShieldAlert, 
  Layers, 
  ChevronRight, 
  Building2, 
  Info, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Snowflake,
  Filter,
  Eye,
  Sliders
} from 'lucide-react';

interface PhenologicalCalendarViewProps {
  initialCropId?: string;
  onAskAiAboutWindow?: (cropName: string, windowName: string) => void;
}

export const PhenologicalCalendarView: React.FC<PhenologicalCalendarViewProps> = ({
  initialCropId = 'date-palm',
  onAskAiAboutWindow
}) => {
  const currentMonthIndex = new Date().getMonth(); // 8 = September
  const [selectedCropId, setSelectedCropId] = useState<string>(initialCropId);
  const [inspectedMonthIndex, setInspectedMonthIndex] = useState<number>(currentMonthIndex);
  const [viewMode, setViewMode] = useState<'deep-dive' | 'cross-matrix'>('deep-dive');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const selectedCrop = useMemo(() => {
    return BALOCHISTAN_CROPS.find(c => c.id === selectedCropId) || BALOCHISTAN_CROPS[0];
  }, [selectedCropId]);

  const phenologyProfile: CropPhenologyProfile = useMemo(() => {
    return getCropPhenologyProfile(selectedCrop);
  }, [selectedCrop]);

  const inspectedMonth: MonthPhenologyDetail = phenologyProfile.monthlySchedule[inspectedMonthIndex];

  // Helper for window badge colors
  const getWindowBadgeStyle = (windowType: PhenologicalWindowType) => {
    switch (windowType) {
      case 'planting':
        return {
          bg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          dot: 'bg-emerald-600',
          label: 'Planting / Sowing',
          icon: '🌱'
        };
      case 'flowering':
        return {
          bg: 'bg-rose-100 text-rose-900 border-rose-300',
          dot: 'bg-rose-500',
          label: 'Bloom / Pollination',
          icon: '🌸'
        };
      case 'fruit-growth':
      case 'vegetative':
        return {
          bg: 'bg-amber-100 text-amber-900 border-amber-300',
          dot: 'bg-amber-600',
          label: 'Fruit Sizing / Growth',
          icon: '☀️'
        };
      case 'harvest':
        return {
          bg: 'bg-amber-400 text-emerald-950 border-amber-500 font-black',
          dot: 'bg-amber-950',
          label: 'Peak Harvest',
          icon: '🌾'
        };
      case 'curing':
        return {
          bg: 'bg-purple-100 text-purple-900 border-purple-300',
          dot: 'bg-purple-600',
          label: 'Curing & Storage',
          icon: '📦'
        };
      case 'dormant':
      default:
        return {
          bg: 'bg-stone-100 text-stone-700 border-stone-300',
          dot: 'bg-stone-400',
          label: 'Dormant / Field Prep',
          icon: '❄️'
        };
    }
  };

  const filteredCrops = useMemo(() => {
    if (filterCategory === 'all') return BALOCHISTAN_CROPS;
    return BALOCHISTAN_CROPS.filter(c => c.category === filterCategory);
  }, [filterCategory]);

  return (
    <div className="space-y-4">
      
      {/* Official Government Attestation Banner */}
      <div className="bg-gradient-to-r from-[#0c2a1e] via-[#144230] to-[#1c553f] text-white rounded-2xl p-4 shadow-sm border border-emerald-800">
        <div className="flex items-center justify-between pb-2 border-b border-emerald-800/80">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
              Agriculture Extension Department • Balochistan
            </span>
          </div>
          <span className="text-[10px] font-mono bg-emerald-950/80 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-700">
            Nazeer Ahmed, Agri Office Turbat
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-2">
          <div>
            <h3 className="text-base font-display font-black text-white">
              Dynamic Phenological Calendar Engine
            </h3>
            <p className="text-xs text-stone-200 mt-0.5 leading-relaxed">
              Real-time agro-climatic phenology tracking planting, flowering, fruit growth, and harvest windows with dynamic seasonal status markers.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-emerald-950/90 p-1 rounded-xl border border-emerald-700">
            <button
              onClick={() => setViewMode('deep-dive')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'deep-dive' 
                  ? 'bg-amber-400 text-emerald-950 shadow-sm' 
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Single Crop View
            </button>
            <button
              onClick={() => setViewMode('cross-matrix')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'cross-matrix' 
                  ? 'bg-amber-400 text-emerald-950 shadow-sm' 
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              All Crops Matrix
            </button>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: SINGLE CROP PHENOLOGY DEEP-DIVE */}
      {viewMode === 'deep-dive' && (
        <div className="space-y-4">
          
          {/* Fast Crop Picker Ribbon */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {BALOCHISTAN_CROPS.map((crop) => {
              const isSelected = crop.id === selectedCropId;
              return (
                <button
                  key={crop.id}
                  onClick={() => setSelectedCropId(crop.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-amber-400 border-amber-300 text-emerald-950 font-black shadow-sm'
                      : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'
                  }`}
                >
                  <span>{crop.name}</span>
                  <span className="text-[10px] opacity-75 font-mono">({crop.localBalochiName.split(' ')[0]})</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Visual Marker for Current Seasonal Status */}
          <div className="bg-[#fcfaf5] border-2 border-emerald-900/30 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 block">
                    Current Seasonal Status • {MONTH_NAMES[currentMonthIndex]} {new Date().getFullYear()}
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-emerald-950">
                    {phenologyProfile.currentSeasonalStatus.currentStage}
                  </h4>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                  getWindowBadgeStyle(phenologyProfile.currentSeasonalStatus.currentWindow).bg
                }`}>
                  <span>{getWindowBadgeStyle(phenologyProfile.currentSeasonalStatus.currentWindow).icon}</span>
                  <span>{getWindowBadgeStyle(phenologyProfile.currentSeasonalStatus.currentWindow).label}</span>
                </span>

                <button
                  onClick={() => setInspectedMonthIndex(currentMonthIndex)}
                  className="text-[10px] font-bold px-2 py-1 bg-emerald-900 text-amber-300 hover:bg-emerald-800 rounded-lg shadow-xs transition-all"
                >
                  Snap to Today
                </button>
              </div>
            </div>

            {/* Field Directive from Nazeer Ahmed */}
            <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1">
              <div className="flex items-center justify-between">
                <strong className="text-emerald-950 flex items-center gap-1 text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                  Extension Directive (Office Turbat):
                </strong>
                <span className="text-[10px] text-stone-500 font-mono">
                  Next Milestone in ~{phenologyProfile.currentSeasonalStatus.daysToNextMilestone} Days
                </span>
              </div>
              <p className="text-stone-700 text-[11px] leading-relaxed">
                {phenologyProfile.currentSeasonalStatus.seasonalAdvisory}
              </p>
            </div>
          </div>

          {/* 3 Core Window Summary Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            
            {/* Planting Window */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                  🌱 Planting Window
                </span>
                <span className="text-[10px] font-bold text-emerald-950 bg-emerald-200/80 px-2 py-0.5 rounded-full">
                  {phenologyProfile.plantingWindow.months.join(', ')}
                </span>
              </div>
              <p className="text-[11px] text-emerald-950 font-medium leading-relaxed">
                {phenologyProfile.plantingWindow.description}
              </p>
            </div>

            {/* Flowering Window */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1">
                  🌸 Flowering Window
                </span>
                <span className="text-[10px] font-bold text-rose-950 bg-rose-200/80 px-2 py-0.5 rounded-full">
                  {phenologyProfile.floweringWindow.months.join(', ')}
                </span>
              </div>
              <p className="text-[11px] text-rose-950 font-medium leading-relaxed">
                {phenologyProfile.floweringWindow.description}
              </p>
            </div>

            {/* Harvest Window */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                  🌾 Harvest Window
                </span>
                <span className="text-[10px] font-bold text-amber-950 bg-amber-200/80 px-2 py-0.5 rounded-full">
                  {phenologyProfile.harvestWindow.months.join(', ')}
                </span>
              </div>
              <p className="text-[11px] text-amber-950 font-medium leading-relaxed">
                {phenologyProfile.harvestWindow.description}
              </p>
            </div>

          </div>

          {/* Interactive 12-Month Phenology Gantt Timeline */}
          <div className="bg-white border-2 border-emerald-900/30 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-700" />
                12-Month Phenological Timeline for {selectedCrop.name}
              </span>
              <span className="text-[10px] text-stone-500">
                Click any month to inspect granular agro-directives
              </span>
            </div>

            {/* 12-Month Interactive Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-1.5">
              {phenologyProfile.monthlySchedule.map((m) => {
                const isSelected = m.monthIndex === inspectedMonthIndex;
                const isCurrentMonth = m.monthIndex === currentMonthIndex;
                const badgeStyle = getWindowBadgeStyle(m.primaryWindow);

                return (
                  <button
                    key={m.monthName}
                    onClick={() => setInspectedMonthIndex(m.monthIndex)}
                    className={`p-2 rounded-xl text-center transition-all border relative flex flex-col justify-between min-h-[90px] cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-emerald-800 shadow-md bg-stone-50 border-emerald-700'
                        : 'bg-white hover:bg-stone-50 border-stone-200'
                    }`}
                  >
                    {/* Current Month Active Indicator Marker */}
                    {isCurrentMonth && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[8px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-wider shadow-xs animate-pulse">
                        Now
                      </span>
                    )}

                    <div>
                      <span className={`text-xs font-black block ${isCurrentMonth ? 'text-emerald-950 underline decoration-amber-500 decoration-2' : 'text-stone-700'}`}>
                        {m.monthShort}
                      </span>
                      <span className="text-[9px] block text-stone-500 font-mono mt-0.5">
                        {m.optimalTempRange.split(' ')[0]}
                      </span>
                    </div>

                    {/* Window Pill */}
                    <div className={`mt-1 py-1 px-1 rounded-lg text-[9px] font-bold leading-tight ${badgeStyle.bg}`}>
                      <span className="block truncate">{badgeStyle.icon} {m.primaryWindow}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Granular Inspected Month Card */}
            <div className="bg-[#fcfaf5] border border-[#ded7c4] rounded-2xl p-4 space-y-3 mt-2 animate-in fade-in duration-150">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-900 text-amber-300 font-black flex items-center justify-center text-xs">
                    {inspectedMonth.monthShort}
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-emerald-950">
                      {inspectedMonth.monthName} • {inspectedMonth.stageName}
                    </h5>
                    <span className="text-[11px] text-stone-500">
                      Thermal Range: {inspectedMonth.optimalTempRange} • Water Need: <strong>{inspectedMonth.waterNeedLevel}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getWindowBadgeStyle(inspectedMonth.primaryWindow).bg}`}>
                    {getWindowBadgeStyle(inspectedMonth.primaryWindow).icon} {getWindowBadgeStyle(inspectedMonth.primaryWindow).label}
                  </span>
                  
                  <button
                    onClick={() => onAskAiAboutWindow?.(selectedCrop.name, `${inspectedMonth.monthName} ${inspectedMonth.stageName}`)}
                    className="px-2.5 py-1 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 text-[11px] font-bold flex items-center gap-1 shadow-xs transition-all"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Ask AI</span>
                  </button>
                </div>
              </div>

              {/* Operations & Directives */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                
                {/* Field Operations */}
                <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1.5">
                  <strong className="text-emerald-950 font-bold block flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    Mandatory Field Operations:
                  </strong>
                  <ul className="space-y-1 text-stone-700 text-[11px]">
                    {inspectedMonth.fieldOperations.map((op, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{op}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Irrigation & Water Architecture */}
                <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1.5">
                  <strong className="text-blue-950 font-bold block flex items-center gap-1">
                    <Droplet className="w-3.5 h-3.5 text-blue-700" />
                    Irrigation & Karez Delivery:
                  </strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">
                    {inspectedMonth.irrigationGuidance}
                  </p>
                </div>

                {/* Fertilizer / Nutrient Protocol */}
                <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1.5">
                  <strong className="text-amber-950 font-bold block flex items-center gap-1">
                    <Sprout className="w-3.5 h-3.5 text-amber-700" />
                    Fertilization & Soil Nutrition:
                  </strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">
                    {inspectedMonth.fertilizerAction}
                  </p>
                </div>

                {/* Pest & Disease Alert */}
                <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1.5">
                  <strong className="text-rose-950 font-bold block flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
                    IPM Pest & Disease Alert:
                  </strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">
                    {inspectedMonth.pestDiseaseAlert}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      )}

      {/* VIEW MODE 2: ALL BALOCHISTAN CROPS MATRIX */}
      {viewMode === 'cross-matrix' && (
        <div className="bg-white border-2 border-emerald-900/30 rounded-2xl p-4 shadow-sm space-y-4">
          
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-black text-emerald-950">
                All-Balochistan Cross-Crop Phenological Matrix
              </h4>
              <p className="text-[11px] text-stone-500">
                Comparative seasonal windows showing planting, flowering, growth, and harvest across all crops.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  filterCategory === 'all'
                    ? 'bg-emerald-950 text-amber-300'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterCategory('Orchard & Fruit Tree')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  filterCategory === 'Orchard & Fruit Tree'
                    ? 'bg-emerald-950 text-amber-300'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Trees / Orchards
              </button>
              <button
                onClick={() => setFilterCategory('Vegetable')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  filterCategory === 'Vegetable'
                    ? 'bg-emerald-950 text-amber-300'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Vegetables
              </button>
              <button
                onClick={() => setFilterCategory('Field & Cash Crop')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  filterCategory === 'Field & Cash Crop'
                    ? 'bg-emerald-950 text-amber-300'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Field Crops
              </button>
            </div>
          </div>

          {/* Matrix Legend */}
          <div className="flex flex-wrap items-center gap-3 p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-[10px] font-bold">
            <span className="text-stone-500 uppercase tracking-wider">Legend:</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Planting</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-rose-400"></span> Flowering / Bloom</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-200"></span> Vegetative / Sizing</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-500"></span> Harvest</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-stone-200"></span> Dormancy / Inter-season</span>
            <span className="flex items-center gap-1 ml-auto text-rose-700 font-extrabold">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping inline-block"></span>
              Current Month: {MONTH_SHORTS[currentMonthIndex]}
            </span>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-stone-300 bg-stone-100 text-[10px] uppercase font-bold text-stone-700">
                  <th className="p-2 w-36">Balochistan Crop</th>
                  <th className="p-2 w-28">Hub</th>
                  {MONTH_SHORTS.map((m, idx) => (
                    <th 
                      key={m} 
                      className={`p-1.5 text-center ${idx === currentMonthIndex ? 'bg-amber-200/80 text-emerald-950 font-black' : ''}`}
                    >
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {filteredCrops.map((crop) => {
                  const profile = getCropPhenologyProfile(crop);
                  return (
                    <tr 
                      key={crop.id}
                      onClick={() => {
                        setSelectedCropId(crop.id);
                        setViewMode('deep-dive');
                      }}
                      className="hover:bg-amber-50/50 cursor-pointer transition-colors"
                    >
                      <td className="p-2 font-black text-emerald-950">
                        <div>{crop.name}</div>
                        <div className="text-[9px] text-stone-500 font-normal">{crop.localBalochiName.split(' ')[0]}</div>
                      </td>
                      <td className="p-2 text-[10px] text-stone-600 line-clamp-1">
                        {crop.primaryProductionHub.split('(')[0]}
                      </td>

                      {/* 12 Month Cells */}
                      {profile.monthlySchedule.map((m, idx) => {
                        let cellBg = 'bg-stone-100 text-stone-400';
                        let cellIcon = '';

                        if (m.primaryWindow === 'harvest') {
                          cellBg = 'bg-amber-400 text-emerald-950 font-black';
                          cellIcon = '🌾';
                        } else if (m.primaryWindow === 'flowering') {
                          cellBg = 'bg-rose-400 text-white font-bold';
                          cellIcon = '🌸';
                        } else if (m.primaryWindow === 'planting') {
                          cellBg = 'bg-emerald-600 text-white font-bold';
                          cellIcon = '🌱';
                        } else if (m.primaryWindow === 'fruit-growth') {
                          cellBg = 'bg-amber-200 text-amber-950';
                          cellIcon = '☀️';
                        }

                        const isCurrentCol = idx === currentMonthIndex;

                        return (
                          <td 
                            key={idx} 
                            className={`p-1 text-center text-[10px] ${isCurrentCol ? 'ring-1 ring-rose-500/70' : ''}`}
                            title={`${crop.name} - ${m.monthName}: ${m.stageName}`}
                          >
                            <div className={`w-6 h-6 mx-auto rounded flex items-center justify-center text-[9px] shadow-xs ${cellBg}`}>
                              {cellIcon}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      )}

    </div>
  );
};
