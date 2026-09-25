export type MoistureType = 'Soft' | 'Semi-Dry' | 'Dry';

export type CropCategory = 'Orchard & Fruit Tree' | 'Vegetable' | 'Field & Cash Crop' | 'Spice & Medicinal';

export interface CropPestDetail {
  pestName: string;
  localUrduName?: string;
  symptoms: string;
  organicCure: string;
  chemicalCure: string;
  applicationDose: string;
  sprayTiming: string;
  urgency: 'Critical' | 'High' | 'Moderate' | 'Seasonal';
}

export interface CropDiseaseDetail {
  diseaseName: string;
  causalAgent: string;
  symptoms: string;
  preventativeCare: string;
  chemicalCure: string;
  applicationTiming: string;
}

export interface CropFertilizerDetailed {
  chemicalSchedule: {
    basalDose: string;
    vegetativeStage: string;
    floweringFruiting: string;
    foliarMicronutrients: string;
  };
  organicAndBioFertilizers: {
    fymRequirement: string;
    greenManuring: string;
    bioStimulants: string;
    saltReclamationGypsum?: string;
  };
}

export interface CropEngineeringDetailed {
  laserLevelingSpecs: string;
  hardpanSubsoilingDepth: string;
  bedRidgeDimensions: string;
  drainageAndBundSpecs: string;
}

export interface CropIrrigationPruningDetailed {
  karezAndWaterScheduling: string;
  dripFlowRateAndHours: string;
  pruningTrainingSystem: string;
  thinningAndCanopyManagement: string;
}

export interface CropTradeExportDetailed {
  exportCorridorsAndPorts: string[];
  quarantineAndPhytosanitary: string;
  importSubstitutionImpact: string;
  coldChainAndPackagingStandards: string;
}

export interface BalochistanCrop {
  id: string;
  name: string;
  localBalochiName: string;
  localUrduName: string;
  scientificName: string;
  category: CropCategory;
  iconType: string;
  majorDistricts: string[];
  primaryProductionHub: string;
  varietiesOrCultivars: string[];
  balochistanStats: {
    totalAcreageHectares: number;
    annualProductionMT: number;
    nationalSharePercent: number;
    avgYieldPerHa: string;
    currentSeasonStatus: string;
  };
  soilRequirements: {
    soilType: string;
    phRange: string;
    salinityTolerance: string;
    organicMatter: string;
    drainageNeeds: string;
  };
  waterRequirements: {
    annualWaterNeedMm: string;
    criticalStages: string[];
    irrigationMethods: string[];
    waterQualityTolerance: string;
  };
  weatherClimateRequirements: {
    optimalTempRangeC: string;
    maxHeatToleranceC: number;
    minFrostToleranceC: number;
    chillHoursOrGdd: string;
    rainfallAndHumidityImpact: string;
  };
  plantationToHarvestGuide: {
    nurseryAndSeedPrep: string;
    landPreparation: string;
    spacingAndPlanting: string;
    irrigationAndFertilizer: string;
    pruningThinningCanopy: string;
    pestAndDiseaseManagement: string;
    harvestingIndices: string;
    curingAndPostHarvest: string;
  };
  // Exhaustive Granular Sections (User Requested)
  pestsAndDiseases?: {
    activePests: CropPestDetail[];
    majorDiseases: CropDiseaseDetail[];
  };
  fertilizerPlan?: CropFertilizerDetailed;
  landLevelingPlan?: CropEngineeringDetailed;
  irrigationAndPruningPlan?: CropIrrigationPruningDetailed;
  tradeAndExportPlan?: CropTradeExportDetailed;
  seasonalCalendar: {
    sowingOrPlantingMonths: string[];
    floweringOrBloomMonths: string[];
    fruitGrowthMonths: string[];
    harvestMonths: string[];
  };
  tradeAndEconomics: {
    domesticMarkets: string[];
    exportDestinations: string[];
    processingAndValueAddition: string;
    avgFarmGatePricePkrKg: string;
    economicSignificance: string;
  };
}

export interface BalochistanAgriStation {
  id: string;
  name: string;
  institution: string;
  district: string;
  division: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  elevationMeters: number;
  focusCrops: string[];
  stationType: 
    | 'DG Headquarters & Sub-Department'
    | 'District Deputy Director Office'
    | 'Research Institute' 
    | 'Model Extension Farm' 
    | 'Government Seed Nursery' 
    | 'Adaptive Trial Station'
    | 'Canal Command Station'
    | 'Heritage Oasis';
  officerInCharge: string;
  acreageHectares: number;
  establishedYear: number;
  waterArchitecture: string;
  currentResearchTrial: string;
  contactOffice: string;
  jurisdiction?: string;
  subDepartments?: string[];
  keyFunctions?: string[];
}

