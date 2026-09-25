import React, { useState, useEffect } from 'react';
import { 
  DATE_VARIETIES, 
  MAKRAN_FARMS, 
  MAKRAN_OVERVIEW,
  CLIMATE_ALERTS,
  DISTRICT_METRICS
} from './data/datePalmData';
import { 
  BALOCHISTAN_CROPS, 
  BALOCHISTAN_AGRI_STATIONS, 
  BALOCHISTAN_AGRI_DEPT_META 
} from './data/balochistanAgriData';
import { 
  DateVariety, 
  DateFarm, 
  TreeScanResult,
  ClimateAlert,
  CropScanContext,
  CropHealthAnalysis,
  BalochistanCrop,
  BalochistanAgriStation
} from './types';
import MapCanvas, { DistrictFilter } from './components/MapCanvas';
import { PalmIcon, DateClusterIcon, KarezIcon } from './components/Icons';
import { GrowthTrendsChart } from './components/GrowthTrendsChart';
import { BalochistanCropsView } from './components/BalochistanCropsView';
import { PhenologicalCalendarView } from './components/PhenologicalCalendarView';
import { BalochistanStationsView } from './components/BalochistanStationsView';
import { AiAgronomySuite } from './components/AiAgronomySuite';
import { ApiKeyModal } from './components/ApiKeyModal';
import { TRANSLATIONS, Language } from './data/translations';
import { analyzeSatelliteCropHealth, hasActiveApiKey } from './services/geminiService';
import { 
  Trees, 
  Compass, 
  Crosshair, 
  Eye, 
  Layers, 
  TrendingUp, 
  Droplet, 
  Sparkles, 
  Loader2, 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  X, 
  MapPin, 
  Search,
  Building2,
  Calendar,
  ShieldCheck,
  PanelRightClose,
  PanelRightOpen,
  Filter,
  AlertTriangle,
  Thermometer,
  CloudRain,
  Wind,
  CheckCircle2,
  Activity,
  Key,
  Flower2,
  Languages,
  Palette,
  SunMedium,
  Moon,
  Leaf
} from 'lucide-react';

export type AppTheme = 'emerald' | 'desert' | 'midnight';
type ActiveTab = 'crops' | 'calendar' | 'date-palm' | 'stations' | 'ai-agronomist';

interface ThemeDefinition {
  id: AppTheme;
  label: string;
  urduLabel: string;
  icon: string;
  mainBg: string;
  text: string;
  headerBg: string;
  headerBorder: string;
  headerTitleBadge: string;
  headerSubtext: string;
  ribbonBg: string;
  ribbonBorder: string;
  ribbonPill: string;
  sidebarBg: string;
  sidebarBorder: string;
  tabNavBg: string;
  tabNavBorder: string;
  tabActive: string;
  tabInactive: string;
  bannerBg: string;
  bannerBorder: string;
  bannerText: string;
  bannerSubtext: string;
  bannerPulse: string;
  themeBtnBg: string;
  themeBtnBorder: string;
  themeBtnText: string;
}

