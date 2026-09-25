import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  Wind, 
  Droplets, 
  Sun, 
  CloudRain, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  BarChart3, 
  Info, 
  Flame, 
  RefreshCw, 
  ShieldCheck, 
  HelpCircle,
  Loader2,
  Flower2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Area, 
  Line, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ReferenceArea,
  Legend
} from 'recharts';
import { DateVariety, PollinationDayData, PollinationWindowCalculation } from '../types';
import { calculate14DayPollinationWindow, getPhenologyProfile } from '../data/pollinationPhenologyData';
import { fetchAiPollinationProtocol } from '../services/geminiService';

interface PollinationCalendarProps {
  selectedVariety: DateVariety;
  activeDistrict: string;
  allVarieties: DateVariety[];
  onSelectVariety: (variety: DateVariety) => void;
  onSelectDistrict?: (district: string) => void;
}

export const PollinationCalendar: React.FC<PollinationCalendarProps> = ({
  selectedVariety,
  activeDistrict,
  allVarieties,
  onSelectVariety,
  onSelectDistrict
}) => {
  // District normalization
  const effectiveDistrict = useMemo(() => {
    if (activeDistrict === 'Panjgur') return 'Panjgur';
    if (activeDistrict === 'Gwadar') return 'Gwadar';
    return 'Turbat (Kech)';
  }, [activeDistrict]);

  const [weatherScenario, setWeatherScenario] = useState<'seasonal' | 'heat-surge' | 'breezy' | 'pre-monsoon'>('seasonal');
  const [viewMode, setViewMode] = useState<'cards' | 'chart'>('cards');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(3);
  
  // AI Protocol State
  const [aiProtocol, setAiProtocol] = useState<string | null>(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);

  // Compute 14-day calculation based on variety, district, and weather scenario
  const calculation: PollinationWindowCalculation = useMemo(() => {
    return calculate14DayPollinationWindow(selectedVariety, effectiveDistrict, weatherScenario);
  }, [selectedVariety, effectiveDistrict, weatherScenario]);

  // Selected Day Details
  const selectedDay = useMemo(() => {
    return calculation.days.find(d => d.dayNumber === selectedDayNumber) || calculation.days[0];
  }, [calculation, selectedDayNumber]);

  // Handle AI generation
  const handleGenerateAiProtocol = async () => {
    setIsGeneratingAi(true);
    try {
      const response = await fetchAiPollinationProtocol(selectedVariety.name, effectiveDistrict, calculation);
      setAiProtocol(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Recharts Chart Tooltip
  const CustomChartTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data: PollinationDayData = payload[0].payload;
      return (
        <div className="bg-[#0e271c] text-white p-3 rounded-2xl shadow-xl border border-emerald-700/80 text-xs space-y-1.5 min-w-[200px] z-50">
          <div className="flex items-center justify-between pb-1 border-b border-emerald-800">
            <span className="font-extrabold text-amber-300">
              {data.dateFormatted} ({data.dayOfWeek})
            </span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              data.viabilityTier === 'Prime' 
                ? 'bg-emerald-500 text-emerald-950'
                : data.viabilityTier === 'Favorable'
                ? 'bg-teal-500 text-teal-950'
                : data.viabilityTier === 'Marginal'
                ? 'bg-amber-400 text-amber-950'
                : 'bg-rose-500 text-white'
            }`}>
              {data.viabilityTier}
            </span>
          </div>

          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-300">Viability Score:</span>
              <strong className="text-amber-300 font-mono">{data.pollenViabilityScore}%</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-300">Stigma Receptivity:</span>
              <span className="text-emerald-300 font-mono">{data.stigmaReceptivityPercent}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-300">Forecast Temp:</span>
              <span className="text-white font-mono">{data.tempMaxC}°C / {data.tempMinC}°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-300">Wind Velocity:</span>
              <span className="text-cyan-300 font-mono">{data.windSpeedKmh} km/h</span>
            </div>
          </div>

          <div className="text-[10px] text-amber-200/90 pt-1 border-t border-emerald-800">
            ⏰ Window: {data.recommendedWindowHours}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="bg-white border-2 border-emerald-800/30 rounded-2xl p-4 shadow-sm space-y-4">
      
      {/* Header & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black shadow-xs">
              <Flower2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-black text-emerald-950 tracking-tight uppercase">
                14-Day Pollination Calendar (Gosh / Ashkar)
              </h4>
              <span className="text-[11px] text-stone-500">
                Optimal fertilization window calculated from local micro-weather & variety phenology
              </span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setViewMode('cards')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'cards'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            📅 14-Day Schedule
          </button>
          <button
            onClick={() => setViewMode('chart')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
              viewMode === 'chart'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Viability Curve</span>
          </button>
        </div>
      </div>

      {/* Selectors Bar: Variety, District, and Weather Scenario */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 text-xs">
        
        {/* Variety Selector */}
        <div>
          <label className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider block mb-1">
            Cultivar / Variety
          </label>
          <select
            value={selectedVariety.id}
            onChange={(e) => {
              const found = allVarieties.find(v => v.id === e.target.value);
              if (found) onSelectVariety(found);
            }}
            className="w-full bg-white border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-700"
          >
            {allVarieties.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} ({v.type}) {v.isMakranSpecialty ? '★ Makran' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* District Selector */}
        <div>
          <label className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider block mb-1">
            District / Oasis Micro-Climate
          </label>
          <div className="grid grid-cols-3 gap-1">
            {(['Turbat (Kech)', 'Panjgur', 'Gwadar'] as const).map((dist) => (
              <button
                key={dist}
                onClick={() => onSelectDistrict && onSelectDistrict(dist)}
                className={`py-1.5 px-1 rounded-xl text-[11px] font-bold text-center transition-all truncate ${
                  effectiveDistrict === dist
                    ? 'bg-amber-400 text-emerald-950 shadow-xs'
                    : 'bg-white hover:bg-stone-100 border border-stone-200 text-stone-700'
                }`}
              >
                {dist.replace(' (Turbat)', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Weather Scenario Simulation */}
        <div>
          <label className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider block mb-1">
            Atmospheric Scenario
          </label>
          <select
            value={weatherScenario}
            onChange={(e: any) => setWeatherScenario(e.target.value)}
            className="w-full bg-white border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
          >
            <option value="seasonal">Typical Seasonal Climate</option>
            <option value="heat-surge">Spring Thermal Surge (+4°C)</option>
            <option value="breezy">Gusty Oasis Breeze (&gt;20 km/h)</option>
            <option value="pre-monsoon">Pre-Monsoon Humidity / Rain Risk</option>
          </select>
        </div>
      </div>

      {/* Hero KPI Overview Banner */}
      <div className="bg-gradient-to-br from-[#0f2c1f] via-[#143a2a] to-[#1a4a35] text-white rounded-2xl p-4 shadow-sm border border-emerald-800/80 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-44 h-44 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-emerald-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider">
              {calculation.phenology.bloomTiming} Season Bloom
            </span>
            <span className="text-xs font-medium text-emerald-300">
              {calculation.phenology.balochiTerm}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Predicted Fruit Set: {calculation.overallSuccessRatePercent}%</span>
          </div>
        </div>

        {/* 4 Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          
          {/* Optimal Window */}
          <div className="bg-emerald-950/70 border border-emerald-700/60 rounded-xl p-2.5">
            <span className="text-[10px] uppercase font-bold text-stone-300 block">
              Optimal 14-Day Window
            </span>
            <div className="text-sm sm:text-base font-black text-amber-300 font-display mt-0.5">
              Day {calculation.optimalWindowDays.startDay} – Day {calculation.optimalWindowDays.endDay}
            </div>
            <span className="text-[10px] text-emerald-200">
              {calculation.optimalWindowDays.startDateStr} – {calculation.optimalWindowDays.endDateStr}
            </span>
          </div>

          {/* Average Viability */}
          <div className="bg-emerald-950/70 border border-emerald-700/60 rounded-xl p-2.5">
            <span className="text-[10px] uppercase font-bold text-stone-300 block">
              Peak Viability Index
            </span>
            <div className="text-sm sm:text-base font-black text-white font-mono mt-0.5">
              {calculation.optimalWindowDays.avgScore}%
            </div>
            <span className="text-[10px] text-emerald-200">
              {calculation.primeDaysCount} Prime Days in Cycle
            </span>
          </div>

          {/* Daily Dusting Hours */}
          <div className="bg-emerald-950/70 border border-emerald-700/60 rounded-xl p-2.5">
            <span className="text-[10px] uppercase font-bold text-stone-300 block">
              Optimal Dusting Hours
            </span>
            <div className="text-sm sm:text-base font-black text-white font-mono mt-0.5">
              {calculation.totalOptimalHours} Hours Total
            </div>
            <span className="text-[10px] text-emerald-200">
              Mornings 08:00 – 11:00 AM
            </span>
          </div>

          {/* Male Nar Ratio */}
          <div className="bg-emerald-950/70 border border-emerald-700/60 rounded-xl p-2.5">
            <span className="text-[10px] uppercase font-bold text-stone-300 block">
              Male Pollen (Nar) Ratio
            </span>
            <div className="text-sm sm:text-base font-black text-amber-300 font-display mt-0.5">
              {calculation.phenology.recommendedMaleStrands} Strands / Bunch
            </div>
            <span className="text-[10px] text-emerald-200">
              Inverted Center Insertion
            </span>
          </div>
        </div>

        {/* Action Summary sentence */}
        <p className="text-xs text-stone-200 mt-3 pt-2.5 border-t border-emerald-800/80 leading-relaxed">
          {calculation.recommendedActionSummary}
        </p>
      </div>

      {/* VIEW MODE 1: 14-Day Calendar Schedule (Cards) */}
      {viewMode === 'cards' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-stone-600 font-bold px-1">
            <span>14-Day Phenological Schedule (Click any day to view field directive):</span>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Prime (≥80%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-500" /> Favorable
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400" /> Marginal
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Unfavorable
              </span>
            </div>
          </div>

          {/* Grid of 14 Days */}
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 max-h-[380px] overflow-y-auto no-scrollbar p-0.5">
            {calculation.days.map((day) => {
              const isSelected = selectedDayNumber === day.dayNumber;
              const isOptimal = day.dayNumber >= calculation.optimalWindowDays.startDay && day.dayNumber <= calculation.optimalWindowDays.endDay;

              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayNumber(day.dayNumber)}
                  className={`p-2.5 rounded-2xl text-left transition-all border relative flex flex-col justify-between ${
                    isSelected
                      ? 'ring-2 ring-emerald-700 bg-amber-50/90 border-amber-400 shadow-md'
                      : isOptimal
                      ? 'bg-emerald-50/70 border-emerald-300 hover:bg-emerald-100/60'
                      : 'bg-white border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {isOptimal && (
                    <span className="absolute -top-1.5 -right-1 bg-amber-400 text-emerald-950 text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-xs">
                      ★ Window
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between pb-1 border-b border-stone-200/80">
                      <span className="text-[10px] font-extrabold text-stone-600">
                        Day {day.dayNumber}
                      </span>
                      <span className="text-[10px] font-semibold text-stone-500">
                        {day.dayOfWeek}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-emerald-950 mt-1">
                      {day.dateFormatted}
                    </div>

                    {/* Weather Snippet */}
                    <div className="flex items-center gap-1 text-[11px] text-stone-700 font-medium mt-1">
                      <Sun className="w-3 h-3 text-amber-500" />
                      <span>{day.tempMaxC}°</span>
                      <span className="text-stone-400 text-[9px]">/ {day.tempMinC}°</span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-stone-500 mt-0.5">
                      <Wind className="w-3 h-3 text-cyan-600" />
                      <span>{day.windSpeedKmh} km/h</span>
                    </div>
                  </div>

                  {/* Viability Bar & Badge */}
                  <div className="mt-2.5 pt-1.5 border-t border-stone-200/70">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                      <span className="text-stone-500">Viability:</span>
                      <span className={
                        day.viabilityTier === 'Prime' ? 'text-emerald-700 font-extrabold' :
                        day.viabilityTier === 'Favorable' ? 'text-teal-700' :
                        day.viabilityTier === 'Marginal' ? 'text-amber-700' : 'text-rose-700'
                      }>
                        {day.pollenViabilityScore}%
                      </span>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-stone-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          day.viabilityTier === 'Prime' ? 'bg-emerald-600' :
                          day.viabilityTier === 'Favorable' ? 'bg-teal-500' :
                          day.viabilityTier === 'Marginal' ? 'bg-amber-400' : 'bg-rose-500'
                        }`}
                        style={{ width: `${day.pollenViabilityScore}%` }}
                      />
                    </div>

                    <span className={`inline-block mt-1 text-[9px] font-bold px-1.5 py-0.2 rounded ${
                      day.viabilityTier === 'Prime' ? 'bg-emerald-100 text-emerald-800' :
                      day.viabilityTier === 'Favorable' ? 'bg-teal-100 text-teal-800' :
                      day.viabilityTier === 'Marginal' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {day.viabilityTier}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW MODE 2: Recharts Viability & Receptivity Curve */}
      {viewMode === 'chart' && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-600 px-1">
            <span className="font-bold text-emerald-950">
              14-Day Micro-Climatic Viability & Stigma Receptivity Trajectory
            </span>
            <span className="text-[11px] text-amber-800 font-semibold bg-amber-100 px-2 py-0.5 rounded-md">
              Shaded: Optimal Pollination Window (Days {calculation.optimalWindowDays.startDay}–{calculation.optimalWindowDays.endDay})
            </span>
          </div>

          <div className="h-64 w-full bg-[#fbf9f4] p-2 rounded-2xl border border-stone-200">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={calculation.days} margin={{ top: 15, right: 15, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e6dfcc" />
                <XAxis 
                  dataKey="dateFormatted" 
                  tick={{ fontSize: 10, fill: '#4a4436' }} 
                  axisLine={{ stroke: '#cfc6b0' }}
                />
                <YAxis 
                  domain={[0, 100]} 
                  tick={{ fontSize: 10, fill: '#4a4436' }} 
                  axisLine={{ stroke: '#cfc6b0' }}
                  label={{ value: 'Index %', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#786f5c' }}
                />
                <Tooltip content={<CustomChartTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11, paddingTop: 6 }} />

                {/* Highlight Optimal Window with ReferenceArea */}
                <ReferenceArea
                  x1={calculation.optimalWindowDays.startDateStr}
                  x2={calculation.optimalWindowDays.endDateStr}
                  fill="#fef08a"
                  fillOpacity={0.35}
                  stroke="#eab308"
                  strokeDasharray="4 4"
                />

                {/* Pollen Viability Area */}
                <Area
                  type="monotone"
                  dataKey="pollenViabilityScore"
                  name="Viability Score (%)"
                  fill="#10b981"
                  fillOpacity={0.25}
                  stroke="#059669"
                  strokeWidth={2.5}
                />

                {/* Stigma Receptivity Line */}
                <Line
                  type="monotone"
                  dataKey="stigmaReceptivityPercent"
                  name="Stigma Receptivity (%)"
                  stroke="#d97706"
                  strokeWidth={2}
                  strokeDasharray="4 2"
                  dot={{ r: 3, fill: '#d97706' }}
                />

                {/* Temperature Max */}
                <Line
                  type="monotone"
                  dataKey="tempMaxC"
                  name="Max Temp (°C)"
                  stroke="#ef4444"
                  strokeWidth={1.5}
                  dot={false}
                />

                {/* Wind Speed */}
                <Bar
                  dataKey="windSpeedKmh"
                  name="Wind (km/h)"
                  fill="#38bdf8"
                  opacity={0.4}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Selected Day Inspector Card */}
      <div className="bg-[#f7f5ed] border border-[#ded7c4] rounded-2xl p-3.5 space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#ded7c4]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-emerald-800 text-white flex items-center justify-center text-xs font-black">
              {selectedDay.dayNumber}
            </span>
            <div>
              <strong className="text-xs font-black text-emerald-950">
                {selectedDay.dateFormatted} ({selectedDay.dayOfWeek}) — {selectedDay.phenologyStage}
              </strong>
              <div className="text-[10px] text-stone-500">
                Growing Degree Days: {selectedDay.gddAccumulated} GDD accumulated (Base 18°C)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
              selectedDay.viabilityTier === 'Prime' ? 'bg-emerald-200 text-emerald-900 font-extrabold' :
              selectedDay.viabilityTier === 'Favorable' ? 'bg-teal-200 text-teal-900' :
              selectedDay.viabilityTier === 'Marginal' ? 'bg-amber-200 text-amber-900' : 'bg-rose-200 text-rose-900'
            }`}>
              {selectedDay.viabilityTier} Viability ({selectedDay.pollenViabilityScore}%)
            </span>
          </div>
        </div>

        {/* Weather Telemetry Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-white p-2 rounded-xl border border-stone-200">
            <span className="text-[10px] text-stone-500 block">Temperature:</span>
            <div className="font-mono font-bold text-stone-800">
              {selectedDay.tempMaxC}°C / {selectedDay.tempMinC}°C
            </div>
            <span className="text-[10px] text-stone-400">{selectedDay.weatherCondition}</span>
          </div>

          <div className="bg-white p-2 rounded-xl border border-stone-200">
            <span className="text-[10px] text-stone-500 block">Humidity & Rain:</span>
            <div className="font-mono font-bold text-stone-800">
              {selectedDay.humidityPercent}% RH
            </div>
            <span className="text-[10px] text-stone-400">{selectedDay.precipChancePercent}% Precip Risk</span>
          </div>

          <div className="bg-white p-2 rounded-xl border border-stone-200">
            <span className="text-[10px] text-stone-500 block">Wind Velocity:</span>
            <div className="font-mono font-bold text-stone-800">
              {selectedDay.windSpeedKmh} km/h
            </div>
            <span className="text-[10px] text-stone-400">Max Tol: {calculation.phenology.maxTolerableWindKmh} km/h</span>
          </div>

          <div className="bg-white p-2 rounded-xl border border-stone-200">
            <span className="text-[10px] text-stone-500 block">Dusting Window:</span>
            <div className="font-bold text-emerald-800 text-[11px] truncate">
              {selectedDay.recommendedWindowHours}
            </div>
            <span className="text-[10px] text-stone-400">{selectedDay.maleStrandCount} Male Strands</span>
          </div>
        </div>

        {/* Action Directive */}
        <div className="p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-800 leading-relaxed">
          <span className="font-bold text-emerald-950 block mb-0.5">
            🌾 Agronomic Field Directive:
          </span>
          {selectedDay.actionDirective}
        </div>
      </div>

      {/* AI Pollination Management Advisor Button & Protocol Output */}
      <div className="space-y-2 pt-1">
        <button
          onClick={handleGenerateAiProtocol}
          disabled={isGeneratingAi}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-900 to-amber-900 hover:brightness-110 active:scale-[0.99] text-amber-200 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-60 cursor-pointer"
        >
          {isGeneratingAi ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
              <span>Synthesizing Gemini AI Pollination Management Protocol...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Generate AI Pollination Action Protocol: {selectedVariety.name} in {effectiveDistrict.replace(' (Turbat)', '')}</span>
            </>
          )}
        </button>

        {aiProtocol && (
          <div className="bg-[#fdfbf7] border border-amber-300/80 rounded-2xl p-4 text-xs text-stone-800 space-y-2 shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-amber-200">
              <span className="font-bold text-amber-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                AI Technical Dossier: Gosh Bandi & Micro-Climatic Synchronization
              </span>
              <button
                onClick={() => setAiProtocol(null)}
                className="text-[10px] text-stone-400 hover:text-stone-700"
              >
                Close
              </button>
            </div>
            <div className="whitespace-pre-line leading-relaxed text-stone-800 font-sans">
              {aiProtocol}
            </div>
          </div>
        )}
      </div>

    </section>
  );
};