export interface DateVariety {
  id: string;
  name: string;
  localName?: string;
  originRegion: string;
  country: string;
  isMakranSpecialty: boolean;
  type: MoistureType;
  moisturePercentage: string;
  fruitLengthMm: number;
  colorStages: {
    khalal: string; // Crisp early stage
    rutab: string;  // Semi-ripe soft stage
    tamar: string;  // Fully cured dark stage
  };
  sugarBrix: number;
  shelfLife: string;
  flavorNotes: string[];
  harvestWindow: string;
  commercialStatus: 'Global Benchmark' | 'Premium Export' | 'Domestic Table' | 'Traditional Heirloom' | 'Processing / Chohara';
  description: string;
  treeCharacteristics: {
    frondSpreadMeters: number;
    avgBunchesPerTree: number;
    yieldPerTreeKg: number;
    pollinationMethod: string;
  };
  imagePrompt?: string;
}

export interface NdviDataPoint {
  period: string; // e.g., '2020', '2021' or 'Jan', 'Feb'
  ndvi: number; // 0.0 - 1.0 (typical date palm grove: 0.60 - 0.90)
  canopyDensity: number; // trees/ha or foliage %
  waterStatus: 'Optimal' | 'Stable' | 'Mild Stress';
  yieldIndex?: number;
}

export interface ClimateAlert {
  id: string;
  title: string;
  district: 'Turbat (Kech)' | 'Panjgur' | 'Gwadar' | 'All Makran';
  severity: 'Critical' | 'Warning' | 'Advisory';
  eventType: 'Extreme Heatwave' | 'Pre-Monsoon Humidity Surge' | 'River Spate & Flash Inundation' | 'Dust & Sandstorm' | 'Karez Aquifer Advisory';
  temperatureC: number;
  humidityPercent: number;
  advisory: string;
  mitigationSteps: string[];
  affectedVarieties: string[];
  dateIssued: string;
}

export interface VarietyShare {
  name: string;
  percentage: number;
  yieldTons: number;
  treeCount: number;
}

export interface CropScanContext {
  areaName: string;
  district: string;
  coordinates: { lat: number; lng: number };
  zoomLevel: number;
  currentNdvi: number;
  deltaNdvi14d: number;
  estimatedTreeCount: number;
  dominantVarieties: string[];
  waterSource: string;
  ambientTempC: number;
  humidityPercent: number;
  operationalStatus?: string;
}

export interface CropHealthAnalysis {
  timestamp: string;
  areaName: string;
  district: string;
  coordinates: { lat: number; lng: number };
  currentNdvi: number;
  deltaNdvi14d: number;
  stressLevel: 'Optimal' | 'Mild Moisture Stress' | 'High Thermal Stress' | 'Salinity Anomaly';
  summaryText: string;
}

export interface DateFarm {
  id: string;
  name: string;
  district: 'Kech (Turbat)' | 'Panjgur' | 'Gwadar' | 'Washuk' | 'Khairpur' | 'Global Oasis';
  subRegion: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  altitudeMeters: number;
  totalAreaHectares: number;
  estimatedTreeCount: number;
  treeDensityPerHa: number;
  annualYieldTons: number;
  dominantVarieties: string[];
  varietiesBreakdown?: VarietyShare[];
  operationalStatus: 'Active Harvesting (Dang/Rutab)' | 'Sun-Curing (Chapparkh)' | 'Irrigating via Karez' | 'Fruit Thinning & Bagging' | 'Post-Harvest Maintenance';
  climateRiskNote: string;
  waterSource: string;
  irrigationMethod: string;
  canopyNDVI: number;
  treeAgeStructure: {
    bearing: number;   // %
    youngPeesh: number; // %
    heritage: number;  // %
  };
  farmerCooperative: string;
  summary: string;
  aerialDescription: string;
  dryingYardsCount: number;
  karezShafts: number;
  historicalNdvi?: NdviDataPoint[];
  seasonalNdvi?: NdviDataPoint[];
  droneViewUrl?: string;
}

export interface CountryTradeData {
  id: string;
  countryCode: string;
  countryName: string;
  flagEmoji: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  globalRank: number;
  annualProductionMT: number;
  globalSharePercent: number;
  treePopulationEst: number;
  exportVolumeMT: number;
  exportValueUSDMillions: number;
  topExportDestinations: string[];
  importVolumeMT: number;
  importValueUSDMillions: number;
  topImportSources: string[];
  dominantVarieties: string[];
  processingInfrastructure: string;
  perCapitaConsumptionKg: number;
  specialNotes: string;
}

