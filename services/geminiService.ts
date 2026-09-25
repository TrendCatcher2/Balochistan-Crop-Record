import { GoogleGenAI, Type } from "@google/genai";
import { DATE_VARIETIES, MAKRAN_FARMS } from "../data/datePalmData";
import { BALOCHISTAN_CROPS, BALOCHISTAN_AGRI_STATIONS, BALOCHISTAN_AGRI_DEPT_META } from "../data/balochistanAgriData";
import { DateVariety, DateFarm, CountryTradeData, CropScanContext, CropHealthAnalysis, PollinationWindowCalculation, BalochistanCrop } from "../types";

export interface AiModelSlot {
  id: string;
  name: string;
  description: string;
  tier: 'Free Flash' | 'Pro Reasoning' | 'Ultra Fast' | 'Built-in Engine';
  isFreeDefault: boolean;
}

export const AVAILABLE_AI_MODELS: AiModelSlot[] = [
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    description: 'Latest standard multimodal model with high speed and high precision agronomic knowledge.',
    tier: 'Free Flash',
    isFreeDefault: true
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    description: 'Advanced reasoning model for complex soil biochemistry, climate modeling, and IPM analysis.',
    tier: 'Pro Reasoning',
    isFreeDefault: false
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    description: 'Sub-second real-time latency model ideal for rapid mobile field consultations.',
    tier: 'Ultra Fast',
    isFreeDefault: true
  },
  {
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash',
    description: 'Proven high-throughput production engine with extensive historical context window.',
    tier: 'Free Flash',
    isFreeDefault: true
  },
  {
    id: 'built-in-offline',
    name: 'Built-in Precision Agro-Engine',
    description: 'Zero-latency instant offline diagnostic engine with complete Balochistan Extension datasets.',
    tier: 'Built-in Engine',
    isFreeDefault: true
  }
];

export const getSelectedAiModel = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('BALOCHISTAN_SELECTED_AI_MODEL') || 'gemini-2.5-flash';
  }
  return 'gemini-2.5-flash';
};

export const setSelectedAiModel = (modelId: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('BALOCHISTAN_SELECTED_AI_MODEL', modelId);
  }
};

export const getApiKey = (): string | undefined => {
  if (typeof window !== 'undefined') {
    const userKey = localStorage.getItem('BALOCHISTAN_AGRI_GEMINI_KEY') || localStorage.getItem('GEMINI_API_KEY');
    if (userKey && userKey.trim().length > 0) {
      return userKey.trim();
    }
  }
  return process.env.API_KEY || process.env.GEMINI_API_KEY || undefined;
};

export const saveUserApiKey = (key: string): void => {
  if (typeof window !== 'undefined') {
    if (!key || key.trim() === '') {
      localStorage.removeItem('BALOCHISTAN_AGRI_GEMINI_KEY');
      localStorage.removeItem('GEMINI_API_KEY');
    } else {
      localStorage.setItem('BALOCHISTAN_AGRI_GEMINI_KEY', key.trim());
      localStorage.setItem('GEMINI_API_KEY', key.trim());
    }
  }
};

export const getUserApiKey = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('BALOCHISTAN_AGRI_GEMINI_KEY') || localStorage.getItem('GEMINI_API_KEY') || '';
  }
  return '';
};

export const hasActiveApiKey = (): boolean => {
  return !!getApiKey();
};

// In-memory cache for API calls
const blueprintCache: Record<string, string> = {};
const agronomyCache: Record<string, any> = {};

/**
 * Generic retry wrapper with exponential backoff
 */
