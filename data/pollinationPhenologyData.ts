import { DateVariety, VarietyPhenologyProfile, PollinationDayData, PollinationWindowCalculation } from '../types';

/**
 * Variety-specific date palm phenology profiles
 * Date palms (Phoenix dactylifera) are dioecious. Female flowers are receptive
 * only for a brief period (2 to 6 days after spathe opening).
 * Male pollen (from 'Nar' palms) must be delivered within this window.
 */
export const VARIETY_PHENOLOGY_PROFILES: Record<string, VarietyPhenologyProfile> = {
  'mozawati': {
    varietyId: 'mozawati',
    varietyName: 'Mozawati (Muzati)',
    spatheEmergencePeriod: 'Early March (Turbat) to Mid-March (Panjgur)',
    bloomTiming: 'Mid',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 22, max: 31 },
    optimalHumidityRangePercent: { min: 35, max: 55 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 4,
    balochiTerm: 'گوش بندی (Gosh Bandi - Mozawati)',
    specialHandlingNotes: 'Delicate spathe stigmas dry rapidly in desert easterly winds. Best pollinated mid-morning (8:30–11:00 AM) followed by loose wrapping with fresh frond leaflets.'
  },
  'begum-jangi': {
    varietyId: 'begum-jangi',
    varietyName: 'Begum Jangi',
    spatheEmergencePeriod: 'Late February to Early March (Kech Basin)',
    bloomTiming: 'Early',
    peakReceptiveDays: [2, 3, 4, 5],
    totalReceptiveDays: 6,
    optimalTempRangeC: { min: 24, max: 34 },
    optimalHumidityRangePercent: { min: 25, max: 50 },
    maxTolerableWindKmh: 22,
    recommendedMaleStrands: 4,
    balochiTerm: 'بیگم جنگی اشکار (Ashkar)',
    specialHandlingNotes: 'High thermal tolerance. High natural pollen affinity with Kech wild Nar palms. Produces heavy bunch counts (12-14 bunches/palm).'
  },
  'halawi': {
    varietyId: 'halawi',
    varietyName: 'Halawi (Halaw)',
    spatheEmergencePeriod: 'Mid February to Late February',
    bloomTiming: 'Early',
    peakReceptiveDays: [1, 2, 3],
    totalReceptiveDays: 4,
    optimalTempRangeC: { min: 23, max: 30 },
    optimalHumidityRangePercent: { min: 30, max: 55 },
    maxTolerableWindKmh: 15,
    recommendedMaleStrands: 3,
    balochiTerm: 'حلاوی گوش (Halawi Gosh)',
    specialHandlingNotes: 'Earliest blooming variety in Makran. Stigmas are receptive within 12 hours of spathe splitting; delay of even 48 hours causes significant parthenocarpy (unfertilized seedless dates).'
  },
  'sabzo': {
    varietyId: 'sabzo',
    varietyName: 'Sabzo',
    spatheEmergencePeriod: 'Late March to Early April (High Plateau)',
    bloomTiming: 'Late',
    peakReceptiveDays: [2, 3, 4, 5],
    totalReceptiveDays: 6,
    optimalTempRangeC: { min: 20, max: 29 },
    optimalHumidityRangePercent: { min: 30, max: 60 },
    maxTolerableWindKmh: 20,
    recommendedMaleStrands: 4,
    balochiTerm: 'سبزو اشکار (Sabzo Ashkar)',
    specialHandlingNotes: 'Adapted to cooler nights in Parom and Panjgur. Stigmas remain receptive 1-2 days longer than low-basin varieties.'
  },
  'rabbi': {
    varietyId: 'rabbi',
    varietyName: 'Rabbi (Makrani)',
    spatheEmergencePeriod: 'Early March to Mid March',
    bloomTiming: 'Mid',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 22, max: 32 },
    optimalHumidityRangePercent: { min: 25, max: 50 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 3,
    balochiTerm: 'ربی گوش (Rabbi Gosh)',
    specialHandlingNotes: 'Long elongated floral spadix. Requires even strand distribution throughout the crown to prevent one-sided bunch fertilization.'
  },
  'kahraba': {
    varietyId: 'kahraba',
    varietyName: 'Kahraba (Amber Date)',
    spatheEmergencePeriod: 'Mid March',
    bloomTiming: 'Mid',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 23, max: 32 },
    optimalHumidityRangePercent: { min: 30, max: 50 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 4,
    balochiTerm: 'کہربا اشکار (Kahraba)',
    specialHandlingNotes: 'High sugar synthesis cultivar. Responds well to fresh morning pollen dusting with high viability male spathes.'
  },
  'chapshuk': {
    varietyId: 'chapshuk',
    varietyName: 'Chapshuk',
    spatheEmergencePeriod: 'Mid to Late March',
    bloomTiming: 'Mid',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 21, max: 30 },
    optimalHumidityRangePercent: { min: 35, max: 55 },
    maxTolerableWindKmh: 16,
    recommendedMaleStrands: 4,
    balochiTerm: 'چپشک گوش (Chapshuk)',
    specialHandlingNotes: 'Panjgur specialty. Dense flower clusters require slight mechanical shaking after inserting male strands to distribute pollen deep into the bunch.'
  },
  'dandari': {
    varietyId: 'dandari',
    varietyName: 'Dandari',
    spatheEmergencePeriod: 'Early March (Coastal & Dasht)',
    bloomTiming: 'Early',
    peakReceptiveDays: [2, 3, 4, 5],
    totalReceptiveDays: 6,
    optimalTempRangeC: { min: 24, max: 33 },
    optimalHumidityRangePercent: { min: 40, max: 68 },
    maxTolerableWindKmh: 22,
    recommendedMaleStrands: 5,
    balochiTerm: 'ڈنڈاری گوش بندی',
    specialHandlingNotes: 'Resistant to saline groundwater and coastal breezes. Flower clusters are robust with strong stalk attachment.'
  },
  'jowansor': {
    varietyId: 'jowansor',
    varietyName: 'Jowansor (Red Prince)',
    spatheEmergencePeriod: 'Early to Mid March',
    bloomTiming: 'Early',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 23, max: 32 },
    optimalHumidityRangePercent: { min: 25, max: 55 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 4,
    balochiTerm: 'جوانسور اشکار',
    specialHandlingNotes: 'Vigorous early flush. Spathes crack with a distinct audible snap on warm mornings.'
  },
  'shakri': {
    varietyId: 'shakri',
    varietyName: 'Shakri',
    spatheEmergencePeriod: 'Late March',
    bloomTiming: 'Late',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 22, max: 30 },
    optimalHumidityRangePercent: { min: 30, max: 55 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 3,
    balochiTerm: 'شکری گوش (Shakri)',
    specialHandlingNotes: 'Sweet nectar stage blooms slightly later; avoid early morning condensation dampening pollen grains.'
  },
  'medjool': {
    varietyId: 'medjool',
    varietyName: 'Medjool',
    spatheEmergencePeriod: 'Early to Mid March',
    bloomTiming: 'Mid',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 22, max: 31 },
    optimalHumidityRangePercent: { min: 30, max: 50 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 4,
    balochiTerm: 'مجہول اشکار (Medjool)',
    specialHandlingNotes: 'Requires deliberate strand placement and 30-40% strand thinning at pollination stage to maximize fruit jumbo caliber.'
  },
  'deglet-noor': {
    varietyId: 'deglet-noor',
    varietyName: 'Deglet Noor',
    spatheEmergencePeriod: 'Late March',
    bloomTiming: 'Late',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 4,
    optimalTempRangeC: { min: 22, max: 30 },
    optimalHumidityRangePercent: { min: 25, max: 45 },
    maxTolerableWindKmh: 16,
    recommendedMaleStrands: 3,
    balochiTerm: 'دقلة نور',
    specialHandlingNotes: 'Sensitive to excessive humidity during pollination which causes spathe blossom blight.'
  },
  'barhi': {
    varietyId: 'barhi',
    varietyName: 'Barhi',
    spatheEmergencePeriod: 'Early March',
    bloomTiming: 'Early',
    peakReceptiveDays: [1, 2, 3],
    totalReceptiveDays: 4,
    optimalTempRangeC: { min: 23, max: 32 },
    optimalHumidityRangePercent: { min: 30, max: 55 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 4,
    balochiTerm: 'برحی اشکار (Barhi)',
    specialHandlingNotes: 'Heavy flowering bunches require robust bunch propping early to prevent branch breakage.'
  }
};

