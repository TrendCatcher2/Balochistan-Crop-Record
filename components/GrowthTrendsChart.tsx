import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ReferenceLine, 
  ComposedChart,
  Bar,
  Line
} from 'recharts';
import { DateFarm, NdviDataPoint } from '../types';
import { getFarmHistoricalNdvi, getFarmSeasonalNdvi } from '../data/datePalmData';
import { 
  TrendingUp, 
  Calendar, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Info,
  Droplet
} from 'lucide-react';

interface GrowthTrendsChartProps {
  farm: DateFarm;
}

type Timeframe = 'historical' | 'seasonal';

export const GrowthTrendsChart: React.FC<GrowthTrendsChartProps> = ({ farm }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('historical');

  const historicalData = getFarmHistoricalNdvi(farm);
  const seasonalData = getFarmSeasonalNdvi(farm);
  const activeData = timeframe === 'historical' ? historicalData : seasonalData;

  // Calculate 5-year growth percentage
  const startNdvi = historicalData[0].ndvi;
  const currentNdvi = historicalData[historicalData.length - 1].ndvi;
  const growthPercent = Number((((currentNdvi - startNdvi) / startNdvi) * 100).toFixed(1));

  // Custom Recharts Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data: NdviDataPoint = payload[0].payload;
      return (
        <div className="bg-[#0e271c] text-white p-3 rounded-2xl shadow-xl border border-emerald-700/80 text-xs space-y-1.5 min-w-[170px]">
          <div className="flex items-center justify-between pb-1 border-b border-emerald-800">
            <span className="font-extrabold text-amber-300">
              {timeframe === 'historical' ? `Year ${label}` : `Month: ${label}`}
            </span>
            <span className="text-[10px] font-mono bg-emerald-900/90 text-emerald-200 px-1.5 py-0.5 rounded">
              {data.waterStatus}
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-emerald-300">Vegetation Vigor:</span>
            <span className="font-mono font-bold text-white text-sm">
              {data.ndvi.toFixed(2)} NDVI
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-stone-300">Stand Density:</span>
            <span className="font-mono font-semibold text-amber-200">
              {data.canopyDensity} /ha
            </span>
          </div>

          {data.yieldIndex && (
            <div className="flex items-center justify-between text-[10px] text-stone-400 pt-0.5 border-t border-emerald-900/60">
              <span>Yield Index:</span>
              <span className="font-mono font-bold text-emerald-400">{data.yieldIndex}%</span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-[#ded7c4] rounded-2xl p-4 space-y-3.5 shadow-xs">
      
      {/* Header and Timeframe Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-stone-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
            <Activity className="w-4 h-4 text-emerald-700" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider">
              Growth Trends & Canopy Health
            </h4>
            <span className="text-[10px] text-stone-500 font-medium block">
              Historical NDVI Multispectral Time-Series
            </span>
          </div>
        </div>

        {/* Pill Selector */}
        <div className="flex items-center gap-1 bg-[#f4efe4] p-1 rounded-xl">
          <button
            onClick={() => setTimeframe('historical')}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              timeframe === 'historical'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            5-Yr Trajectory
          </button>
          <button
            onClick={() => setTimeframe('seasonal')}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              timeframe === 'seasonal'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Monthly Phenology
          </button>
        </div>
      </div>

      {/* KPI Stat Callouts */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-[#f9f8f4] border border-[#e5dfce] rounded-xl p-2">
          <span className="text-[10px] font-bold text-stone-500 block uppercase">
            Current Vigor
          </span>
          <div className="text-base font-black font-mono text-emerald-800 mt-0.5">
            {farm.canopyNDVI} <span className="text-[10px] font-sans font-semibold">NDVI</span>
          </div>
          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-full inline-block mt-0.5">
            Optimal Health
          </span>
        </div>

        <div className="bg-[#f9f8f4] border border-[#e5dfce] rounded-xl p-2">
          <span className="text-[10px] font-bold text-stone-500 block uppercase">
            5-Yr Expansion
          </span>
          <div className="text-base font-black font-mono text-amber-700 mt-0.5">
            +{growthPercent}%
          </div>
          <span className="text-[9px] text-stone-600 inline-block mt-0.5">
            Foliage & Palms
          </span>
        </div>

        <div className="bg-[#f9f8f4] border border-[#e5dfce] rounded-xl p-2">
          <span className="text-[10px] font-bold text-stone-500 block uppercase">
            Peak Window
          </span>
          <div className="text-sm font-bold text-stone-800 mt-0.5">
            June - July
          </div>
          <span className="text-[9px] text-blue-600 inline-block mt-0.5">
            Rutab Ripening
          </span>
        </div>
      </div>

      {/* Recharts Area Visualization Stage */}
      <div className="w-full h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={activeData} 
            margin={{ top: 12, right: 12, left: -24, bottom: 0 }}
          >
            <defs>
              <linearGradient id="ndviGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.65} />
                <stop offset="60%" stopColor="#10b981" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.6} />

            <XAxis 
              dataKey="period" 
              tick={{ fontSize: 10, fill: '#57534e', fontWeight: 600 }}
              axisLine={{ stroke: '#d6d3d1' }}
              tickLine={false}
            />

            <YAxis 
              domain={[0.55, 0.95]} 
              tick={{ fontSize: 9, fill: '#78716c', fontFamily: 'monospace' }}
              axisLine={{ stroke: '#d6d3d1' }}
              tickLine={false}
              tickFormatter={(v) => v.toFixed(2)}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Threshold line representing optimal mature date palm canopy vigor (>0.70) */}
            <ReferenceLine 
              y={0.70} 
              stroke="#b45309" 
              strokeDasharray="4 4" 
              strokeWidth={1.2}
              label={{ 
                value: 'Baseline Vigor (0.70)', 
                position: 'insideBottomRight', 
                fontSize: 9, 
                fill: '#b45309',
                fontWeight: 700
              }} 
            />

            <Area 
              type="monotone" 
              dataKey="ndvi" 
              stroke="#059669" 
              strokeWidth={2.5}
              fillOpacity={1} 
              fill="url(#ndviGradient)"
              activeDot={{ r: 6, fill: '#f59e0b', stroke: '#ffffff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Explanatory NDVI Agricultural Legend */}
      <div className="bg-[#f9f8f4] border border-[#e5dfce] p-2.5 rounded-xl flex items-start gap-2 text-[10px] text-stone-600 leading-normal">
        <Info className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
        <p>
          <strong className="text-emerald-950 font-semibold">NDVI Index Guide:</strong> Normalized Difference Vegetation Index monitors chlorophyll absorption. For Makran date palms, scores &gt;<strong>0.75</strong> reflect thriving lush frond crowns nourished by perennial Karez gravity flow and riverbed silt.
        </p>
      </div>
    </div>
  );
};