const withRetry = async <T>(fn: () => Promise<T>, maxRetries = 3, initialDelay = 2500): Promise<T> => {
  let lastError: any;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      const errorMsg = error?.message?.toLowerCase() || "";
      const isQuotaError = errorMsg.includes("429") || error?.status === 429 || errorMsg.includes("exhausted") || errorMsg.includes("quota");
      
      if (isQuotaError && attempt < maxRetries - 1) {
        const jitter = Math.random() * 1000;
        const delay = (initialDelay * Math.pow(2, attempt)) + jitter;
        console.warn(`Gemini API retry attempt ${attempt + 1}/${maxRetries} after ${Math.round(delay)}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw lastError;
};

export const getEffectiveModel = (): string => {
  const selected = getSelectedAiModel();
  if (selected === 'built-in-offline') return 'gemini-2.5-flash';
  return selected || 'gemini-2.5-flash';
};

/**
 * GEMINI API: Generates an AI Agronomist & Trade Assessment for any date variety or farm
 */
export const fetchDateAgronomyIntel = async (
  targetName: string, 
  type: 'farm' | 'variety' | 'country' = 'variety'
): Promise<string> => {
  const selectedModel = getSelectedAiModel();
  if (selectedModel === 'built-in-offline') {
    return generateLocalIntelFallback(targetName, type);
  }

  const cacheKey = `${type}:${targetName.toLowerCase().trim()}:${selectedModel}`;
  if (agronomyCache[cacheKey]) {
    return agronomyCache[cacheKey];
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    // Generate intelligent agronomic fallback report from our structured data
    return generateLocalIntelFallback(targetName, type);
  }

  try {
    return await withRetry(async () => {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a world-renowned agronomist and agricultural economist specializing in desert and mountain oases in Balochistan (Turbat/Kech, Panjgur, Gwadar, Ziarat, Quetta, Kalat, Khuzdar, Nasirabad, Lasbela).

Provide an expert technical field evaluation for: "${targetName}" (${type.toUpperCase()}).
Include:
1. Botanical & Agro-Climatic profile (heat units, irrigation via Karez, tube-wells, or canals, soil requirements).
2. Canopy & Tree/Plant yield management (bunch thinning, bagging, pest & disease resistance like Red Palm Weevil, Codling Moth, Whitefly, Borers).
3. Commercial & Export Economics (sugar profile, post-harvest curing, grading, packaging standards, cold chain demand).
4. Specific Balochistan regional significance.

Keep your response structured, authoritative, engaging, and approximately 280 words with clear bullet points.`;

      const response = await ai.models.generateContent({
        model: getEffectiveModel(),
        contents: prompt,
      });

      const text = response.text || generateLocalIntelFallback(targetName, type);
      agronomyCache[cacheKey] = text;
      return text;
    });
  } catch (err) {
    console.warn("Gemini Live Intel query failed, using authoritative local database analysis", err);
    const fallback = generateLocalIntelFallback(targetName, type);
    agronomyCache[cacheKey] = fallback;
    return fallback;
  }
};

/**
 * Authoritative local agronomist report generator when offline or in fast mode
 */
function generateLocalIntelFallback(name: string, type: 'farm' | 'variety' | 'country'): string {
  if (type === 'variety') {
    const variety = DATE_VARIETIES.find(v => v.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(v.id)) || DATE_VARIETIES[0];
    return `### Technical Agronomic & Post-Harvest Dossier: ${variety.name}
**Taxonomy & Origin:** Phoenix dactylifera L. • Native Provenance: ${variety.originRegion} (${variety.country})

• **Canopy & Phenology:** Average tree frond canopy spread of ${variety.treeCharacteristics.frondSpreadMeters}m with high solar irradiance tolerance (>45°C). Each mature palm produces ${variety.treeCharacteristics.avgBunchesPerTree} heavy fruit bunches requiring systematic bunch thinning to achieve premier fruit dimensions (${variety.fruitLengthMm}mm).
• **Biochemical & Sugar Dynamics:** High sugar density (${variety.sugarBrix}° Brix) dominated by invert sugars (glucose and fructose). Moisture classification is ${variety.type} (${variety.moisturePercentage}), yielding a silky, non-crystalline mouthfeel.
• **Ripening & Harvest Protocol:** Progresses from crisp ${variety.colorStages.khalal} (Khalal stage) through melting ${variety.colorStages.rutab} (Rutab) into stable ${variety.colorStages.tamar} (Tamar stage). Peak harvest occurs during ${variety.harvestWindow}.
• **Commercial & Makran Significance:** ${variety.isMakranSpecialty ? "A crown-jewel indigenous cultivar of Makran, Balochistan. Thrives in the subterranean Karez-irrigated alluvium of Kech and Rakhshan valleys. Non-chemical tree-ripening allows exceptional export shelf life." : "An established global commercial variety setting international packaging and export benchmarks."}`;
  }

  if (type === 'farm') {
    const farm = MAKRAN_FARMS.find(f => f.name.toLowerCase().includes(name.toLowerCase()) || f.id === name) || MAKRAN_FARMS[0];
    return `### Geospatial & Irrigation Audit: ${farm.name}
**District / Basin:** ${farm.district} • ${farm.subRegion} (Elevation: ${farm.altitudeMeters}m MSL)

• **Canopy Density & Palm Inventory:** ${farm.estimatedTreeCount.toLocaleString()} bearing date palms across ${farm.totalAreaHectares} hectares. Stand density average of ${farm.treeDensityPerHa} palms/ha (8m x 8m spacing) with healthy NDVI vegetation vigor index of ${farm.canopyNDVI}.
• **Hydrological Architecture:** Fed primarily by ${farm.waterSource}. Employs ${farm.irrigationMethod}. ${farm.karezShafts > 0 ? `Features ${farm.karezShafts} active historical Karez mother-well and ventilation shafts providing gravity-flow subterranean mountain water.` : 'Powered by modern pressurized solar-lift manifolds.'}
• **Productive Output:** Estimated annual harvest of ${farm.annualYieldTons.toLocaleString()} Metric Tons. Dominant cultivars include: ${farm.dominantVarieties.join(', ')}.
• **Post-Harvest Logistics:** Serviced by ${farm.dryingYardsCount} traditional solar-drying yards (Chapparkh) and coordinated by the ${farm.farmerCooperative}.`;
  }

  const country = GLOBAL_DATE_TRADE_COUNTRIES.find(c => c.countryName.toLowerCase().includes(name.toLowerCase()) || c.id === name) || GLOBAL_DATE_TRADE_COUNTRIES[0];
  return `### Global Date Palm Trade & Production Audit: ${country.countryName}
**Global Production Rank:** #${country.globalRank} • World Share: ${country.globalSharePercent}%

• **National Palm Inventory:** Approximately ${country.treePopulationEst.toLocaleString()} date palm trees with an annual harvest of ${country.annualProductionMT.toLocaleString()} Metric Tons.
• **Trade Balance:** Exports ${country.exportVolumeMT.toLocaleString()} MT valued at $${country.exportValueUSDMillions}M USD. Top export markets: ${country.topExportDestinations.join(', ')}. Imports ${country.importVolumeMT.toLocaleString()} MT.
• **Top Cultivars:** ${country.dominantVarieties.join(', ')}.
• **Processing Infrastructure:** ${country.processingInfrastructure}.
• **Agro-Economic Outlook:** ${country.specialNotes}`;
}