const THEMES: Record<AppTheme, ThemeDefinition> = {
  emerald: {
    id: 'emerald',
    label: 'Emerald Oasis',
    urduLabel: 'سرسبز بلوچستان',
    icon: '🌿',
    mainBg: 'bg-[#f7f5ed]',
    text: 'text-[#192823]',
    headerBg: 'bg-[#092218]',
    headerBorder: 'border-[#143d2c]',
    headerTitleBadge: 'bg-amber-400 text-emerald-950',
    headerSubtext: 'text-emerald-300',
    ribbonBg: 'bg-[#061710]',
    ribbonBorder: 'border-[#103022]',
    ribbonPill: 'bg-emerald-950/80 text-emerald-200 hover:bg-emerald-900 border-emerald-800',
    sidebarBg: 'bg-[#fdfcf9]',
    sidebarBorder: 'border-[#e4ded0]',
    tabNavBg: 'bg-[#f2ede0]',
    tabNavBorder: 'border-[#e4ded0]',
    tabActive: 'bg-white text-emerald-950 shadow-xs border-[#ddd6c5]',
    tabInactive: 'text-stone-600 hover:text-stone-900',
    bannerBg: 'bg-[#092218]/95',
    bannerBorder: 'border-emerald-700/80',
    bannerText: 'text-amber-300',
    bannerSubtext: 'text-emerald-300',
    bannerPulse: 'bg-emerald-400',
    themeBtnBg: 'bg-emerald-900/90 hover:bg-emerald-800',
    themeBtnBorder: 'border-emerald-600/80',
    themeBtnText: 'text-emerald-200'
  },
  desert: {
    id: 'desert',
    label: 'Desert Earth',
    urduLabel: 'خشک پہاڑ و مٹی',
    icon: '🏜️',
    mainBg: 'bg-[#faf5ec]',
    text: 'text-[#2b1b12]',
    headerBg: 'bg-[#2b170c]',
    headerBorder: 'border-[#452615]',
    headerTitleBadge: 'bg-amber-500 text-stone-950',
    headerSubtext: 'text-amber-200',
    ribbonBg: 'bg-[#1c0e07]',
    ribbonBorder: 'border-[#381c10]',
    ribbonPill: 'bg-[#3b2012]/80 text-amber-200 hover:bg-[#4d2a18] border-[#5e321a]',
    sidebarBg: 'bg-[#fdfbf7]',
    sidebarBorder: 'border-[#ebdccb]',
    tabNavBg: 'bg-[#f4ebe0]',
    tabNavBorder: 'border-[#ebdccb]',
    tabActive: 'bg-white text-amber-950 shadow-xs border-[#dec9b4]',
    tabInactive: 'text-stone-600 hover:text-stone-900',
    bannerBg: 'bg-[#2b170c]/95',
    bannerBorder: 'border-[#7a3e1f]',
    bannerText: 'text-amber-300',
    bannerSubtext: 'text-amber-200',
    bannerPulse: 'bg-amber-400',
    themeBtnBg: 'bg-[#3e2112]/90 hover:bg-[#522d1a]',
    themeBtnBorder: 'border-[#7a4225]',
    themeBtnText: 'text-amber-200'
  },
  midnight: {
    id: 'midnight',
    label: 'Midnight Slate',
    urduLabel: 'سیاہ نائٹ موڈ',
    icon: '🌙',
    mainBg: 'bg-[#0c141e]',
    text: 'text-[#e2e8f0]',
    headerBg: 'bg-[#080d14]',
    headerBorder: 'border-[#182637]',
    headerTitleBadge: 'bg-cyan-400 text-slate-950',
    headerSubtext: 'text-cyan-300',
    ribbonBg: 'bg-[#05080d]',
    ribbonBorder: 'border-[#131f2d]',
    ribbonPill: 'bg-[#111c29]/90 text-cyan-200 hover:bg-[#18283a] border-[#22364c]',
    sidebarBg: 'bg-[#0e1723]',
    sidebarBorder: 'border-[#1e2f43]',
    tabNavBg: 'bg-[#091019]',
    tabNavBorder: 'border-[#1e2f43]',
    tabActive: 'bg-[#182638] text-cyan-300 shadow-xs border-[#2b415a]',
    tabInactive: 'text-slate-400 hover:text-slate-200',
    bannerBg: 'bg-[#080d14]/95',
    bannerBorder: 'border-cyan-700/80',
    bannerText: 'text-cyan-300',
    bannerSubtext: 'text-slate-300',
    bannerPulse: 'bg-cyan-400',
    themeBtnBg: 'bg-[#142232]/90 hover:bg-[#1d3148]',
    themeBtnBorder: 'border-[#264462]',
    themeBtnText: 'text-cyan-200'
  }
};

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentTheme, setCurrentTheme] = useState<AppTheme>('emerald');
  const [showThemeMenu, setShowThemeMenu] = useState<boolean>(false);
  const t = TRANSLATIONS[language];
  const activeTheme = THEMES[currentTheme];

  // Selected entities
  const [selectedFarm, setSelectedFarm] = useState<DateFarm>(MAKRAN_FARMS[0]);
  const [selectedStation, setSelectedStation] = useState<BalochistanAgriStation>(BALOCHISTAN_AGRI_STATIONS[0]);
  const [selectedVariety, setSelectedVariety] = useState<DateVariety>(DATE_VARIETIES[0]);
  
  // District Filter Focus across Balochistan
  const [activeDistrict, setActiveDistrict] = useState<DistrictFilter>('Kech (Turbat)');
  
  // Active Navigation Tab
  const [activeTab, setActiveTab] = useState<ActiveTab>('crops');
  
  // Interactive UI states
  const [isTreeCounterActive, setIsTreeCounterActive] = useState<boolean>(false);
  const [liveScanResult, setLiveScanResult] = useState<TreeScanResult | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showClimateModal, setShowClimateModal] = useState<boolean>(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState<boolean>(false);
  const [selectedAlert, setSelectedAlert] = useState<ClimateAlert>(CLIMATE_ALERTS[0]);

  // Satellite scan state
  const [isCropScanning, setIsCropScanning] = useState<boolean>(false);
  const [latestCropScan, setLatestCropScan] = useState<CropHealthAnalysis | null>(null);

  // Update active alert when district changes
  useEffect(() => {
    if (activeDistrict === 'Panjgur') {
      setSelectedAlert(CLIMATE_ALERTS[1]);
    } else if (activeDistrict === 'Gwadar') {
      setSelectedAlert(CLIMATE_ALERTS[2]);
    } else {
      setSelectedAlert(CLIMATE_ALERTS[0]);
    }
  }, [activeDistrict]);

  const handleFarmSelect = (farm: DateFarm) => {
    setSelectedFarm(farm);
    if (farm.district === 'Kech (Turbat)' || farm.district === 'Panjgur' || farm.district === 'Gwadar') {
      setActiveDistrict(farm.district as DistrictFilter);
    }
    setActiveTab('date-palm');
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };

  const handleStationSelect = (station: BalochistanAgriStation) => {
    setSelectedStation(station);
    setActiveTab('stations');
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };

  const handleVarietySelect = (variety: DateVariety) => {
    setSelectedVariety(variety);
    setActiveTab('date-palm');
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };

  const handleDistrictChange = (district: DistrictFilter) => {
    setActiveDistrict(district);
    if (district !== 'all') {
      const firstFarm = MAKRAN_FARMS.find(f => f.district === district);
      if (firstFarm) {
        setSelectedFarm(firstFarm);
      }
    }
  };

  const handlePollinationDistrictChange = (districtName: string) => {
    if (districtName.includes('Panjgur')) {
      handleDistrictChange('Panjgur');
    } else if (districtName.includes('Gwadar')) {
      handleDistrictChange('Gwadar');
    } else {
      handleDistrictChange('Kech (Turbat)');
    }
  };

  const handleTriggerCropScan = async (scanContext: CropScanContext) => {
    setIsCropScanning(true);
    setActiveTab('ai-agronomist');
    if (!isSidebarOpen) setIsSidebarOpen(true);

    try {
      const analysis = await analyzeSatelliteCropHealth(scanContext);
      setLatestCropScan(analysis);
    } catch (err) {
      console.error("Satellite crop scan failed:", err);
    } finally {
      setIsCropScanning(false);
    }
  };

  const handleManualScan = () => {
    const isKech = selectedFarm.district.includes('Kech') || selectedFarm.district.includes('Turbat');
    const isPanjgur = selectedFarm.district.includes('Panjgur');
    const scanContext: CropScanContext = {
      areaName: selectedFarm.name,
      district: selectedFarm.district,
      coordinates: selectedFarm.coordinates,
      zoomLevel: 13,
      currentNdvi: selectedFarm.canopyNDVI,
      deltaNdvi14d: -0.04,
      estimatedTreeCount: selectedFarm.estimatedTreeCount,
      dominantVarieties: selectedFarm.dominantVarieties,
      waterSource: selectedFarm.waterSource,
      ambientTempC: isKech ? 48.2 : isPanjgur ? 41.5 : 37.0,
      humidityPercent: isKech ? 18 : isPanjgur ? 44 : 62,
      operationalStatus: selectedFarm.operationalStatus
    };
    handleTriggerCropScan(scanContext);
  };

  const isKeyActive = hasActiveApiKey();

  // Active district metrics
  const currentDistrictMeta = activeDistrict !== 'all' && DISTRICT_METRICS[activeDistrict as keyof typeof DISTRICT_METRICS] 
    ? DISTRICT_METRICS[activeDistrict as keyof typeof DISTRICT_METRICS] 
    : null;

  return (
    <div className={`flex flex-col h-screen w-screen ${activeTheme.mainBg} ${activeTheme.text} font-sans overflow-hidden select-none transition-colors duration-300`}>
      
      {/* Top Header Bar: Official Government of Balochistan Insignia */}
      <header className={`flex-none ${activeTheme.headerBg} border-b ${activeTheme.headerBorder} text-white z-30 shadow-md transition-colors duration-300`}>
        <div className="px-4 py-2 flex flex-wrap items-center justify-between gap-3">
          
          {/* Official Department Emblem & App Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-md font-black">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-tight font-display text-white">
                  {language === 'ur' ? 'بلوچستان فصلوں کا ریکارڈ' : 'Balochistan Crop Record'}
                </span>
                <span className={`${activeTheme.headerTitleBadge} text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider hidden md:inline`}>
                  {language === 'ur' ? 'سرکاری زرعی ریکارڈ' : 'Official Agri Record'}
                </span>
              </div>
              <p className={`text-[11px] ${activeTheme.headerSubtext} font-medium flex items-center gap-1.5`}>
                <span>{language === 'ur' ? 'ڈی جی ایگریکلچر ایکسٹینشن بلوچستان' : 'DG Agriculture Extension Balochistan'}</span>
                <span className="opacity-60">•</span>
                <span className="hidden sm:inline">{language === 'ur' ? 'محکمہ زراعت توسیعی شعبہ' : 'Agriculture Extension Department'}</span>
              </p>
            </div>
          </div>

          {/* Right Header Action Slots: Theme Picker, Language Toggle, API Slot, Climate Alert & Sidebar Toggle */}
          <div className="flex items-center gap-2 relative">
            
            {/* 3 Themes Switcher Control (User Requested) */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl ${activeTheme.themeBtnBg} border ${activeTheme.themeBtnBorder} ${activeTheme.themeBtnText} text-xs font-bold transition-all cursor-pointer shadow-xs`}
                title="Select Interface Theme (Emerald / Desert / Midnight)"
              >
                <span>{activeTheme.icon}</span>
                <span className="hidden sm:inline">{language === 'ur' ? activeTheme.urduLabel : activeTheme.label}</span>
                <Palette className="w-3.5 h-3.5 opacity-80" />
              </button>

              {showThemeMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-stone-200 dark:border-slate-700 p-1.5 z-50 text-xs space-y-1 animate-in fade-in duration-100 text-stone-800 dark:text-stone-100">
                  <div className="text-[10px] font-black uppercase tracking-wider px-2 py-1 text-stone-400">
                    Select 3 Themes:
                  </div>

                  <button
                    onClick={() => {
                      setCurrentTheme('emerald');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left font-bold transition-all cursor-pointer ${
                      currentTheme === 'emerald'
                        ? 'bg-emerald-900 text-amber-300'
                        : 'hover:bg-stone-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🌿</span>
                      <span>Emerald Oasis</span>
                    </span>
                    {currentTheme === 'emerald' && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>

                  <button
                    onClick={() => {
                      setCurrentTheme('desert');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left font-bold transition-all cursor-pointer ${
                      currentTheme === 'desert'
                        ? 'bg-[#3e2112] text-amber-300'
                        : 'hover:bg-stone-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🏜️</span>
                      <span>Desert Earth</span>
                    </span>
                    {currentTheme === 'desert' && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>

                  <button
                    onClick={() => {
                      setCurrentTheme('midnight');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left font-bold transition-all cursor-pointer ${
                      currentTheme === 'midnight'
                        ? 'bg-slate-950 text-cyan-300 ring-1 ring-cyan-600'
                        : 'hover:bg-stone-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🌙</span>
                      <span>Midnight Slate</span>
                    </span>
                    {currentTheme === 'midnight' && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                </div>
              )}
            </div>

            {/* Urdu / English Language Toggle Button */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl ${activeTheme.themeBtnBg} border ${activeTheme.themeBtnBorder} ${activeTheme.themeBtnText} text-xs font-bold transition-all cursor-pointer shadow-xs`}
              title="Switch Language (اردو / English)"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'اردو' : 'English'}</span>
            </button>

            {/* API Slot Button */}
            <button
              onClick={() => setShowApiKeyModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 text-amber-200 text-xs font-bold transition-all cursor-pointer"
              title="Add or configure your Google Gemini API Key"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>{isKeyActive ? t.apiActive : t.apiSlot}</span>
              <span className={`w-2 h-2 rounded-full ${isKeyActive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            </button>

            {/* Climate Alert Live Banner */}
            <button
              onClick={() => setShowClimateModal(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/50 text-rose-200 transition-all text-xs font-semibold cursor-pointer animate-pulse"
              title="Click to view full Agro-Climate Alert and mitigation steps"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-300 shrink-0" />
              <span className="hidden lg:inline">{selectedAlert.title.slice(0, 36)}...</span>
              <span className="lg:hidden">{t.climateAlerts}</span>
            </button>

            {/* Toggle Sidebar */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`px-2.5 py-1.5 rounded-xl ${activeTheme.themeBtnBg} text-white text-xs font-semibold flex items-center gap-1.5 border ${activeTheme.themeBtnBorder} transition-all cursor-pointer`}
              title="Toggle Detail Sidebar"
            >
              {isSidebarOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4" />}
              <span className="hidden md:inline">{isSidebarOpen ? t.hideDetails : t.inspectDetails}</span>
            </button>
          </div>
        </div>

        {/* Secondary Ribbon: Fast Crops & Trees Switcher across Balochistan */}
        <div className={`px-4 py-1.5 ${activeTheme.ribbonBg} border-t ${activeTheme.ribbonBorder} flex items-center gap-2 overflow-x-auto no-scrollbar transition-colors duration-300`}>
          <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider pr-1 flex items-center gap-1 shrink-0">
            Balochistan Crops:
          </span>

          {BALOCHISTAN_CROPS.map((crop) => (
            <button
              key={crop.id}
              onClick={() => {
                setActiveTab('crops');
                if (!isSidebarOpen) setIsSidebarOpen(true);
              }}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${activeTheme.ribbonPill}`}
            >
              <span>{crop.name}</span>
              <span className="text-[9px] opacity-75 font-mono">({crop.localBalochiName.split(' ')[0]})</span>
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-row overflow-hidden relative">
        
        {/* Left Real Leaflet Map Viewport */}
        <main className="flex-1 h-full relative overflow-hidden">
          <MapCanvas
            selectedFarmId={selectedFarm.id}
            selectedStationId={selectedStation.id}
            activeDistrict={activeDistrict}
            onDistrictChange={handleDistrictChange}
            onFarmClick={handleFarmSelect}
            onStationClick={handleStationSelect}
            onTreeScanUpdate={(result) => setLiveScanResult(result)}
            isTreeCounterActive={isTreeCounterActive}
            onToggleTreeCounter={() => setIsTreeCounterActive(!isTreeCounterActive)}
            onTriggerCropScan={handleTriggerCropScan}
            isCropScanning={isCropScanning}
          />
        </main>

        {/* Right Collapsible Detail & Intelligence Sidebar */}
        {isSidebarOpen && (
          <aside className={`w-full sm:w-[440px] lg:w-[480px] h-full ${activeTheme.sidebarBg} border-l ${activeTheme.sidebarBorder} shadow-2xl flex flex-col z-20 overflow-hidden animate-in slide-in-from-right-4 duration-200 transition-colors duration-300`}>
            
            {/* Tab Navigation Header (Core Balochistan Agriculture Sections) */}
            <div className={`flex-none ${activeTheme.tabNavBg} border-b ${activeTheme.tabNavBorder} p-1.5 flex gap-1 overflow-x-auto no-scrollbar transition-colors duration-300`}>
              
              <button
                onClick={() => setActiveTab('crops')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'crops'
                    ? activeTheme.tabActive
                    : activeTheme.tabInactive
                }`}
              >
                <span>{t.allCrops}</span>
              </button>

              <button
                onClick={() => setActiveTab('calendar')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'calendar'
                    ? activeTheme.tabActive
                    : activeTheme.tabInactive
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.phenologyCalendar}</span>
              </button>

              <button
                onClick={() => setActiveTab('date-palm')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'date-palm'
                    ? activeTheme.tabActive
                    : activeTheme.tabInactive
                }`}
              >
                <PalmIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>{t.dateOases}</span>
              </button>

              <button
                onClick={() => setActiveTab('stations')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'stations'
                    ? activeTheme.tabActive
                    : activeTheme.tabInactive
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-blue-700" />
                <span>{t.agriStations}</span>
              </button>

              <button
                onClick={() => setActiveTab('ai-agronomist')}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'ai-agronomist'
                    ? activeTheme.tabActive
                    : activeTheme.tabInactive
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.aiAgronomist}</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* ========================================================== */}
              {/* TAB 1: ALL BALOCHISTAN CROPS, TREES & VEGETABLES           */}
              {/* ========================================================== */}
              {activeTab === 'crops' && (
                <BalochistanCropsView 
                  onAskAiAboutCrop={(cropName) => {
                    setActiveTab('ai-agronomist');
                  }}
                />
              )}

              {/* ========================================================== */}
              {/* TAB 2: PHENOLOGICAL CALENDAR (ALL BALOCHISTAN CROPS)        */}
              {/* ========================================================== */}
              {activeTab === 'calendar' && (
                <PhenologicalCalendarView
                  onAskAiAboutWindow={(cropName, windowName) => {
                    setActiveTab('ai-agronomist');
                  }}
                />
              )}

              {/* ========================================================== */}
              {/* TAB 3: MAKRAN DATE PALM ATLAS & GRANULAR FARMS             */}
              {/* ========================================================== */}
              {activeTab === 'date-palm' && (
                <div className="space-y-4">
                  
                  {/* District Aggregate Rollup Card */}
                  {currentDistrictMeta && (
                    <div className="bg-[#f0ece1] border border-[#ded7c4] rounded-2xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-emerald-700" />
                          {currentDistrictMeta.districtName} District Production
                        </span>
                        <span className="text-[10px] font-bold bg-emerald-800 text-white px-2 py-0.5 rounded-full">
                          {currentDistrictMeta.activeFarmsMapped} Mapped Farms
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white p-2 rounded-xl border border-stone-200">
                          <span className="text-[10px] text-stone-500 block">District Tree Population:</span>
                          <strong className="text-sm font-mono text-emerald-900">
                            {(currentDistrictMeta.totalPalms / 1000000).toFixed(2)}M Palms
                          </strong>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-stone-200">
                          <span className="text-[10px] text-stone-500 block">Annual District Yield:</span>
                          <strong className="text-sm font-mono text-amber-800">
                            {currentDistrictMeta.annualYieldMT.toLocaleString()} MT
                          </strong>
                        </div>
                      </div>

                      <div className="text-[11px] text-stone-600 pt-1 border-t border-stone-200">
                        <strong>Karez Systems:</strong> {currentDistrictMeta.activeKarezCount} active historical subterranean shafts.
                      </div>
                    </div>
                  )}

                  {/* Selected Farm Dossier */}
                  <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-white rounded-2xl p-4 shadow-sm border border-emerald-800 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                      <span className="uppercase tracking-wider">{selectedFarm.district}</span>
                      <span className="bg-amber-400 text-emerald-950 px-2 py-0.5 rounded-full text-[10px] font-black">
                        {selectedFarm.subRegion}
                      </span>
                    </div>
                    <h2 className="text-xl font-display font-black text-white mt-1">
                      {selectedFarm.name}
                    </h2>
                    <div className="text-xs text-stone-300">
                      Coordinates: {selectedFarm.coordinates.lat.toFixed(4)}°N, {selectedFarm.coordinates.lng.toFixed(4)}°E • Alt: {selectedFarm.altitudeMeters}m
                    </div>
                  </div>

                  {/* Farm Stand Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#f2efe4] border border-[#ded7c4] rounded-2xl p-3 text-center">
                      <span className="text-[10px] font-extrabold text-stone-600 uppercase tracking-wider block">Trees Count</span>
                      <div className="text-lg font-black font-mono text-emerald-950 mt-1">
                        {selectedFarm.estimatedTreeCount.toLocaleString()}
                      </div>
                      <span className="text-[10px] text-stone-600">Density: {selectedFarm.treeDensityPerHa}/ha</span>
                    </div>

                    <div className="bg-[#f2efe4] border border-[#ded7c4] rounded-2xl p-3 text-center">
                      <span className="text-[10px] font-extrabold text-stone-600 uppercase tracking-wider block">Annual Yield</span>
                      <div className="text-lg font-black font-mono text-amber-950 mt-1">
                        {selectedFarm.annualYieldTons.toLocaleString()} MT
                      </div>
                      <span className="text-[10px] text-stone-600">Area: {selectedFarm.totalAreaHectares} ha</span>
                    </div>

                    <div className="bg-[#f2efe4] border border-[#ded7c4] rounded-2xl p-3 text-center">
                      <span className="text-[10px] font-extrabold text-stone-600 uppercase tracking-wider block">Canopy NDVI</span>
                      <div className="text-lg font-black font-mono text-emerald-700 mt-1">
                        {selectedFarm.canopyNDVI}
                      </div>
                      <span className="text-[10px] text-emerald-700 font-bold">Optimal Vigor</span>
                    </div>
                  </div>

                  {/* Recharts Growth Trends Visualization */}
                  <GrowthTrendsChart farm={selectedFarm} />

                  {/* Operational Status & Hydrology */}
                  <div className="bg-white border border-[#ded7c4] rounded-2xl p-3.5 space-y-2 shadow-xs text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-stone-100">
                      <span className="font-bold text-stone-600">Operational Cycle:</span>
                      <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                        {selectedFarm.operationalStatus}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-1.5 border-b border-stone-100">
                      <span className="font-bold text-stone-600">Hydrological Architecture:</span>
                      <span className="font-semibold text-stone-900">{selectedFarm.waterSource}</span>
                    </div>

                    <div className="flex items-center justify-between pb-1.5 border-b border-stone-100">
                      <span className="font-bold text-stone-600">Irrigation Method:</span>
                      <span className="font-semibold text-stone-900">{selectedFarm.irrigationMethod}</span>
                    </div>

                    <div className="pt-1">
                      <span className="font-bold text-stone-600 block mb-1">Key Cultivars Cultivated:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedFarm.dominantVarieties.map((v) => (
                          <span key={v} className="bg-amber-50 text-amber-900 font-semibold px-2 py-0.5 rounded-lg border border-amber-200 text-xs">
                            🌴 {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 15+ Varieties Quick Picker */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-bold text-stone-800 block">
                      Makran 15+ Cultivars Directory:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 max-h-44 overflow-y-auto no-scrollbar">
                      {DATE_VARIETIES.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => handleVarietySelect(v)}
                          className={`p-2 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                            selectedVariety.id === v.id
                              ? 'bg-amber-400 border-amber-300 text-emerald-950 font-bold'
                              : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                          }`}
                        >
                          <div className="font-bold truncate">{v.name}</div>
                          <div className="text-[10px] text-stone-500 font-mono">{v.type} • {v.sugarBrix}° Brix</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================== */}
              {/* TAB 4: OFFICIAL AGRICULTURE RESEARCH & EXTENSION STATIONS  */}
              {/* ========================================================== */}
              {activeTab === 'stations' && (
                <BalochistanStationsView
                  selectedStationId={selectedStation.id}
                  onSelectStation={(s) => setSelectedStation(s)}
                />
              )}

              {/* ========================================================== */}
              {/* TAB 5: GEMINI AI PALM & CROP AGRONOMY SUITE                */}
              {/* ========================================================== */}
              {activeTab === 'ai-agronomist' && (
                <AiAgronomySuite
                  selectedVariety={selectedVariety}
                  activeDistrict={activeDistrict}
                  onSelectVariety={handleVarietySelect}
                  onSelectDistrict={handlePollinationDistrictChange}
                  onOpenApiKeyModal={() => setShowApiKeyModal(true)}
                  latestCropScan={latestCropScan}
                  isCropScanning={isCropScanning}
                  onTriggerCropScan={handleManualScan}
                />
              )}

            </div>
          </aside>
        )}
      </div>

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={showApiKeyModal}
        onClose={() => setShowApiKeyModal(false)}
      />

      {/* Climate Advisory Modal */}
      {showClimateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#fcfaf5] border-2 border-emerald-900 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-emerald-950 to-stone-900 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-400 animate-bounce" />
                <h3 className="text-base font-bold font-display text-white">
                  Active Agro-Climate Advisory: {selectedAlert.district}
                </h3>
              </div>
              <button 
                onClick={() => setShowClimateModal(false)}
                className="w-8 h-8 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-stone-300 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3.5 text-xs text-stone-700">
              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
                <strong className="text-amber-950 block font-bold mb-0.5">{selectedAlert.title}</strong>
                <p className="leading-relaxed">{selectedAlert.advisory}</p>
              </div>

              <div>
                <strong className="text-emerald-950 block mb-1.5 font-bold">Prescribed Mitigation Steps:</strong>
                <ul className="space-y-1.5 list-disc pl-4 text-stone-800">
                  {selectedAlert.mitigationSteps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">{step}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-stone-200 text-right">
                <button
                  onClick={() => setShowClimateModal(false)}
                  className="px-4 py-2 bg-emerald-900 text-amber-300 font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-800 cursor-pointer"
                >
                  Acknowledge & Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sleek Hung Theme-Matching Bottom Banner (User Requested) */}
      <div className={`fixed bottom-2.5 left-1/2 -translate-x-1/2 z-40 ${activeTheme.bannerBg} backdrop-blur-md ${activeTheme.bannerText} px-4 py-1 rounded-full border ${activeTheme.bannerBorder} shadow-2xl text-[11px] font-bold flex items-center gap-2 pointer-events-auto select-none transition-all duration-300 hover:scale-105`}>
        <span className={`w-2 h-2 rounded-full ${activeTheme.bannerPulse} animate-pulse`}></span>
        <span>Designed by Nazeer Ahmed (A/O Turbat)</span>
        <span className="opacity-50">•</span>
        <span className={`${activeTheme.bannerSubtext} text-[10px] hidden sm:inline`}>
          {language === 'ur' ? 'ڈی جی ایگریکلچر ایکسٹینشن بلوچستان' : 'DG Agriculture Extension Balochistan'}
        </span>
      </div>

    </div>
  );
};

export default App;
