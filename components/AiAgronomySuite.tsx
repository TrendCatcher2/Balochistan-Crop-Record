import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Flower2, 
  Droplet, 
  Bug, 
  TrendingUp, 
  Key, 
  Loader2, 
  Search, 
  Building2, 
  CheckCircle2, 
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Send,
  Languages,
  HelpCircle,
  Leaf
} from 'lucide-react';
import { DateVariety, CropScanContext, CropHealthAnalysis } from '../types';
import { DATE_VARIETIES } from '../data/datePalmData';
import { BALOCHISTAN_CROPS, BALOCHISTAN_AGRI_DEPT_META } from '../data/balochistanAgriData';
import { PollinationCalendar } from './PollinationCalendar';
import { 
  fetchDateAgronomyIntel, 
  fetchBalochistanCropDossier, 
  fetchSoilWaterDiagnostic, 
  hasActiveApiKey, 
  getUserApiKey 
} from '../services/geminiService';

interface AiAgronomySuiteProps {
  selectedVariety: DateVariety;
  activeDistrict: string;
  onSelectVariety: (variety: DateVariety) => void;
  onSelectDistrict?: (district: string) => void;
  onOpenApiKeyModal: () => void;
  latestCropScan: CropHealthAnalysis | null;
  isCropScanning: boolean;
  onTriggerCropScan: () => void;
}

type AiSubTool = 'consult' | 'pest' | 'pollination' | 'satellite' | 'soil';

const COMMON_PESTS = [
  {
    id: 'rpw',
    name: 'Red Palm Weevil (سرخ سنڈی)',
    crop: 'Date Palm (کھجور)',
    symptoms: 'Viscous brown sap oozing from trunk, chewed fiber at leaf base, gnawing acoustic sound inside stem.',
    organicTreatment: 'Pheromone-kairomone traps (1 trap/ha), trunk whitewashing with lime and neem extract.',
    chemicalTreatment: 'Aluminum phosphide tablet fumigation of boreholes sealed with wet clay; trunk injection of emamectin benzoate.',
    urgency: 'Critical'
  },
  {
    id: 'codling-moth',
    name: 'Codling Moth (سیب کا کیڑا)',
    crop: 'Apple (سیب)',
    symptoms: 'Entry boreholes in fruit with reddish-brown frass; premature fruit drop in Ziarat orchards.',
    organicTreatment: 'Pheromone mating disruption dispensers (400/ha); release of Trichogramma parasitoids.',
    chemicalTreatment: 'Chlorantraniliprole (Coragen) or Spinosad spray timed at 100 GDD post-biofix.',
    urgency: 'High'
  },
  {
    id: 'date-mite',
    name: 'Old World Date Mite (گرد مائٹ)',
    crop: 'Date Palm (کھجور)',
    symptoms: 'Fine dusty webbing enclosing Chimri fruit bunches; hardened cracked fruit skin.',
    organicTreatment: 'Wash bunches with pressurized water; release predatory phytoseiid mites.',
    chemicalTreatment: 'Dust micronized elemental sulfur (300g/palm) in April before webbing dense.',
    urgency: 'Moderate'
  },
  {
    id: 'whitefly',
    name: 'Cotton & Tomato Whitefly (سفید مکھی)',
    crop: 'Cotton & Tomato (کپاس و ٹماٹر)',
    symptoms: 'Yellow mosaic leaf curling, sticky honeydew secretion, sooty mold on foliage.',
    organicTreatment: 'Yellow sticky cards (25/ha), potassium salt fatty acid soap sprays.',
    chemicalTreatment: 'Pyriproxyfen (IGR) or Spirotetramat targeting nymphal stages.',
    urgency: 'High'
  },
  {
    id: 'pomegranate-borer',
    name: 'Pomegranate Butterfly Borer (انار کی تلی)',
    crop: 'Pomegranate (انار)',
    symptoms: 'Dark entry holes with excreted caterpillar pellets on Kandahari fruit skin.',
    organicTreatment: 'Non-woven fabric fruit bagging when fruit is marble-sized.',
    chemicalTreatment: 'Spinetoram spray during egg-laying peak in late April.',
    urgency: 'High'
  }
];