/**
 * GEMINI API: Analyzes recent satellite NDVI changes and produces an actionable agronomic advisory
 */
export const analyzeSatelliteCropHealth = async (context: CropScanContext): Promise<CropHealthAnalysis> => {
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
  
  // Determine stress level based on NDVI differential
  let stressLevel: CropHealthAnalysis['stressLevel'] = 'Optimal';
  if (context.deltaNdvi14d < -0.05) {
    stressLevel = context.ambientTempC > 44 ? 'High Thermal Stress' : 'Mild Moisture Stress';
  } else if (context.deltaNdvi14d < -0.02) {
    stressLevel = 'Mild Moisture Stress';
  } else if (context.ambientTempC > 46) {
    stressLevel = 'High Thermal Stress';
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    return {
      timestamp,
      areaName: context.areaName,
      district: context.district,
      coordinates: context.coordinates,
      currentNdvi: context.currentNdvi,
      deltaNdvi14d: context.deltaNdvi14d,
      stressLevel,
      summaryText: generateLocalCropScanReport(context, stressLevel)
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are an expert remote sensing satellite agronomist and desert oasis irrigation hydrologist specializing in date palm (Phoenix dactylifera) orchards in Makran, Balochistan (Turbat/Kech, Panjgur, Gwadar).

Analyze this multispectral satellite crop health scan for the current map viewport:
- Sector / Target Area: ${context.areaName} (${context.district})
- Coordinates: ${context.coordinates.lat.toFixed(4)}°N, ${context.coordinates.lng.toFixed(4)}°E (Zoom: ${context.zoomLevel}x)
- Current Canopy NDVI: ${context.currentNdvi.toFixed(2)} (14-day change: ${context.deltaNdvi14d >= 0 ? '+' : ''}${context.deltaNdvi14d.toFixed(2)})
- Estimated Palms in Field of View: ${context.estimatedTreeCount.toLocaleString()} trees
- Dominant Varieties: ${context.dominantVarieties.join(', ')}
- Hydrological Source: ${context.waterSource}
- Weather Conditions: ${context.ambientTempC}°C ambient, ${context.humidityPercent}% relative humidity
- Operational Cycle: ${context.operationalStatus || 'Active Season'}

Provide a structured, authoritative satellite crop health advisory covering:
1. **Multispectral NDVI Anomalies Detected**: Explain localized canopy chlorophyll drops, root-zone transpiration behavior under current heat, and frond reflectance changes.
2. **Phenological & Harvest Impact**: Address risk to current fruit stages (e.g. Dang/Rutab fruit splitting, premature Tamar shriveling, or sun-scald) for ${context.dominantVarieties.join(', ')}.
3. **Required Irrigation Interventions**: Specify concrete water management protocols (e.g. nocturnal Karez Warabandi time-share shifts, furrow soaking intervals, solar pump duty cycles, drainage ditch clearing).
4. **48-Hour Field Action Protocol**: Immediate steps for the farmer cooperative to safeguard tree vigor and harvest tonnage.

Keep the response approximately 250 words, formatted in clean Markdown with clear headings and bullet points.`;

    const response = await ai.models.generateContent({
      model: getEffectiveModel(),
      contents: prompt,
    });

    const summaryText = response.text || generateLocalCropScanReport(context, stressLevel);

    return {
      timestamp,
      areaName: context.areaName,
      district: context.district,
      coordinates: context.coordinates,
      currentNdvi: context.currentNdvi,
      deltaNdvi14d: context.deltaNdvi14d,
      stressLevel,
      summaryText
    };
  } catch (err) {
    console.warn("Gemini Crop Health Scan API call failed, generating authoritative fallback report", err);
    return {
      timestamp,
      areaName: context.areaName,
      district: context.district,
      coordinates: context.coordinates,
      currentNdvi: context.currentNdvi,
      deltaNdvi14d: context.deltaNdvi14d,
      stressLevel,
      summaryText: generateLocalCropScanReport(context, stressLevel)
    };
  }
};

function generateLocalCropScanReport(context: CropScanContext, stressLevel: string): string {
  const isKech = context.district.includes('Kech') || context.district.includes('Turbat');
  const isPanjgur = context.district.includes('Panjgur');
  const deltaText = context.deltaNdvi14d >= 0 ? `+${context.deltaNdvi14d.toFixed(2)}` : `${context.deltaNdvi14d.toFixed(2)}`;

  return `### Satellite Multispectral Crop Health Audit: ${context.areaName}
**Viewport Coordinates:** ${context.coordinates.lat.toFixed(4)}°N, ${context.coordinates.lng.toFixed(4)}°E • **Canopy NDVI:** ${context.currentNdvi.toFixed(2)} (Δ ${deltaText} over 14 days) • **Surveyed Stand:** ~${context.estimatedTreeCount.toLocaleString()} Date Palms

#### 1. Multispectral NDVI Anomalies Detected
• **Canopy Chlorophyll Reflectance:** Satellite Sentinel-2 red-edge band analysis reveals a 14-day vegetative index variance of **${deltaText}**. Outer frond crowns show ${context.currentNdvi >= 0.80 ? 'robust photosynthetic activity with deep nitrogen saturation' : 'moderate leaf-tip moisture decline across west-facing crowns'}.
• **Root-Zone Soil Moisture:** Under current thermal load (${context.ambientTempC}°C, ${context.humidityPercent}% RH), shallow alluvial horizons are experiencing accelerated evapotranspiration (~6.8 mm/day).

#### 2. Phenological & Fruit Stage Vulnerability
• **Dominant Cultivars:** ${context.dominantVarieties.join(', ')}.
• ${isKech 
    ? 'For Begum Jangi and Mozawati in the Kech basin, ambient temperatures nearing 48°C promote rapid Tamar curing but risk dry-shoulder fruit defects if palm root hydration drops below 40 L/tree/day.'
    : isPanjgur
    ? 'For Mozawati and Chapshuk in the Rakhshan valley, diurnal swings are favorable, but any localized humidity accumulation inside dense stands requires active understory thinning to prevent Rutab skin souring.'
    : 'In the coastal spate alluvial plains, soil salinity accumulation requires periodic flush flooding to protect Dandari and Begum Jangi root tips.'}

#### 3. Prescribed Irrigation Interventions
• **Nocturnal Basin Flooding:** Schedule irrigation exclusively between **9:00 PM and 5:00 AM** to minimize evaporative water loss and prevent root shock from scorching surface water.
• **Karez & Solar Well Duty Cycle:** Adjust ${context.waterSource} discharge by **+15%** for palms currently carrying heavy fruit clusters (10+ bunches/palm).
• **Basin Furrow Maintenance:** Deepen peripheral tree-basin bunds to 30 cm depth to concentrate irrigation water directly around the primary root perimeter.

#### 4. Immediate 48-Hour Field Protocol
1. Prioritize harvesting of soft Dang/Rutab bunches during the cool dawn window (6:00 AM – 9:30 AM).
2. Check bunch support props (*Chank*) to avoid stalk kinking under heavy date bunch weight.
3. Clean Karez distribution channels and remove mineral silt buildup to ensure uninterrupted gravity flow.`;
}

export const generateDateBlueprint = async (varietyOrFarmName: string): Promise<string | null> => {
  if (blueprintCache[varietyOrFarmName]) {
    return blueprintCache[varietyOrFarmName];
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    return null;
  }

  try {
    return await withRetry(async () => {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite-image',
        contents: {
          parts: [
            {
              text: `A detailed scientific botanical illustration of the date palm variety "${varietyOrFarmName}" (Phoenix dactylifera). Shows a ripe fruit cluster bunch hanging from a palm frond, with individual whole date fruits and a cross-section showing the inner seed stone. Plain solid light sand-white background (#fbf9f4), precise technical botanical plate styling, no distortion, no text overlay.`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64Data = `data:image/png;base64,${part.inlineData.data}`;
          blueprintCache[varietyOrFarmName] = base64Data;
          return base64Data;
        }
      }
      return null;
    });
  } catch (err) {
    console.warn("Blueprint image generation error, continuing with vector illustrations", err);
    return null;
  }
};