/**
 * Default fallback phenology profile for other varieties
 */
export function getPhenologyProfile(variety: DateVariety): VarietyPhenologyProfile {
  const normalizedId = variety.id.toLowerCase();
  for (const key of Object.keys(VARIETY_PHENOLOGY_PROFILES)) {
    if (normalizedId.includes(key) || key.includes(normalizedId) || variety.name.toLowerCase().includes(key)) {
      return {
        ...VARIETY_PHENOLOGY_PROFILES[key],
        varietyId: variety.id,
        varietyName: variety.name
      };
    }
  }

  // Generative fallback based on variety characteristics
  const isEarly = variety.type === 'Soft' || variety.isMakranSpecialty;
  return {
    varietyId: variety.id,
    varietyName: variety.name,
    spatheEmergencePeriod: isEarly ? 'Early March' : 'Mid to Late March',
    bloomTiming: isEarly ? 'Early' : 'Mid',
    peakReceptiveDays: [2, 3, 4],
    totalReceptiveDays: 5,
    optimalTempRangeC: { min: 22, max: 32 },
    optimalHumidityRangePercent: { min: 30, max: 55 },
    maxTolerableWindKmh: 18,
    recommendedMaleStrands: 4,
    balochiTerm: `گوش بندی (${variety.name})`,
    specialHandlingNotes: `Standard Makran manual pollination with 3-4 strands of fresh Nar male pollen. Receptive window is approximately 5 days post-opening.`
  };
}