export interface TreeScanResult {
  lat: number;
  lng: number;
  radiusMeters: number;
  areaHectares: number;
  detectedTreesCount: number;
  densityPerHa: number;
  estimatedAnnualYieldTons: number;
  dailyWaterNeedLiters: number;
  canopyCoveragePercent: number;
  ndviHealthScore: number;
  nearestFarmName?: string;
  primaryVariety: string;
  sampleCrowns: Array<{
    relX: number;
    relY: number;
    radius: number;
    health: 'optimal' | 'moderate' | 'young';
  }>;
}

export interface SiteMarker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  district?: string;
  treeCount?: number;
  dominantVariety?: string;
  isMakran?: boolean;
}

export interface MapStyleConfig {
  featureType?: string;
  elementType?: string;
  stylers: Array<{ [key: string]: string | number | boolean }>;
}

export interface PollinationDayData {
  dayNumber: number; // 1 to 14
  dateFormatted: string; // e.g., 'Day 1 • Mar 10'
  dayOfWeek: string; // 'Mon', 'Tue', etc.
  tempMaxC: number;
  tempMinC: number;
  humidityPercent: number;
  windSpeedKmh: number;
  precipChancePercent: number;
  weatherCondition: string;
  weatherIconType: 'sun' | 'wind' | 'cloud' | 'rain' | 'cloud-sun';
  phenologyStage: string;
  stigmaReceptivityPercent: number;
  pollenViabilityScore: number; // 0 - 100
  viabilityTier: 'Prime' | 'Favorable' | 'Marginal' | 'Unfavorable';
  recommendedWindowHours: string; // e.g., '08:30 AM – 11:30 AM'
  actionDirective: string;
  maleStrandCount: number;
  gddAccumulated: number;
}

export interface VarietyPhenologyProfile {
  varietyId: string;
  varietyName: string;
  spatheEmergencePeriod: string;
  bloomTiming: 'Early' | 'Mid' | 'Late';
  peakReceptiveDays: number[]; // days post opening [2, 3, 4]
  totalReceptiveDays: number;
  optimalTempRangeC: { min: number; max: number };
  optimalHumidityRangePercent: { min: number; max: number };
  maxTolerableWindKmh: number;
  recommendedMaleStrands: number;
  balochiTerm: string;
  specialHandlingNotes: string;
}

export interface PollinationWindowCalculation {
  variety: DateVariety;
  district: string;
  startDate: string;
  phenology: VarietyPhenologyProfile;
  days: PollinationDayData[];
  optimalWindowDays: {
    startDay: number;
    endDay: number;
    startDateStr: string;
    endDateStr: string;
    avgScore: number;
  };
  overallSuccessRatePercent: number;
  primeDaysCount: number;
  totalOptimalHours: number;
  recommendedActionSummary: string;
}

export type PhenologicalWindowType = 'planting' | 'flowering' | 'vegetative' | 'fruit-growth' | 'harvest' | 'curing' | 'dormant';

export interface MonthPhenologyDetail {
  monthName: string; // "January", "February", etc.
  monthShort: string; // "Jan", "Feb", etc.
  monthIndex: number; // 0 = Jan, 11 = Dec
  primaryWindow: PhenologicalWindowType;
  secondaryWindow?: PhenologicalWindowType;
  stageName: string;
  fieldOperations: string[];
  optimalTempRange: string;
  irrigationGuidance: string;
  waterNeedLevel: 'Minimal' | 'Moderate' | 'High' | 'Peak' | 'Withhold';
  fertilizerAction: string;
  pestDiseaseAlert: string;
  isCurrentSeason?: boolean;
}

export interface CropPhenologyProfile {
  cropId: string;
  cropName: string;
  localBalochiName: string;
  category: CropCategory;
  primaryHub: string;
  plantingWindow: {
    months: string[];
    description: string;
    optimalConditions: string;
  };
  floweringWindow: {
    months: string[];
    description: string;
    pollinationOrBloomNotes: string;
  };
  harvestWindow: {
    months: string[];
    description: string;
    indices: string;
  };
  fruitGrowthWindow?: {
    months: string[];
    description: string;
  };
  dormancyWindow?: {
    months: string[];
    description: string;
  };
  monthlySchedule: MonthPhenologyDetail[];
  currentSeasonalStatus: {
    currentStage: string;
    currentWindow: PhenologicalWindowType;
    seasonalAdvisory: string;
    daysToNextMilestone: number;
    nextMilestoneName: string;
  };
}