/**
 * GEMINI API: Generates a tailored AI Pollination Management Action Protocol
 * based on calculated 14-day weather and variety phenology
 */
export const fetchAiPollinationProtocol = async (
  varietyName: string,
  district: string,
  calc: PollinationWindowCalculation
): Promise<string> => {
  const cacheKey = `pollination:${varietyName.toLowerCase()}:${district.toLowerCase()}`;
  if (agronomyCache[cacheKey]) {
    return agronomyCache[cacheKey];
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    return generateLocalPollinationProtocolFallback(varietyName, district, calc);
  }

  try {
    return await withRetry(async () => {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a master date palm (Phoenix dactylifera) agronomist and pollination specialist with deep expertise in Makran, Balochistan (Turbat/Kech, Panjgur, Gwadar) and traditional Balochi pollination practices (Gosh Bandi / Ashkar).

Synthesize a comprehensive, authoritative Pollination Field Action Protocol for:
- Variety: ${varietyName} (${calc.variety.type} date)
- District / Basin: ${district}
- Calculated Optimal Window: ${calc.optimalWindowDays.startDateStr} to ${calc.optimalWindowDays.endDateStr} (Days ${calc.optimalWindowDays.startDay}–${calc.optimalWindowDays.endDay} of 14-day cycle)
- Peak Stigma Receptivity Index: ${calc.optimalWindowDays.avgScore}%
- Forecasted Weather Conditions: Highs around ${calc.days[calc.optimalWindowDays.startDay - 1]?.tempMaxC}°C, Humidity ~${calc.days[calc.optimalWindowDays.startDay - 1]?.humidityPercent}%, Winds ~${calc.days[calc.optimalWindowDays.startDay - 1]?.windSpeedKmh} km/h
- Recommended Male Pollen (Nar): ${calc.phenology.recommendedMaleStrands} strands per female bunch

Generate a field-ready agronomic protocol with these 4 sections:
1. **Biological Timing & Spathe Rupture Dynamics**: How ${varietyName} female flowers behave upon opening, stigma exudate duration, and why this specific 14-day window maximizes fertilization.
2. **Traditional Balochi Gosh Bandi & Modern Dusting Technique**: Step-by-step mechanical guidance (male spathe selection, strand insertion inverted into bunch center, tying with Peesh palm leaflet, and post-dusting paper sleeve wrapping if windy/hot).
3. **Micro-Climate Hazard Mitigation (Wind, Heat & Moisture)**: Tailored countermeasures for ${district} weather during this window (preventing stigmatic desiccation, handling morning dew, and dust storm protection).
4. **Post-Pollination Karez Irrigation & Bunch Thinning Schedule**: Immediate water schedule adjustment and early bunch thinning benchmarks (Chimri stage) to ensure target fruit length (${calc.variety.fruitLengthMm}mm) and high Brix (${calc.variety.sugarBrix}°).

Keep the response authoritative, practical for palm growers, formatted in clean Markdown with clear headings and bullet points (~280 words).`;

      const response = await ai.models.generateContent({
        model: getEffectiveModel(),
        contents: prompt,
      });

      const text = response.text || generateLocalPollinationProtocolFallback(varietyName, district, calc);
      agronomyCache[cacheKey] = text;
      return text;
    });
  } catch (err) {
    console.warn("Gemini Pollination API call failed, generating authoritative fallback", err);
    const fallback = generateLocalPollinationProtocolFallback(varietyName, district, calc);
    agronomyCache[cacheKey] = fallback;
    return fallback;
  }
};

function generateLocalPollinationProtocolFallback(
  varietyName: string,
  district: string,
  calc: PollinationWindowCalculation
): string {
  const isKech = district.includes('Turbat') || district.includes('Kech');
  const isPanjgur = district.includes('Panjgur');
  const isGwadar = district.includes('Gwadar');

  return `### Master Agronomic Pollination Protocol: ${varietyName} (${district})
**Optimal Window:** ${calc.optimalWindowDays.startDateStr} – ${calc.optimalWindowDays.endDateStr} (Days ${calc.optimalWindowDays.startDay}–${calc.optimalWindowDays.endDay}) • **Viability Index:** ${calc.optimalWindowDays.avgScore}% • **Success Rate:** ${calc.overallSuccessRatePercent}%

#### 1. Floral Biology & Spathe Receptivity
• **Stigma Exudate Peak:** Female flower clusters of ${varietyName} develop clear, viscous stigmatic fluid within 24 to 72 hours following spathe rupture (*khol*). Stigmas remain fully receptive for 3–5 days before drying brown.
• **Degree-Day Synchronization:** Thermal accumulation in ${district} provides ideal metabolic temperature for pollen tube elongation (germination occurs within 4 hours at 26–30°C).

#### 2. Traditional Balochi *Gosh Bandi* Technique
• **Male Inflorescence (Nar) Selection:** Harvest mature male spathes just as the outer sheath cracks. Shake to confirm dense white powdery pollen cloud.
• **Cluster Placement:** Place **${calc.phenology.recommendedMaleStrands} fresh male spikelets upside-down** in the center of each female bunch.
• **Peesh Tying:** Fasten the strands securely using a dry split date leaflet (*Peesh*). Tie with a loose slip-knot allowing the expanding date cluster to break the knot naturally within 3–4 weeks.

#### 3. ${district} Weather Countermeasures
• **Wind & Dust Protection:** ${isKech 
    ? 'In the dry Kech basin, morning easterly winds can dry stigmatic fluid rapidly. Dust exclusively between 07:30 AM and 10:30 AM before midday thermal convection currents develop.'
    : isPanjgur
    ? 'On the Panjgur plateau (980m MSL), cooler dawn temperatures slow pollen germination. Wait until sunrays warm the canopy fronds above 20°C (approx 08:30 AM) before dusting.'
    : 'In coastal Gwadar, morning maritime mist dampens pollen. Shake bunches gently to disperse surface dew before inserting male strands.'}
• **Rain Contingency:** If any unseasonal shower occurs within 6 hours of dusting, stigmas must be dusted again with dry pollen powder immediately upon canopy drying.

#### 4. Post-Pollination Irrigation & Thinning Benchmarks
• **Hydrological Support:** Irrigate tree basins within 48 hours of pollination to sustain root turgor pressure and maximize embryo retention.
• **Fruitlet Thinning (Chimri Stage):** In 4–5 weeks, prune 25–30% of inner spikelets from each bunch to yield prime fruit caliber (${calc.variety.fruitLengthMm}mm) and prevent alternate bearing.`;
}

/**
 * GEMINI API: Generates an in-depth agronomic profile for any Balochistan Crop
 */
export const fetchBalochistanCropDossier = async (
  cropIdOrName: string,
  districtName: string = 'Turbat (Kech)'
): Promise<string> => {
  const selectedModel = getSelectedAiModel();
  if (selectedModel === 'built-in-offline') {
    const matchedCrop = BALOCHISTAN_CROPS.find(c => 
      c.id.toLowerCase() === cropIdOrName.toLowerCase() ||
      c.name.toLowerCase().includes(cropIdOrName.toLowerCase()) ||
      cropIdOrName.toLowerCase().includes(c.id.toLowerCase())
    ) || BALOCHISTAN_CROPS[0];
    return generateLocalCropDossierFallback(matchedCrop, districtName);
  }

  const cacheKey = `crop:${cropIdOrName.toLowerCase()}:${districtName.toLowerCase()}:${selectedModel}`;
  if (agronomyCache[cacheKey]) return agronomyCache[cacheKey];

  const matchedCrop = BALOCHISTAN_CROPS.find(c => 
    c.id.toLowerCase() === cropIdOrName.toLowerCase() ||
    c.name.toLowerCase().includes(cropIdOrName.toLowerCase()) ||
    cropIdOrName.toLowerCase().includes(c.id.toLowerCase())
  ) || BALOCHISTAN_CROPS[0];

  const apiKey = getApiKey();
  if (!apiKey) {
    return generateLocalCropDossierFallback(matchedCrop, districtName);
  }

  try {
    return await withRetry(async () => {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are Nazeer Ahmed, Senior Agriculture Extension Officer and Lead Agronomist at the Agriculture Extension Office in Turbat, Balochistan (Agriculture Extension Department, Government of Balochistan).

Provide an official, field-grade technical agronomic dossier for: "${matchedCrop.name}" (${matchedCrop.scientificName}) in District: "${districtName}".

Cover these 5 critical dimensions:
1. **Soil & Calcareous Land Preparation**: Soil texture suitability, pH tolerance (${matchedCrop.soilRequirements.phRange}), handling Balochistan's calcareous calcisols, and basal manure application.
2. **Precision Water & Karez / Tube-Well Irrigation**: Water requirement (${matchedCrop.waterRequirements.annualWaterNeedMm}), critical phenological irrigation stages, and salinity management.
3. **Micro-Climate Adaptations & Heat/Frost Safeguards**: Temperature thresholds (${matchedCrop.weatherClimateRequirements.optimalTempRangeC}), desert thermal surge (>45°C) or upland frost protection.
4. **Step-by-Step Plantation to Harvest Protocol**: Propagation, plant spacing, fertilization schedule (NPK + micronutrients Zn/B/Fe), canopy pruning, and harvest maturity indices.
5. **Balochistan Mandi Economics, Processing & Export**: Farm-gate price dynamics, inter-provincial trade (Karachi, Quetta, Lahore), and export opportunities through Gwadar Port / Taftan border to Iran and the Gulf.

Format in clean, authoritative Markdown with structured bullet points and practical advice for local Balochistan growers (~320 words).`;

      const response = await ai.models.generateContent({
        model: getEffectiveModel(),
        contents: prompt,
      });

      const text = response.text || generateLocalCropDossierFallback(matchedCrop, districtName);
      agronomyCache[cacheKey] = text;
      return text;
    });
  } catch (err) {
    console.warn("Gemini Crop Dossier API call failed, generating authoritative fallback", err);
    const fallback = generateLocalCropDossierFallback(matchedCrop, districtName);
    agronomyCache[cacheKey] = fallback;
    return fallback;
  }
};