/**
 * Climate and Micro-Weather Profiles for Makran Date Districts
 */
interface DistrictClimatology {
  baseTempMax: number;
  baseTempMin: number;
  baseHumidity: number;
  baseWindSpeed: number;
  elevationMeters: number;
  peakSeasonMonth: string;
}

const DISTRICT_WEATHER_CLIMATOLOGY: Record<string, DistrictClimatology> = {
  'Turbat (Kech)': {
    baseTempMax: 30.5,
    baseTempMin: 17.5,
    baseHumidity: 32,
    baseWindSpeed: 12.5,
    elevationMeters: 145,
    peakSeasonMonth: 'March'
  },
  'Kech (Turbat)': {
    baseTempMax: 30.5,
    baseTempMin: 17.5,
    baseHumidity: 32,
    baseWindSpeed: 12.5,
    elevationMeters: 145,
    peakSeasonMonth: 'March'
  },
  'Panjgur': {
    baseTempMax: 25.5,
    baseTempMin: 12.0,
    baseHumidity: 38,
    baseWindSpeed: 10.5,
    elevationMeters: 980,
    peakSeasonMonth: 'Mid-March to April'
  },
  'Gwadar': {
    baseTempMax: 27.8,
    baseTempMin: 19.5,
    baseHumidity: 64,
    baseWindSpeed: 17.0,
    elevationMeters: 12,
    peakSeasonMonth: 'Late February to March'
  }
};

/**
 * 14-Day Optimal Pollination Window Calculator
 * Models daily weather, spathe phenology, stigma receptivity, pollen viability,
 * and outputs an actionable day-by-day protocol.
 */
