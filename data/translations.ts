export type Language = 'en' | 'ur';

export interface TranslationStrings {
  appTitle: string;
  appSubtitle: string;
  dgOffice: string;
  designedBy: string;
  allCrops: string;
  phenologyCalendar: string;
  dateOases: string;
  agriStations: string;
  aiAgronomist: string;
  freeAiSuite: string;
  apiSlot: string;
  apiActive: string;
  climateAlerts: string;
  inspectDetails: string;
  hideDetails: string;
  orchardAndFruit: string;
  vegetables: string;
  fieldCrops: string;
  spicesMedicinal: string;
  searchCropPlaceholder: string;
  totalAcreage: string;
  annualProduction: string;
  primaryHub: string;
  currentStatus: string;
  nationalShare: string;
  topCultivars: string;
  plantationGuide: string;
  soilRequirements: string;
  waterRequirements: string;
  weatherClimate: string;
  phenologicalCalendarTitle: string;
  tradeEconomics: string;
  askAi: string;
  freeAiConsult: string;
  satelliteScan: string;
  soilDiagnostic: string;
  pollinationAdvisory: string;
  pestTriage: string;
  pestsAndDiseases: string;
  fertilizerPlan: string;
  landLevelingPlan: string;
  irrigationPruning: string;
  exportImportTitle: string;
  close: string;
  today: string;
  snapToToday: string;
  plantingWindow: string;
  floweringWindow: string;
  harvestWindow: string;
  singleCropView: string;
  crossMatrixView: string;
  districtSelect: string;
  allBalochistan: string;
}

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    appTitle: "Balochistan Crop Record",
    appSubtitle: "Official Agricultural Record, Phenology Atlas & Precision Agro-Intelligence",
    dgOffice: "DG Agriculture Extension Balochistan",
    designedBy: "Designed by Nazeer Ahmed (A/O Turbat)",
    allCrops: "🌾 All Crops",
    phenologyCalendar: "📅 Phenology",
    dateOases: "🌴 Date Oases",
    agriStations: "🏛️ Agri Stations",
    aiAgronomist: "✨ AI Agronomist",
    freeAiSuite: "⚡ 100% Free Built-in AI",
    apiSlot: "AI Model Slots",
    apiActive: "AI Models Active",
    climateAlerts: "Climate Advisory",
    inspectDetails: "Inspect",
    hideDetails: "Hide",
    orchardAndFruit: "🌳 Orchard & Fruit Trees",
    vegetables: "🥕 High-Value Vegetables",
    fieldCrops: "🌾 Field & Cash Crops",
    spicesMedicinal: "🌿 Spices & Medicinal",
    searchCropPlaceholder: "Search crop by name, Balochi name, or district...",
    totalAcreage: "Balochistan Acreage",
    annualProduction: "Annual Production",
    primaryHub: "Primary Production Hub",
    currentStatus: "Current Season Status",
    nationalShare: "Pakistan Share",
    topCultivars: "Top Cultivars / Varieties",
    plantationGuide: "📋 8-Step Plantation Guide",
    soilRequirements: "🌱 Soil & Salinity",
    waterRequirements: "💧 Water & Irrigation",
    weatherClimate: "☀️ Weather & Thermal Limits",
    phenologicalCalendarTitle: "📅 Phenological Calendar",
    tradeEconomics: "📦 Mandi & Trade Corridors",
    pestsAndDiseases: "🐛 Pests & Diseases (IPM Cures)",
    fertilizerPlan: "🧪 Chemical & Organic Fertilizers",
    landLevelingPlan: "🚜 Laser Leveling & Soil Engineering",
    irrigationPruning: "✂️ Irrigation & Canopy Pruning",
    exportImportTitle: "🚢 Export, Import & Quarantine",
    askAi: "Ask Extension AI",
    freeAiConsult: "Free Extension Consultation",
    satelliteScan: "Satellite Multispectral Scan",
    soilDiagnostic: "Soil & Water Diagnostic",
    pollinationAdvisory: "Pollination Advisory",
    pestTriage: "IPM Pest & Disease Triage",
    close: "Close",
    today: "Today",
    snapToToday: "Snap to Current Month",
    plantingWindow: "🌱 Planting Window",
    floweringWindow: "🌸 Flowering Window",
    harvestWindow: "🌾 Harvest Window",
    singleCropView: "Single Crop View",
    crossMatrixView: "All Crops Matrix",
    districtSelect: "District Focus",
    allBalochistan: "All Balochistan Agro-Zones"
  },
  ur: {
    appTitle: "بلوچستان فصلوں کا ریکارڈ",
    appSubtitle: "سرکاری زرعی ریکارڈ، موسمیاتی کیلنڈر اور توسیعی معلومات",
    dgOffice: "ڈی جی ایگریکلچر ایکسٹینشن بلوچستان",
    designedBy: "ڈیزائن کردہ: نذیر احمد (ایگریکلچر آفیسر تربت)",
    allCrops: "🌾 تمام فصلیں",
    phenologyCalendar: "📅 فینولوجیکل کیلنڈر",
    dateOases: "🌴 کھجور کے نخلستان",
    agriStations: "🏛️ تحقیقاتی مراکز",
    aiAgronomist: "✨ اے آئی زرعی ماہر",
    freeAiSuite: "⚡ مفت بلٹ ان اے آئی",
    apiSlot: "اے آئی ماڈلز",
    apiActive: "اے آئی فعال ہے",
    climateAlerts: "موسمی الرٹ",
    inspectDetails: "تفصیلات",
    hideDetails: "چھپائیں",
    orchardAndFruit: "🌳 پھلوں کے باغات اور درخت",
    vegetables: "🥕 سبزیاں",
    fieldCrops: "🌾 فیلڈ اور نقد آور فصلیں",
    spicesMedicinal: "🌿 مصالحہ جات",
    searchCropPlaceholder: "فصل، بلوچی نام یا ضلع سے تلاش کریں...",
    totalAcreage: "بلوچستان میں رقبہ",
    annualProduction: "سالانہ پیداوار",
    primaryHub: "اہم پیداواری مرکز",
    currentStatus: "موجودہ موسمی حالت",
    nationalShare: "ملکی پیداوار کا حصہ",
    topCultivars: "اہم اقسام",
    plantationGuide: "📋 کاشت سے کٹائی تک رہنما",
    soilRequirements: "🌱 مٹی اور نمکیات",
    waterRequirements: "💧 پانی اور آبپاشی (کاریز)",
    weatherClimate: "☀️ درجہ حرارت و موسم",
    phenologicalCalendarTitle: "📅 فینولوجیکل موسمی کیلنڈر",
    tradeEconomics: "📦 منڈی اور تجارت",
    pestsAndDiseases: "🐛 کیڑے، بیماریاں اور علاج",
    fertilizerPlan: "🧪 کیمیائی و نامیاتی کھادیں",
    landLevelingPlan: "🚜 لیزر لیولنگ و زمینی تیاری",
    irrigationPruning: "✂️ آبپاشی و شاخ تراشی (پروننگ)",
    exportImportTitle: "🚢 برآمدات، درآمدات اور قرنطینہ",
    askAi: "اے آئی زرعی افسر سے پوچھیں",
    freeAiConsult: "مفت زرعی مشورہ",
    satelliteScan: "سیٹلائٹ کراپ اسکین",
    soilDiagnostic: "مٹی اور پانی کا تجزیہ",
    pollinationAdvisory: "زردانہ ملاپ (پولینیشن)",
    pestTriage: "کیڑوں اور بیماریوں کا علاج",
    close: "بند کریں",
    today: "آج",
    snapToToday: "موجودہ مہینے پر جائیں",
    plantingWindow: "🌱 کاشت و بیجائی کا وقت",
    floweringWindow: "🌸 پھول اور پولینیشن کا وقت",
    harvestWindow: "🌾 چنائی و کٹائی کا وقت",
    singleCropView: "انفرادی فصل",
    crossMatrixView: "تمام فصلوں کا چارٹ",
    districtSelect: "ضلع منتخب کریں",
    allBalochistan: "پورا بلوچستان"
  }
};