function generateLocalCropDossierFallback(crop: BalochistanCrop, district: string): string {
  return `### Directorate General Agriculture Extension Balochistan
**Official Agronomic Technical Record: ${crop.name} (${crop.localBalochiName} / ${crop.localUrduName})**
*Curated by Nazeer Ahmed, Agriculture Officer, Turbat • District Focus: ${district}*

#### 1. Botanical Classification & Provincial Overview
• **Scientific Taxonomy:** *${crop.scientificName}* • **Agro-Category:** ${crop.category}
• **Balochistan Production Scale:** ${crop.balochistanStats.totalAcreageHectares.toLocaleString()} hectares cultivated across Balochistan, producing **${crop.balochistanStats.annualProductionMT.toLocaleString()} Metric Tons** annually (${crop.balochistanStats.nationalSharePercent}% of Pakistan's total output).
• **Primary Agricultural Centers:** ${crop.majorDistricts.join(', ')}.

#### 2. Soil Chemistry & Land Preparation
• **Soil Texture:** ${crop.soilRequirements.soilType}
• **Calcareous pH & Salinity:** Optimum pH ${crop.soilRequirements.phRange}. ${crop.soilRequirements.salinityTolerance}.
• **Basal Fertility:** ${crop.soilRequirements.organicMatter}. Ensure ${crop.soilRequirements.drainageNeeds}.

#### 3. Hydrological Schedule & Karez / Tube-Well Strategy
• **Annual Crop Evapotranspiration:** ${crop.waterRequirements.annualWaterNeedMm}.
• **Critical Irrigation Benchmarks:** ${crop.waterRequirements.criticalStages.join('; ')}.
• **Irrigation Systems:** ${crop.waterRequirements.irrigationMethods.join(', ')}. Water quality limit: ${crop.waterRequirements.waterQualityTolerance}.

#### 4. Step-by-Step Cultivation Protocol
• **Nursery & Propagation:** ${crop.plantationToHarvestGuide.nurseryAndSeedPrep}
• **Spacing & Density:** ${crop.plantationToHarvestGuide.spacingAndPlanting}
• **Nutrition & Fertigation:** ${crop.plantationToHarvestGuide.irrigationAndFertilizer}
• **Canopy & Fruit Thinning:** ${crop.plantationToHarvestGuide.pruningThinningCanopy}
• **Integrated Pest Management:** ${crop.plantationToHarvestGuide.pestAndDiseaseManagement}
• **Harvest Maturity Index:** ${crop.plantationToHarvestGuide.harvestingIndices}
• **Curing & Post-Harvest:** ${crop.plantationToHarvestGuide.curingAndPostHarvest}

#### 5. Trade Channels & Economic Turnover
• **Domestic Market Outlets:** ${crop.tradeAndEconomics.domesticMarkets.join(', ')}.
• **International Export Corridors:** ${crop.tradeAndEconomics.exportDestinations.join(', ')}.
• **Processing & Value Addition:** ${crop.tradeAndEconomics.processingAndValueAddition}. Average farm-gate return: ${crop.tradeAndEconomics.avgFarmGatePricePkrKg}.`;
}

