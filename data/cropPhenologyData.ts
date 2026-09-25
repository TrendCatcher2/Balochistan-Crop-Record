import { 
  BalochistanCrop, 
  CropPhenologyProfile, 
  MonthPhenologyDetail, 
  PhenologicalWindowType 
} from '../types';
import { BALOCHISTAN_CROPS } from './balochistanAgriData';

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const MONTH_SHORTS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

/**
 * Variety and crop phenological schedules across Balochistan's agro-ecological zones
 * Authored by: Nazeer Ahmed, Agriculture Extension Officer, Turbat
 */
export const CROP_PHENOLOGY_DATABASE: Record<string, CropPhenologyProfile> = {
  "date-palm": {
    cropId: "date-palm",
    cropName: "Date Palm",
    localBalochiName: "مُچ (Much) / ناہ (Nah)",
    category: "Orchard & Fruit Tree",
    primaryHub: "Kech Valley (Turbat) & Panjgur Oasis",
    plantingWindow: {
      months: ["February", "March", "September", "October"],
      description: "Offshoot (Peesh) transplantation or tissue-culture plantlet establishment",
      optimalConditions: "Mild temperatures (22–30°C) with low wind velocity and guaranteed Karez flume water"
    },
    floweringWindow: {
      months: ["February", "March", "April"],
      description: "Female spathe splitting, Gosh Bandi dusting, and pollen receptor fertilization",
      pollinationOrBloomNotes: "Receptive for 3–5 days post-opening; manual dusting with 4 male strands required before 11:00 AM"
    },
    fruitGrowthWindow: {
      months: ["April", "May", "June"],
      description: "Hababouk (pea-size), Chimri (green sizing), and Khalal (yellow/red color turning) stages"
    },
    harvestWindow: {
      months: ["July", "August", "September"],
      description: "Rutab (soft melting caramel) & Tamar (fully cured dates) harvest and solar platform dehydration",
      indices: "Fruit skin softening, browning, TSS >65° Brix, moisture reduction below 22%"
    },
    dormancyWindow: {
      months: ["November", "December", "January"],
      description: "Frond pruning, trunk sanitation, Red Palm Weevil trap maintenance, and farmyard manure incorporation"
    },
    currentSeasonalStatus: {
      currentStage: "Post-Harvest Curing, Cold Chain Storage & Autumn Basin Maintenance",
      currentWindow: "curing",
      seasonalAdvisory: "Complete solar platform curing of Tamar dates; inspect cold storage units (0–4°C) for Mozawati blocks; apply copper oxychloride to pruned frond bases.",
      daysToNextMilestone: 38,
      nextMilestoneName: "Winter Basin Manuring & Karez Deep Cleaning (November)"
    },
    monthlySchedule: [
      {
        monthName: "January",
        monthShort: "Jan",
        monthIndex: 0,
        primaryWindow: "dormant",
        stageName: "Winter Rest & Frond Sanitation",
        fieldOperations: ["Prune old dried lower fronds", "Incorporate 40kg FYM per basin", "Clean Karez feeder channels"],
        optimalTempRange: "10°C – 22°C",
        irrigationGuidance: "Interval: 14–18 days; minimal vegetative transpiration",
        waterNeedLevel: "Minimal",
        fertilizerAction: "Basal manure + Single Superphosphate (SSP)",
        pestDiseaseAlert: "Red Palm Weevil overwintering larvae inspection"
      },
      {
        monthName: "February",
        monthShort: "Feb",
        monthIndex: 1,
        primaryWindow: "flowering",
        secondaryWindow: "planting",
        stageName: "Early Spathe Emergence (Halawi / Begum Jangi)",
        fieldOperations: ["Cut male flower clusters for fresh pollen", "Dust newly split female spathes", "Tie protective Peesh frond straps"],
        optimalTempRange: "16°C – 28°C",
        irrigationGuidance: "Withhold flood irrigation during active pollen receptivity days",
        waterNeedLevel: "Moderate",
        fertilizerAction: "Foliar boron spray (0.1%) to enhance pollen germination",
        pestDiseaseAlert: "Lesser Date Moth (Batrachedra amydraula) monitor"
      },
      {
        monthName: "March",
        monthShort: "Mar",
        monthIndex: 2,
        primaryWindow: "flowering",
        stageName: "Peak Pollination & Gosh Bandi (Mozawati / Sabzo)",
        fieldOperations: ["Daily morning spathe inspection", "Manual hand pollination with 4 male strands", "Bagging against wind desiccation"],
        optimalTempRange: "20°C – 34°C",
        irrigationGuidance: "Light irrigation every 10–12 days",
        waterNeedLevel: "Moderate",
        fertilizerAction: "1st split of Nitrogen (Urea) post-fertilization",
        pestDiseaseAlert: "Pollen mite and dust storm protective bagging"
      },
      {
        monthName: "April",
        monthShort: "Apr",
        monthIndex: 3,
        primaryWindow: "fruit-growth",
        stageName: "Hababouk & Chimri Rapid Cell Division",
        fieldOperations: ["Thin 25–30% fruit strands from cluster centers", "Lower bunches onto lower fronds for support", "Weed clearing"],
        optimalTempRange: "24°C – 38°C",
        irrigationGuidance: "Increase frequency to 7–8 days as heat rises",
        waterNeedLevel: "High",
        fertilizerAction: "Potassium sulfate application for fruit cell expansion",
        pestDiseaseAlert: "Old World Date Mite (Oligonychus afrasiaticus) dusting with sulfur"
      },
      {
        monthName: "May",
        monthShort: "May",
        monthIndex: 4,
        primaryWindow: "fruit-growth",
        stageName: "Green Fruit Sizing (Chimri Phase)",
        fieldOperations: ["Prop bunches with wooden forks (Tand)", "Cover bunches with craft paper/mesh against sunburn", "Soil mulching"],
        optimalTempRange: "30°C – 45°C",
        irrigationGuidance: "Strict 5–6 day irrigation cycle; peak water demand",
        waterNeedLevel: "Peak",
        fertilizerAction: "Final split of Potash and micronutrient foliar spray",
        pestDiseaseAlert: "Red Palm Weevil pheromone trap surveillance"
      },
      {
        monthName: "June",
        monthShort: "Jun",
        monthIndex: 5,
        primaryWindow: "fruit-growth",
        secondaryWindow: "harvest",
        stageName: "Khalal Turning & Early Rutab (Halawi)",
        fieldOperations: ["Begin selective picking of Halawi and Mozawati", "Spread drying mats (Chapparkh) under shade", "Cull defective fruit"],
        optimalTempRange: "32°C – 48°C",
        irrigationGuidance: "Slightly reduce volume to prevent fruit skin splitting",
        waterNeedLevel: "High",
        fertilizerAction: "Discontinue all chemical nitrogen fertilizers",
        pestDiseaseAlert: "Fruit flies and bird netting on date bunches"
      },
      {
        monthName: "July",
        monthShort: "Jul",
        monthIndex: 6,
        primaryWindow: "harvest",
        stageName: "Peak Rutab Harvest in Kech Valley",
        fieldOperations: ["Harvest soft Mozawati and Begum Jangi in early mornings", "Transfer to air-conditioned grading facilities", "Pre-cooling"],
        optimalTempRange: "32°C – 46°C",
        irrigationGuidance: "Light surface irrigation to prevent tree heat stroke",
        waterNeedLevel: "Moderate",
        fertilizerAction: "None",
        pestDiseaseAlert: "Aspergillus fruit rot in case of monsoon rain drizzle"
      },
      {
        monthName: "August",
        monthShort: "Aug",
        monthIndex: 7,
        primaryWindow: "harvest",
        stageName: "Tamar Harvest & Panjgur Mountain Harvest",
        fieldOperations: ["Harvest firm Tamar stage dates", "Solar drying on raised platforms in Turbat", "Boiling & sun-curing Chohara"],
        optimalTempRange: "30°C – 44°C",
        irrigationGuidance: "Post-harvest restorative irrigation every 8–10 days",
        waterNeedLevel: "Moderate",
        fertilizerAction: "None",
        pestDiseaseAlert: "Post-harvest storage pests (Ephestia cautella)"
      },
      {
        monthName: "September",
        monthShort: "Sep",
        monthIndex: 8,
        primaryWindow: "harvest",
        secondaryWindow: "planting",
        stageName: "Final Picking, Offshoot Transplanting & Cold Storage",
        fieldOperations: ["Complete sorting, fumigation, and cold storage packout", "Separate healthy offshoots (Peesh) for autumn planting", "Weed control"],
        optimalTempRange: "26°C – 39°C",
        irrigationGuidance: "Regular irrigation every 10–12 days",
        waterNeedLevel: "Moderate",
        fertilizerAction: "Light restorative nitrogen to boost autumn root flush",
        pestDiseaseAlert: "Fumigate stored date boxes with aluminum phosphide"
      },
      {
        monthName: "October",
        monthShort: "Oct",
        monthIndex: 9,
        primaryWindow: "planting",
        secondaryWindow: "dormant",
        stageName: "Autumn Offshoot Establishment & Trunk Care",
        fieldOperations: ["Excavate 1m x 1m pits for new date grove extension", "Treat offshoot bases with rooting hormone and fungicide", "Solarize soil"],
        optimalTempRange: "22°C – 35°C",
        irrigationGuidance: "Daily trickle irrigation for newly planted offshoots",
        waterNeedLevel: "Moderate",
        fertilizerAction: "Compost incorporation in prospective planting pits",
        pestDiseaseAlert: "White scale insect trunk brushing"
      },
      {
        monthName: "November",
        monthShort: "Nov",
        monthIndex: 10,
        primaryWindow: "dormant",
        stageName: "Basin Manuring & Karez Deep Cleaning",
        fieldOperations: ["Dig concentric trenches around drip line", "Bury sheep/cow manure and gypsum for salt displacement", "Clean Karez tunnels"],
        optimalTempRange: "16°C – 29°C",
        irrigationGuidance: "Interval extended to 14–16 days",
        waterNeedLevel: "Minimal",
        fertilizerAction: "40kg decomposed FYM + 1kg SSP per tree",
        pestDiseaseAlert: "Winter inspection for fungal leaf spots (Graphiola phoenicis)"
      },
      {
        monthName: "December",
        monthShort: "Dec",
        monthIndex: 11,
        primaryWindow: "dormant",
        stageName: "Winter Rest & Spathe Pre-Differentiation",
        fieldOperations: ["Trunk whitewashing with lime and copper sulfate", "Sanitize orchard floor of dried organic debris", "Check irrigation valves"],
        optimalTempRange: "12°C – 24°C",
        irrigationGuidance: "Deep restorative watering once every 18–20 days",
        waterNeedLevel: "Minimal",
        fertilizerAction: "Slow-release rock phosphate in basin perimeter",
        pestDiseaseAlert: "Pheromone lure replacement in orchard borders"
      }
    ]
  },

  "apple": {
    cropId: "apple",
    cropName: "Apple",
    localBalochiName: "سیب (Seb)",
    category: "Orchard & Fruit Tree",
    primaryHub: "Ziarat Valley & Pishin Highlands (1,800m – 2,400m MSL)",
    plantingWindow: {
      months: ["January", "February"],
      description: "Dormant bare-root nursery grafting and sapling transplantation on mountain terraces",
      optimalConditions: "Frozen or cold soil (2°C – 8°C) before spring sap flow initiates"
    },
    floweringWindow: {
      months: ["April", "May"],
      description: "Pink bud stage, full blossom flush, and wild/honeybee cross-pollination",
      pollinationOrBloomNotes: "Self-unfruitful; requires 15–20% pollinizer trees (Gala/Golden Delicious) and honeybee hives"
    },
    fruitGrowthWindow: {
      months: ["May", "June", "July", "August"],
      description: "Petal fall, fruitlet cell division, June drop, and rapid red color development"
    },
    harvestWindow: {
      months: ["August", "September", "October"],
      description: "Hand picking of Tor Kulu (Red Delicious) and Shin Kulu (Golden Delicious), sorting, and CA storage",
      indices: "Starch conversion index >5.0, flesh firmness 15–17 lbs, skin blushing >70%"
    },
    dormancyWindow: {
      months: ["November", "December", "January"],
      description: "Chilling hour accumulation (800–1,200 hrs <7.2°C), winter spur pruning, and dormant oil spray"
    },
    currentSeasonalStatus: {
      currentStage: "Peak Apple Harvest & Controlled Atmosphere Storage Intake",
      currentWindow: "harvest",
      seasonalAdvisory: "Complete Tor Kulu picking in Ziarat highlands before autumn frost; handle fruit with cotton gloves to prevent bruising; grade into 18kg wooden crates with foam cushioning.",
      daysToNextMilestone: 25,
      nextMilestoneName: "Autumn Leaf Fall & Zinc Sulfate Dormancy Prep (October)"
    },
    monthlySchedule: [
      {
        monthName: "January",
        monthShort: "Jan",
        monthIndex: 0,
        primaryWindow: "dormant",
        secondaryWindow: "planting",
        stageName: "Deep Winter Dormancy & Bare-Root Planting",
        fieldOperations: ["Excavate 75cm pits on terraced slopes", "Plant certified bare-root rootstock (MM106)", "Winter spur pruning"],
        optimalTempRange: "-8°C – 6°C",
        irrigationGuidance: "Dormant; rely on snowmelt and mountain spring conduits",
        waterNeedLevel: "Minimal",
        fertilizerAction: "Composted manure in planting holes",
        pestDiseaseAlert: "Woolly Apple Aphid root inspection"
      },
      {
        monthName: "February",
        monthShort: "Feb",
        monthIndex: 1,
        primaryWindow: "dormant",
        secondaryWindow: "planting",
        stageName: "Dormant Pruning & Chilling Hour Completion",
        fieldOperations: ["Complete central leader canopy pruning", "Apply dormant copper spray (Bordeaux mixture)", "Paint trunks against rodent gnawing"],
        optimalTempRange: "-4°C – 10°C",
        irrigationGuidance: "One light watering if winter precipitation was deficient",
        waterNeedLevel: "Minimal",
        fertilizerAction: "Basal phosphorus and potassium application",
        pestDiseaseAlert: "San Jose Scale dormant mineral oil application"
      },
      {
        monthName: "March",
        monthShort: "Mar",
        monthIndex: 2,
        primaryWindow: "vegetative",
        stageName: "Silver Tip & Green Tip Bud Burst",
        fieldOperations: ["Monitor thermal degree days", "Clear irrigation channels of winter sediment", "Install anti-hail net frameworks"],
        optimalTempRange: "2°C – 15°C",
        irrigationGuidance: "Initiate drip irrigation cycle every 10 days",
        waterNeedLevel: "Moderate",
        fertilizerAction: "First split of Nitrogen (Urea) at green tip",
        pestDiseaseAlert: "Apple Scab (Venturia inaequalis) primary ascospore monitoring"
      },
      {
        monthName: "April",
        monthShort: "Apr",
        monthIndex: 3,
        primaryWindow: "flowering",
        stageName: "Tight Cluster, Pink Bud & Full Blossom Flush",
        fieldOperations: ["Place 4–6 bee colonies per hectare", "Protect against late spring frost with heaters/sprinklers", "Withhold toxic insecticides"],
        optimalTempRange: "8°C – 22°C",
        irrigationGuidance: "Maintain uniform soil moisture; avoid flood irrigation",
        waterNeedLevel: "Moderate",
        fertilizerAction: "Foliar boron and zinc during open blossom",
        pestDiseaseAlert: "Blossom blight preventative bio-fungicide"
      },
      {
        monthName: "May",
        monthShort: "May",
        monthIndex: 4,
        primaryWindow: "fruit-growth",
        stageName: "Petal Fall & Fruitlet Thinning",
        fieldOperations: ["Hand thin fruitlets to 1 per cluster (15cm spacing)", "Shoot positioning and water sprout removal", "Soil weed mulching"],
        optimalTempRange: "12°C – 26°C",
        irrigationGuidance: "Regular irrigation every 6–7 days via drip line",
        waterNeedLevel: "High",
        fertilizerAction: "Second split of balanced NPK fertigation",
        pestDiseaseAlert: "Codling Moth (Cydia pomonella) pheromone trap installation"
      },
      {
        monthName: "June",
        monthShort: "Jun",
        monthIndex: 5,
        primaryWindow: "fruit-growth",
        stageName: "Rapid Fruit Cell Expansion (June Drop Phase)",
        fieldOperations: ["Summer pruning of vigorous upright water shoots", "Inspect hail damage and apply protective copper", "Calibrate tensiometers"],
        optimalTempRange: "16°C – 32°C",
        irrigationGuidance: "Peak water requirement: 55–65 Liters/tree/day",
        waterNeedLevel: "Peak",
        fertilizerAction: "Calcium nitrate foliar spray to prevent Bitter Pit disorder",
        pestDiseaseAlert: "Two-spotted spider mite foliar scouting"
      },
      {
        monthName: "July",
        monthShort: "Jul",
        monthIndex: 6,
        primaryWindow: "fruit-growth",
        stageName: "Fruit Maturation & Sugar Accumulation",
        fieldOperations: ["Reflective ground foil deployment to color lower fruit", "Summer branch propping against crop weight", "Clear orchard weeds"],
        optimalTempRange: "18°C – 34°C",
        irrigationGuidance: "Controlled drip irrigation; avoid excessive water near harvest",
        waterNeedLevel: "High",
        fertilizerAction: "Potassium sulfate for rind color and brix synthesis",
        pestDiseaseAlert: "Codling Moth second generation spray"
      },
      {
        monthName: "August",
        monthShort: "Aug",
        monthIndex: 7,
        primaryWindow: "harvest",
        stageName: "Early Harvest (Gacha & Shin Kulu)",
        fieldOperations: ["Selective color picking of high-elevation orchards", "Hydro-cooling and pre-storage sorting", "Pack in ventilated crates"],
        optimalTempRange: "16°C – 30°C",
        irrigationGuidance: "Taper off watering 10 days prior to block harvest",
        waterNeedLevel: "Moderate",
        fertilizerAction: "None",
        pestDiseaseAlert: "Post-harvest blue mold (Penicillium expansum) prevention"
      },
      {
        monthName: "September",
        monthShort: "Sep",
        monthIndex: 8,
        primaryWindow: "harvest",
        stageName: "Main Season Harvest of Tor Kulu (Red Delicious)",
        fieldOperations: ["Bulk harvest of Ziarat and Pishin benchmark crop", "Direct transport to Quetta and Karachi cold storages", "Sanitation of drop fruit"],
        optimalTempRange: "12°C – 27°C",
        irrigationGuidance: "Restorative post-harvest irrigation",
        waterNeedLevel: "Moderate",
        fertilizerAction: "Light post-harvest urea foliar spray to feed flower buds",
        pestDiseaseAlert: "Clean orchard of mummified fruit"
      },
      {
        monthName: "October",
        monthShort: "Oct",
        monthIndex: 9,
        primaryWindow: "harvest",
        secondaryWindow: "dormant",
        stageName: "Late Harvest Wrap-Up & Foliar Zinc Application",
        fieldOperations: ["Complete late-harvest varieties (Kaja/Amri)", "High-concentration foliar Zinc Sulfate (3%) to induce uniform leaf drop", "Sanitize equipment"],
        optimalTempRange: "6°C – 22°C",
        irrigationGuidance: "Final deep irrigation before winter freeze",
        waterNeedLevel: "Minimal",
        fertilizerAction: "Zinc Sulfate foliar application",
        pestDiseaseAlert: "Canker scrape and wound sealant paste"
      },
      {
        monthName: "November",
        monthShort: "Nov",
        monthIndex: 10,
        primaryWindow: "dormant",
        stageName: "Natural Leaf Drop & Soil Compost Trenching",
        fieldOperations: ["Rake and compost fallen leaves to eliminate apple scab overwintering", "Bury 40kg well-rotted manure per tree in perimeter trench", "Winterize pipes"],
        optimalTempRange: "0°C – 16°C",
        irrigationGuidance: "Drain drip irrigation lines to avoid freezing crack",
        waterNeedLevel: "Minimal",
        fertilizerAction: "Organic farmyard manure + rock phosphate",
        pestDiseaseAlert: "Rodent baiting around orchard perimeter"
      },
      {
        monthName: "December",
        monthShort: "Dec",
        monthIndex: 11,
        primaryWindow: "dormant",
        stageName: "Winter Rest & Chilling Accumulation",
        fieldOperations: ["Monitor sub-zero chilling hours (<7.2°C)", "Repair trellis wires and terrace stone retaining walls", "Soil moisture snow retention"],
        optimalTempRange: "-6°C – 10°C",
        irrigationGuidance: "None (Soil resting under snow cover)",
        waterNeedLevel: "Minimal",
        fertilizerAction: "None",
        pestDiseaseAlert: "San Jose Scale bark scrapings"
      }
    ]
  },

  "pomegranate": {
    cropId: "pomegranate",
    cropName: "Pomegranate",
    localBalochiName: "انار (Anaar / Danag)",
    category: "Orchard & Fruit Tree",
    primaryHub: "Loralai Valley, Panjgur & Khuzdar",
    plantingWindow: {
      months: ["February", "March"],
      description: "Hardwood stem cuttings planting in spring after severe frost risk subsides",
      optimalConditions: "Soil temp >15°C with high drainage and moderate calcareous content"
    },
    floweringWindow: {
      months: ["April", "May"],
      description: "Bright crimson bell-shaped flowers flush; cross-pollination by insects",
      pollinationOrBloomNotes: "Flowers appear on spurs of 1–2 year old wood; maintain moderate humidity"
    },
    fruitGrowthWindow: {
      months: ["June", "July", "August"],
      description: "Rapid aril cell enlargement, juice accumulation, and rind pigmentation",
    },
    harvestWindow: {
      months: ["September", "October", "November"],
      description: "Harvest of world-famous Kandahari Anar with deep ruby sweet arils",
      indices: "Flatness of rind ribs, metallic tap ring, deep crimson skin, brix >16°"
    },
    dormancyWindow: {
      months: ["December", "January"],
      description: "Deciduous leaf fall, multi-stem pruning, and sucker removal"
    },
    currentSeasonalStatus: {
      currentStage: "Peak Kandahari Anar Harvest & Fruit Bagging Strip",
      currentWindow: "harvest",
      seasonalAdvisory: "Harvest Kandahari fruits before first autumn night freeze; clip pedicels flush with secateurs to prevent puncturing adjacent fruit during transit to Quetta Mandi.",
      daysToNextMilestone: 35,
      nextMilestoneName: "Winter Multi-Stem Pruning & Sucker Removal (November)"
    },
    monthlySchedule: [
      {
        monthName: "January", monthShort: "Jan", monthIndex: 0,
        primaryWindow: "dormant",
        stageName: "Dormant Sanitation & Sucker Removal",
        fieldOperations: ["Prune dead twigs and water sprouts", "Cut ground suckers flush with crown", "Manure incorporation"],
        optimalTempRange: "-2°C – 14°C", irrigationGuidance: "Every 20 days", waterNeedLevel: "Minimal",
        fertilizerAction: "30kg FYM per tree", pestDiseaseAlert: "Bacterial blight canker excision"
      },
      {
        monthName: "February", monthShort: "Feb", monthIndex: 1,
        primaryWindow: "planting", secondaryWindow: "dormant",
        stageName: "Stem Cutting Plantation & Bud Swell",
        fieldOperations: ["Plant 25cm hardwood cuttings in nursery", "Transplant 1-year rooted saplings at 5m x 4m", "Trunk spraying"],
        optimalTempRange: "4°C – 18°C", irrigationGuidance: "Light watering every 12 days", waterNeedLevel: "Moderate",
        fertilizerAction: "Basal SSP and Potash", pestDiseaseAlert: "Aphid crawler emergence"
      },
      {
        monthName: "March", monthShort: "Mar", monthIndex: 2,
        primaryWindow: "vegetative",
        stageName: "Spring Foliage Flush & Spur Emergence",
        fieldOperations: ["Clean basin weeds", "Mulch around root zone", "Inspect new leaf flushes"],
        optimalTempRange: "10°C – 24°C", irrigationGuidance: "Every 10 days", waterNeedLevel: "Moderate",
        fertilizerAction: "First split of Nitrogen", pestDiseaseAlert: "Pomegranate Thrips leaf curling"
      },
      {
        monthName: "April", monthShort: "Apr", monthIndex: 3,
        primaryWindow: "flowering",
        stageName: "Early Crimson Flower Flush",
        fieldOperations: ["Avoid heavy nitrogen to prevent blossom drop", "Inspect hermaphrodite flower ratio", "Honeybee attraction"],
        optimalTempRange: "15°C – 29°C", irrigationGuidance: "Maintain steady moisture; no flood shocks", waterNeedLevel: "Moderate",
        fertilizerAction: "Foliar Zinc and Boron", pestDiseaseAlert: "Fruit borer (Virachola isocrates) egg laying"
      },
      {
        monthName: "May", monthShort: "May", monthIndex: 4,
        primaryWindow: "flowering", secondaryWindow: "fruit-growth",
        stageName: "Peak Bloom & Marble-Sized Fruit Set",
        fieldOperations: ["Bag young marble-sized fruitlets with non-woven fabric bags", "Remove ill-formed fruit clusters", "Canopy propping"],
        optimalTempRange: "20°C – 35°C", irrigationGuidance: "Every 7–8 days", waterNeedLevel: "High",
        fertilizerAction: "Second Nitrogen split", pestDiseaseAlert: "Fruit borer bagging defense"
      },
      {
        monthName: "June", monthShort: "Jun", monthIndex: 5,
        primaryWindow: "fruit-growth",
        stageName: "Rapid Aril Expansion & Sugar Loading",
        fieldOperations: ["Inspect bags for tear", "Ensure uniform drip volume to prevent fruit cracking", "Remove root suckers"],
        optimalTempRange: "24°C – 40°C", irrigationGuidance: "Strict 5-day cycle; moisture stress causes severe rind split", waterNeedLevel: "Peak",
        fertilizerAction: "Potassium nitrate foliar", pestDiseaseAlert: "Spider mites in dry dusty wind"
      },
      {
        monthName: "July", monthShort: "Jul", monthIndex: 6,
        primaryWindow: "fruit-growth",
        stageName: "Fruit Sizing & Rind Hardening",
        fieldOperations: ["Monitor calcium foliar levels", "Protect against sunburn with kaolin clay spray", "Check soil salinity"],
        optimalTempRange: "25°C – 42°C", irrigationGuidance: "Consistent regular drip fertigation", waterNeedLevel: "Peak",
        fertilizerAction: "Calcium chloride 0.5% spray", pestDiseaseAlert: "Cercospora fruit spot"
      },
      {
        monthName: "August", monthShort: "Aug", monthIndex: 7,
        primaryWindow: "fruit-growth", secondaryWindow: "harvest",
        stageName: "Rind Coloration & Early Harvest (Bedana)",
        fieldOperations: ["Early picking of soft-seed Bedana", "Remove fruit bags 10 days before picking to enhance blush", "Grade crates"],
        optimalTempRange: "22°C – 38°C", irrigationGuidance: "Taper slightly to consolidate sugars", waterNeedLevel: "High",
        fertilizerAction: "Discontinue fertilizers", pestDiseaseAlert: "Fruit fly traps monitoring"
      },
      {
        monthName: "September", monthShort: "Sep", monthIndex: 8,
        primaryWindow: "harvest",
        stageName: "Peak Harvest of Kandahari Ruby Anar",
        fieldOperations: ["Harvest bold red Kandahari fruits with secateurs", "Sort by size (Grade A >400g)", "Pack in foam-lined boxes"],
        optimalTempRange: "18°C – 34°C", irrigationGuidance: "Light irrigation post-harvest", waterNeedLevel: "Moderate",
        fertilizerAction: "None", pestDiseaseAlert: "Post-harvest fungal crown rot"
      },
      {
        monthName: "October", monthShort: "Oct", monthIndex: 9,
        primaryWindow: "harvest",
        stageName: "Late Picking & Panjgur Harvest Wrap-Up",
        fieldOperations: ["Complete Panjgur and Khuzdar late blocks", "Dry damaged/cracked fruits for sour Anardana spice", "Sanitation"],
        optimalTempRange: "12°C – 28°C", irrigationGuidance: "Every 12–14 days", waterNeedLevel: "Moderate",
        fertilizerAction: "None", pestDiseaseAlert: "Clean dropped fruit"
      },
      {
        monthName: "November", monthShort: "Nov", monthIndex: 10,
        primaryWindow: "dormant",
        stageName: "Foliage Senescence & Winter Sanitation",
        fieldOperations: ["Remove non-productive multi-stems", "Maintain 3–4 strong main trunks", "Apply copper paste to pruning wounds"],
        optimalTempRange: "6°C – 20°C", irrigationGuidance: "Every 18 days", waterNeedLevel: "Minimal",
        fertilizerAction: "Manure + Single superphosphate", pestDiseaseAlert: "Stem borer tunnel plugging"
      },
      {
        monthName: "December", monthShort: "Dec", monthIndex: 11,
        primaryWindow: "dormant",
        stageName: "Complete Winter Rest",
        fieldOperations: ["Paint trunks with white lime mixture", "Deep subsoiling between rows", "Orchard perimeter windbreaks maintenance"],
        optimalTempRange: "0°C – 15°C", irrigationGuidance: "Monthly single watering", waterNeedLevel: "Minimal",
        fertilizerAction: "None", pestDiseaseAlert: "Soil sanitation"
      }
    ]
  },

  "onion": {
    cropId: "onion",
    cropName: "Onion",
    localBalochiName: "پیاس (Pyas)",
    category: "Vegetable",
    primaryHub: "Kalat / Mastung Plateau (Kharif) & Kech Valley / Turbat (Rabi)",
    plantingWindow: {
      months: ["August", "September", "March", "April"],
      description: "Nursery sowing and seedling transplantation into raised beds/furrows",
      optimalConditions: "Cool soil for root development with fine clod-free tilth"
    },
    floweringWindow: {
      months: ["February", "March"],
      description: "Seed crop umbel flowering; commercial bulb crop kept strictly vegetative",
      pollinationOrBloomNotes: "Bolting in commercial crop is prevented by avoiding cold shocks to mature seedlings"
    },
    fruitGrowthWindow: {
      months: ["October", "November", "December", "May", "June"],
      description: "Vegetative leaf blade emergence and rapid bulb swelling"
    },
    harvestWindow: {
      months: ["January", "February", "March", "August", "September", "October"],
      description: "Dual harvest windows (Turbat winter harvest + Kalat late summer harvest)",
      indices: "50–70% tops collapse (neck break), dry papery outer tunics, firm bulb"
    },
    dormancyWindow: {
      months: ["December", "July"],
      description: "Short inter-season land resting and solarization"
    },
    currentSeasonalStatus: {
      currentStage: "Turbat Rabi Nursery Transplanting & Kalat Kharif Harvest Wrap-Up",
      currentWindow: "planting",
      seasonalAdvisory: "In Turbat & Kech: transplant 6-week old seedlings into raised beds at 15cm x 10cm spacing; in Kalat: cure harvested Sariab Surkh bulbs under shade for 4 days before loading trucks for Karachi Mandi.",
      daysToNextMilestone: 20,
      nextMilestoneName: "Turbat First Bulb Fertigation & Kalat Land Tillage (October)"
    },
    monthlySchedule: [
      {
        monthName: "January", monthShort: "Jan", monthIndex: 0,
        primaryWindow: "harvest",
        stageName: "Turbat / Kech Early Winter Bulb Harvest",
        fieldOperations: ["Begin pulling early Desi Kechi Red onions in Turbat", "Windrow curing in field", "Ship to Karachi Sabzi Mandi"],
        optimalTempRange: "12°C – 25°C", irrigationGuidance: "Withhold water 7 days before pull", waterNeedLevel: "Minimal",
        fertilizerAction: "None", pestDiseaseAlert: "Basal rot inspection"
      },
      {
        monthName: "February", monthShort: "Feb", monthIndex: 1,
        primaryWindow: "harvest",
        stageName: "Peak Turbat Harvest & Kalat Seedbed Prep",
        fieldOperations: ["Main harvest in Kech Valley", "Prepare highland seedbeds in Kalat and Mastung", "Grade into 40kg red mesh sacks"],
        optimalTempRange: "14°C – 28°C", irrigationGuidance: "Regular in seedbeds", waterNeedLevel: "Moderate",
        fertilizerAction: "Basal NPK in Kalat beds", pestDiseaseAlert: "Thrips on mature foliage"
      },
      {
        monthName: "March", monthShort: "Mar", monthIndex: 2,
        primaryWindow: "planting",
        stageName: "Kalat & Mastung Highland Transplanting",
        fieldOperations: ["Transplant seedlings in Kalat and Mastung", "Direct drip or furrow watering", "Apply pre-emergence weedicide"],
        optimalTempRange: "8°C – 22°C", irrigationGuidance: "Frequent light waterings", waterNeedLevel: "High",
        fertilizerAction: "Phosphorus + starter nitrogen", pestDiseaseAlert: "Damping off in nursery"
      },
      {
        monthName: "April", monthShort: "Apr", monthIndex: 3,
        primaryWindow: "vegetative",
        stageName: "Highland Vegetative Leaf Production",
        fieldOperations: ["Hand weeding between rows", "Top dress with Urea", "Monitor plant vigor"],
        optimalTempRange: "14°C – 27°C", irrigationGuidance: "Every 5–6 days", waterNeedLevel: "High",
        fertilizerAction: "First split of Nitrogen", pestDiseaseAlert: "Thrips tabaci early infestation"
      },
      {
        monthName: "May", monthShort: "May", monthIndex: 4,
        primaryWindow: "vegetative",
        stageName: "Highland Bulb Initiation",
        fieldOperations: ["Bulb initiation triggered by increasing day length", "Apply Potash for firm rings", "Keep furrows moist"],
        optimalTempRange: "18°C – 32°C", irrigationGuidance: "Strict 4–5 day interval", waterNeedLevel: "Peak",
        fertilizerAction: "Potassium sulfate fertigation", pestDiseaseAlert: "Purple Blotch (Alternaria porri)"
      },
      {
        monthName: "June", monthShort: "Jun", monthIndex: 5,
        primaryWindow: "fruit-growth",
        stageName: "Rapid Bulb Swelling in Kalat",
        fieldOperations: ["Peak sizing of Phulkara and Sariab Surkh bulbs", "Avoid excessive nitrogen to prevent thick necks", "Mulch"],
        optimalTempRange: "22°C – 36°C", irrigationGuidance: "Peak demand; 4 days", waterNeedLevel: "Peak",
        fertilizerAction: "Final potash split", pestDiseaseAlert: "Downy mildew prevention"
      },
      {
        monthName: "July", monthShort: "Jul", monthIndex: 6,
        primaryWindow: "fruit-growth", secondaryWindow: "harvest",
        stageName: "Neck Softening & Early Kalat Harvest",
        fieldOperations: ["Stop irrigation when 30% tops lodge", "Pull early lots for high off-season price", "Turbat autumn nursery prep"],
        optimalTempRange: "24°C – 38°C", irrigationGuidance: "Stop 10 days before harvest", waterNeedLevel: "Minimal",
        fertilizerAction: "None", pestDiseaseAlert: "Sun scald during field curing"
      },
      {
        monthName: "August", monthShort: "Aug", monthIndex: 7,
        primaryWindow: "harvest", secondaryWindow: "planting",
        stageName: "Peak Kalat Harvest & Turbat Nursery Sowing",
        fieldOperations: ["Bulk harvest in Kalat/Mastung supplying all Pakistan", "Sow autumn nursery beds in Turbat and Lasbela", "Cure bulbs"],
        optimalTempRange: "22°C – 35°C", irrigationGuidance: "Daily in nursery beds", waterNeedLevel: "Moderate",
        fertilizerAction: "Nursery starter fert", pestDiseaseAlert: "Storage rot prevention"
      },
      {
        monthName: "September", monthShort: "Sep", monthIndex: 8,
        primaryWindow: "planting", secondaryWindow: "harvest",
        stageName: "Turbat Rabi Transplanting & Late Kalat Wrap-Up",
        fieldOperations: ["Transplant seedlings in Kech/Turbat", "Final clearance of Kalat onion fields", "Sort and pack"],
        optimalTempRange: "22°C – 37°C", irrigationGuidance: "Immediate transplant watering", waterNeedLevel: "High",
        fertilizerAction: "Basal NPK in Turbat", pestDiseaseAlert: "Cutworm prevention"
      },
      {
        monthName: "October", monthShort: "Oct", monthIndex: 9,
        primaryWindow: "vegetative",
        stageName: "Turbat Vegetative Growth & Establishment",
        fieldOperations: ["Weed control in Turbat alluvial terraces", "Fertigate with balanced NPK", "Monitor root growth"],
        optimalTempRange: "20°C – 34°C", irrigationGuidance: "Every 6–7 days", waterNeedLevel: "Moderate",
        fertilizerAction: "Nitrogen top-dressing", pestDiseaseAlert: "Thrips on young foliage"
      },
      {
        monthName: "November", monthShort: "Nov", monthIndex: 10,
        primaryWindow: "fruit-growth",
        stageName: "Turbat Winter Bulb Swelling",
        fieldOperations: ["Cooler night temperatures favor bulb expansion", "Potash application", "Check Karez flow"],
        optimalTempRange: "16°C – 29°C", irrigationGuidance: "Every 8 days", waterNeedLevel: "Moderate",
        fertilizerAction: "Potassium sulfate", pestDiseaseAlert: "Stemphylium leaf blight"
      },
      {
        monthName: "December", monthShort: "Dec", monthIndex: 11,
        primaryWindow: "fruit-growth",
        stageName: "Pre-Harvest Maturation in Kech Valley",
        fieldOperations: ["Inspect bulb firmness", "Begin lodging foliage to accelerate skin drying", "Prepare harvest crates"],
        optimalTempRange: "12°C – 26°C", irrigationGuidance: "Taper off watering", waterNeedLevel: "Minimal",
        fertilizerAction: "None", pestDiseaseAlert: "Basal rot"
      }
    ]
  },

  "wheat": {
    cropId: "wheat",
    cropName: "Wheat",
    localBalochiName: "دانشیک / گندم (Danisheek / Gandum)",
    category: "Field & Cash Crop",
    primaryHub: "Nasirabad Canal Command & Kech Karez Basins",
    plantingWindow: {
      months: ["October", "November", "December"],
      description: "Direct seed drill into moisture-conditioned seedbeds (Rabi season)",
      optimalConditions: "Soil temperature 18°C – 22°C with fine tilth and level basins"
    },
    floweringWindow: {
      months: ["February", "March"],
      description: "Booting, ear heading, anthesis, and grain pollination",
      pollinationOrBloomNotes: "Self-pollinating; high wind or sudden heat spike during anthesis causes sterility"
    },
    fruitGrowthWindow: {
      months: ["March", "April"],
      description: "Milky grain stage, dough filling, and physiological maturity"
    },
    harvestWindow: {
      months: ["April", "May"],
      description: "Reaper/combine harvesting of dry golden grain, straw baling, and grain silo storage",
      indices: "Grain moisture <12%, flinty hard texture, straw turns completely golden yellow"
    },
    dormancyWindow: {
      months: ["June", "July", "August"],
      description: "Stubble grazing, deep summer ploughing for solarization, green manure"
    },
    currentSeasonalStatus: {
      currentStage: "Pre-Sowing Land Laser Leveling & Certified Seed Procurement",
      currentWindow: "dormant",
      seasonalAdvisory: "In Nasirabad & Jaffarabad: complete laser land leveling post-rice; treat certified Akbar-19 seed with fludioxonil fungicide; in Kech: desilt Karez gravity channels before first soaking irrigation (Roni).",
      daysToNextMilestone: 18,
      nextMilestoneName: "Rabi Soaking Irrigation & Sowing Window (October)"
    },
    monthlySchedule: [
      {
        monthName: "January", monthShort: "Jan", monthIndex: 0,
        primaryWindow: "vegetative",
        stageName: "Tillering & Stem Elongation",
        fieldOperations: ["Apply 2nd irrigation at tillering", "Top dress Urea", "Spray broadleaf weedicides"],
        optimalTempRange: "8°C – 22°C", irrigationGuidance: "Critical irrigation #2", waterNeedLevel: "High",
        fertilizerAction: "1 bag Urea per acre", pestDiseaseAlert: "Aphid colonies on lower leaves"
      },
      {
        monthName: "February", monthShort: "Feb", monthIndex: 1,
        primaryWindow: "flowering",
        stageName: "Booting, Heading & Anthesis",
        fieldOperations: ["Critical irrigation at heading stage", "Inspect for Yellow Rust pustules", "Prevent lodging"],
        optimalTempRange: "12°C – 25°C", irrigationGuidance: "Critical irrigation #3 (avoid on windy days)", waterNeedLevel: "High",
        fertilizerAction: "Potash foliar spray", pestDiseaseAlert: "Yellow Rust (Puccinia striiformis)"
      },
      {
        monthName: "March", monthShort: "Mar", monthIndex: 2,
        primaryWindow: "fruit-growth",
        stageName: "Milky Stage & Dough Grain Filling",
        fieldOperations: ["Final irrigation during milk stage", "Monitor terminal heat wave risk", "Prepare storage bags"],
        optimalTempRange: "16°C – 30°C", irrigationGuidance: "Final light watering at milky stage", waterNeedLevel: "Moderate",
        fertilizerAction: "None", pestDiseaseAlert: "Terminal heat stress mitigation"
      },
      {
        monthName: "April", monthShort: "Apr", monthIndex: 3,
        primaryWindow: "harvest",
        stageName: "Peak Harvest in Nasirabad & Kech",
        fieldOperations: ["Combine harvesting or manual reaper", "Threshing and grain cleaning", "Government procurement center deliveries"],
        optimalTempRange: "22°C – 38°C", irrigationGuidance: "Completely dry field", waterNeedLevel: "Withhold",
        fertilizerAction: "None", pestDiseaseAlert: "Grain borer protection in silos"
      },
      {
        monthName: "May", monthShort: "May", monthIndex: 4,
        primaryWindow: "harvest",
        stageName: "Upland Harvest in Quetta/Pishin & Straw Baling",
        fieldOperations: ["Harvest high-altitude mountain wheat", "Bale wheat straw (Bhoosa) for livestock feed", "Store grain"],
        optimalTempRange: "20°C – 34°C", irrigationGuidance: "Dry field", waterNeedLevel: "Withhold",
        fertilizerAction: "None", pestDiseaseAlert: "Storage fumigation"
      },
      {
        monthName: "June", monthShort: "Jun", monthIndex: 5,
        primaryWindow: "dormant",
        stageName: "Summer Fallow & Deep Ploughing",
        fieldOperations: ["Deep disc ploughing to expose weed seeds and pupae to desert sun", "Subsoil hardpan shattering", "Resting"],
        optimalTempRange: "30°C – 46°C", irrigationGuidance: "Dry fallow", waterNeedLevel: "Withhold",
        fertilizerAction: "None", pestDiseaseAlert: "None"
      },
      {
        monthName: "July", monthShort: "Jul", monthIndex: 6,
        primaryWindow: "dormant",
        stageName: "Green Manuring with Sesbania",
        fieldOperations: ["Sow green manure (Jantar/Sesbania) in canal irrigated fields", "Incorporate before flowering", "Organic buildup"],
        optimalTempRange: "32°C – 48°C", irrigationGuidance: "Canal flood water", waterNeedLevel: "Moderate",
        fertilizerAction: "Green organic manure", pestDiseaseAlert: "None"
      },
      {
        monthName: "August", monthShort: "Aug", monthIndex: 7,
        primaryWindow: "dormant",
        stageName: "Canal Silt Management & Field Bunding",
        fieldOperations: ["Strengthen field bunds against spate flood overflow", "Clean watercourse silt", "Procure certified seed"],
        optimalTempRange: "30°C – 45°C", irrigationGuidance: "Spate diversion", waterNeedLevel: "Minimal",
        fertilizerAction: "None", pestDiseaseAlert: "None"
      },
      {
        monthName: "September", monthShort: "Sep", monthIndex: 8,
        primaryWindow: "dormant",
        stageName: "Laser Leveling & Seed Inoculation",
        fieldOperations: ["Laser level all planting basins", "Treat seed with fungicide (Vibrance Duo)", "Apply basal DAP"],
        optimalTempRange: "26°C – 39°C", irrigationGuidance: "Pre-soaking irrigation (Roni) end of month", waterNeedLevel: "Moderate",
        fertilizerAction: "1 bag DAP + 1 bag SOP per acre basal", pestDiseaseAlert: "Smut prevention seed dressing"
      },
      {
        monthName: "October", monthShort: "Oct", monthIndex: 9,
        primaryWindow: "planting",
        stageName: "Early Rabi Sowing in Kech & Nasirabad",
        fieldOperations: ["Drill seed at 125 kg/ha into moist soil", "Maintain 20cm row spacing", "Pack seed furrow lightly"],
        optimalTempRange: "20°C – 34°C", irrigationGuidance: "Post-soaking moisture seeding", waterNeedLevel: "Moderate",
        fertilizerAction: "Basal fertilizer incorporated", pestDiseaseAlert: "Termite control in sandy loams"
      },
      {
        monthName: "November", monthShort: "Nov", monthIndex: 10,
        primaryWindow: "planting", secondaryWindow: "vegetative",
        stageName: "Peak Wheat Sowing across Balochistan",
        fieldOperations: ["Complete optimum sowing window", "First irrigation at Crown Root Initiation (21 days post-sowing)", "Broadcast urea"],
        optimalTempRange: "14°C – 28°C", irrigationGuidance: "Critical CRI irrigation (Day 21)", waterNeedLevel: "High",
        fertilizerAction: "Urea split at CRI watering", pestDiseaseAlert: "Early weed emergence"
      },
      {
        monthName: "December", monthShort: "Dec", monthIndex: 11,
        primaryWindow: "vegetative",
        stageName: "Crown Rooting & Early Tillering",
        fieldOperations: ["Promote deep rooting", "Inspect seedling stand density", "Cold conditioning"],
        optimalTempRange: "10°C – 23°C", irrigationGuidance: "Every 15–20 days depending on soil", waterNeedLevel: "Moderate",
        fertilizerAction: "Zinc sulfate spray if chlorotic", pestDiseaseAlert: "Field mice control"
      }
    ]
  },

  "olive": {
    cropId: "olive",
    cropName: "Olive",
    localBalochiName: "زیتون (Zaitoon)",
    category: "Orchard & Fruit Tree",
    primaryHub: "Khuzdar Valley & Loralai Plateau",
    plantingWindow: {
      months: ["February", "March", "October"],
      description: "Sapling transplantation of Arbequina and Coratina rootstocks into limestone hillsides",
      optimalConditions: "Mild temperatures with gravelly loam and excellent drainage"
    },
    floweringWindow: {
      months: ["April", "May"],
      description: "Creamy white panicle blossoms flush; wind-pollinated",
      pollinationOrBloomNotes: "Anemophilous (wind pollinated); requires 10% pollinizer trees like Pendolino"
    },
    fruitGrowthWindow: {
      months: ["June", "July", "August", "September"],
      description: "Pit hardening (July), fruit sizing, and rapid polyphenol and oil biosynthesis"
    },
    harvestWindow: {
      months: ["October", "November"],
      description: "Hand and mechanical comb harvesting when color turns green-violet; cold pressing within 24 hours",
      indices: "Jaen maturation index 3.5–4.5, skin turning purple-black, oil yield >18%"
    },
    dormancyWindow: {
      months: ["December", "January"],
      description: "Winter chill accumulation (200–400 hrs), vase canopy pruning, and copper sanitation"
    },
    currentSeasonalStatus: {
      currentStage: "Oil Accumulation & Pre-Harvest Press Calibration",
      currentWindow: "fruit-growth",
      seasonalAdvisory: "In Khuzdar & Loralai: monitor olive skin color turning from green to yellow-purple; calibrate extraction centrifuge at Khuzdar Agri Complex; schedule cold pressing within 24 hours of harvest.",
      daysToNextMilestone: 15,
      nextMilestoneName: "Peak Extra Virgin Olive Harvest & Milling (October)"
    },
    monthlySchedule: [
      {
        monthName: "January", monthShort: "Jan", monthIndex: 0,
        primaryWindow: "dormant",
        stageName: "Winter Rest & Polyconic Vase Pruning",
        fieldOperations: ["Prune central canopy to let sunlight into interior branches", "Copper spray", "Manure incorporation"],
        optimalTempRange: "2°C – 16°C", irrigationGuidance: "Every 20 days", waterNeedLevel: "Minimal",
        fertilizerAction: "20kg compost per tree", pestDiseaseAlert: "Olive knot bacterial gall inspection"
      },
      {
        monthName: "February", monthShort: "Feb", monthIndex: 1,
        primaryWindow: "planting", secondaryWindow: "dormant",
        stageName: "Spring Plantation & Flower Bud Differentiation",
        fieldOperations: ["Plant 1-year nursery saplings at 6m x 5m", "Install solar drip lines", "Trunk protection"],
        optimalTempRange: "6°C – 20°C", irrigationGuidance: "Every 12 days", waterNeedLevel: "Moderate",
        fertilizerAction: "Basal NPK", pestDiseaseAlert: "Scale insects"
      },
      {
        monthName: "March", monthShort: "Mar", monthIndex: 2,
        primaryWindow: "vegetative",
        stageName: "Inflorescence Emergence",
        fieldOperations: ["Panicle clusters develop along previous season shoots", "Foliar boron spray", "Weed clearing"],
        optimalTempRange: "12°C – 25°C", irrigationGuidance: "Every 10 days", waterNeedLevel: "Moderate",
        fertilizerAction: "Boron + Nitrogen split", pestDiseaseAlert: "Olive moth (Prays oleae)"
      },
      {
        monthName: "April", monthShort: "Apr", monthIndex: 3,
        primaryWindow: "flowering",
        stageName: "Full Bloom & Wind Pollination",
        fieldOperations: ["Avoid water stress during flower opening", "Withhold chemical sprays during pollen flight", "Keep orchard clean"],
        optimalTempRange: "16°C – 29°C", irrigationGuidance: "Moderate uniform watering", waterNeedLevel: "Moderate",
        fertilizerAction: "None during open flower", pestDiseaseAlert: "Olive psyllid monitoring"
      },
      {
        monthName: "May", monthShort: "May", monthIndex: 4,
        primaryWindow: "fruit-growth",
        stageName: "Fruit Set & Early Berry Growth",
        fieldOperations: ["Natural fruit drop assessment", "Initiate summer drip fertigation schedule", "Mulch tree bases"],
        optimalTempRange: "20°C – 34°C", irrigationGuidance: "Every 6–7 days via drip", waterNeedLevel: "High",
        fertilizerAction: "Potash + nitrogen fertigation", pestDiseaseAlert: "Olive fruit fly early traps"
      },
      {
        monthName: "June", monthShort: "Jun", monthIndex: 5,
        primaryWindow: "fruit-growth",
        stageName: "Pit Hardening Phase",
        fieldOperations: ["Endocarp (pit) hardens completely", "Critical water period to ensure fruit size", "Inspect canopy"],
        optimalTempRange: "24°C – 38°C", irrigationGuidance: "Every 5 days (approx 35L/tree/day)", waterNeedLevel: "High",
        fertilizerAction: "Potassium nitrate", pestDiseaseAlert: "Heat stress leaf scorch"
      },
      {
        monthName: "July", monthShort: "Jul", monthIndex: 6,
        primaryWindow: "fruit-growth",
        stageName: "Rapid Mesocarp Oil Synthesis",
        fieldOperations: ["Fatty acid synthesis peaks inside drupes", "Maintain steady drip volume", "Inspect McPhail traps"],
        optimalTempRange: "25°C – 40°C", irrigationGuidance: "Regular drip; avoid excessive stress", waterNeedLevel: "High",
        fertilizerAction: "Potassium sulfate", pestDiseaseAlert: "Olive fruit fly (Bactrocera oleae)"
      },
      {
        monthName: "August", monthShort: "Aug", monthIndex: 7,
        primaryWindow: "fruit-growth",
        stageName: "Table Olive Harvest & Green Fruit Picking",
        fieldOperations: ["Harvest green table olives for brining", "Continue drip irrigation for oil crop", "Check fly stings"],
        optimalTempRange: "24°C – 38°C", irrigationGuidance: "Every 6 days", waterNeedLevel: "Moderate",
        fertilizerAction: "Discontinue nitrogen", pestDiseaseAlert: "Bactrocera oleae protein bait spray"
      },
      {
        monthName: "September", monthShort: "Sep", monthIndex: 8,
        primaryWindow: "fruit-growth",
        stageName: "Veraison (Color Turning) & Oil Consolidation",
        fieldOperations: ["Skin turns from light green to violet-black", "Prepare harvest nets and vibration combs", "Sanitize mill"],
        optimalTempRange: "20°C – 35°C", irrigationGuidance: "Slight deficit irrigation to boost polyphenols", waterNeedLevel: "Moderate",
        fertilizerAction: "None", pestDiseaseAlert: "Pre-harvest fruit drop inspection"
      },
      {
        monthName: "October", monthShort: "Oct", monthIndex: 9,
        primaryWindow: "harvest",
        stageName: "Peak Harvest of Arbequina & Coratina",
        fieldOperations: ["Spread nets under trees", "Hand comb picking", "Press within 24 hours at cold press mill (<27°C)"],
        optimalTempRange: "15°C – 30°C", irrigationGuidance: "Light irrigation post-harvest", waterNeedLevel: "Minimal",
        fertilizerAction: "None", pestDiseaseAlert: "Prevent fruit fermentation in crates"
      },
      {
        monthName: "November", monthShort: "Nov", monthIndex: 10,
        primaryWindow: "harvest", secondaryWindow: "dormant",
        stageName: "Late Harvest & Post-Harvest Copper Sanitation",
        fieldOperations: ["Complete late-ripening Leccino blocks", "Spray entire canopy with copper oxychloride", "Decant fresh EVOO"],
        optimalTempRange: "8°C – 24°C", irrigationGuidance: "Every 15 days", waterNeedLevel: "Minimal",
        fertilizerAction: "Post-harvest restorative urea foliar", pestDiseaseAlert: "Peacock spot prevention"
      },
      {
        monthName: "December", monthShort: "Dec", monthIndex: 11,
        primaryWindow: "dormant",
        stageName: "Winter Rest & Chilling Vernalization",
        fieldOperations: ["Tree absorbs winter cold to trigger flower buds", "Winter trenching with manure", "Check drip tubing"],
        optimalTempRange: "4°C – 18°C", irrigationGuidance: "Monthly single watering", waterNeedLevel: "Minimal",
        fertilizerAction: "Basal manure + rock phosphate", pestDiseaseAlert: "Bark scale"
      }
    ]
  },

  "grapes": {
    cropId: "grapes",
    cropName: "Grapes",
    localBalochiName: "انگور (Angoor)",
    category: "Orchard & Fruit Tree",
    primaryHub: "Pishin & Killa Abdullah Highlands",
    plantingWindow: {
      months: ["January", "February"],
      description: "Dormant rooted cuttings planting in trenches or trellis posts",
      optimalConditions: "Gravelly calcareous slope soil with cold winter moisture"
    },
    floweringWindow: {
      months: ["April"],
      description: "Inflorescence cap fall (calyptra) and self-pollination",
      pollinationOrBloomNotes: "Warm dry spring breezes promote uniform cluster set"
    },
    fruitGrowthWindow: {
      months: ["May", "June", "July"],
      description: "Berry pea size, gibberellic acid thinning, and Veraison (translucent color change)"
    },
    harvestWindow: {
      months: ["July", "August", "September", "October"],
      description: "Cluster picking of Kishmishi, Sundarkhani, and Haitha; golden raisin sun dehydration",
      indices: "TSS >18° Brix, pedicel browning, seed turning brown"
    },
    dormancyWindow: {
      months: ["November", "December", "January"],
      description: "Winter cane and spur pruning, trellising repairs, and dormant spray"
    },
    currentSeasonalStatus: {
      currentStage: "Late Harvest, Cold Room Storage & Kishmish Raisin Dehydration",
      currentWindow: "harvest",
      seasonalAdvisory: "Complete late harvest of Haitha and Sundarkhani clusters in Pishin; spread Kishmishi grapes on clean raised platforms in dry desert sun for golden raisin curing.",
      daysToNextMilestone: 30,
      nextMilestoneName: "Cane Pruning & Trellis Wire Maintenance (November)"
    },
    monthlySchedule: [
      {
        monthName: "January", monthShort: "Jan", monthIndex: 0,
        primaryWindow: "dormant", secondaryWindow: "planting",
        stageName: "Winter Cane Pruning & Rooted Cutting Planting",
        fieldOperations: ["Prune canes back to 2–4 buds (spur) or 8–12 buds (cane)", "Plant new cuttings in 60cm trenches", "Dormant spray"],
        optimalTempRange: "-4°C – 8°C", irrigationGuidance: "Minimal", waterNeedLevel: "Minimal",
        fertilizerAction: "25kg FYM per vine", pestDiseaseAlert: "Grape scale"
      },
      {
        monthName: "February", monthShort: "Feb", monthIndex: 1,
        primaryWindow: "dormant",
        stageName: "Trellis Tying & Bleeding Stage",
        fieldOperations: ["Tie canes horizontally to trellis wires", "Sap begins bleeding from pruning wounds", "Clear vineyard floor"],
        optimalTempRange: "0°C – 12°C", irrigationGuidance: "Every 15 days", waterNeedLevel: "Minimal",
        fertilizerAction: "Basal phosphorus + potash", pestDiseaseAlert: "Powdery mildew overwintering chasmothecia"
      },
      {
        monthName: "March", monthShort: "Mar", monthIndex: 2,
        primaryWindow: "vegetative",
        stageName: "Bud Burst & Shoot Elongation",
        fieldOperations: ["Green shoots push rapidly from buds", "Disbud unwanted suckers from trunk", "Drip irrigation start"],
        optimalTempRange: "6°C – 18°C", irrigationGuidance: "Every 10 days", waterNeedLevel: "Moderate",
        fertilizerAction: "First split of Nitrogen", pestDiseaseAlert: "Grape thrips"
      },
      {
        monthName: "April", monthShort: "Apr", monthIndex: 3,
        primaryWindow: "flowering",
        stageName: "Inflorescence Emergence & Full Bloom",
        fieldOperations: ["Flower caps drop (anthesis)", "Maintain open canopy for air movement", "Avoid overhead spraying"],
        optimalTempRange: "12°C – 24°C", irrigationGuidance: "Moderate; avoid water stress during bloom", waterNeedLevel: "Moderate",
        fertilizerAction: "Boron spray for berry set", pestDiseaseAlert: "Powdery mildew (Erysiphe necator) sulfur dust"
      },
      {
        monthName: "May", monthShort: "May", monthIndex: 4,
        primaryWindow: "fruit-growth",
        stageName: "Berry Set & Pea-Size Thinning",
        fieldOperations: ["Thin dense clusters with secateurs for bold table grapes", "Shoot positioning between catch wires", "Irrigate"],
        optimalTempRange: "16°C – 30°C", irrigationGuidance: "Every 6–7 days", waterNeedLevel: "High",
        fertilizerAction: "NPK fertigation", pestDiseaseAlert: "Grape berry moth"
      },
      {
        monthName: "June", monthShort: "Jun", monthIndex: 5,
        primaryWindow: "fruit-growth",
        stageName: "Berry Sizing & Canopy Leaf Stripping",
        fieldOperations: ["Remove lower leaves around bunch zone to increase airflow and light", "Apply Potash", "Soil mulching"],
        optimalTempRange: "20°C – 36°C", irrigationGuidance: "Peak demand; every 5 days", waterNeedLevel: "Peak",
        fertilizerAction: "Potassium sulfate", pestDiseaseAlert: "Sunburn protection"
      },
      {
        monthName: "July", monthShort: "Jul", monthIndex: 6,
        primaryWindow: "fruit-growth", secondaryWindow: "harvest",
        stageName: "Veraison (Color Softening) & Early Kishmishi Harvest",
        fieldOperations: ["Berries turn translucent and accumulate sugars", "Begin picking early sweet Kishmishi", "Grade clusters"],
        optimalTempRange: "22°C – 37°C", irrigationGuidance: "Taper slightly to prevent berry splitting", waterNeedLevel: "High",
        fertilizerAction: "Discontinue nitrogen", pestDiseaseAlert: "Bird and wasp damage netting"
      },
      {
        monthName: "August", monthShort: "Aug", monthIndex: 7,
        primaryWindow: "harvest",
        stageName: "Peak Harvest of Sundarkhani & Haitha",
        fieldOperations: ["Harvest table grapes in cool early morning with secateurs", "Pack in cartons with sulfur dioxide pads", "Dry golden raisins"],
        optimalTempRange: "20°C – 35°C", irrigationGuidance: "Post-harvest light watering", waterNeedLevel: "Moderate",
        fertilizerAction: "None", pestDiseaseAlert: "Post-harvest rot"
      },
      {
        monthName: "September", monthShort: "Sep", monthIndex: 8,
        primaryWindow: "harvest",
        stageName: "Late Highland Harvest & Cold Storage",
        fieldOperations: ["Complete high-altitude vineyards in Killa Abdullah", "Sun-dry remaining seedless crop for Kishmish", "Clean crates"],
        optimalTempRange: "16°C – 31°C", irrigationGuidance: "Restorative irrigation", waterNeedLevel: "Moderate",
        fertilizerAction: "Light post-harvest urea", pestDiseaseAlert: "Foliar blight"
      },
      {
        monthName: "October", monthShort: "Oct", monthIndex: 9,
        primaryWindow: "harvest", secondaryWindow: "dormant",
        stageName: "Late Picking Wrap-Up & Foliage Yellowing",
        fieldOperations: ["Vines enter natural autumn senescence", "Nutrients transfer from leaves to roots and trunk", "Trench preparation"],
        optimalTempRange: "10°C – 25°C", irrigationGuidance: "Final deep watering before winter", waterNeedLevel: "Minimal",
        fertilizerAction: "Zinc spray", pestDiseaseAlert: "Sanitize fallen leaves"
      },
      {
        monthName: "November", monthShort: "Nov", monthIndex: 10,
        primaryWindow: "dormant",
        stageName: "Complete Leaf Fall & Trellis Inspection",
        fieldOperations: ["Check trellis tension wires and end posts", "Bury manure in inter-row trenches", "Prepare for pruning"],
        optimalTempRange: "4°C – 18°C", irrigationGuidance: "Monthly watering if dry", waterNeedLevel: "Minimal",
        fertilizerAction: "Manure + rock phosphate", pestDiseaseAlert: "Winter trunk cleaning"
      },
      {
        monthName: "December", monthShort: "Dec", monthIndex: 11,
        primaryWindow: "dormant",
        stageName: "Winter Rest & Chilling Hours",
        fieldOperations: ["Vines fully dormant under sub-zero night temperatures", "Select canes for spring propagation", "Orchard sanitation"],
        optimalTempRange: "-2°C – 12°C", irrigationGuidance: "None (soil resting)", waterNeedLevel: "Minimal",
        fertilizerAction: "None", pestDiseaseAlert: "Scale"
      }
    ]
  }
};