export function calculate14DayPollinationWindow(
  variety: DateVariety,
  district: string = 'Turbat (Kech)',
  weatherScenario: 'seasonal' | 'heat-surge' | 'breezy' | 'pre-monsoon' = 'seasonal'
): PollinationWindowCalculation {
  const phenology = getPhenologyProfile(variety);
  const districtKey = Object.keys(DISTRICT_WEATHER_CLIMATOLOGY).find(k => 
    district.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(district.toLowerCase())
  ) || 'Turbat (Kech)';
  
  const clima = DISTRICT_WEATHER_CLIMATOLOGY[districtKey];

  // Start date in peak bloom period
  const startDayOfMonth = district.includes('Panjgur') ? 14 : district.includes('Gwadar') ? 4 : 8;
  const monthName = 'Mar';

  const days: PollinationDayData[] = [];
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  let accumulatedGdd = 0;

  for (let dayIdx = 0; dayIdx < 14; dayIdx++) {
    const dayNumber = dayIdx + 1;
    const dayDate = startDayOfMonth + dayIdx;
    const dateFormatted = `${monthName} ${dayDate}`;
    const dayOfWeek = dayNames[(dayIdx + 2) % 7];

    // Weather variations modeled over the 14 days
    // Diurnal atmospheric sinusoidal cycle + scenario perturbation
    const wave = Math.sin((dayIdx / 14) * Math.PI * 2);
    const dayPerturb = Math.sin(dayIdx * 1.7) * 1.5;

    let tempMax = clima.baseTempMax + (wave * 2.5) + dayPerturb;
    let tempMin = clima.baseTempMin + (wave * 1.8) + (dayPerturb * 0.7);
    let humidity = clima.baseHumidity - (wave * 6) - (dayPerturb * 2);
    let wind = clima.baseWindSpeed + Math.cos(dayIdx * 1.2) * 4.5;
    let precipChance = 2; // base desert low
    let condition = 'Sunny & Clear';
    let iconType: PollinationDayData['weatherIconType'] = 'sun';

    // Scenario Adjustments
    if (weatherScenario === 'heat-surge') {
      tempMax += 4.5;
      tempMin += 3.0;
      humidity = Math.max(16, humidity - 8);
      if (dayIdx >= 4 && dayIdx <= 7) {
        condition = 'High Thermal Surge';
      }
    } else if (weatherScenario === 'breezy') {
      wind += 8.5;
      if (wind > 22) {
        condition = 'Gusty Sand-Drift Wind';
        iconType = 'wind';
      } else {
        condition = 'Moderate Oasis Breeze';
        iconType = 'wind';
      }
    } else if (weatherScenario === 'pre-monsoon') {
      humidity += 18;
      tempMax -= 2.0;
      if (dayIdx === 5 || dayIdx === 6) {
        precipChance = 35;
        condition = 'Overcast / Chance of Drizzle';
        iconType = 'rain';
      } else {
        condition = 'Humid Cloud Cover';
        iconType = 'cloud-sun';
      }
    } else {
      // Natural 14-day weather progression
      if (dayIdx === 8) {
        wind += 6;
        condition = 'Spring Afternoon Wind';
        iconType = 'wind';
      } else if (dayIdx === 11) {
        humidity += 8;
        condition = 'Partly Cloudy';
        iconType = 'cloud-sun';
      }
    }

    tempMax = Number(tempMax.toFixed(1));
    tempMin = Number(tempMin.toFixed(1));
    humidity = Math.round(Math.max(15, Math.min(85, humidity)));
    wind = Number(Math.max(4, wind).toFixed(1));

    // Calculate Daily Growing Degree Days (Base 18°C for Date Palms)
    const tMean = (tempMax + tempMin) / 2;
    const dailyGdd = Math.max(0, Number((tMean - 18).toFixed(1)));
    accumulatedGdd += dailyGdd;

    // Determine Phenology Stage based on day post opening
    let phenologyStage = '';
    let stigmaReceptivityPercent = 0;

    if (dayNumber === 1) {
      phenologyStage = 'Spathe Rupture (Barki / Khol)';
      stigmaReceptivityPercent = 65;
    } else if (dayNumber === 2) {
      phenologyStage = 'Early Spadix Expansion';
      stigmaReceptivityPercent = 88;
    } else if (dayNumber === 3) {
      phenologyStage = '🌟 Peak Stigma Receptivity (Prime)';
      stigmaReceptivityPercent = 100;
    } else if (dayNumber === 4) {
      phenologyStage = '🌟 High Stigma Secretion (Prime)';
      stigmaReceptivityPercent = 95;
    } else if (dayNumber === 5) {
      phenologyStage = '🌟 Active Receptivity Window';
      stigmaReceptivityPercent = 84;
    } else if (dayNumber === 6) {
      phenologyStage = 'Secondary Receptivity';
      stigmaReceptivityPercent = 68;
    } else if (dayNumber === 7) {
      phenologyStage = 'Late Receptive Stage';
      stigmaReceptivityPercent = 48;
    } else if (dayNumber === 8) {
      phenologyStage = 'Stigma Tip Browning';
      stigmaReceptivityPercent = 32;
    } else if (dayNumber <= 10) {
      phenologyStage = 'Post-Fertilization Closing';
      stigmaReceptivityPercent = 15;
    } else {
      phenologyStage = 'Early Fruit Set (Chimri Stage)';
      stigmaReceptivityPercent = 0;
    }

    // Adjust receptivity based on variety peak days
    if (phenology.peakReceptiveDays.includes(dayNumber)) {
      stigmaReceptivityPercent = Math.max(stigmaReceptivityPercent, 90);
    } else if (dayNumber > phenology.totalReceptiveDays) {
      stigmaReceptivityPercent = Math.min(stigmaReceptivityPercent, 20);
    }

    // CALCULATE OPTIMAL POLLEN VIABILITY SCORE (0 to 100)
    // 1. Temperature score (Ideal 24 - 31°C)
    let tempScore = 1.0;
    if (tempMax > 36) tempScore = 0.45;
    else if (tempMax > 33) tempScore = 0.70;
    else if (tempMax < 21) tempScore = 0.55;
    else if (tempMax < 24) tempScore = 0.80;
    else tempScore = 1.0;

    // 2. Wind score (Ideal < 14 km/h)
    let windScore = 1.0;
    if (wind > phenology.maxTolerableWindKmh + 6) windScore = 0.25;
    else if (wind > phenology.maxTolerableWindKmh) windScore = 0.55;
    else if (wind > 14) windScore = 0.80;
    else windScore = 1.0;

    // 3. Humidity score (Ideal 30 - 55%)
    let humidityScore = 1.0;
    if (humidity > 70) humidityScore = 0.45;
    else if (humidity > 60) humidityScore = 0.75;
    else if (humidity < 20) humidityScore = 0.60;
    else humidityScore = 1.0;

    // 4. Rain / Precipitation penalty
    let rainScore = 1.0;
    if (precipChance > 30) rainScore = 0.15;
    else if (precipChance > 15) rainScore = 0.60;

    // 5. Stigma receptivity weighting (Crucial)
    const receptivityFactor = stigmaReceptivityPercent / 100;

    // Weighted composite viability index
    const compositeRaw = (
      (tempScore * 0.25) +
      (windScore * 0.25) +
      (humidityScore * 0.15) +
      (rainScore * 0.10) +
      (receptivityFactor * 0.25)
    ) * (receptivityFactor > 0.1 ? 1.0 : 0.2); // Decay rapidly if stigmas have already browned

    let pollenViabilityScore = Math.round(compositeRaw * 100);
    pollenViabilityScore = Math.max(5, Math.min(99, pollenViabilityScore));

    // Viability Tier
    let viabilityTier: PollinationDayData['viabilityTier'] = 'Unfavorable';
    if (pollenViabilityScore >= 80) viabilityTier = 'Prime';
    else if (pollenViabilityScore >= 65) viabilityTier = 'Favorable';
    else if (pollenViabilityScore >= 45) viabilityTier = 'Marginal';
    else viabilityTier = 'Unfavorable';

    // Optimal window hours
    let recommendedWindowHours = '08:00 AM – 11:00 AM';
    if (tempMax > 34) {
      recommendedWindowHours = '06:30 AM – 09:30 AM (Cool Morning)';
    } else if (tempMin < 14) {
      recommendedWindowHours = '09:30 AM – 12:30 PM (Post-Warmup)';
    }

    // Action Directives (Makran Agronomy specific)
    let actionDirective = '';
    if (viabilityTier === 'Prime') {
      actionDirective = `🌟 PRIME POLLINATION WINDOW: Hand-dust ${phenology.recommendedMaleStrands} strands of fresh Nar pollen. Insert strands upside-down into the center of the female cluster and tie loosely with dry Peesh leaflet.`;
    } else if (viabilityTier === 'Favorable') {
      actionDirective = `✅ FAVORABLE CONDITIONS: Good stigma receptivity. Conduct dusting during ${recommendedWindowHours}. Lightly shake cluster to ensure deep pollen grain contact.`;
    } else if (wind > phenology.maxTolerableWindKmh) {
      actionDirective = `💨 WIND HAZARD (${wind} km/h): Airborne pollen will blow off. Enclose female cluster with craft paper sleeve or use a cotton-ball pollen applicator; delay dusting to calm dawn.`;
    } else if (precipChance > 25) {
      actionDirective = `🌧️ PRECIPITATION RISK: Moisture clumps pollen grains and washes off stigma fluid. If pollinated today, inspect cluster after 24 hrs and re-dust if wash-off occurred.`;
    } else if (tempMax > 35) {
      actionDirective = `☀️ EXTREME HEAT: Desert heat dries stigmatic fluid. Complete all pollination before 9:30 AM; wrap cluster lightly with palm leaflet to shield from direct solar radiation.`;
    } else if (dayNumber >= 9) {
      actionDirective = `🌿 POST-POLLINATION CARE: Stigmas are no longer receptive. Untie bunch wraps, inspect fruitlet set (Chimri stage), and plan bunch thinning in 3-4 weeks.`;
    } else {
      actionDirective = `⚠️ MARGINAL WINDOW: Sub-optimal weather or tapering receptivity. Use high-potency male pollen (freshly opened Nar spathe) to compensate.`;
    }

    days.push({
      dayNumber,
      dateFormatted,
      dayOfWeek,
      tempMaxC: tempMax,
      tempMinC: tempMin,
      humidityPercent: humidity,
      windSpeedKmh: wind,
      precipChancePercent: precipChance,
      weatherCondition: condition,
      weatherIconType: iconType,
      phenologyStage,
      stigmaReceptivityPercent,
      pollenViabilityScore,
      viabilityTier,
      recommendedWindowHours,
      actionDirective,
      maleStrandCount: phenology.recommendedMaleStrands,
      gddAccumulated: Number(accumulatedGdd.toFixed(1))
    });
  }

  // Find the optimal continuous 4-5 day window
  let bestWindowStart = 2;
  let bestWindowEnd = 5;
  let maxWindowAvg = 0;

  for (let s = 1; s <= 9; s++) {
    for (let e = s + 2; e <= Math.min(s + 5, 14); e++) {
      const slice = days.slice(s - 1, e);
      const avg = slice.reduce((acc, d) => acc + d.pollenViabilityScore, 0) / slice.length;
      if (avg > maxWindowAvg) {
        maxWindowAvg = avg;
        bestWindowStart = s;
        bestWindowEnd = e;
      }
    }
  }

  const primeDaysCount = days.filter(d => d.viabilityTier === 'Prime' || d.viabilityTier === 'Favorable').length;
  const overallSuccessRate = Math.min(96, Math.max(68, Math.round(maxWindowAvg * 0.95 + primeDaysCount)));
  const totalOptimalHours = primeDaysCount * 3.5;

  const startDayObj = days[bestWindowStart - 1];
  const endDayObj = days[bestWindowEnd - 1];

  const recommendedActionSummary = `The optimal 14-day pollination window for ${variety.name} in ${district} spans Day ${bestWindowStart} to Day ${bestWindowEnd} (${startDayObj.dateFormatted} – ${endDayObj.dateFormatted}), with an average viability index of ${Math.round(maxWindowAvg)}%. Schedule Gosh Bandi hand-dusting during morning hours (08:00 AM – 11:00 AM) using ${phenology.recommendedMaleStrands} strands of fresh Nar spathe per bunch.`;

  return {
    variety,
    district,
    startDate: `${monthName} ${startDayOfMonth}`,
    phenology,
    days,
    optimalWindowDays: {
      startDay: bestWindowStart,
      endDay: bestWindowEnd,
      startDateStr: startDayObj.dateFormatted,
      endDateStr: endDayObj.dateFormatted,
      avgScore: Math.round(maxWindowAvg)
    },
    overallSuccessRatePercent: overallSuccessRate,
    primeDaysCount,
    totalOptimalHours,
    recommendedActionSummary
  };
}