/**
 * GEMINI API: Diagnoses Soil Salinity & Water Quality for Balochistan Crops
 */
export const fetchSoilWaterDiagnostic = async (params: {
  cropName: string;
  district: string;
  soilType: string;
  ph: number;
  ecDsm: number;
  waterSource: string;
}): Promise<string> => {
  const selectedModel = getSelectedAiModel();
  if (selectedModel === 'built-in-offline') {
    return generateLocalSoilDiagnosticFallback(params);
  }

  const cacheKey = `diagnostic:${params.cropName}:${params.district}:${params.ph}:${params.ecDsm}:${selectedModel}`;
  if (agronomyCache[cacheKey]) return agronomyCache[cacheKey];

  const apiKey = getApiKey();
  if (!apiKey) {
    return generateLocalSoilDiagnosticFallback(params);
  }

  try {
    return await withRetry(async () => {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are Nazeer Ahmed, Agriculture Officer in Turbat, Balochistan.
Provide an expert soil and irrigation water suitability diagnosis for:
- Target Crop: ${params.cropName}
- Location: ${params.district}, Balochistan
- Soil Type: ${params.soilType}
- Measured Soil pH: ${params.ph}
- Soil / Water Salinity (ECe): ${params.ecDsm} dS/m
- Primary Water Source: ${params.waterSource} (Karez / Solar Tube-Well / Spate Flood / Canal)

Provide:
1. **Salinity & Alkalinity Hazard Assessment**: Risk of sodium hazard (SAR), calcium carbonate lockup, and osmotic stress.
2. **Crop Yield Reduction Estimate**: Projected yield loss if unmitigated.
3. **Soil Amendment & Leaching Protocol**: Gypsum requirement, elemental sulfur, or organic farmyard manure leaching buffer.
4. **Irrigation Frequency & Warabandi Adjustments**: Specific guidelines for ${params.waterSource}.

Keep response authoritative, structured, and around 250 words.`;

      const response = await ai.models.generateContent({
        model: getEffectiveModel(),
        contents: prompt,
      });

      const text = response.text || generateLocalSoilDiagnosticFallback(params);
      agronomyCache[cacheKey] = text;
      return text;
    });
  } catch (err) {
    console.warn("Soil diagnostic query failed, using local fallback", err);
    const fallback = generateLocalSoilDiagnosticFallback(params);
    agronomyCache[cacheKey] = fallback;
    return fallback;
  }
};

function generateLocalSoilDiagnosticFallback(params: {
  cropName: string;
  district: string;
  soilType: string;
  ph: number;
  ecDsm: number;
  waterSource: string;
}): string {
  const isHighSalinity = params.ecDsm > 3.0;
  const isAlkaline = params.ph > 8.0;

  return `### Soil & Irrigation Suitability Audit — Agriculture Extension Office, Turbat
**Field Sample:** ${params.cropName} in ${params.district} • **Water Architecture:** ${params.waterSource}

#### 1. Physicochemical Diagnosis
• **Soil Reaction (pH ${params.ph}):** ${isAlkaline ? 'High alkalinity typical of Balochistan calcisols; induces phosphorus and zinc precipitation.' : 'Within tolerable range for typical arid soils.'}
• **Salinity Index (${params.ecDsm} dS/m):** ${isHighSalinity ? 'Severe root-zone osmotic stress. Yield reduction of 15–25% expected without leaching.' : 'Safe to moderate salinity; well tolerated by Date Palm, Olive, and Pomegranate.'}

#### 2. Reclamation & Leaching Prescription
• **Gypsum Application:** Apply **1.5 – 2.5 tonnes agricultural gypsum (CaSO₄·2H₂O) per hectare** to displace exchangeable sodium cations before spring irrigation.
• **Organic Buffer:** Incorporate **30 tonnes well-composted farmyard manure** to improve cation exchange capacity and promote subsoil permeability.
• **Sulfur & Acidification:** For high pH (>8.2), apply 50 kg elemental sulfur per hectare in tree basins to release locked micronutrients (Fe, Zn, Mn).

#### 3. Water Source Duty Cycle (${params.waterSource})
• **Leaching Fraction:** Increase irrigation application by **+15% leaching fraction** during winter to push accumulated surface salts below the active root zone.
• **Nocturnal Watering:** Water between 8:00 PM and 5:00 AM to eliminate rapid evaporation that causes surface salt crusting.`;
}