/**
 * Universal Phenology Profile Generator for any crop in the Balochistan database
 * Guarantees that EVERY crop has dynamic seasonal markers, windows, and monthly field schedules.
 */
export const getCropPhenologyProfile = (crop: BalochistanCrop): CropPhenologyProfile => {
  if (CROP_PHENOLOGY_DATABASE[crop.id]) {
    return CROP_PHENOLOGY_DATABASE[crop.id];
  }

  // Derive dynamic profile from crop's rich database metadata
  const currentMonthIndex = new Date().getMonth(); // 8 for September
  const currentMonthName = MONTH_NAMES[currentMonthIndex];

  const sowingMonths = crop.seasonalCalendar.sowingOrPlantingMonths;
  const floweringMonths = crop.seasonalCalendar.floweringOrBloomMonths;
  const growthMonths = crop.seasonalCalendar.fruitGrowthMonths;
  const harvestMonths = crop.seasonalCalendar.harvestMonths;

  // Determine current active window for the crop
  let currentWindow: PhenologicalWindowType = 'dormant';
  if (harvestMonths.some(m => m.toLowerCase().includes(currentMonthName.toLowerCase()))) {
    currentWindow = 'harvest';
  } else if (floweringMonths.some(m => m.toLowerCase().includes(currentMonthName.toLowerCase()))) {
    currentWindow = 'flowering';
  } else if (sowingMonths.some(m => m.toLowerCase().includes(currentMonthName.toLowerCase()))) {
    currentWindow = 'planting';
  } else if (growthMonths.some(m => m.toLowerCase().includes(currentMonthName.toLowerCase()))) {
    currentWindow = 'fruit-growth';
  }

  // Build 12-month schedule
  const monthlySchedule: MonthPhenologyDetail[] = MONTH_NAMES.map((mName, idx) => {
    const isHarvest = harvestMonths.some(m => m.toLowerCase().includes(mName.toLowerCase()));
    const isFlowering = floweringMonths.some(m => m.toLowerCase().includes(mName.toLowerCase()));
    const isPlanting = sowingMonths.some(m => m.toLowerCase().includes(mName.toLowerCase()));
    const isGrowth = growthMonths.some(m => m.toLowerCase().includes(mName.toLowerCase()));

    let primaryWindow: PhenologicalWindowType = 'dormant';
    let stageName = `${crop.name} Inter-Season Rest & Field Care`;

    if (isHarvest) {
      primaryWindow = 'harvest';
      stageName = `Peak ${crop.name} Maturity & Harvest`;
    } else if (isFlowering) {
      primaryWindow = 'flowering';
      stageName = `Bloom, Pollination & Flower Flush`;
    } else if (isPlanting) {
      primaryWindow = 'planting';
      stageName = `Sowing, Planting & Nursery Prep`;
    } else if (isGrowth) {
      primaryWindow = 'fruit-growth';
      stageName = `Active Vegetative & Fruit Development`;
    }

    return {
      monthName: mName,
      monthShort: MONTH_SHORTS[idx],
      monthIndex: idx,
      primaryWindow,
      stageName,
      fieldOperations: [
        isHarvest ? `Execute precision harvesting and transport to ${crop.primaryProductionHub} mandi` :
        isFlowering ? `Monitor flower opening, avoid water stress, and check pollination efficiency` :
        isPlanting ? `Prepare land, laser level basins, and sow certified cultivars` :
        `Maintain steady irrigation, weed clearance, and inspect crop canopy`
      ],
      optimalTempRange: crop.weatherClimateRequirements.optimalTempRangeC,
      irrigationGuidance: isHarvest ? "Taper irrigation 7-10 days before picking" : isFlowering ? "Maintain moderate uniform moisture" : "Follow scheduled irrigation",
      waterNeedLevel: isHarvest ? "Minimal" : isFlowering ? "Moderate" : isGrowth ? "High" : "Minimal",
      fertilizerAction: isHarvest ? "Discontinue synthetic fertilizer" : isPlanting ? "Apply basal NPK" : "Foliar nutrition",
      pestDiseaseAlert: "Regular IPM scouting as advised by Extension Office Turbat",
      isCurrentSeason: idx === currentMonthIndex
    };
  });

  return {
    cropId: crop.id,
    cropName: crop.name,
    localBalochiName: crop.localBalochiName,
    category: crop.category,
    primaryHub: crop.primaryProductionHub,
    plantingWindow: {
      months: sowingMonths,
      description: `Planting, sowing or transplanting period in ${crop.primaryProductionHub}`,
      optimalConditions: `Optimal soil conditions: ${crop.soilRequirements.soilType}`
    },
    floweringWindow: {
      months: floweringMonths,
      description: `Floral bloom and pollination stage across ${crop.majorDistricts.slice(0, 2).join(', ')}`,
      pollinationOrBloomNotes: `Maintain temperature within ${crop.weatherClimateRequirements.optimalTempRangeC}`
    },
    fruitGrowthWindow: {
      months: growthMonths,
      description: `Fruit sizing, aril filling, or vegetative development`
    },
    harvestWindow: {
      months: harvestMonths,
      description: `Commercial picking and market despatches to domestic and export mandis`,
      indices: crop.plantationToHarvestGuide.harvestingIndices.slice(0, 90) + '...'
    },
    dormancyWindow: {
      months: ["November", "December", "January"],
      description: `Winter rest, orchard sanitation, and manure trenching`
    },
    currentSeasonalStatus: {
      currentStage: crop.balochistanStats.currentSeasonStatus,
      currentWindow,
      seasonalAdvisory: `Official advisory from Nazeer Ahmed (Agri Office Turbat): Maintain prescribed irrigation and nutrient protocols for ${crop.name} in accordance with current autumn weather dynamics.`,
      daysToNextMilestone: 28,
      nextMilestoneName: `Next Seasonal Transition Phase`
    },
    monthlySchedule
  };
};