export const AiAgronomySuite: React.FC<AiAgronomySuiteProps> = ({
  selectedVariety,
  activeDistrict,
  onSelectVariety,
  onSelectDistrict,
  onOpenApiKeyModal,
  latestCropScan,
  isCropScanning,
  onTriggerCropScan
}) => {
  const [activeSubTool, setActiveSubTool] = useState<AiSubTool>('consult');
  const [languageMode, setLanguageMode] = useState<'en' | 'ur'>('en');

  // Consultation state
  const [consultQuery, setConsultQuery] = useState<string>('');
  const [consultResponse, setConsultResponse] = useState<string>('');
  const [isConsultLoading, setIsConsultLoading] = useState<boolean>(false);

  // Pest triage state
  const [selectedPestId, setSelectedPestId] = useState<string>('rpw');

  // Soil Diagnostic State
  const [selectedCropForDiagnostic, setSelectedCropForDiagnostic] = useState<string>('date-palm');
  const [soilType, setSoilType] = useState<string>('Alluvial Silt Loam');
  const [measuredPh, setMeasuredPh] = useState<number>(8.1);
  const [measuredEc, setMeasuredEc] = useState<number>(3.4);
  const [waterSource, setWaterSource] = useState<string>('Subterranean Karez Gravity Flume');
  const [soilResult, setSoilResult] = useState<string>('');
  const [isSoilLoading, setIsSoilLoading] = useState<boolean>(false);

  const activeKey = hasActiveApiKey();
  const selectedPest = COMMON_PESTS.find(p => p.id === selectedPestId) || COMMON_PESTS[0];

  // Handle Extension Consult Query
  const handleConsultSubmit = async (queryText?: string) => {
    const textToQuery = queryText || consultQuery;
    if (!textToQuery.trim()) return;

    setIsConsultLoading(true);
    try {
      const fullQuery = languageMode === 'ur' 
        ? `${textToQuery} (Please answer in fluent, clear Urdu / براہ کرم اردو میں جواب دیں)` 
        : textToQuery;
      const response = await fetchDateAgronomyIntel(fullQuery, 'variety');
      setConsultResponse(response);
      if (!queryText) setConsultQuery('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsConsultLoading(false);
    }
  };

  // Handle Soil Diagnostic Run
  const handleRunSoilDiagnostic = async () => {
    setIsSoilLoading(true);
    const crop = BALOCHISTAN_CROPS.find(c => c.id === selectedCropForDiagnostic) || BALOCHISTAN_CROPS[0];
    try {
      const result = await fetchSoilWaterDiagnostic({
        cropName: crop.name,
        district: activeDistrict,
        soilType,
        ph: measuredPh,
        ecDsm: measuredEc,
        waterSource
      });
      setSoilResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSoilLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      
      {/* Official Header with Proposed by DG & Designed by Nazeer Ahmed */}
      <div className="bg-gradient-to-r from-[#0c2a1e] via-[#144230] to-[#1c553f] text-white rounded-2xl p-4 shadow-sm border border-emerald-800">
        <div className="flex items-center justify-between pb-2 border-b border-emerald-800/80">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>AI Agronomist & Extension Decision Suite</span>
            <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-700 font-mono">
              100% Free Built-in AI
            </span>
          </div>
          
          {/* API Slot Button & Lang Switcher */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLanguageMode(languageMode === 'en' ? 'ur' : 'en')}
              className="flex items-center gap-1 px-2 py-1 rounded-xl bg-emerald-900 text-emerald-200 hover:bg-emerald-800 text-[11px] font-bold border border-emerald-700"
            >
              <Languages className="w-3 h-3" />
              <span>{languageMode === 'en' ? 'اردو' : 'English'}</span>
            </button>

            <button
              onClick={onOpenApiKeyModal}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-400 text-emerald-950 font-black text-[11px] hover:bg-amber-300 shadow-xs transition-all"
              title="Configure your own Gemini API Key"
            >
              <Key className="w-3.5 h-3.5" />
              <span>{activeKey ? 'API (Active)' : 'API Slot'}</span>
            </button>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-display font-black text-white">
              {languageMode === 'ur' ? 'اے آئی زرعی ماہر و توسیعی مشاورتی نظام' : 'Precision AI Agronomy & Extension Decision Engine'}
            </h3>
            <span className="text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800">
              {languageMode === 'ur' ? 'تجویز کردہ: ڈی جی ایگریکلچر ایکسٹینشن' : 'Proposed by DG Agriculture Extension'}
            </span>
          </div>
          <p className="text-xs text-stone-200 mt-1 leading-relaxed">
            {languageMode === 'ur'
              ? 'مفت زرعی مشاورت، سیٹلائٹ کراپ اسکین، نمکیات کا حل، پولینیشن کیلنڈر اور کیڑوں کے علاج کی جامع رہنمائی۔'
              : 'Free built-in agro-intelligence: Sentinel-2 NDVI canopy scans, pollination window timing, calcareous soil salinity diagnostics, and IPM triage.'}
          </p>
        </div>
      </div>

      {/* AI Tool Sub-Navigation Toolbar (All free AI options placed clearly) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 bg-stone-100 p-1.5 rounded-2xl text-xs font-bold">
        <button
          onClick={() => setActiveSubTool('consult')}
          className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
            activeSubTool === 'consult'
              ? 'bg-emerald-950 text-amber-300 shadow-xs'
              : 'text-stone-700 hover:text-stone-900 bg-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{languageMode === 'ur' ? 'زرعی مشورہ' : 'Free Consult'}</span>
        </button>

        <button
          onClick={() => setActiveSubTool('pest')}
          className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
            activeSubTool === 'pest'
              ? 'bg-emerald-950 text-amber-300 shadow-xs'
              : 'text-stone-700 hover:text-stone-900 bg-white'
          }`}
        >
          <Bug className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{languageMode === 'ur' ? 'کیڑے و بیماریاں' : 'Pest Triage'}</span>
        </button>

        <button
          onClick={() => setActiveSubTool('pollination')}
          className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
            activeSubTool === 'pollination'
              ? 'bg-emerald-950 text-amber-300 shadow-xs'
              : 'text-stone-700 hover:text-stone-900 bg-white'
          }`}
        >
          <Flower2 className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{languageMode === 'ur' ? 'پولینیشن' : 'Pollination'}</span>
        </button>

        <button
          onClick={() => setActiveSubTool('satellite')}
          className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
            activeSubTool === 'satellite'
              ? 'bg-emerald-950 text-amber-300 shadow-xs'
              : 'text-stone-700 hover:text-stone-900 bg-white'
          }`}
        >
          <Activity className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{languageMode === 'ur' ? 'سیٹلائٹ اسکین' : 'Satellite'}</span>
        </button>

        <button
          onClick={() => setActiveSubTool('soil')}
          className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
            activeSubTool === 'soil'
              ? 'bg-emerald-950 text-amber-300 shadow-xs'
              : 'text-stone-700 hover:text-stone-900 bg-white'
          }`}
        >
          <Droplet className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{languageMode === 'ur' ? 'مٹی و پانی' : 'Soil & Water'}</span>
        </button>
      </div>

      {/* SUB-TOOL 1: FREE EXTENSION OFFICER INTERACTIVE CONSULT */}
      {activeSubTool === 'consult' && (
        <div className="space-y-3">
          
          {/* Ask Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConsultSubmit();
            }}
            className="space-y-2"
          >
            <div className="relative">
              <input
                type="text"
                value={consultQuery}
                onChange={(e) => setConsultQuery(e.target.value)}
                placeholder={
                  languageMode === 'ur'
                    ? "سوال لکھیں، مثلاً: تربت میں کھجور کی پولینیشن کا صحیح طریقہ کیا ہے؟"
                    : "Ask AI Agronomist e.g. How to prevent Mozawati skin splitting during humid spell in Panjgur?"
                }
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white pr-20"
              />
              <button
                type="submit"
                disabled={isConsultLoading || !consultQuery.trim()}
                className="absolute right-1.5 top-1.5 px-3 py-1 bg-emerald-800 hover:bg-emerald-700 text-white text-[11px] font-bold rounded-lg transition-all disabled:opacity-50 flex items-center gap-1"
              >
                <span>{languageMode === 'ur' ? 'پوچھیں' : 'Ask AI'}</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </form>

          {/* Prompt Chips */}
          <div className="flex flex-wrap gap-1.5">
            {[
              "Kech 48°C heatwave mitigation for Begum Jangi",
              "Optimal 14-day pollination window for Mozawati",
              "Red Palm Weevil early acoustic detection in Turbat",
              "Ziarat apple scab fungicide management",
              "Kalat high plateau Sariab Surkh onion storage",
              "Nasirabad rice canal water management"
            ].map((promptText) => (
              <button
                key={promptText}
                onClick={() => handleConsultSubmit(promptText)}
                className="text-[10px] px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-950 border border-stone-200 transition-all text-left"
              >
                💡 {promptText}
              </button>
            ))}
          </div>

          {/* AI Response Display */}
          <div className="bg-white border border-[#ded7c4] rounded-2xl p-4 shadow-xs relative min-h-[200px]">
            {isConsultLoading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3 text-stone-600">
                <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
                <span className="text-xs font-bold text-emerald-950">
                  {languageMode === 'ur' 
                    ? 'زرعی توسیعی مشاورتی انجن جواب تیار کر رہا ہے...' 
                    : 'AI Extension Engine synthesizing field response...'}
                </span>
              </div>
            ) : consultResponse ? (
              <div className="text-xs text-stone-800 leading-relaxed whitespace-pre-line space-y-2 font-sans">
                {consultResponse}
              </div>
            ) : (
              <div className="text-center py-10 text-stone-500 text-xs space-y-2">
                <p>
                  {languageMode === 'ur'
                    ? 'اوپر دیے گئے فوری سوالات میں سے منتخب کریں یا اپنا کوئی بھی زرعی سوال پوچھیں۔'
                    : 'Select a recommended query above or type your question regarding any Balochistan crop, Karez water, or pest issue.'}
                </p>
                <span className="inline-block text-[10px] bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                  ⚡ 100% Free & Fast AI — No Key Required
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TOOL 2: FREE PEST & DISEASE TRIAGE */}
      {activeSubTool === 'pest' && (
        <div className="bg-white border-2 border-emerald-900/30 rounded-2xl p-4 shadow-xs space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
              <Bug className="w-4 h-4 text-rose-600" />
              Balochistan IPM Pest & Disease Triage Guide
            </span>
            <span className="text-[10px] bg-rose-100 text-rose-900 font-bold px-2 py-0.5 rounded-full">
              Field Prescriptions
            </span>
          </div>

          <p className="text-[11px] text-stone-600 leading-relaxed">
            Select a major Balochistan crop pest or disease to inspect immediate symptoms, organic bio-control, and chemical treatments:
          </p>

          {/* Pest Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {COMMON_PESTS.map((pest) => (
              <button
                key={pest.id}
                onClick={() => setSelectedPestId(pest.id)}
                className={`p-2.5 rounded-xl text-left transition-all border ${
                  selectedPest.id === pest.id
                    ? 'bg-rose-50 border-rose-400 text-rose-950 font-bold ring-2 ring-rose-400'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                <div className="font-black text-xs">{pest.name}</div>
                <div className="text-[10px] text-stone-500">{pest.crop}</div>
              </button>
            ))}
          </div>

          {/* Selected Pest Treatment Card */}
          <div className="bg-[#fcfaf5] border border-stone-300 rounded-2xl p-4 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-stone-200">
              <div>
                <h4 className="font-black text-emerald-950 text-sm">{selectedPest.name}</h4>
                <span className="text-[10px] text-stone-600">Affects: {selectedPest.crop}</span>
              </div>
              <span className="text-[10px] font-bold bg-rose-600 text-white px-2 py-0.5 rounded-full">
                {selectedPest.urgency} Alert
              </span>
            </div>

            <div>
              <strong className="text-emerald-950 block text-[11px] mb-0.5">Diagnostic Symptoms:</strong>
              <p className="text-stone-700 text-[11px] leading-relaxed">{selectedPest.symptoms}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200 space-y-1">
                <strong className="text-emerald-900 block text-[10px] uppercase tracking-wider flex items-center gap-1">
                  🌿 Organic / Cultural Control:
                </strong>
                <p className="text-stone-700 text-[11px]">{selectedPest.organicTreatment}</p>
              </div>

              <div className="bg-white p-2.5 rounded-xl border border-amber-200 space-y-1">
                <strong className="text-amber-900 block text-[10px] uppercase tracking-wider flex items-center gap-1">
                  🧪 Chemical / IPM Treatment:
                </strong>
                <p className="text-stone-700 text-[11px]">{selectedPest.chemicalTreatment}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TOOL 3: POLLINATION CALENDAR */}
      {activeSubTool === 'pollination' && (
        <PollinationCalendar
          selectedVariety={selectedVariety}
          activeDistrict={activeDistrict}
          allVarieties={DATE_VARIETIES}
          onSelectVariety={onSelectVariety}
          onSelectDistrict={onSelectDistrict}
        />
      )}

      {/* SUB-TOOL 4: SATELLITE CROP SCAN */}
      {activeSubTool === 'satellite' && (
        <div className="bg-white border-2 border-emerald-900/30 rounded-2xl p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-700" />
              Sentinel-2 Multispectral Crop Health Scan
            </span>
            {latestCropScan && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                latestCropScan.stressLevel === 'Optimal' 
                  ? 'bg-emerald-100 text-emerald-800'
                  : latestCropScan.stressLevel.includes('Moisture')
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-rose-100 text-rose-800'
              }`}>
                {latestCropScan.stressLevel}
              </span>
            )}
          </div>

          <p className="text-[11px] text-stone-600 leading-relaxed">
            Acquires real-time Sentinel-2 red-edge vegetation reflectance across the current map viewport in Balochistan to detect moisture deficit, salt stress, and prescribe Karez Warabandi adjustments.
          </p>

          <button
            onClick={onTriggerCropScan}
            disabled={isCropScanning}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-900 to-teal-900 text-amber-300 hover:brightness-110 active:scale-[0.99] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-60 cursor-pointer"
          >
            {isCropScanning ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                <span>Acquiring Multispectral Bands & Running Red-Edge AI Analysis...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Trigger Satellite Crop Health Scan on Current Viewport (Free)</span>
              </>
            )}
          </button>

          {/* Latest Satellite Scan Result Card */}
          {latestCropScan && (
            <div className="bg-[#f8f6ee] border border-[#e2dccf] rounded-xl p-3 space-y-2 text-xs">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#e2dccf]">
                <div>
                  <strong className="text-emerald-950 block">{latestCropScan.areaName}</strong>
                  <span className="text-[10px] text-stone-500">
                    {latestCropScan.coordinates.lat.toFixed(4)}°N, {latestCropScan.coordinates.lng.toFixed(4)}°E • {latestCropScan.timestamp}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center py-1">
                <div className="bg-white p-2 rounded-lg border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Canopy NDVI:</span>
                  <strong className="text-sm font-mono text-emerald-800">
                    {latestCropScan.currentNdvi.toFixed(2)}
                  </strong>
                </div>
                <div className="bg-white p-2 rounded-lg border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">14-Day Delta:</span>
                  <strong className={`text-sm font-mono ${latestCropScan.deltaNdvi14d >= 0 ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {latestCropScan.deltaNdvi14d >= 0 ? '+' : ''}{latestCropScan.deltaNdvi14d.toFixed(2)}
                  </strong>
                </div>
              </div>

              <div className="text-[11px] text-stone-700 pt-1 leading-relaxed">
                <div className="font-semibold text-emerald-950 mb-1">Agronomic Remote Sensing Evaluation:</div>
                <div className="whitespace-pre-line text-stone-800 font-sans bg-white p-2.5 rounded-lg border border-stone-200">
                  {latestCropScan.summaryText}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUB-TOOL 5: FREE SOIL & SALINITY DIAGNOSTIC */}
      {activeSubTool === 'soil' && (
        <div className="bg-white border-2 border-emerald-900/30 rounded-2xl p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
              <Droplet className="w-4 h-4 text-emerald-700" />
              Soil Salinity & Karez Water Quality Diagnostic (Free Calculator)
            </span>
          </div>

          <p className="text-[11px] text-stone-600">
            Calculates sodium adsorption risk (SAR), gypsum requirement, and leaching schedule for Balochistan's alkaline calcisols.
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <label className="text-[10px] font-bold text-stone-600 block mb-1">Crop to Analyze:</label>
              <select
                value={selectedCropForDiagnostic}
                onChange={(e) => setSelectedCropForDiagnostic(e.target.value)}
                className="w-full bg-[#fbf9f4] border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs text-emerald-950 font-semibold"
              >
                {BALOCHISTAN_CROPS.map((c) => (
                  <option key={c.id} value={c.id}>{c.name} ({c.localBalochiName})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-stone-600 block mb-1">Soil Texture:</label>
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full bg-[#fbf9f4] border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs text-stone-800"
              >
                <option value="Alluvial Silt Loam">Alluvial Silt Loam (River Terrace)</option>
                <option value="Calcareous Gravelly Loam">Calcareous Gravelly Loam (Highland)</option>
                <option value="Fine Sand Dune">Fine Sand Dune (Dasht/Gwadar)</option>
                <option value="Heavy Clay Silt">Heavy Clay Silt (Canal Plain)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-stone-600 block mb-1">Measured Soil pH (6.5 – 9.0):</label>
              <input
                type="number"
                step="0.1"
                min="6.0"
                max="9.5"
                value={measuredPh}
                onChange={(e) => setMeasuredPh(parseFloat(e.target.value))}
                className="w-full bg-[#fbf9f4] border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-stone-600 block mb-1">Salinity ECe (dS/m):</label>
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="12.0"
                value={measuredEc}
                onChange={(e) => setMeasuredEc(parseFloat(e.target.value))}
                className="w-full bg-[#fbf9f4] border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs font-mono"
              />
            </div>

            <div className="col-span-2">
              <label className="text-[10px] font-bold text-stone-600 block mb-1">Water Supply Architecture:</label>
              <select
                value={waterSource}
                onChange={(e) => setWaterSource(e.target.value)}
                className="w-full bg-[#fbf9f4] border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs"
              >
                <option value="Subterranean Karez Gravity Flume">Subterranean Karez Gravity Flume</option>
                <option value="Deep Solar Submersible Tube-Well">Deep Solar Submersible Tube-Well</option>
                <option value="Pat Feeder Canal Gravity Command">Pat Feeder Canal Gravity Command</option>
                <option value="Seasonal River Spate Flood (Sailaba)">Seasonal River Spate Flood (Sailaba)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleRunSoilDiagnostic}
            disabled={isSoilLoading}
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all disabled:opacity-60 cursor-pointer"
          >
            {isSoilLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                <span>Computing Soil-Water Profile...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Reclamation & Leaching Prescription (Free)</span>
              </>
            )}
          </button>

          {soilResult && (
            <div className="bg-[#fcfaf4] p-3.5 rounded-2xl border border-stone-300 text-xs text-stone-800 whitespace-pre-line leading-relaxed space-y-2">
              {soilResult}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
