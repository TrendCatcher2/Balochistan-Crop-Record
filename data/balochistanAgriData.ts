import { BalochistanCrop, BalochistanAgriStation } from '../types';

/**
 * Official Institutional Meta Data
 * Directorate General Agriculture Extension Balochistan
 * Rani Bagh, Sariab Road, Quetta
 */
export const BALOCHISTAN_AGRI_DEPT_META = {
  institutionName: "Agriculture Extension Department",
  government: "Government of Balochistan",
  directorate: "Directorate General Agriculture Extension Balochistan, Rani Bagh, Sariab Road, Quetta",
  apexHeadquarters: "Rani Bagh, Sariab Road, Quetta",
  officialJurisdiction: "All 36 Districts & Agro-Ecological Zones of Balochistan",
  motto: "Empowering Growers through Precision Agro-Climatic Intelligence, Karez Hydrology, Modern Extension Services & High-Value Exports",
  portalVersion: "Balochistan Crop Record & Extension Portal v5.2",
  contact: "dg-agri-extension@balochistan.gov.pk • Directorate General Agriculture Extension, Rani Bagh, Sariab Road, Quetta"
};

/**
 * Comprehensive Dataset of All Important Trees, Fruits, Vegetables, and Crops of Balochistan
 */
export const BALOCHISTAN_CROPS: BalochistanCrop[] = [
  // 1. DATE PALM (PHOENIX DACTYLIFERA) - The Iconic Tree of Makran
  {
    id: "date-palm",
    name: "Date Palm",
    localBalochiName: "مُچ (Much / Mach) / ناہ (Nah)",
    localUrduName: "کھجور (Khajoor)",
    scientificName: "Phoenix dactylifera L.",
    category: "Orchard & Fruit Tree",
    iconType: "palm",
    majorDistricts: ["Kech (Turbat)", "Panjgur", "Gwadar", "Washuk", "Kharan", "Awaran", "Lasbela"],
    primaryProductionHub: "Kech Valley (Turbat) & Rakhshan Valley (Panjgur)",
    varietiesOrCultivars: ["Mozawati (Muzati)", "Begum Jangi", "Halawi", "Sabzo", "Rabbi", "Kahraba", "Chapshuk", "Dandari", "Jowansor", "Shakri", "Konsh", "Roghani", "Karbala", "Wash-Pash", "Zard"],
    balochistanStats: {
      totalAcreageHectares: 64200,
      annualProductionMT: 285000,
      nationalSharePercent: 53.5,
      avgYieldPerHa: "4.4 MT/ha (Mature bearing oases up to 8.5 MT/ha)",
      currentSeasonStatus: "Post-Harvest Curing & Cold Storage / Winter Maintenance"
    },
    soilRequirements: {
      soilType: "Deep, well-drained alluvial sandy loam to silty clay loam; thrives in riverine flood terraces.",
      phRange: "7.0 – 8.5 (Highly tolerant to calcareous desert calcisols)",
      salinityTolerance: "Very High (Tolerates electrical conductivity up to 4.5 – 6.0 dS/m without yield reduction)",
      organicMatter: "Incorporate 35–50 kg well-rotted farmyard manure (FYM) per palm basin annually in December–January.",
      drainageNeeds: "Demands deep permeable subsoil. Waterlogging for >72 hrs induces root asphyxiation."
    },
    waterRequirements: {
      annualWaterNeedMm: "1,200 – 1,800 mm (Approximately 15,000 – 22,000 m³/ha/yr)",
      criticalStages: ["Floral Spathe Emergence & Pollination (Feb–Mar)", "Fruit Sizing (Chimri/Khalal May–June)", "Softening (Dang/Rutab July)"],
      irrigationMethods: ["Subterranean Karez gravity canals", "Solarized tube-well basin flood", "Pressurized drip emitters (160 L/palm/day in peak heat)"],
      waterQualityTolerance: "Tolerates irrigation water with electrical conductivity up to 3,000 ppm TDS."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "28°C – 44°C during vegetative growth and fruit maturation",
      maxHeatToleranceC: 52,
      minFrostToleranceC: -4,
      chillHoursOrGdd: "Zero chilling requirement; requires >3,200 Growing Degree Days (Base 18°C) for complete Tamar curing",
      rainfallAndHumidityImpact: "Requires dry sunny weather during flowering (March) and ripening (July–Aug). Rain during harvest causes skin fermentation."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Propagate exclusively via clonal offshoots (Peesh) weighing 12–18 kg or certified tissue-cultured plantlets. Never use seedlings.",
      landPreparation: "Laser land leveling, deep subsoiling to 90 cm to shatter hard calcareous pans, and excavation of 1m x 1m x 1m planting pits.",
      spacingAndPlanting: "Square planting grid 8m x 8m (156 palms/ha) or 9m x 9m (123 palms/ha). Orient rows North-South for maximum sunlight.",
      irrigationAndFertilizer: "Apply N:P:K at 1000g N, 500g P₂O₅, 1000g K₂O per mature tree split in 3 doses (Feb, May, Oct). Apply zinc sulfate foliar.",
      pruningThinningCanopy: "Maintain leaf-to-bunch ratio of 8:1 to 9:1. Cut old dried fronds in winter. Thin 25–35% of fruit strands at pollination for fruit caliber.",
      pestAndDiseaseManagement: "Red Palm Weevil (Rhynchophorus ferrugineus) managed via pheromone traps and aluminum phosphide fumigation. Date Palm Mite dusted with sulfur.",
      harvestingIndices: "Harvest at Rutab stage (soft caramel) for Mozawati/Halawi, or Tamar stage (>70° Brix, moisture <20%) for Begum Jangi.",
      curingAndPostHarvest: "Cured on raised solar drying platforms (Chapparkh) in Turbat. Fumigated, vacuum packed, and placed in -18°C or 0–4°C cold chains."
    },
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Red Palm Weevil (Rhynchophorus ferrugineus)",
          localUrduName: "سرخ کھجور کی سونڈ والی سنڈی / سُسری",
          symptoms: "Internal stem tunneling, oozing of brown viscous fermented liquid from frond base, chewed fiber ejection, sudden crown toppling.",
          organicCure: "Pheromone traps (Ferrolure+) @ 4 traps/ha with dates bait; prophylactic painting of trunk base with neem oil paste.",
          chemicalCure: "Aluminum Phosphide tablet insertion (2 tablets/hole) sealed with mud, or trunk injection of Imidacloprid 200SL @ 15ml in 100ml water.",
          applicationDose: "15ml Imidacloprid or 2 tablets Aluminum Phosphide per active borehole",
          sprayTiming: "Immediate upon acoustic or visual detection; prophylactic trunk wash in March & October",
          urgency: "Critical"
        },
        {
          pestName: "Date Palm Dust Mite / Old World Mite (Oligonychus afrasiaticus)",
          localUrduName: "کھجور کی جالا بنانے والی مکڑی (مکڑی جال)",
          symptoms: "Fine dense webbing covering fruit bunches during Kimri/Khalal stage, accumulation of dust particles, fruit skin becomes rough, scarred, brown and unmarketable.",
          organicCure: "Fine wettable sulfur dusting @ 50g/palm on fruit bunches; washing clusters with pressurized water spray.",
          chemicalCure: "Spiromesifen 240SC or Hexythiazox 5.4EC dusting spray directly on clusters.",
          applicationDose: "Hexythiazox @ 0.5ml/L water or Spiromesifen @ 0.8ml/L water",
          sprayTiming: "Apply when fruit reaches marble size (late May to early June)",
          urgency: "High"
        },
        {
          pestName: "Lesser Date Moth (Batrachedra amydraula)",
          localUrduName: "کھجور کا چتکبرا پتنگا",
          symptoms: "Larvae bore into tender fruitlets soon after fruit set, leading to premature fruit drop with frass and silk threads attached to bunch strands.",
          organicCure: "Bacillus thuringiensis (Bt) spray @ 2g/L or Spinosad spray right after pollination completion.",
          chemicalCure: "Emamectin benzoate 1.9EC or Chlorantraniliprole 18.5SC cluster spray.",
          applicationDose: "Emamectin Benzoate @ 1.5ml/L or Chlorantraniliprole @ 0.4ml/L",
          sprayTiming: "First spray 10 days after spathe opening, second spray 21 days later",
          urgency: "Seasonal"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Graphiola Leaf Spot / False Smut",
          causalAgent: "Graphiola phoenicis (Fungus)",
          symptoms: "Small, hard, black, cup-shaped pustules (sori) erupting on both surfaces of older fronds with yellow fibrous filaments.",
          preventativeCare: "Prune and burn heavily infected lower fronds during winter pruning; avoid excessive humid microclimates under canopy.",
          chemicalCure: "Copper Oxychloride 50WP @ 3g/L or Mancozeb 80WP @ 2.5g/L foliar spray.",
          applicationTiming: "Post-harvest autumn wash and pre-bloom spring wash"
        },
        {
          diseaseName: "Black Scorch / Thielaviopsis Fruit & Heart Rot",
          causalAgent: "Thielaviopsis paradoxa",
          symptoms: "Charred, black scorched appearance of inflorescences, young leaves and heart bud; stunted deformed spathes.",
          preventativeCare: "Sterilize pruning tools in 10% bleach between trees; avoid mechanical wounds during harvest.",
          chemicalCure: "Thiophanate-Methyl 70WP @ 2g/L drenching around crown and trunk wounds.",
          applicationTiming: "Immediate drench upon trimming and post-pollination"
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "DAP (Diammonium Phosphate) 750g + Potassium Sulfate (SOP) 600g per mature palm worked into 1m circular trench in Dec–Jan.",
        vegetativeStage: "Urea 500g split into two applications: first in late February (spathe opening) and second in early April.",
        floweringFruiting: "Sulfate of Potash (SOP) 500g + Urea 300g in May during rapid fruit expansion (Khalal stage).",
        foliarMicronutrients: "Foliar spray of Zinc Sulfate (33%) @ 2g/L + Boric Acid @ 1.5g/L + Ferrous Sulfate @ 2g/L in late March to enhance fruit retention."
      },
      organicAndBioFertilizers: {
        fymRequirement: "40 – 60 kg well-decomposed cow manure / sheep manure incorporated into 1.5m root zone ring every December.",
        greenManuring: "Intercrop alfalfa (Lucerne) or Sesbania in wide orchard alleys; mulch green residue into tree basins in spring.",
        bioStimulants: "Humic acid drench @ 50ml/palm in March + mycorrhizal inoculation in planting pits for enhanced root absorption.",
        saltReclamationGypsum: "On saline desert calcisols (EC >4 dS/m), broadcast 15 kg agricultural gypsum (CaSO₄·2H₂O) per basin followed by deep leaching."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Precision laser leveling to 0.05% slope for gravity canal basin irrigation; prevents water pooling at palm root collars.",
      hardpanSubsoilingDepth: "Deep subsoiling down to 90 – 120 cm with tractor ripper to shatter impervious calcareous caliche hardpan.",
      bedRidgeDimensions: "Raised planting mounds 30 cm above general field grade with 2.5m diameter circular watering rings.",
      drainageAndBundSpecs: "Perimeter catchment bunds (1m height x 1.5m base) to arrest sudden flash torrents (Rod Kohi) in riverine flood terraces."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Karez turn (Taas / Waar) rotation every 8 – 12 days in summer peak, extending to 20 – 25 days during winter dormancy.",
      dripFlowRateAndHours: "Pressure-compensated button drippers (4 x 8 L/hr emitters per palm), operating 4 – 6 hours daily during June–July heatwaves.",
      pruningTrainingSystem: "Maintain 100 – 120 healthy green fronds per mature tree; annual removal of dried, senescent, and diseased spines in December.",
      thinningAndCanopyManagement: "Remove 25% – 30% of inner strands per spathe and shorten remaining strand tips by 10 cm at pollination for jumbo fruit caliber."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Gwadar Deep Sea Port (Direct Middle East & GCC corridor)", "Karachi Port / Port Qasim", "Taftan & Gabd-Rimdan Border (Iran Transit)"],
      quarantineAndPhytosanitary: "Mandatory methyl bromide or phosphine fumigation certificates; zero tolerance for live Red Palm Weevil or Nitidulid beetle larvae.",
      importSubstitutionImpact: "Local Balochistan date production saves Pakistan over $180M annually in potential processed fruit import expenditures.",
      coldChainAndPackagingStandards: "Graded by size (Grade A >12g/fruit), moisture adjusted to 18–22%, nitrogen flushed vacuum pouches in 500g, 1kg & 5kg master cartons."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["February", "March", "September", "October"],
      floweringOrBloomMonths: ["Late February", "March", "Early April"],
      fruitGrowthMonths: ["April", "May", "June"],
      harvestMonths: ["July", "August", "September"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Karachi New Sabzi Mandi", "Quetta Fruit Market", "Sukkur", "Lahore Badami Bagh", "Islamabad"],
      exportDestinations: ["United Arab Emirates", "Oman", "Qatar", "United Kingdom", "United States", "Turkey", "India (Chohara)"],
      processingAndValueAddition: "Vacuum block packaging, pitted date paste, date syrup (Sheera), and Chohara (boiled & sun-dried dates).",
      avgFarmGatePricePkrKg: "PKR 280 – 550 / kg (Mozawati Grade A: PKR 600–800 / kg)",
      economicSignificance: "Livelihood backbone of Kech and Panjgur; generates over $120M in provincial economic turnover."
    }
  },

  // 2. APPLE (MALUS DOMESTICA) - The Pride of Upland Balochistan
  {
    id: "apple",
    name: "Apple",
    localBalochiName: "سیب (Seb)",
    localUrduName: "سیب (Saib)",
    scientificName: "Malus domestica Borkh.",
    category: "Orchard & Fruit Tree",
    iconType: "apple",
    majorDistricts: ["Ziarat", "Pishin", "Quetta", "Killa Saifullah", "Kalat", "Mastung", "Barkhan"],
    primaryProductionHub: "Ziarat Valley & Pishin Highlands (1,600m – 2,400m MSL)",
    varietiesOrCultivars: ["Tor Kulu (Red Delicious)", "Shin Kulu (Golden Delicious)", "Kaja (Amri)", "Gacha", "Anna (Low chill)", "Gala"],
    balochistanStats: {
      totalAcreageHectares: 102400,
      annualProductionMT: 580000,
      nationalSharePercent: 82.0,
      avgYieldPerHa: "5.6 MT/ha (Modern trellis orchards achieve 14–18 MT/ha)",
      currentSeasonStatus: "Dormant Winter Season • Pruning & Copper Spray Phase"
    },
    soilRequirements: {
      soilType: "Deep, well-drained loam to clay loam rich in organic matter with porous subsoil.",
      phRange: "6.5 – 7.8 (Avoids waterlogged soils and high free calcium carbonate)",
      salinityTolerance: "Sensitive (Electrical conductivity should remain below 1.7 dS/m)",
      organicMatter: "Requires 40 kg composted cow manure per mature tree applied in autumn.",
      drainageNeeds: "Exceptional drainage required; susceptible to Phytophthora collar rot in heavy standing water."
    },
    waterRequirements: {
      annualWaterNeedMm: "800 – 1,100 mm per year",
      criticalStages: ["Pink Bud & Fruit Set (April)", "Rapid Fruit Sizing (June–July)", "Pre-Harvest Sizing (August)"],
      irrigationMethods: ["High-efficiency drip irrigation", "Basin furrow with mulching", "Check basin"],
      waterQualityTolerance: "Prefers fresh mountain spring or tube-well water with TDS <600 ppm."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "18°C – 28°C during growing season",
      maxHeatToleranceC: 38,
      minFrostToleranceC: -18,
      chillHoursOrGdd: "Requires 800 – 1,200 chilling hours (<7.2°C) during winter dormancy for uniform bud break.",
      rainfallAndHumidityImpact: "Thrives in dry mountain atmosphere with low fungal spore pressure; hail nets recommended."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "T-budding or tongue grafting onto clonal rootstocks (MM106, M9) or wild Crab Apple seedlings.",
      landPreparation: "Deep terrace ripping, contour bunding on mountain slopes, and stone clearance.",
      spacingAndPlanting: "Semi-dwarf: 4m x 4m (625 trees/ha); Standard: 6m x 6m (278 trees/ha). Plant in January–February during dormancy.",
      irrigationAndFertilizer: "NPK 600:300:600 g/tree/year plus autumn zinc and iron chelate foliar applications.",
      pruningThinningCanopy: "Modified central leader system. Prune in winter to open canopy center to sunlight. Hand thin to 1 fruit per cluster.",
      pestAndDiseaseManagement: "Codling Moth (Cydia pomonella) monitored with pheromone lures. Apple Scab treated with preventative triazole fungicides.",
      harvestingIndices: "Fruit firmness (14–17 lbs), starch-iodine index conversion, and soluble sugar level >13° Brix.",
      curingAndPostHarvest: "Field sorting, cushioned crates, hydro-cooling, and controlled atmosphere (CA) storage at 0°C to 1°C, 90–95% RH."
    },
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Codling Moth (Cydia pomonella)",
          localUrduName: "سیب کی سنڈی / کوڈلنگ موتھ",
          symptoms: "Larval entrance holes plugged with reddish-brown frass near calyx or side of fruit, extensive internal core tunneling.",
          organicCure: "Pheromone disruption ties (Isomate-C) @ 400 dispensers/ha + Trichogramma wasp egg-parasitoid releases.",
          chemicalCure: "Emamectin Benzoate 1.9EC @ 1.5ml/L or Chlorantraniliprole 18.5SC @ 0.4ml/L at peak egg hatch.",
          applicationDose: "0.4ml/L Chlorantraniliprole or 1.5ml/L Emamectin Benzoate",
          sprayTiming: "First generation: petal fall + 250 degree days; Second generation: July mid",
          urgency: "Critical"
        },
        {
          pestName: "Woolly Apple Aphid (Eriosoma lanigerum)",
          localUrduName: "سیب کا روئی دار سست کیڑا",
          symptoms: "White cottony/waxy flocculent colonies on twigs, pruning cuts, and underground root galls leading to tree decline.",
          organicCure: "Encarsia wasp bio-control; dormant lime sulfur wash (3%); neem oil (2%) stem spray.",
          chemicalCure: "Spirotetramat 240SC @ 0.75ml/L or Acetamiprid 20SP @ 0.5g/L foliar wash.",
          applicationDose: "0.75ml/L Spirotetramat",
          sprayTiming: "Post-petal fall spring flush & post-harvest autumn wash",
          urgency: "High"
        },
        {
          pestName: "San Jose Scale (Quadraspidiotus perniciosus)",
          localUrduName: "سان ہوزے سکیل",
          symptoms: "Circular grey waxy scales encrusting bark, bright red halos on green twigs and fruit skins, dieback of branches.",
          organicCure: "Winter dormant spray with refined horticultural mineral oil @ 30ml/L before bud swell.",
          chemicalCure: "Pyriproxyfen 10.8EC @ 1ml/L during crawler emergence phase in spring.",
          applicationDose: "1ml/L Pyriproxyfen + 1% mineral oil",
          sprayTiming: "Early spring crawler emergence (April)",
          urgency: "Seasonal"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Apple Scab (Venturia inaequalis)",
          causalAgent: "Venturia inaequalis (Ascomycete)",
          symptoms: "Velvety olive-green to black crusty lesions on leaves and scabby deformed corky fruit cracking.",
          preventativeCare: "Post-harvest urea spray (5%) on fallen leaves to accelerate leaf breakdown and eliminate overwintering pseudothecia.",
          chemicalCure: "Difenoconazole 25EC @ 0.5ml/L or Kresoxim-methyl 50WG @ 0.4g/L.",
          applicationTiming: "Green tip, pink bud, and petal fall critical protective windows"
        },
        {
          diseaseName: "Powdery Mildew (Podosphaera leucotricha)",
          causalAgent: "Podosphaera leucotricha",
          symptoms: "White talcum-powder-like fungal growth on shoots, twisted narrow silvered foliage, russet netting on fruit.",
          preventativeCare: "Prune out diseased white terminal shoots during winter pruning.",
          chemicalCure: "Wettable Sulfur 80WP @ 3g/L or Hexaconazole 5SC @ 1ml/L.",
          applicationTiming: "Tight cluster to petal fall"
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "DAP 500g + Potassium Sulfate (SOP) 600g per tree applied in tree drip-line in January.",
        vegetativeStage: "Urea 300g + Calcium Ammonium Nitrate (CAN) 250g in early April after fruit set.",
        floweringFruiting: "SOP 400g + CAN 200g in June during rapid fruit cell expansion.",
        foliarMicronutrients: "Foliar Zinc EDTA (12%) @ 1g/L + Solubor (Boron 20%) @ 1g/L + Calcium Chloride (0.5%) to prevent bitter pit."
      },
      organicAndBioFertilizers: {
        fymRequirement: "35 – 50 kg composted mountain sheep manure applied in November under mulch.",
        greenManuring: "White clover or Vetch sown in orchard alleys to fix nitrogen and retain highland soil moisture.",
        bioStimulants: "Seaweed extract @ 2ml/L + Trichoderma harzianum root drench to protect against crown rot.",
        saltReclamationGypsum: "Not typically saline; apply agricultural lime or dolomite if soil pH drops below 6.5 in mountain pockets."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Contour terrace leveling along Ziarat and Pishin mountain slopes with 1 – 2% inward drainage grade.",
      hardpanSubsoilingDepth: "Ripping stony subsoil down to 70 – 90 cm before planting clonal rootstocks.",
      bedRidgeDimensions: "Raised planting beds (40 cm height x 1.2m width) to ensure collar aeration.",
      drainageAndBundSpecs: "Stone rip-rap retaining bunds to prevent soil erosion during torrential mountain snowmelts."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Spring water scheduling every 10 – 14 days during summer fruit development.",
      dripFlowRateAndHours: "Inline pressure-compensating drip (2 laterals per tree row, 4 L/hr emitters), run 3 – 5 hrs every 3 days.",
      pruningTrainingSystem: "Modified Central Leader or Tall Spindle system (on MM106); prune during deep winter dormancy (Jan–Feb).",
      thinningAndCanopyManagement: "Hand thinning to 1 fruit per cluster (leaving king fruit) within 30 days after petal fall for premium fruit sizing."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Chaman Border Corridor (Transit to Kandahar & Central Asia)", "Karachi Port to Sri Lanka & Bangladesh", "Torkham Border"],
      quarantineAndPhytosanitary: "Certified pest-free area certificates for Codling Moth and Apple Maggot.",
      importSubstitutionImpact: "High-yield Balochistan orchards eliminate the need for $220M worth of foreign apple imports into Pakistan.",
      coldChainAndPackagingStandards: "Graded by color (>75% red blush for Tor Kulu), packed in foam-netted corrugated telescopic cartons (10kg & 18kg) in 0.5°C CA cold stores."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["January", "February"],
      floweringOrBloomMonths: ["April", "Early May"],
      fruitGrowthMonths: ["May", "June", "July", "August"],
      harvestMonths: ["August", "September", "October"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Quetta Fruit Mandi", "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Peshawar"],
      exportDestinations: ["Afghanistan", "United Arab Emirates", "Sri Lanka", "Bangladesh"],
      processingAndValueAddition: "Apple concentrate, apple cider vinegar, dehydrated chips, and pectin extraction.",
      avgFarmGatePricePkrKg: "PKR 140 – 280 / kg (Ziarat Premium Tor Kulu: PKR 350 / kg)",
      economicSignificance: "Supplies over 80% of Pakistan's commercial apples; sustains mountain livelihoods in north Balochistan."
    }
  },

  // 3. POMEGRANATE (PUNICA GRANATUM) - High Value Desert & Plateau Ruby
  {
    id: "pomegranate",
    name: "Pomegranate",
    localBalochiName: "انار (Anaar / Danag)",
    localUrduName: "انار (Anaar)",
    scientificName: "Punica granatum L.",
    category: "Orchard & Fruit Tree",
    iconType: "pomegranate",
    majorDistricts: ["Panjgur", "Loralai", "Killa Saifullah", "Khuzdar", "Barkhan", "Quetta", "Washuk"],
    primaryProductionHub: "Loralai Valley & Panjgur Oasis",
    varietiesOrCultivars: ["Kandahari (Sweet, deep ruby arils)", "Bedana (Seedless soft arils)", "Siah Anaar (Black skin)", "Tarnab Gulabi"],
    balochistanStats: {
      totalAcreageHectares: 14800,
      annualProductionMT: 58500,
      nationalSharePercent: 71.0,
      avgYieldPerHa: "3.9 MT/ha (Mature managed orchards: 8–10 MT/ha)",
      currentSeasonStatus: "Dormancy & Winter Sanitation Phase"
    },
    soilRequirements: {
      soilType: "Deep loamy soils to gravelly alluvial fans; highly adaptable to marginal stony soils.",
      phRange: "6.8 – 8.3 (High tolerance to limestone calcisols)",
      salinityTolerance: "Moderately High (Tolerates up to 3.5 dS/m without leaf burn)",
      organicMatter: "30 kg FYM per bush in December to maintain microbial activity.",
      drainageNeeds: "Good internal drainage; avoids heavy clays with stagnant winter moisture."
    },
    waterRequirements: {
      annualWaterNeedMm: "600 – 900 mm per year",
      criticalStages: ["Flower Flush (May)", "Fruit Set (June)", "Rapid Aril Expansion (July–August)"],
      irrigationMethods: ["Drip irrigation with 2 drippers per tree", "Basin furrow"],
      waterQualityTolerance: "Tolerates slightly saline water up to 2,000 ppm TDS."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "25°C – 38°C for sugars and deep crimson pigment accumulation",
      maxHeatToleranceC: 46,
      minFrostToleranceC: -10,
      chillHoursOrGdd: "Requires 150 – 300 chilling hours; thrives in hot dry summers and cool dry winters.",
      rainfallAndHumidityImpact: "Rain during harvest causes catastrophic fruit rind cracking; requires dry ripening weather."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Propagate via hardwood stem cuttings (20–25 cm length, pencil thickness) taken in dormant season.",
      landPreparation: "Ploughing, cross-harrowing, and digging pits of 75cm x 75cm enriched with manure and SSP.",
      spacingAndPlanting: "5m x 4m (500 trees/ha) or high-density 4m x 3m (833 trees/ha). Plant in spring (Feb–Mar).",
      irrigationAndFertilizer: "NPK 450:250:400 g/plant. Calcium chloride foliar spray reduces fruit splitting.",
      pruningThinningCanopy: "Train to multi-stem (3–4 main stems) or single stem goblet. Remove water sprouts and root suckers continuously.",
      pestAndDiseaseManagement: "Pomegranate Fruit Borer (Virachola isocrates) controlled by bagging young fruits with non-woven bags at marble size.",
      harvestingIndices: "Metallic sound upon tapping, flattening of rind ribs, and deep red aril color.",
      curingAndPostHarvest: "Careful hand clipping with secateurs. Grade by size and skin blemish. Store at 5°C, 90% RH for up to 3 months."
    },
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Pomegranate Fruit Borer / Anar Butterfly (Virachola isocrates)",
          localUrduName: "انار کی تتلی اور سنڈی",
          symptoms: "Circular exit holes on fruit rind with protruding blackish excreta, internal aril rot followed by secondary fungal entry.",
          organicCure: "Fruit bagging with non-woven polypropylene bags or butter paper at marble size; releasing Trichogramma chilonis wasps.",
          chemicalCure: "Chlorantraniliprole 18.5SC @ 0.3ml/L or Emamectin Benzoate 1.9EC @ 1.5ml/L at flowering & fruit set.",
          applicationDose: "0.3ml/L Chlorantraniliprole",
          sprayTiming: "Two sprays at 15-day intervals starting immediately after fruit set",
          urgency: "Critical"
        },
        {
          pestName: "Bark Eating Caterpillar (Indarbela quadrinotata)",
          localUrduName: "چھال کھانے والی سنڈی",
          symptoms: "Ribbon-like webs of silk, wood chips, and frass on tree trunk joints and branch crotches, weakening limbs.",
          organicCure: "Clean webbing and inject kerosene or neem oil into boreholes, then seal with clay.",
          chemicalCure: "Dichlorvos 76EC or Chlorpyrifos 40EC @ 5ml/borehole sealed with mud.",
          applicationDose: "5ml Chlorpyrifos emulsion per hole",
          sprayTiming: "Post-harvest autumn trunk check (October)",
          urgency: "High"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Bacterial Blight / Oily Spot (Xanthomonas axonopodis pv. punicae)",
          causalAgent: "Xanthomonas axonopodis",
          symptoms: "Dark brown to black water-soaked oily angular spots on leaves, stems and 'L' shaped cracking on fruit rind.",
          preventativeCare: "Sterilize secateurs with 2.5% sodium hypochlorite; cut diseased twigs 5 cm below infection point.",
          chemicalCure: "Streptocycline (Bactericide) @ 0.5g/L + Copper Oxychloride 50WP @ 2.5g/L.",
          applicationTiming: "Before monsoon and immediately after hailstorms"
        },
        {
          diseaseName: "Fruit Rind Cracking & Anthracnose (Colletotrichum gloeosporioides)",
          causalAgent: "Colletotrichum gloeosporioides & Boron deficiency",
          symptoms: "Circular sunken brown spots on rind, splitting of rind exposing arils during hot dry winds followed by sudden irrigation.",
          preventativeCare: "Maintain regular drip irrigation intervals to prevent moisture stress fluctuations.",
          chemicalCure: "Boron foliar spray (Solubor @ 1.5g/L) + Azoxystrobin 23SC @ 1ml/L.",
          applicationTiming: "During fruit enlargement (July–August)"
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "DAP 350g + Potassium Sulfate (SOP) 400g per bush in late January before spring bud burst.",
        vegetativeStage: "Urea 250g in mid-March to promote vigorous vegetative shoots.",
        floweringFruiting: "Sulfate of Potash (SOP) 350g + Calcium Nitrate 200g in June for aril sweetness and rind thickness.",
        foliarMicronutrients: "Foliar Solubor (Boron 20%) @ 1.5g/L + Zinc EDTA @ 1g/L sprayed in May and July."
      },
      organicAndBioFertilizers: {
        fymRequirement: "25 – 35 kg well-composted farmyard manure incorporated in a circular trench 60 cm away from trunk in December.",
        greenManuring: "Sow Sesbania or Cowpea in orchard alleys during spring and incorporate as green mulch in June.",
        bioStimulants: "Humic acid 50ml/plant + Pseudomonas fluorescens bio-fungicide drench.",
        saltReclamationGypsum: "Apply 5 – 8 kg gypsum per tree basin on calcareous soils with high sodium adsorption ratios."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Precision laser leveling to zero slope for uniform water distribution across Panjgur and Loralai oases.",
      hardpanSubsoilingDepth: "Subsoiling down to 60 – 80 cm to promote deep taproot penetration in alluvial terraces.",
      bedRidgeDimensions: "Raised planting beds 30 cm high and 1.5m wide; multi-stem clumps spaced at 5m x 4m.",
      drainageAndBundSpecs: "Peripheral drainage trenches (60 cm depth) to evacuate heavy flash flood runoff."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Karez turn every 7 – 10 days during fruit enlargement, strictly avoiding sudden dry-to-flood swings.",
      dripFlowRateAndHours: "2 pressure-compensating button drippers (8 L/hr each) run 3 – 4 hours every 2 days in summer.",
      pruningTrainingSystem: "Multi-stem training (3 – 4 dominant trunks) or modified central goblet; annual removal of suckers.",
      thinningAndCanopyManagement: "Thin crowded clusters to 1 fruit per node within 45 days after flowering to reach premium 400g+ fruit size."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Karachi Port to UAE & GCC", "Taftan Border (Iran trade corridor)", "Quetta Fruit Mandi"],
      quarantineAndPhytosanitary: "DPP phytosanitary inspection ensuring zero presence of fruit borer pupae or bacterial blight spots.",
      importSubstitutionImpact: "Loralai & Panjgur Kandahari pomegranates replace over $45M in imported ruby pomegranates annually.",
      coldChainAndPackagingStandards: "Graded by weight (Super >400g, Grade A 300–400g), cushioned in paper shreds, packed in 5kg ventilated cartons, stored at 5°C."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["February", "March"],
      floweringOrBloomMonths: ["April", "May"],
      fruitGrowthMonths: ["June", "July", "August"],
      harvestMonths: ["September", "October", "November"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Quetta", "Karachi", "Sukkur", "Lahore", "Multan"],
      exportDestinations: ["United Arab Emirates", "Saudi Arabia", "Iran", "Oman"],
      processingAndValueAddition: "Pomegranate juice, Anardana (dried sour arils used in Pakistani spices), and pomegranate molasses.",
      avgFarmGatePricePkrKg: "PKR 220 – 420 / kg (Kandahari Extra Bold: PKR 500 / kg)",
      economicSignificance: "High profit margin per hectare; renowned across Pakistan for unmatched sweetness and deep red aril coloration."
    }
  },

  // 4. MANGO (MANGIFERA INDICA) - Kech Tropical Emerald
  {
    id: "mango",
    name: "Mango",
    localBalochiName: "آمب (Aamb)",
    localUrduName: "آم (Aam)",
    scientificName: "Mangifera indica L.",
    category: "Orchard & Fruit Tree",
    iconType: "mango",
    majorDistricts: ["Kech (Turbat)", "Gwadar", "Lasbela", "Hub", "Panjgur (lower micro-climates)"],
    primaryProductionHub: "Kech Valley (Turbat, Tump, Mand) & Lasbela Coastal Plain",
    varietiesOrCultivars: ["Sindhri", "Chaunsa", "Langra", "Anwar Ratol", "Dusehri", "Desi Turbati Aamb"],
    balochistanStats: {
      totalAcreageHectares: 9400,
      annualProductionMT: 48000,
      nationalSharePercent: 2.8,
      avgYieldPerHa: "5.1 MT/ha",
      currentSeasonStatus: "Pre-Flowering Floral Bud Induction Phase"
    },
    soilRequirements: {
      soilType: "Deep alluvial silt loam with minimum 2.5m rooting depth.",
      phRange: "6.5 – 7.9",
      salinityTolerance: "Moderate to Sensitive (EC <2.5 dS/m)",
      organicMatter: "50 kg farmyard manure per tree applied in autumn.",
      drainageNeeds: "High; cannot tolerate subsoil water stagnation."
    },
    waterRequirements: {
      annualWaterNeedMm: "1,000 – 1,400 mm",
      criticalStages: ["Panicle Emergence (Feb–Mar)", "Fruit Set (April)", "Fruit Sizing (May)"],
      irrigationMethods: ["Basin ring method (keeping trunk dry)", "Drip irrigation"],
      waterQualityTolerance: "Fresh water (<1,000 ppm TDS)."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "27°C – 42°C (Turbat's warm spring produces earliest fruit maturity in Pakistan)",
      maxHeatToleranceC: 48,
      minFrostToleranceC: 1,
      chillHoursOrGdd: "Zero chilling; requires 2–3 months of dry cool weather to induce flowering.",
      rainfallAndHumidityImpact: "Dry flowering season in Kech ensures near 100% pollination success without anthracnose disease."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Veneer or side grafting on hardy indigenous Balochi rootstocks.",
      landPreparation: "Deep ploughing, 1m x 1m pits filled with silt, manure, and superphosphate.",
      spacingAndPlanting: "Square 9m x 9m or high-density 6m x 4m. Plant in February–March or August–September.",
      irrigationAndFertilizer: "NPK 1000:500:1000 g per mature tree plus micronutrient sprays (B, Zn, Fe).",
      pruningThinningCanopy: "Center opening pruning post-harvest. Remove dead wood and crisscross branches.",
      pestAndDiseaseManagement: "Mango Hopper and Mealybug managed with neem oil and imidacloprid. Mango Sudden Death monitored.",
      harvestingIndices: "Shoulder filling, depression around pedicel, specific gravity 1.01–1.02.",
      curingAndPostHarvest: "Harvest with 1 cm stem attached to prevent sap burn. Wash, hot-water dip, and pack in corrugated cartons."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["March", "September"],
      floweringOrBloomMonths: ["February", "March"],
      fruitGrowthMonths: ["April", "May"],
      harvestMonths: ["Late May", "June", "July"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Karachi Sabzi Mandi", "Quetta", "Hub", "Turbat Local Mandi"],
      exportDestinations: ["Iran (Taftan & Rimdan Border)", "Oman (via Gwadar Port)", "UAE"],
      processingAndValueAddition: "Mango pulp, pickle (Achar), dried mango slices (Amchur).",
      avgFarmGatePricePkrKg: "PKR 180 – 350 / kg",
      economicSignificance: "Matures 15–20 days earlier than Punjab mangoes, fetching premium early-season market prices."
    }
  },

  // 5. ONION (ALLIUM CEPA) - Balochistan's Vital Vegetable Engine
  {
    id: "onion",
    name: "Onion",
    localBalochiName: "پیاس (Pyas)",
    localUrduName: "پیاز (Piyaz)",
    scientificName: "Allium cepa L.",
    category: "Vegetable",
    iconType: "vegetable",
    majorDistricts: ["Kalat", "Mastung", "Kech (Turbat)", "Khuzdar", "Chagai", "Kharan", "Lasbela"],
    primaryProductionHub: "Kalat & Mastung Plateau (Kharif/Autumn) and Kech Valley (Rabi/Winter)",
    varietiesOrCultivars: ["Phulkara", "Sariab Surkh", "Swat-1", "Desi Kechi Red", "Golden Bell"],
    balochistanStats: {
      totalAcreageHectares: 48600,
      annualProductionMT: 720000,
      nationalSharePercent: 36.5,
      avgYieldPerHa: "14.8 MT/ha (Progressive growers achieve up to 26 MT/ha)",
      currentSeasonStatus: "Winter Crop Growth & Transplanting Phase"
    },
    soilRequirements: {
      soilType: "Friable sandy loam to silt loam with high organic humus; completely free of gravel.",
      phRange: "6.0 – 7.5",
      salinityTolerance: "Moderately Sensitive (Yield drops significantly above 2.0 dS/m)",
      organicMatter: "Incorporate 25 tonnes decomposed manure per hectare during seedbed prep.",
      drainageNeeds: "Must be well-drained to prevent bulb rot (Basal rot)."
    },
    waterRequirements: {
      annualWaterNeedMm: "450 – 650 mm",
      criticalStages: ["Nursery transplanting", "Vegetative leaf development", "Bulb initiation & swelling"],
      irrigationMethods: ["Raised bed furrow irrigation", "Drip irrigation with inline drippers"],
      waterQualityTolerance: "Sensitive to saline water; EC <1.2 dS/m ideal."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "13°C – 24°C for vegetative growth, 20°C – 32°C for bulb ripening",
      maxHeatToleranceC: 40,
      minFrostToleranceC: -3,
      chillHoursOrGdd: "Requires intermediate to short-day photoperiod depending on season",
      rainfallAndHumidityImpact: "Persistent humidity induces Purple Blotch (Alternaria porri); dry air required during bulb curing."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Sow 8–10 kg certified seed per hectare in raised nursery beds treated with Trichoderma.",
      landPreparation: "Plough 4–5 times, plank to fine tilth, make broad beds (1m wide) or ridges (60cm apart).",
      spacingAndPlanting: "Transplant 6–8 week old seedlings at 15cm row spacing and 10cm plant spacing.",
      irrigationAndFertilizer: "NPK 120:80:100 kg/ha. Apply potash in 2 splits for bulb firmness and shelf life.",
      pruningThinningCanopy: "Keep seedbed weed-free during first 60 days. Withhold irrigation 10 days before harvest.",
      pestAndDiseaseManagement: "Thrips (Thrips tabaci) controlled with spinosad or imidacloprid; Purple Blotch treated with mancozeb.",
      harvestingIndices: "Harvest when 50–70% of tops have fallen over naturally (neck break).",
      curingAndPostHarvest: "Windrow field cure for 3–5 days, trim neck leaving 2.5cm, grade, and store in well-ventilated sheds."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["August", "September (Kech)", "March", "April (Kalat/Mastung)"],
      floweringOrBloomMonths: ["Seed crop: February–March"],
      fruitGrowthMonths: ["Bulb swelling: October–December / June–July"],
      harvestMonths: ["January–March (Turbat/Kech)", "August–October (Kalat/Mastung)"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Karachi (Powers Karachi market during Autumn gap)", "Lahore", "Faisalabad", "Rawalpindi"],
      exportDestinations: ["Sri Lanka", "Bangladesh", "Malaysia", "UAE", "Oman"],
      processingAndValueAddition: "Dehydrated onion flakes, onion powder, cold storage.",
      avgFarmGatePricePkrKg: "PKR 55 – 140 / kg (Peak seasonal scarcity up to PKR 220 / kg)",
      economicSignificance: "Crucial national inflation anchor; Balochistan supplies entire Pakistan during July–October window."
    }
  },

  // 6. TOMATO (SOLANUM LYCOPERSICUM) - High Yield Horticultural Cash Crop
  {
    id: "tomato",
    name: "Tomato",
    localBalochiName: "ٹماٹر (Tamatar)",
    localUrduName: "ٹماٹر (Tamatar)",
    scientificName: "Solanum lycopersicum L.",
    category: "Vegetable",
    iconType: "tomato",
    majorDistricts: ["Barkhan", "Lasbela", "Kech (Turbat)", "Loralai", "Killa Saifullah", "Musa Khel", "Khuzdar"],
    primaryProductionHub: "Barkhan Valley & Lasbela Coastal Plain",
    varietiesOrCultivars: ["Roma VF", "Sahil Hybrid", "Nagina", "Rio Grande", "Avinash Hybrid"],
    balochistanStats: {
      totalAcreageHectares: 24500,
      annualProductionMT: 275000,
      nationalSharePercent: 38.0,
      avgYieldPerHa: "11.2 MT/ha (Hybrid tunnel farming up to 35 MT/ha)",
      currentSeasonStatus: "Active Vegetative Growth & Early Harvest"
    },
    soilRequirements: {
      soilType: "Fertile sandy loam to loam, rich in decomposed organic matter.",
      phRange: "6.0 – 7.5",
      salinityTolerance: "Moderate (Yield decreases above 2.5 dS/m)",
      organicMatter: "30 tonnes/ha composted manure incorporated deeply.",
      drainageNeeds: "Well-drained; highly susceptible to damping off and Fusarium wilt in waterlogged soil."
    },
    waterRequirements: {
      annualWaterNeedMm: "500 – 700 mm",
      criticalStages: ["Transplanting establishment", "Flowering", "Fruit development & sizing"],
      irrigationMethods: ["Drip fertigation", "Alternate furrow irrigation"],
      waterQualityTolerance: "Tolerates EC up to 1.5 dS/m."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "20°C – 28°C daytime, 15°C – 18°C nighttime",
      maxHeatToleranceC: 38,
      minFrostToleranceC: 0,
      chillHoursOrGdd: "Zero chilling; night temperatures >26°C cause floral abscission (blossom drop).",
      rainfallAndHumidityImpact: "High humidity triggers Early Blight and Late Blight; requires sunny arid climate."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Sow hybrid seed (150–200 g/ha) in plug trays with cocopeat and peat moss.",
      landPreparation: "Plough, disc harrow, form raised beds 1.2m wide with drip lines and silver-on-black plastic mulch.",
      spacingAndPlanting: "Space rows 120cm apart, plants 40cm apart (approx 20,000 plants/ha).",
      irrigationAndFertilizer: "Fertigate with balanced NPK (150:100:150 kg/ha) plus soluble calcium nitrate to prevent blossom end rot.",
      pruningThinningCanopy: "Stake indeterminate plants with wooden stakes or string trellises; prune lower sucker leaves.",
      pestAndDiseaseManagement: "Whitefly (vector of TYLCV virus) controlled with yellow sticky traps and acetamiprid. Fruit borer controlled with spinetoram.",
      harvestingIndices: "Harvest at breaker stage for long-distance transport, or firm red stage for local consumption.",
      curingAndPostHarvest: "Harvest in cool morning, pack in ventilated wooden or plastic crates, precool to 12°C."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["September–October (Lasbela/Turbat)", "February–March (Barkhan/Loralai)"],
      floweringOrBloomMonths: ["November–December / April–May"],
      fruitGrowthMonths: ["December–January / May–June"],
      harvestMonths: ["January–April (Southern plains)", "June–September (Northern valleys)"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Karachi", "Quetta", "Lahore", "Multan", "Islamabad"],
      exportDestinations: ["Afghanistan", "UAE", "Iran"],
      processingAndValueAddition: "Tomato paste, ketchup, sun-dried tomatoes.",
      avgFarmGatePricePkrKg: "PKR 40 – 120 / kg (Seasonal peaks up to PKR 200 / kg)",
      economicSignificance: "Supplies the massive Karachi metropolis with winter tomatoes when Punjab is dormant."
    }
  },

  // 7. OLIVE (OLEA EUROPAEA) - The Green Revolution of Balochistan
  {
    id: "olive",
    name: "Olive",
    localBalochiName: "زیتون (Zaitoon)",
    localUrduName: "زیتون (Zaitoon)",
    scientificName: "Olea europaea L.",
    category: "Orchard & Fruit Tree",
    iconType: "olive",
    majorDistricts: ["Khuzdar", "Loralai", "Kech (Turbat)", "Zhob", "Barkhan", "Killa Saifullah", "Musakhel"],
    primaryProductionHub: "Khuzdar Valley & Loralai Plateau",
    varietiesOrCultivars: ["Arbequina (High oil, early)", "Coratina (High polyphenol)", "Leccino", "Frantoio", "Pendolino", "Bari Zaitoon-1"],
    balochistanStats: {
      totalAcreageHectares: 12500,
      annualProductionMT: 18500,
      nationalSharePercent: 62.0,
      avgYieldPerHa: "2.8 MT/ha (Mature irrigated orchards achieve 5–7 MT/ha)",
      currentSeasonStatus: "Winter Pruning & Pre-Bloom Maintenance Phase"
    },
    soilRequirements: {
      soilType: "Calciphile plant; thrives on calcareous gravelly sandy loam and limestone hillsides.",
      phRange: "7.0 – 8.5 (Highly tolerant to alkaline soils)",
      salinityTolerance: "High (Tolerates electrical conductivity up to 4.0 dS/m)",
      organicMatter: "20 kg FYM per plant applied every alternate year.",
      drainageNeeds: "Demands perfect drainage; extremely sensitive to standing water."
    },
    waterRequirements: {
      annualWaterNeedMm: "450 – 700 mm (Drought hardy once established)",
      criticalStages: ["Flower Bud Differentiation (Feb)", "Fruit Set (April)", "Pit Hardening (July–August)"],
      irrigationMethods: ["Drip irrigation (super low water consumption: 35 L/tree/day)"],
      waterQualityTolerance: "Tolerates slightly brackish water up to 2,500 ppm TDS."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "20°C – 32°C for oil accumulation",
      maxHeatToleranceC: 44,
      minFrostToleranceC: -9,
      chillHoursOrGdd: "Requires 200 – 400 chilling hours (<7.2°C) for floral vernalization.",
      rainfallAndHumidityImpact: "Low atmospheric humidity in Balochistan prevents Olive Peacock Spot (Spilocaea oleaginea)."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Propagate via semi-hardwood cuttings under intermittent misting chambers.",
      landPreparation: "Terracing of foothills, subsoiling, and planting pits 60cm x 60cm.",
      spacingAndPlanting: "Standard 6m x 5m (333 trees/ha) or super high density 4m x 2m (1,250 trees/ha). Plant in spring (Feb–Mar).",
      irrigationAndFertilizer: "NPK 400:200:400 g/tree plus foliar Boron during flowering.",
      pruningThinningCanopy: "Polyconic vase system to maximize solar penetration to fruit-bearing shoots.",
      pestAndDiseaseManagement: "Olive Fruit Fly (Bactrocera oleae) monitored with McPhail traps; Olive Lace Bug treated with organic soaps.",
      harvestingIndices: "Skin color turning from green to violet/black (Jaen index 3.5–4.5 for premier extra virgin oil).",
      curingAndPostHarvest: "Harvest gently with pneumatic vibrating combs; press within 24 hours at <27°C (Cold Pressed)."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["February", "March", "October"],
      floweringOrBloomMonths: ["April", "Early May"],
      fruitGrowthMonths: ["June", "July", "August", "September"],
      harvestMonths: ["October", "November"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Quetta Extraction Mills", "Lahore", "Karachi Gourmet Stores", "Islamabad"],
      exportDestinations: ["Emerging export potential to Gulf and domestic substitution of imported edible oils."],
      processingAndValueAddition: "Extra Virgin Olive Oil (EVOO), table olive brining, olive leaf tea.",
      avgFarmGatePricePkrKg: "Fresh Fruit: PKR 140–200 / kg • Extra Virgin Oil: PKR 2,800–3,500 / Liter",
      economicSignificance: "Strategic crop for Pakistan's edible oil import bill reduction; transformational for Khuzdar."
    }
  },

  // 8. WHEAT (TRITICUM AESTIVUM) - Food Security Lifeblood
  {
    id: "wheat",
    name: "Wheat",
    localBalochiName: "دانشیک / گندم (Danisheek / Gandum)",
    localUrduName: "گندم (Gandum)",
    scientificName: "Triticum aestivum L.",
    category: "Field & Cash Crop",
    iconType: "wheat",
    majorDistricts: ["Nasirabad", "Jaffarabad", "Kech (Turbat)", "Panjgur", "Khuzdar", "Lasbela", "Pishin"],
    primaryProductionHub: "Nasirabad Canal Command & Kech Karez Basins",
    varietiesOrCultivars: ["Zardana", "Roshan", "Akbar-19", "Fakhr-e-Bhakkar", "Ufaq", "Kech Local Wheat"],
    balochistanStats: {
      totalAcreageHectares: 385000,
      annualProductionMT: 1150000,
      nationalSharePercent: 4.8,
      avgYieldPerHa: "2.9 MT/ha (Canal command yields up to 4.5 MT/ha)",
      currentSeasonStatus: "Vegetative Tillering & Jointing Stage"
    },
    soilRequirements: {
      soilType: "Heavy silt loams to clay loams in canal plains; alluvial loams in river valleys.",
      phRange: "6.5 – 8.2",
      salinityTolerance: "Moderate (Tolerant up to 3.0 dS/m)",
      organicMatter: "Responds well to green manuring (Sesbania) in rotation.",
      drainageNeeds: "Requires adequate internal drainage to avoid waterlogging at germination."
    },
    waterRequirements: {
      annualWaterNeedMm: "400 – 550 mm",
      criticalStages: ["Crown Root Initiation (21 days post-sowing)", "Tillering", "Booting/Heading", "Grain Milky Filling"],
      irrigationMethods: ["Border strip flood", "Karez Warabandi gravity channels", "Furrows"],
      waterQualityTolerance: "Tolerates up to 1,800 ppm TDS."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "15°C – 24°C during vegetative stage, 22°C – 28°C during grain filling",
      maxHeatToleranceC: 38,
      minFrostToleranceC: -6,
      chillHoursOrGdd: "Mild vernalization requirement for winter wheat cultivars.",
      rainfallAndHumidityImpact: "Dry warm weather required at maturity to prevent lodging and fungal grain blackening."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Direct seed drill; treat seed with fludioxonil or imidacloprid to prevent loose smut.",
      landPreparation: "Plough with disc harrow, rotavator, and laser level to ensure uniform water spread.",
      spacingAndPlanting: "Drill in rows 20–22cm apart at seed rate of 125 kg/ha. Sow from mid-October to end-November.",
      irrigationAndFertilizer: "NPK 120:80:60 kg/ha. Apply all P and K at basal sowing; apply nitrogen in 3 equal splits.",
      pruningThinningCanopy: "Apply post-emergence broadleaf weedicides (Bromoxynil + MCPA) at 35 days post-sowing.",
      pestAndDiseaseManagement: "Aphids (Rhopalosiphum padi) and Yellow Rust (Puccinia striiformis) monitored and treated.",
      harvestingIndices: "Moisture content in grain <12%, straw turns golden yellow, grains crack cleanly under teeth.",
      curingAndPostHarvest: "Combine harvester or manual reaper, threshing, and storage in airtight metal bins or silos."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["October", "November", "Early December"],
      floweringOrBloomMonths: ["February", "Early March"],
      fruitGrowthMonths: ["March", "Early April"],
      harvestMonths: ["April (Kech/Nasirabad)", "May (Uplands)"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Government Food Department Procurement Centers", "Quetta Flour Mills", "Karachi"],
      exportDestinations: ["Inter-provincial transfer and strategic reserve."],
      processingAndValueAddition: "Whole wheat atta, maida, suji, wheat bran for livestock feed.",
      avgFarmGatePricePkrKg: "PKR 95 – 115 / kg (Government Support Price ~PKR 3,900 / 40kg bag)",
      economicSignificance: "Provincial food sovereignty pillar; Nasirabad is the breadbasket of Balochistan."
    }
  },

  // 9. GRAPES (VITIS VINIFERA) - Sweet Clusters of Pishin & Panjgur
  {
    id: "grapes",
    name: "Grapes",
    localBalochiName: "انگور (Angoor)",
    localUrduName: "انگور (Angoor)",
    scientificName: "Vitis vinifera L.",
    category: "Orchard & Fruit Tree",
    iconType: "grapes",
    majorDistricts: ["Pishin", "Quetta", "Killa Abdullah", "Kalat", "Panjgur", "Mastang"],
    primaryProductionHub: "Pishin & Killa Abdullah Highlands",
    varietiesOrCultivars: ["Kishmishi (Seedless, sweet)", "Haitha (Large white oval)", "Sundarkhani (Long crisp)", "Black Monukka", "Kandahari"],
    balochistanStats: {
      totalAcreageHectares: 15400,
      annualProductionMT: 78000,
      nationalSharePercent: 91.5,
      avgYieldPerHa: "5.1 MT/ha (Trellis vineyards yield up to 12 MT/ha)",
      currentSeasonStatus: "Winter Dormancy & Cane Pruning Phase"
    },
    soilRequirements: {
      soilType: "Deep, gravelly sandy loam with high calcium carbonate; loves stony slope terraces.",
      phRange: "6.8 – 8.2",
      salinityTolerance: "Moderate (Sensitive to chloride and boron toxicity)",
      organicMatter: "25 kg FYM per vine in winter.",
      drainageNeeds: "Must be freely drained; roots penetrate up to 4 meters searching for moisture."
    },
    waterRequirements: {
      annualWaterNeedMm: "500 – 750 mm",
      criticalStages: ["Bud burst (March)", "Berry set & pea size (May)", "Veraison color change (July)"],
      irrigationMethods: ["Drip irrigation", "Traditional trench/pit system"],
      waterQualityTolerance: "TDS <800 ppm."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "22°C – 34°C during ripening",
      maxHeatToleranceC: 40,
      minFrostToleranceC: -12,
      chillHoursOrGdd: "Requires 300 – 600 chilling hours; cold winters ensure synchronous bud burst.",
      rainfallAndHumidityImpact: "Dry sunny summers prevent Downy Mildew and berry splitting."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Hardwood cuttings (30cm) rooted in nursery beds during January.",
      landPreparation: "Deep trenching (60cm deep), incorporation of compost and superphosphate.",
      spacingAndPlanting: "Trellised: 3m x 2m (1,666 vines/ha); Traditional trench: 4m x 3m.",
      irrigationAndFertilizer: "NPK 250:150:300 g/vine plus potassium sulfate during berry sizing.",
      pruningThinningCanopy: "Cane pruning or spur pruning during January dormancy. Shoot positioning and leaf removal.",
      pestAndDiseaseManagement: "Powdery Mildew (Erysiphe necator) dusted with elemental sulfur. Grape berry moth controlled.",
      harvestingIndices: "Sugar level >18° Brix, pedicel browning, translucent skin.",
      curingAndPostHarvest: "Harvest in morning, cull bad berries, pack with SO₂ pads in ventilated cartons at 0°C."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["January", "February"],
      floweringOrBloomMonths: ["April"],
      fruitGrowthMonths: ["May", "June", "July"],
      harvestMonths: ["July", "August", "September", "October"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Quetta", "Karachi", "Lahore", "Islamabad", "Peshawar"],
      exportDestinations: ["Afghanistan", "UAE", "Saudi Arabia"],
      processingAndValueAddition: "Kishmish (sun-dried golden raisins), grape juice, grape jam.",
      avgFarmGatePricePkrKg: "PKR 160 – 320 / kg (Sundarkhani Premium: PKR 450 / kg)",
      economicSignificance: "Balochistan produces over 90% of Pakistan's commercial table grapes."
    }
  },

  // 10. PAPAYA (CARICA PAPAYA) - Coastal Lasbela Tropical Gold
  {
    id: "papaya",
    name: "Papaya",
    localBalochiName: "پپیتا (Papita)",
    localUrduName: "پپیتا (Papita)",
    scientificName: "Carica papaya L.",
    category: "Orchard & Fruit Tree",
    iconType: "papaya",
    majorDistricts: ["Lasbela", "Hub", "Gwadar (coastal pockets)", "Kech (sheltered micro-climates)"],
    primaryProductionHub: "Lasbela & Hub Coastal Belt (Uthal, Bela, Hub)",
    varietiesOrCultivars: ["Red Lady 786 (Taiwanese Hybrid)", "Solo", "Honey Dew", "Sindh Green"],
    balochistanStats: {
      totalAcreageHectares: 3200,
      annualProductionMT: 42000,
      nationalSharePercent: 32.0,
      avgYieldPerHa: "13.1 MT/ha (Red Lady intensive plantings achieve 35 MT/ha)",
      currentSeasonStatus: "Year-Round Continuous Harvesting & Fruit Setting"
    },
    soilRequirements: {
      soilType: "Deep, rich, well-drained sandy loam or alluvial soil.",
      phRange: "6.0 – 7.5",
      salinityTolerance: "Sensitive to Moderately Sensitive (EC <2.0 dS/m)",
      organicMatter: "Incorporate 20 kg compost per planting pit.",
      drainageNeeds: "Extreme drainage sensitivity; standing water for >24 hours kills roots via Pythium."
    },
    waterRequirements: {
      annualWaterNeedMm: "1,200 – 1,500 mm",
      criticalStages: ["Continuous need throughout vegetative, flowering, and fruiting phases"],
      irrigationMethods: ["Drip irrigation (prevents collar rot)", "Raised bed furrow"],
      waterQualityTolerance: "Prefers low salinity water (<800 ppm TDS)."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "24°C – 35°C year-round maritime climate",
      maxHeatToleranceC: 44,
      minFrostToleranceC: 2,
      chillHoursOrGdd: "Zero chilling; frost causes immediate mortality.",
      rainfallAndHumidityImpact: "Thrives in warm coastal breeze of Lasbela; protected from inland desert frosts."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Sow F1 hybrid seeds in polybags; germinate in 15–20 days under nursery net.",
      landPreparation: "Deep ploughing, broad beds or mounds 30cm above ground level.",
      spacingAndPlanting: "Square 2m x 2m (2,500 plants/ha). Transplant seedlings at 45 days old.",
      irrigationAndFertilizer: "NPK 250:250:500 g/plant/year applied monthly in small doses via fertigation.",
      pruningThinningCanopy: "Remove side shoots (suckers); keep 1 fruit per node if clusters are overcrowded.",
      pestAndDiseaseManagement: "Papaya Mealybug (Paracoccus marginatus) managed with parasitoid Acerophagus papayae and neem oil.",
      harvestingIndices: "Harvest when fruit skin shows 1–2 yellow streaks (color break) for shipping.",
      curingAndPostHarvest: "Hand pick with gentle twist, wash latex off, wrap in foam nets, pack in cartons."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["February–March", "August–September"],
      floweringOrBloomMonths: ["Continuous (starts 4 months post-planting)"],
      fruitGrowthMonths: ["Continuous (5 months from flower to ripe fruit)"],
      harvestMonths: ["All Year Round (Peak: October to April)"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Karachi (Supplies the major metropolitan fruit demand)", "Quetta", "Hyderabad"],
      exportDestinations: ["Emerging exports to UAE and Oman."],
      processingAndValueAddition: "Papain enzyme extraction, candied papaya (tutti-frutti), fresh fruit salads.",
      avgFarmGatePricePkrKg: "PKR 80 – 160 / kg",
      economicSignificance: "Rapid cash flow crop; begins yielding within 9 months of planting with year-round harvest."
    }
  },

  // 11. ALMOND (PRUNUS DULCIS) - The Nut King of Loralai & Ziarat
  {
    id: "almond",
    name: "Almond",
    localBalochiName: "بادام (Badam)",
    localUrduName: "بادام (Badam)",
    scientificName: "Prunus dulcis (Mill.) D.A.Webb",
    category: "Orchard & Fruit Tree",
    iconType: "almond",
    majorDistricts: ["Loralai", "Barkhan", "Ziarat", "Kalat", "Pishin", "Killa Saifullah"],
    primaryProductionHub: "Loralai Plateau & Ziarat Foothills",
    varietiesOrCultivars: ["Nonpareil", "Kaghazi (Soft Shell)", "Pathak", "Ne Plus Ultra", "Desi Makrani Badam"],
    balochistanStats: {
      totalAcreageHectares: 11800,
      annualProductionMT: 26500,
      nationalSharePercent: 93.0,
      avgYieldPerHa: "2.2 MT/ha (Dry in-shell)",
      currentSeasonStatus: "Post-Harvest Drying & Winter Rest Preparation"
    },
    soilRequirements: {
      soilType: "Deep, well-aerated gravelly sandy loam with high drainage capacity; intolerant of standing water.",
      phRange: "7.0 – 8.4",
      salinityTolerance: "Sensitive (EC <1.5 dS/m)",
      organicMatter: "25 kg well-composted manure incorporated in autumn.",
      drainageNeeds: "Exceptional drainage required; susceptible to Phytophthora root rot."
    },
    waterRequirements: {
      annualWaterNeedMm: "550 – 800 mm",
      criticalStages: ["Bloom & Fruit Set (Feb–Mar)", "Nut Sizing (April–May)", "Kernel Filling (June–July)"],
      irrigationMethods: ["Drip irrigation", "Ring basin irrigation keeping trunk dry"],
      waterQualityTolerance: "TDS <800 ppm; sensitive to excess boron and chloride."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "15°C – 30°C",
      maxHeatToleranceC: 40,
      minFrostToleranceC: -15,
      chillHoursOrGdd: "Requires 300 – 600 chilling hours (<7.2°C); early bloom makes it vulnerable to late spring frost.",
      rainfallAndHumidityImpact: "Dry sunny summers prevent hull rot and kernel mold."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "T-budding on wild bitter almond (Prunus webbii) rootstocks resistant to lime and drought.",
      landPreparation: "Subsoiling to 80cm, laser terrace leveling, and 60cm x 60cm planting pits.",
      spacingAndPlanting: "6m x 5m (333 trees/ha). Plant in January–February during complete dormancy.",
      irrigationAndFertilizer: "NPK 500:250:500 g/tree plus foliar zinc and boron during early bloom.",
      pruningThinningCanopy: "Modified open-center goblet system to allow maximum sunlight into fruiting spurs.",
      pestAndDiseaseManagement: "Almond Bark Beetle and Peach Twig Borer managed with pheromone traps and winter dormant oil.",
      harvestingIndices: "Hull splits along suture exposing clean light-brown shell (95% hull split across canopy).",
      curingAndPostHarvest: "Knock nuts onto tarpaulins, de-hull within 48 hours, and sun-dry to <6% moisture."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["January", "February"],
      floweringOrBloomMonths: ["Late February", "March"],
      fruitGrowthMonths: ["April", "May", "June"],
      harvestMonths: ["July", "August", "September"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Quetta Dry Fruit Mandi", "Karachi", "Lahore", "Islamabad"],
      exportDestinations: ["Middle East, Central Asia, and premium domestic gift markets."],
      processingAndValueAddition: "De-shelling, roasted salted almonds, badam oil, badam halwa.",
      avgFarmGatePricePkrKg: "PKR 750 – 1,400 / kg (Kaghazi Extra: PKR 1,800 / kg)",
      economicSignificance: "Supplies over 93% of Pakistan's indigenous dry almonds; high-value storage-stable mountain crop."
    }
  },

  // 12. SWEET CHERRY (PRUNUS AVIUM) - High Altitude Ruby of Ziarat
  {
    id: "cherry",
    name: "Sweet Cherry",
    localBalochiName: "گیلاس (Gilas)",
    localUrduName: "چیری / گیلاس (Cherry / Gilas)",
    scientificName: "Prunus avium (L.) L.",
    category: "Orchard & Fruit Tree",
    iconType: "cherry",
    majorDistricts: ["Ziarat", "Kalat", "Pishin", "Quetta"],
    primaryProductionHub: "Ziarat Juniper Valley (2,200m – 2,600m MSL)",
    varietiesOrCultivars: ["Bing", "Stella (Self-fertile)", "Lapins", "Black Tartarian", "Local Ziarati Red"],
    balochistanStats: {
      totalAcreageHectares: 2950,
      annualProductionMT: 4800,
      nationalSharePercent: 68.0,
      avgYieldPerHa: "1.6 MT/ha (Mature high-altitude orchards up to 4 MT/ha)",
      currentSeasonStatus: "Dormant Pre-Winter Conditioning Phase"
    },
    soilRequirements: {
      soilType: "Deep, fertile, well-aerated sandy loam with porous subsoil; strictly avoids heavy clay.",
      phRange: "6.5 – 7.5",
      salinityTolerance: "Very Sensitive (EC <1.2 dS/m)",
      organicMatter: "30 kg rich leaf compost per tree in late autumn.",
      drainageNeeds: "Must be freely drained; intolerant of wet feet for more than 12 hours."
    },
    waterRequirements: {
      annualWaterNeedMm: "700 – 950 mm",
      criticalStages: ["Blossom Flush (April)", "Fruit Swelling (May)", "Pre-Harvest Sizing (June)"],
      irrigationMethods: ["Drip irrigation (prevents fruit cracking from overhead splashing)"],
      waterQualityTolerance: "TDS <500 ppm pure mountain spring water."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "14°C – 25°C",
      maxHeatToleranceC: 34,
      minFrostToleranceC: -20,
      chillHoursOrGdd: "Demands 1,000 – 1,400 chilling hours (<7.2°C); exclusively adapted to Ziarat highlands.",
      rainfallAndHumidityImpact: "Rain during harvest causes immediate fruit skin split; requires dry sunny ripening days."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Grafting on Mahaleb (Prunus mahaleb) rootstocks for calcareous, droughty mountain soils.",
      landPreparation: "Mountain terracing, removal of loose limestone rocks, and enrichment of planting pits.",
      spacingAndPlanting: "5m x 4m (500 trees/ha). Plant in January during peak winter dormancy.",
      irrigationAndFertilizer: "NPK 350:200:400 g/tree plus foliar calcium spray 3 weeks before picking to strengthen skin.",
      pruningThinningCanopy: "Spanish Bush or Steep Leader system to keep tree height harvestable without long ladders.",
      pestAndDiseaseManagement: "Black Cherry Aphid and Bacterial Canker (Pseudomonas syringae) treated with copper in dormancy.",
      harvestingIndices: "Full dark red or mahogany color, firm pulp, stem remaining green and firmly attached.",
      curingAndPostHarvest: "Hand pick with stem attached in cool dawn, immediately hydro-cool, and pack in 2kg punnets."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["January", "February"],
      floweringOrBloomMonths: ["April", "Early May"],
      fruitGrowthMonths: ["May", "June"],
      harvestMonths: ["Late May", "June", "Early July"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Air-freighted to Karachi, Islamabad, Lahore high-end retail markets."],
      exportDestinations: ["Premium export to UAE and Gulf luxury hotels."],
      processingAndValueAddition: "Fresh consumption, cherry preserves, glaze cherries for confectionery.",
      avgFarmGatePricePkrKg: "PKR 600 – 1,200 / kg (Early season up to PKR 1,600 / kg)",
      economicSignificance: "Highest per-kilogram value horticultural crop in Pakistan; iconic treasure of Ziarat."
    }
  },

  // 13. CUMIN / ZEERA (CUMINUM CYMINUM) - Highland White & Black Scent
  {
    id: "cumin",
    name: "Cumin (Zeera)",
    localBalochiName: "زیرہ (Zeera / Zira)",
    localUrduName: "سفید زیرہ (Safed Zeera)",
    scientificName: "Cuminum cyminum L.",
    category: "Spice & Medicinal",
    iconType: "spice",
    majorDistricts: ["Kalat", "Khuzdar", "Mastung", "Ziarat", "Pishin", "Kharan"],
    primaryProductionHub: "Kalat Plateau & Khuzdar High Slopes",
    varietiesOrCultivars: ["Kalat Local White Zeera", "Balochistan Black Zeera (Carum carvi)", "Sariab-1"],
    balochistanStats: {
      totalAcreageHectares: 8500,
      annualProductionMT: 4200,
      nationalSharePercent: 88.0,
      avgYieldPerHa: "0.5 MT/ha (500 kg/ha high aromatic essential oil)",
      currentSeasonStatus: "Pre-Sowing Seed Procurement & Soil Conditioning"
    },
    soilRequirements: {
      soilType: "Sandy loam to light loam with high permeability; avoids heavy water-retaining clays.",
      phRange: "7.0 – 8.2",
      salinityTolerance: "Moderate (EC <2.5 dS/m)",
      organicMatter: "15 tonnes decomposed manure applied well in advance of sowing.",
      drainageNeeds: "Perfect drainage critical; susceptible to Fusarium wilt in soggy soils."
    },
    waterRequirements: {
      annualWaterNeedMm: "200 – 350 mm (Extremely low water crop)",
      criticalStages: ["Germination (Day 1 & Day 7)", "Vegetative Branching (Day 35)", "Flowering & Seed Formation (Day 60–70)"],
      irrigationMethods: ["Light furrow or sprinkler irrigation"],
      waterQualityTolerance: "TDS <1,500 ppm."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "15°C – 26°C",
      maxHeatToleranceC: 35,
      minFrostToleranceC: -4,
      chillHoursOrGdd: "Thrives in dry, cool, rain-free mountain atmosphere.",
      rainfallAndHumidityImpact: "Rain or cloudy weather during flowering causes severe Blight (Alternaria burnsii) and powdery mildew."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Soak seed for 8 hours; treat with carbendazim or Trichoderma. Seed rate: 12–15 kg/ha.",
      landPreparation: "Plough 3 times to fine tilth, remove stones, make flat beds of 3m x 2m for uniform water spread.",
      spacingAndPlanting: "Broadcast evenly or drill in shallow lines 20cm apart, covered with 1cm sand layer.",
      irrigationAndFertilizer: "NPK 40:30:20 kg/ha. Apply first light watering immediately after sowing.",
      pruningThinningCanopy: "Hand weed at 25 and 45 days post-sowing. Keep crop completely weed-free.",
      pestAndDiseaseManagement: "Cumin Blight (Alternaria burnsii) controlled with preventative mancozeb sprays; Aphids treated with neem.",
      harvestingIndices: "Plants turn golden yellow, seed heads turn grayish brown and brittle.",
      curingAndPostHarvest: "Pull whole plants in morning, dry in clean threshing floor under sun for 4 days, thresh, winnow, and store in moisture-proof bags."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["November", "December"],
      floweringOrBloomMonths: ["February", "March"],
      fruitGrowthMonths: ["March", "Early April"],
      harvestMonths: ["April", "May"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Quetta Spice Market", "Karachi Jodia Bazaar", "Lahore Akbari Mandi"],
      exportDestinations: ["Gulf countries, Middle East, UK, and European specialty spice importers."],
      processingAndValueAddition: "Cumin essential oil (cuminaldehyde extraction), ground cumin powder, Ayurvedic extracts.",
      avgFarmGatePricePkrKg: "PKR 1,400 – 2,400 / kg",
      economicSignificance: "High profit-to-water ratio crop; perfect for drought-affected highlands of Kalat."
    }
  },

  // 14. BASMATI & IRRI RICE (ORYZA SATIVA) - Canal Command Grain of Nasirabad
  {
    id: "rice",
    name: "Rice",
    localBalochiName: "برنج / چاول (Birinj / Chawal)",
    localUrduName: "چاول / دھان (Chawal / Dhaan)",
    scientificName: "Oryza sativa L.",
    category: "Field & Cash Crop",
    primaryHub: "Nasirabad & Jaffarabad Canal Command",
    majorDistricts: ["Nasirabad", "Jaffarabad", "Usta Muhammad", "Sohbatpur"],
    varietiesOrCultivars: ["Super Basmati", "Kainat (1121)", "IRRI-6", "IRRI-9", "Kissan Basmati"],
    balochistanStats: {
      totalAcreageHectares: 184000,
      annualProductionMT: 620000,
      nationalSharePercent: 7.2,
      avgYieldPerHa: "3.4 MT/ha (IRRI cultivars up to 5.2 MT/ha)",
      currentSeasonStatus: "Grain Maturity & Autumn Harvest Commencement"
    },
    soilRequirements: {
      soilType: "Heavy alluvial clay to clay loam with impermeable subsoil to retain standing water puddle.",
      phRange: "6.8 – 8.3",
      salinityTolerance: "Moderate (Tolerates electrical conductivity up to 3.0 dS/m)",
      organicMatter: "Responds well to green manuring with Sesbania.",
      drainageNeeds: "Controlled surface drainage for harvest access."
    },
    waterRequirements: {
      annualWaterNeedMm: "1,200 – 1,600 mm",
      criticalStages: ["Transplanting establishment", "Tillering", "Panicle Initiation & Booting", "Flowering & Grain Filling"],
      irrigationMethods: ["Pat Feeder & Desert canal continuous flood basin", "Direct Seeded Rice (DSR) alternate wetting and drying"],
      waterQualityTolerance: "Fresh canal water (<500 ppm TDS)."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "26°C – 38°C",
      maxHeatToleranceC: 44,
      minFrostToleranceC: 10,
      chillHoursOrGdd: "Zero chilling; demands abundant summer sunshine and high heat units.",
      rainfallAndHumidityImpact: "Moderate humidity during flowering ensures proper pollination; dry weather required at harvest."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Wet bed nursery sowing in May–June; soak seed for 24 hrs and incubate for 36 hrs.",
      landPreparation: "Puddling with cage wheels in flooded field to break percolation, followed by wooden planking.",
      spacingAndPlanting: "Transplant 25–30 day old seedlings at 20cm x 20cm spacing (2 seedlings per hill).",
      irrigationAndFertilizer: "NPK 100:60:50 kg/ha plus 15 kg Zinc Sulfate (33%) per acre at 15 days post-transplant.",
      pruningThinningCanopy: "Maintain 5cm standing water until 15 days before harvest.",
      pestAndDiseaseManagement: "Rice Stem Borer (Scirpophaga incertulas) controlled with cartap hydrochloride granules; Bacterial Leaf Blight monitored.",
      harvestingIndices: "85% grains on panicle turn straw-golden; grain moisture 20–22%.",
      curingAndPostHarvest: "Combine harvester, threshing, drying on paved yards to 14% moisture, and transport to modern rice mills in Usta Muhammad."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["May", "June (Nursery)", "June", "July (Transplanting)"],
      floweringOrBloomMonths: ["August", "Early September"],
      fruitGrowthMonths: ["September"],
      harvestMonths: ["October", "November"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Usta Muhammad Rice Mills Hub", "Karachi Export Port", "Quetta Wholesale"],
      exportDestinations: ["China, Kenya, UAE, Saudi Arabia, European Union."],
      processingAndValueAddition: "Parboiled (Sella) rice, polished white rice, brown rice, rice bran oil.",
      avgFarmGatePricePkrKg: "IRRI: PKR 85 – 110 / kg • Super Basmati: PKR 170 – 240 / kg",
      economicSignificance: "Commercial backbone of Nasirabad division; generates substantial foreign exchange via rice export."
    }
  },

  // 15. COTTON (GOSSYPIUM HIRSUTUM) - The White Gold of Nasirabad & Lasbela
  {
    id: "cotton",
    name: "Cotton",
    localBalochiName: "کپاس (Kapas)",
    localUrduName: "کپاس (Kapas)",
    scientificName: "Gossypium hirsutum L.",
    category: "Field & Cash Crop",
    primaryHub: "Nasirabad Canal Plain & Lasbela Coastal Alluvium",
    majorDistricts: ["Nasirabad", "Jaffarabad", "Lasbela", "Hub"],
    varietiesOrCultivars: ["FH-142 (BT)", "IUB-13", "BS-15", "MNH-886", "Nayab-878"],
    balochistanStats: {
      totalAcreageHectares: 52000,
      annualProductionMT: 110000,
      nationalSharePercent: 3.5,
      avgYieldPerHa: "2.1 MT/ha (Seed cotton / Phutti)",
      currentSeasonStatus: "Second Picking & Boll Opening Phase"
    },
    soilRequirements: {
      soilType: "Deep alluvial silt loam to clay loam with good water retention.",
      phRange: "7.0 – 8.5",
      salinityTolerance: "Moderately Tolerant (EC up to 4.0 dS/m during vegetative stage)",
      organicMatter: "Responds well to composted FYM and crop rotation with wheat.",
      drainageNeeds: "Good drainage essential; sensitive to waterlogging for >48 hours."
    },
    waterRequirements: {
      annualWaterNeedMm: "650 – 900 mm",
      criticalStages: ["Squaring (Day 40–50)", "Flowering & Boll Setting (Day 60–90)", "Boll Development (Day 90–120)"],
      irrigationMethods: ["Bed-furrow irrigation", "Canal flood strip"],
      waterQualityTolerance: "TDS <1,800 ppm."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "28°C – 42°C",
      maxHeatToleranceC: 48,
      minFrostToleranceC: 2,
      chillHoursOrGdd: "Zero chilling; requires long frost-free summer with continuous sunshine.",
      rainfallAndHumidityImpact: "Dry sunny weather required during boll opening; rain during picking discolors lint."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Acid-delinted certified BT seed treated with imidacloprid to protect young seedlings from sucking pests.",
      landPreparation: "Deep ploughing, laser leveling, and forming raised beds 75cm apart.",
      spacingAndPlanting: "Plant on ridge sides 22–30cm apart at seed rate of 15–20 kg/ha in May–June.",
      irrigationAndFertilizer: "NPK 150:60:60 kg/ha. Apply nitrogen in 3 splits (squaring, flowering, boll formation).",
      pruningThinningCanopy: "Thin seedlings to single vigorous plant per hill at 20 days post-germination.",
      pestAndDiseaseManagement: "Whitefly, Thrips, and Pink Bollworm (Pectinophora gossypiella) managed via PB-Rope pheromones and targeted chemistry.",
      harvestingIndices: "Bolls open naturally exposing fluffy, dry, white fiber.",
      curingAndPostHarvest: "Hand pick in dry mornings into clean cotton bags (avoid polypropylene plastic bags to prevent fiber contamination)."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["April", "May", "June"],
      floweringOrBloomMonths: ["July", "August"],
      fruitGrowthMonths: ["August", "September"],
      harvestMonths: ["September", "October", "November"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Ginning factories in Dera Murad Jamali, Karachi textile mills, Hub industrial zone."],
      exportDestinations: ["Raw cotton lint and cotton yarn to China, Bangladesh, and Vietnam."],
      processingAndValueAddition: "Cotton ginning (lint extraction), cottonseed oil extraction, cottonseed cake (Khal) for cattle feed.",
      avgFarmGatePricePkrKg: "PKR 180 – 240 / kg (Seed cotton / Phutti)",
      economicSignificance: "Primary cash driver for Nasirabad tenant farmers; high synergy with Hub textile mills."
    }
  },

  // 16. GUAVA (PSIDIUM GUAJAVA) - Sweet Fragrant Orchard of Kech & Lasbela
  {
    id: "guava",
    name: "Guava",
    localBalochiName: "امرود (Amrood)",
    localUrduName: "امرود (Amrood)",
    scientificName: "Psidium guajava L.",
    category: "Orchard & Fruit Tree",
    iconType: "guava",
    majorDistricts: ["Lasbela", "Kech (Turbat)", "Hub", "Gwadar", "Awaran"],
    primaryProductionHub: "Lasbela Valley (Bela) & Kech River Terraces (Turbat)",
    varietiesOrCultivars: ["Safeda (Allahabad)", "Gola (Round sweet)", "Desi Turbati Amrood", "Larkana Red Flesh"],
    balochistanStats: {
      totalAcreageHectares: 4800,
      annualProductionMT: 36000,
      nationalSharePercent: 6.8,
      avgYieldPerHa: "7.5 MT/ha",
      currentSeasonStatus: "Winter Flush Fruit Sizing & Early Harvest"
    },
    soilRequirements: {
      soilType: "Adaptable to diverse soils; prefers alluvial silt loam to sandy loam.",
      phRange: "6.5 – 8.2 (Tolerates moderate salinity and alkaline soils)",
      salinityTolerance: "Moderate (Tolerates EC up to 3.5 dS/m)",
      organicMatter: "30 kg FYM per mature tree in autumn.",
      drainageNeeds: "Tolerates short-term flooding better than most fruit trees."
    },
    waterRequirements: {
      annualWaterNeedMm: "800 – 1,100 mm",
      criticalStages: ["Flower Bud Induction (Feb & June)", "Fruit Sizing (April & October)"],
      irrigationMethods: ["Basin ring irrigation", "Drip emitters"],
      waterQualityTolerance: "TDS <1,500 ppm."
    },
    weatherClimateRequirements: {
      optimalTempRangeC: "23°C – 38°C",
      maxHeatToleranceC: 46,
      minFrostToleranceC: 0,
      chillHoursOrGdd: "Zero chilling; frost sensitive.",
      rainfallAndHumidityImpact: "Warm humid sea breezes of Lasbela enhance fruit size and fragrance."
    },
    plantationToHarvestGuide: {
      nurseryAndSeedPrep: "Wedge or patch budding onto hardy indigenous rootstocks.",
      landPreparation: "Ploughing, laser leveling, and 75cm x 75cm planting pits.",
      spacingAndPlanting: "Square 6m x 6m (278 trees/ha) or high-density 4m x 3m.",
      irrigationAndFertilizer: "NPK 600:300:600 g/tree/year split in two doses (February & July).",
      pruningThinningCanopy: "Canopy heading back to maintain bush height below 3.5 meters for easy hand picking.",
      pestAndDiseaseManagement: "Guava Fruit Fly (Bactrocera zonata) managed with methyl eugenol pheromone traps and protein baits.",
      harvestingIndices: "Skin turns from dark green to yellowish-green; fruit softens slightly and emits strong sweet aroma.",
      curingAndPostHarvest: "Hand pick with care, grade by size, pack in ventilated wooden baskets cushioned with neem leaves."
    },
    seasonalCalendar: {
      sowingOrPlantingMonths: ["February", "March", "August", "September"],
      floweringOrBloomMonths: ["March", "April (Ambe Bahar)", "July", "August (Mrig Bahar)"],
      fruitGrowthMonths: ["May–June / September–October"],
      harvestMonths: ["July–August (Summer crop)", "November–February (Winter premium crop)"]
    },
    tradeAndEconomics: {
      domesticMarkets: ["Karachi Sabzi Mandi", "Quetta", "Hub", "Turbat"],
      exportDestinations: ["Middle East (Oman, UAE)."],
      processingAndValueAddition: "Guava pulp, guava jam, nectar, dehydrated slices.",
      avgFarmGatePricePkrKg: "PKR 70 – 150 / kg (Winter Gola: PKR 180 / kg)",
      economicSignificance: "Reliable dual-season income for coastal Lasbela and Kech oasis farmers."
    }
  }
];

/**
 * Official Balochistan Agriculture Extension Infrastructure
 * - Apex Directorate General & Sub-Departments at Rani Bagh & Sariab Road, Quetta
 * - District Offices of 'Deputy Director, Extension' in all 36 Districts of Balochistan
 * - Agricultural Research Institutes, Experimental Farms & Adaptive Trial Stations
 */
export const BALOCHISTAN_AGRI_STATIONS: BalochistanAgriStation[] = [
  // =========================================================================
  // 1. APEX HEADQUARTERS & SUB-DEPARTMENTS (RANI BAGH & SARIAB ROAD, QUETTA)
  // =========================================================================
  {
    id: "station-dg-agri-rani-bagh",
    name: "Directorate General Agriculture (Extension) Balochistan - HQ Complex",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1510, lng: 66.9820 },
    elevationMeters: 1680,
    focusCrops: ["All Provincial Crops Policy", "Integrated Pest Management (IPM)", "High-Density Orchards", "Karez Preservation", "Climate Resilience"],
    stationType: "DG Headquarters & Sub-Department",
    officerInCharge: "Director General Agriculture (Extension) Balochistan",
    acreageHectares: 25,
    establishedYear: 1958,
    waterArchitecture: "Deep tube wells and pressurized drip fertigation networks",
    currentResearchTrial: "Provincial digitization of farmer records, GIS pest mapping, and automated advisory dissemination across all 36 districts.",
    contactOffice: "Rani Bagh, Sariab Road, Quetta • Tel: (081) 9211340 • dg-agri@balochistan.gov.pk",
    jurisdiction: "Entire Province of Balochistan (All 36 Districts)",
    subDepartments: [
      "Directorate of Plant Protection & Locust Control",
      "Directorate of Crop Statistics & Agricultural Economics",
      "Directorate of Agriculture Information & Publication",
      "Directorate of Floriculture & Urban Greening (Rani Bagh)",
      "Directorate of Vegetable Seed Production & Quality Testing",
      "Directorate of Adaptive Research & On-Farm Trials",
      "Directorate of Model Demonstration & Extension Farms",
      "Pre-Service Agriculture Training Institute (ATI) Sariab"
    ],
    keyFunctions: [
      "Provincial agricultural policy implementation and extension leadership",
      "Coordination of all 36 Deputy Director Agriculture (Extension) district offices",
      "Emergency locust warning, biosecurity, and phytosanitary surveillance",
      "Certified seed procurement, subsidies, and farmer advisory campaigns"
    ]
  },
  {
    id: "station-plant-protection-sariab",
    name: "Directorate of Plant Protection & Locust Emergency Control",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1465, lng: 66.9840 },
    elevationMeters: 1680,
    focusCrops: ["Desert Locust (Schistocerca gregaria)", "Codling Moth", "Red Palm Weevil", "Fruit Fly Trapping", "Rusts & Blights"],
    stationType: "DG Headquarters & Sub-Department",
    officerInCharge: "Director Plant Protection Balochistan",
    acreageHectares: 12,
    establishedYear: 1965,
    waterArchitecture: "Solarized tube-well and pesticide bio-assay testing laboratory",
    currentResearchTrial: "Eco-friendly bio-pesticide (Metarhizium anisopliae) trial for desert locust nymph mitigation and regional pest early-warning telemetry.",
    contactOffice: "Agriculture Complex, Sariab Road, Quetta • Tel: (081) 9211345",
    jurisdiction: "All Agro-Ecological Zones and Desert Locust Breeding Belts of Balochistan",
    keyFunctions: [
      "Locust survey, radar monitoring, and mechanized spray fleet management",
      "Quality assurance and residue testing of agricultural pesticides",
      "Biological control insectaries for parasitoid wasp (Trichogramma) mass rearing"
    ]
  },
  {
    id: "station-crop-statistics-sariab",
    name: "Directorate of Crop Statistics & Agricultural Economics",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1480, lng: 66.9835 },
    elevationMeters: 1680,
    focusCrops: ["Crop Acreage Analytics", "Yield Estimation Surveys", "Mandi Price Telemetry", "Disaster Crop Loss Assessment"],
    stationType: "DG Headquarters & Sub-Department",
    officerInCharge: "Director Crop Statistics & Agri Economics",
    acreageHectares: 5,
    establishedYear: 1970,
    waterArchitecture: "Administrative and econometric computational center",
    currentResearchTrial: "Integration of Sentinel-2 satellite NDVI imagery with ground crop-cutting surveys for real-time provincial yield forecasting.",
    contactOffice: "Sariab Road, Quetta • Tel: (081) 9211348",
    jurisdiction: "Provincial Crop Data & Market Economics across Balochistan",
    keyFunctions: [
      "Annual crop acreage and production census publications",
      "Cost of production computation for major crops (Wheat, Rice, Cotton, Dates, Apple)",
      "Daily wholesale mandi price monitoring and export trade volume logging"
    ]
  },
  {
    id: "station-floriculture-rani-bagh",
    name: "Directorate of Floriculture & Landscaping (Rani Bagh)",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1525, lng: 66.9810 },
    elevationMeters: 1685,
    focusCrops: ["Cut Flowers (Roses, Chrysanthemums, Carnations)", "Drought-Tolerant Native Ornamentals", "Lawn Grasses", "Arboriculture"],
    stationType: "DG Headquarters & Sub-Department",
    officerInCharge: "Director Floriculture & Landscaping",
    acreageHectares: 18,
    establishedYear: 1960,
    waterArchitecture: "Sprinkler irrigation system with recycled treated water and tube well",
    currentResearchTrial: "Micro-propagation and acclimation of indigenous xerophytic flowering shrubs for urban climate cooling in arid upland valleys.",
    contactOffice: "Rani Bagh Botanical Gardens, Sariab Road, Quetta • Tel: (081) 9211352",
    jurisdiction: "Provincial Floriculture & Public Parks Landscaping",
    keyFunctions: [
      "Certified commercial nursery stock production of ornamental trees and flowers",
      "Training women growers in commercial greenhouse cut-flower production",
      "Preservation of heritage botanic collections at Rani Bagh Quetta"
    ]
  },
  {
    id: "station-seed-production-sariab",
    name: "Directorate of Vegetable Seed Production & Testing Laboratories",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1440, lng: 66.9855 },
    elevationMeters: 1680,
    focusCrops: ["Sariab Surkh Onion", "Seed Potato (Desiree, Cardinal)", "Chili (Sanjawi)", "Tomato", "Carrot", "Turnip"],
    stationType: "DG Headquarters & Sub-Department",
    officerInCharge: "Director Vegetable Seed Production",
    acreageHectares: 35,
    establishedYear: 1978,
    waterArchitecture: "Drip irrigation and germplasm isolation tunnels",
    currentResearchTrial: "Breeder and foundation seed multiplication of true-to-type Sariab Surkh onion with 98.5% germination purity.",
    contactOffice: "Sariab Road, Quetta • Tel: (081) 9211356",
    jurisdiction: "Vegetable Seed Growers across High & Mid-Altitude Balochistan",
    keyFunctions: [
      "Pure-line foundation seed multiplication of high-demand vegetable varieties",
      "Seed purity, moisture, and germination lab certification",
      "Subsidized certified seed distribution to smallholder vegetable farmers"
    ]
  },
  {
    id: "station-adaptive-research-sariab",
    name: "Directorate of Adaptive Research & On-Farm Water Trials",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1410, lng: 66.9860 },
    elevationMeters: 1680,
    focusCrops: ["High-Efficiency Drip Fertigation", "Laser Land Leveling Protocols", "Solar-Powered Pressure Emitters", "Saline Soil Leaching"],
    stationType: "DG Headquarters & Sub-Department",
    officerInCharge: "Director Adaptive Research",
    acreageHectares: 40,
    establishedYear: 1982,
    waterArchitecture: "Solarized multi-stage pumping stations and geomembrane-lined storage tanks",
    currentResearchTrial: "Sub-surface drip irrigation water savings benchmarking in deciduous orchards compared to traditional basin flood systems.",
    contactOffice: "Sariab Road, Quetta • Tel: (081) 9211360",
    jurisdiction: "On-Farm Water & Agronomic Trials across All Divisions",
    keyFunctions: [
      "Translating laboratory research into field-ready farmer recommendations",
      "Conducting farmer field trials in varied micro-climates",
      "Testing water-saving technologies in groundwater-depleted basins"
    ]
  },
  {
    id: "station-ati-sariab",
    name: "Agriculture Training Institute (ATI) Sariab, Quetta",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1385, lng: 66.9870 },
    elevationMeters: 1680,
    focusCrops: ["Pre-Service Field Assistant Diplomas", "In-Service Officer Training", "Farmer Field Schools (FFS)", "Tractor & Machinery Operations"],
    stationType: "DG Headquarters & Sub-Department",
    officerInCharge: "Principal / Director ATI Sariab",
    acreageHectares: 30,
    establishedYear: 1962,
    waterArchitecture: "Campus tube wells, demonstration plots, and mechanized farm workshops",
    currentResearchTrial: "Modernization of diploma curriculum to include GIS drone mapping, digital weather telemetry, and export packaging standards.",
    contactOffice: "Main Sariab Road, Quetta • Tel: (081) 9211364",
    jurisdiction: "Provincial Agricultural Extension Training & Diplomas",
    keyFunctions: [
      "2-Year Field Assistant (FA) Diploma pre-service certification",
      "Capacity building workshops for Deputy Directors and Agriculture Officers",
      "Hands-on vocational courses for progressive farmers and youth"
    ]
  },

  // =========================================================================
  // 2. ALL 36 DISTRICT OFFICES OF 'DEPUTY DIRECTOR, EXTENSION' IN BALOCHISTAN
  // =========================================================================
  {
    id: "station-dd-quetta",
    name: "Office of Deputy Director Agriculture (Extension), Quetta",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1834, lng: 66.9987 },
    elevationMeters: 1680,
    focusCrops: ["Apple", "Grapes", "Vegetables (Tomato, Onion)", "Almond", "Wheat"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Quetta",
    acreageHectares: 15,
    establishedYear: 1960,
    waterArchitecture: "Tube-well irrigated model orchards and drip demonstration units",
    currentResearchTrial: "Urban and peri-urban vegetable cluster development and drip-irrigated commercial apple orchards.",
    contactOffice: "District Agriculture Complex, Sariab Road, Quetta • Tel: (081) 9211370",
    jurisdiction: "District Quetta (Sub-Tehsils: Sadar, City, Panjpai, Kuchlak)"
  },
  {
    id: "station-dd-pishin",
    name: "Office of Deputy Director Agriculture (Extension), Pishin",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Pishin",
    division: "Quetta Division",
    coordinates: { lat: 30.5817, lng: 67.0028 },
    elevationMeters: 1550,
    focusCrops: ["Table Grapes (Sundarkhani, Kishmishi)", "Apple", "Almond", "Tobacco", "Vegetables"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Pishin",
    acreageHectares: 22,
    establishedYear: 1968,
    waterArchitecture: "Solar tube well grid, Karez command, and delayed-action dams",
    currentResearchTrial: "Grapevine trellis modernization and powdery mildew organic spray scheduling.",
    contactOffice: "District Complex, Bostan Road, Pishin • Tel: (0826) 420115",
    jurisdiction: "District Pishin (Tehsils: Pishin, Karezat, Barshore, Bostan, Hurramzai, Saranan)"
  },
  {
    id: "station-dd-killa-abdullah",
    name: "Office of Deputy Director Agriculture (Extension), Killa Abdullah",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Killa Abdullah",
    division: "Quetta Division",
    coordinates: { lat: 30.7300, lng: 66.6600 },
    elevationMeters: 1570,
    focusCrops: ["Apple", "Apricot", "Peach", "Grapes", "Vegetables"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Killa Abdullah",
    acreageHectares: 18,
    establishedYear: 1993,
    waterArchitecture: "Tube wells and Karez gravity flows",
    currentResearchTrial: "Frost-tolerant apricot varieties and bio-stimulant foliar nutrition during flowering.",
    contactOffice: "District HQ, Jungle Bagh, Killa Abdullah • Tel: (0826) 610045",
    jurisdiction: "District Killa Abdullah (Tehsils: Killa Abdullah, Gulistan, Dobandi)"
  },
  {
    id: "station-dd-chaman",
    name: "Office of Deputy Director Agriculture (Extension), Chaman",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Chaman",
    division: "Quetta Division",
    coordinates: { lat: 30.9210, lng: 66.4597 },
    elevationMeters: 1320,
    focusCrops: ["Grapes", "Pomegranate", "Wheat", "Melons", "Vegetables"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Chaman",
    acreageHectares: 12,
    establishedYear: 2021,
    waterArchitecture: "Groundwater tube wells and seasonal flood diversion",
    currentResearchTrial: "Cross-border export standard compliance and cold chain handling for table fruits.",
    contactOffice: "Main Boghra Road, Chaman • Tel: (0826) 510320",
    jurisdiction: "District Chaman (Tehsils: Chaman, Saddar)"
  },
  {
    id: "station-dd-killa-saifullah",
    name: "Office of Deputy Director Agriculture (Extension), Killa Saifullah",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Killa Saifullah",
    division: "Zhob Division",
    coordinates: { lat: 30.7008, lng: 68.3597 },
    elevationMeters: 1550,
    focusCrops: ["Apple", "Almond", "Pomegranate", "Tomato", "Wheat"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Killa Saifullah",
    acreageHectares: 20,
    establishedYear: 1990,
    waterArchitecture: "Deep tube wells and Karez channels",
    currentResearchTrial: "High-density apple plantation with high-efficiency drip fertigation in Kan Mehtarzai and Muslim Bagh.",
    contactOffice: "Main Highway, Killa Saifullah • Tel: (0823) 410140",
    jurisdiction: "District Killa Saifullah (Tehsils: Killa Saifullah, Muslim Bagh, Kan Mehtarzai, Loiband, Badini)"
  },
  {
    id: "station-dd-zhob",
    name: "Office of Deputy Director Agriculture (Extension), Zhob",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Zhob",
    division: "Zhob Division",
    coordinates: { lat: 31.3417, lng: 69.4486 },
    elevationMeters: 1426,
    focusCrops: ["Apple", "Olive", "Pomegranate", "Almond", "Wheat", "Chili"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Zhob",
    acreageHectares: 25,
    establishedYear: 1964,
    waterArchitecture: "Zhob river lift irrigation, tube wells, and Karez systems",
    currentResearchTrial: "Commercial olive grove expansion and oil pressing recovery optimization.",
    contactOffice: "Appozai Road, Zhob • Tel: (0822) 412210",
    jurisdiction: "District Zhob (Tehsils: Zhob, Sambaza, Ashwat, Qamar Din Karez)"
  },
  {
    id: "station-dd-sherani",
    name: "Office of Deputy Director Agriculture (Extension), Sherani",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Sherani",
    division: "Zhob Division",
    coordinates: { lat: 31.7900, lng: 69.8800 },
    elevationMeters: 1650,
    focusCrops: ["Chilgoza Pine (Pine Nuts)", "Olive", "Almond", "Walnut", "Apple"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Sherani",
    acreageHectares: 14,
    establishedYear: 2006,
    waterArchitecture: "Sulaiman range perennial springs and gravity conduits",
    currentResearchTrial: "Chilgoza pine forest cone borer IPM and high-value nursery propagation.",
    contactOffice: "District HQ Complex, Mani Khawa, Sherani • Tel: (0822) 510012",
    jurisdiction: "District Sherani (Sulaiman Range & Koh-e-Sulaiman valleys)"
  },
  {
    id: "station-dd-loralai",
    name: "Office of Deputy Director Agriculture (Extension), Loralai",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Loralai",
    division: "Loralai Division",
    coordinates: { lat: 30.3705, lng: 68.5975 },
    elevationMeters: 1400,
    focusCrops: ["Pomegranate (Kandahari)", "Almond", "Apricot", "Tomato", "Wheat"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Loralai",
    acreageHectares: 24,
    establishedYear: 1963,
    waterArchitecture: "Anambar river aquifer tube wells and percolation reservoirs",
    currentResearchTrial: "Pomegranate rind cracking prevention through calcium-boron foliar treatments.",
    contactOffice: "Cantonment Road, Loralai • Tel: (0824) 410425",
    jurisdiction: "District Loralai (Tehsils: Loralai, Bori, Mekhtar)"
  },
  {
    id: "station-dd-duki",
    name: "Office of Deputy Director Agriculture (Extension), Duki",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Duki",
    division: "Loralai Division",
    coordinates: { lat: 30.1540, lng: 68.5720 },
    elevationMeters: 1090,
    focusCrops: ["Pomegranate", "Coal Belt Vegetables", "Tomato", "Wheat", "Citrus"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Duki",
    acreageHectares: 16,
    establishedYear: 2017,
    waterArchitecture: "Thal river valley tube wells and Karez systems",
    currentResearchTrial: "Integrated pest control for fruit borer in pomegranate orchards.",
    contactOffice: "Main Bazaar Road, Duki • Tel: (0824) 610110",
    jurisdiction: "District Duki (Tehsils: Duki, Thal Chotiali, Payao)"
  },
  {
    id: "station-dd-musakhel",
    name: "Office of Deputy Director Agriculture (Extension), Musakhel",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Musakhel",
    division: "Loralai Division",
    coordinates: { lat: 30.8600, lng: 69.8200 },
    elevationMeters: 1340,
    focusCrops: ["Almond", "Pomegranate", "Olive", "Wheat", "Pulses"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Musakhel",
    acreageHectares: 15,
    establishedYear: 1992,
    waterArchitecture: "Kingri valley mountain streams and solar tube wells",
    currentResearchTrial: "Wild olive (Kahu) top-working with commercial Italian table and oil cultivars.",
    contactOffice: "District HQ, Musakhel Bazar • Tel: (0828) 610022",
    jurisdiction: "District Musakhel (Tehsils: Musakhel, Kingri, Drug, Toisar)"
  },
  {
    id: "station-dd-barkhan",
    name: "Office of Deputy Director Agriculture (Extension), Barkhan",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Barkhan",
    division: "Loralai Division",
    coordinates: { lat: 29.8970, lng: 69.5250 },
    elevationMeters: 1100,
    focusCrops: ["Citrus (Kinnow, Sweet Orange)", "Wheat", "Canola", "Tomato", "Melons"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Barkhan",
    acreageHectares: 18,
    establishedYear: 1991,
    waterArchitecture: "Kahlo river sub-surface flows and tube wells",
    currentResearchTrial: "Citrus greening disease management and low-chill stone fruit evaluation.",
    contactOffice: "Main Road, Barkhan • Tel: (0829) 510034",
    jurisdiction: "District Barkhan (Tehsils: Barkhan, Rakhni)"
  },
  {
    id: "station-dd-ziarat",
    name: "Office of Deputy Director Agriculture (Extension), Ziarat",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Ziarat",
    division: "Sibi Division",
    coordinates: { lat: 30.3820, lng: 67.7250 },
    elevationMeters: 2450,
    focusCrops: ["Apple (Tor Kulu, Shin Kulu)", "Sweet Cherry", "Apricot", "Almond", "Seed Potato"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Ziarat",
    acreageHectares: 30,
    establishedYear: 1965,
    waterArchitecture: "Mountain springs, snowmelt retention dams, and drip lines",
    currentResearchTrial: "Codling moth mating disruption pheromone dispensers and apple scab fungicidal scheduling.",
    contactOffice: "Near Deputy Commissioner Complex, Ziarat • Tel: (0833) 560130",
    jurisdiction: "District Ziarat (Tehsils: Ziarat, Sanjawi)"
  },
  {
    id: "station-dd-harnai",
    name: "Office of Deputy Director Agriculture (Extension), Harnai",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Harnai",
    division: "Sibi Division",
    coordinates: { lat: 30.1000, lng: 67.9300 },
    elevationMeters: 900,
    focusCrops: ["Vegetables (Garlic, Onion, Tomato)", "Citrus", "Wheat", "Pomegranate"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Harnai",
    acreageHectares: 16,
    establishedYear: 2007,
    waterArchitecture: "Perennial spring canals and Khost stream flows",
    currentResearchTrial: "Off-season garlic and tomato production under low-cost net tunnels.",
    contactOffice: "Main Road, Harnai • Tel: (0833) 610050",
    jurisdiction: "District Harnai (Tehsils: Harnai, Shahrag, Khoast)"
  },
  {
    id: "station-dd-sibi",
    name: "Office of Deputy Director Agriculture (Extension), Sibi",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Sibi",
    division: "Sibi Division",
    coordinates: { lat: 29.5448, lng: 67.8764 },
    elevationMeters: 130,
    focusCrops: ["Wheat", "Sorghum (Jowar)", "Melons", "Sesame", "Vegetables"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Sibi",
    acreageHectares: 28,
    establishedYear: 1955,
    waterArchitecture: "Nari River spate irrigation weir and perennial canal off-takes",
    currentResearchTrial: "Spate irrigation (Rod Kohi) moisture conservation techniques and high-heat tolerant wheat cultivars.",
    contactOffice: "Cantonment Road, Sibi • Tel: (0833) 500210",
    jurisdiction: "District Sibi (Tehsils: Sibi, Kutmandro, Sangan)"
  },
  {
    id: "station-dd-kohlu",
    name: "Office of Deputy Director Agriculture (Extension), Kohlu",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Kohlu",
    division: "Sibi Division",
    coordinates: { lat: 29.8965, lng: 69.2532 },
    elevationMeters: 1180,
    focusCrops: ["Wheat", "Mustard", "Onion", "Melons", "Pomegranate"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Kohlu",
    acreageHectares: 18,
    establishedYear: 1974,
    waterArchitecture: "Balan Nullah perennial flows and solar tube wells",
    currentResearchTrial: "Certified disease-free wheat seed multiplication and balanced NPK fertilizer trials.",
    contactOffice: "District HQ, Kohlu • Tel: (0829) 610014",
    jurisdiction: "District Kohlu (Tehsils: Kohlu, Maiwand, Kahan, Tamboo, Grisani)"
  },
  {
    id: "station-dd-dera-bugti",
    name: "Office of Deputy Director Agriculture (Extension), Dera Bugti",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Dera Bugti",
    division: "Sibi Division",
    coordinates: { lat: 29.0304, lng: 69.1585 },
    elevationMeters: 450,
    focusCrops: ["Wheat", "Sorghum", "Citrus", "Vegetables", "Date Palm"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Dera Bugti",
    acreageHectares: 20,
    establishedYear: 1983,
    waterArchitecture: "Uch canal command off-takes and tube wells",
    currentResearchTrial: "Drought-tolerant fodder and pearl millet varietal performance trials.",
    contactOffice: "Main Complex, Dera Bugti • Tel: (0835) 410025",
    jurisdiction: "District Dera Bugti (Tehsils: Dera Bugti, Sui, Phelawagh, Baiker)"
  },
  {
    id: "station-dd-nasirabad",
    name: "Office of Deputy Director Agriculture (Extension), Nasirabad",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Nasirabad",
    division: "Nasirabad Division",
    coordinates: { lat: 28.5805, lng: 68.2104 },
    elevationMeters: 62,
    focusCrops: ["Rice (Basmati & IRRI)", "Wheat (Akbar-19)", "Canola", "Cotton", "Sunflower"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Nasirabad",
    acreageHectares: 45,
    establishedYear: 1962,
    waterArchitecture: "Pat Feeder Canal major distributaries and perennial minors",
    currentResearchTrial: "Direct Seeded Rice (DSR) laser leveling protocols saving 35% canal water and zinc sulfate application schedules.",
    contactOffice: "District Agriculture Complex, Dera Murad Jamali • Tel: (0838) 710260",
    jurisdiction: "District Nasirabad (Tehsils: Dera Murad Jamali, Tamboo, Chattar, Baba Kot)"
  },
  {
    id: "station-dd-jaffarabad",
    name: "Office of Deputy Director Agriculture (Extension), Jaffarabad",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Jaffarabad",
    division: "Nasirabad Division",
    coordinates: { lat: 28.4342, lng: 68.4500 },
    elevationMeters: 65,
    focusCrops: ["Rice", "Wheat", "Cotton", "Canola", "Fodder"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Jaffarabad",
    acreageHectares: 35,
    establishedYear: 1970,
    waterArchitecture: "Desert Canal command channels and Pat Feeder tail distributaries",
    currentResearchTrial: "Pest scouting and IPM control for rice stem borer and cotton whitefly in canal plains.",
    contactOffice: "National Highway, Dera Allah Yar • Tel: (0838) 510120",
    jurisdiction: "District Jaffarabad (Tehsils: Dera Allah Yar, Jhatpat)"
  },
  {
    id: "station-dd-usta-muhammad",
    name: "Office of Deputy Director Agriculture (Extension), Usta Muhammad",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Usta Muhammad",
    division: "Nasirabad Division",
    coordinates: { lat: 28.1794, lng: 68.0447 },
    elevationMeters: 60,
    focusCrops: ["Paddy Rice (IRRI-6, Basmati)", "Wheat", "Oilseeds", "Pulses"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Usta Muhammad",
    acreageHectares: 30,
    establishedYear: 2022,
    waterArchitecture: "Kirthar Canal and Begari Canal command networks",
    currentResearchTrial: "Mechanical transplanter efficiency and post-harvest drying grain loss reduction.",
    contactOffice: "Main Canal Road, Usta Muhammad • Tel: (0838) 610030",
    jurisdiction: "District Usta Muhammad (Tehsils: Usta Muhammad, Gandakha)"
  },
  {
    id: "station-dd-sohbatpur",
    name: "Office of Deputy Director Agriculture (Extension), Sohbatpur",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Sohbatpur",
    division: "Nasirabad Division",
    coordinates: { lat: 28.5200, lng: 68.5500 },
    elevationMeters: 68,
    focusCrops: ["Rice", "Wheat", "Cotton", "Sesame", "Mustard"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Sohbatpur",
    acreageHectares: 20,
    establishedYear: 2013,
    waterArchitecture: "Canal minor distributaries and surface drainage channels",
    currentResearchTrial: "Reclamation of waterlogged canal soils using gypsum and biological sub-drainage.",
    contactOffice: "District Complex, Sohbatpur • Tel: (0838) 410015",
    jurisdiction: "District Sohbatpur (Tehsils: Sohbatpur, Manjhipur, Hairdin)"
  },
  {
    id: "station-dd-jhal-magsi",
    name: "Office of Deputy Director Agriculture (Extension), Jhal Magsi",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Jhal Magsi",
    division: "Nasirabad Division",
    coordinates: { lat: 28.3700, lng: 67.6200 },
    elevationMeters: 75,
    focusCrops: ["Wheat", "Mustard", "Rice", "Sorghum", "Pulses"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Jhal Magsi",
    acreageHectares: 22,
    establishedYear: 1991,
    waterArchitecture: "Mula River spate irrigation system and Pat Feeder tails",
    currentResearchTrial: "Spate flood moisture trapping for high-yield organic chickpea and mustard cultivation.",
    contactOffice: "District HQ, Gandawa, Jhal Magsi • Tel: (0837) 510040",
    jurisdiction: "District Jhal Magsi (Tehsils: Gandawa, Jhal Magsi, Mirpur)"
  },
  {
    id: "station-dd-kachhi",
    name: "Office of Deputy Director Agriculture (Extension), Kachhi (Bolan)",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Kachhi (Bolan)",
    division: "Nasirabad Division",
    coordinates: { lat: 29.4750, lng: 67.5850 },
    elevationMeters: 140,
    focusCrops: ["Wheat", "Vegetables", "Melons", "Sorghum", "Oilseeds"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Kachhi",
    acreageHectares: 25,
    establishedYear: 1965,
    waterArchitecture: "Bolan River perennial flows and spate diversion bunds",
    currentResearchTrial: "Early season melon production and soil salinity mapping along Bolan basin.",
    contactOffice: "Main Highway, Dhadar, Kachhi • Tel: (0832) 410020",
    jurisdiction: "District Kachhi (Tehsils: Dhadar, Bhag, Mach, Sani, Khattan)"
  },
  {
    id: "station-dd-kalat",
    name: "Office of Deputy Director Agriculture (Extension), Kalat",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Kalat",
    division: "Kalat Division",
    coordinates: { lat: 29.0225, lng: 66.5916 },
    elevationMeters: 2000,
    focusCrops: ["Onion (Phulkara, Sariab Surkh)", "Seed Potato", "Cumin", "Wheat", "Almond"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Kalat",
    acreageHectares: 30,
    establishedYear: 1968,
    waterArchitecture: "High-head solar submersible tube wells and Karez networks",
    currentResearchTrial: "Pure-line certified seed production of Sariab Surkh onion and seed potato viral indexing.",
    contactOffice: "District Complex, Kalat • Tel: (0844) 210155",
    jurisdiction: "District Kalat (Tehsils: Kalat, Manguchar, Johan, Gazg)"
  },
  {
    id: "station-dd-mastung",
    name: "Office of Deputy Director Agriculture (Extension), Mastung",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Mastung",
    division: "Kalat Division",
    coordinates: { lat: 29.7997, lng: 66.8455 },
    elevationMeters: 1700,
    focusCrops: ["Apple", "Grapes", "Almond", "Onion", "Potato", "Tomato"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Mastung",
    acreageHectares: 28,
    establishedYear: 1991,
    waterArchitecture: "Karez mother-shaft networks and pressurized drip systems",
    currentResearchTrial: "Table grape Trellis training systems and high-density almond orchard economics.",
    contactOffice: "Main Quetta-Kalat Highway, Mastung • Tel: (0823) 810140",
    jurisdiction: "District Mastung (Tehsils: Mastung, Dasht, Kardigap)"
  },
  {
    id: "station-dd-khuzdar",
    name: "Office of Deputy Director Agriculture (Extension), Khuzdar",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Khuzdar",
    division: "Kalat Division",
    coordinates: { lat: 27.8120, lng: 66.6110 },
    elevationMeters: 1230,
    focusCrops: ["Olive (Arbequina, Coratina)", "Pistachio", "Almond", "Cumin", "Wheat", "Pomegranate"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Khuzdar",
    acreageHectares: 35,
    establishedYear: 1974,
    waterArchitecture: "Solarized tube-well grids and spate diversion check-dams",
    currentResearchTrial: "Olive orchard propagation, oil extraction efficiency, and drought-resilient cumin agronomy.",
    contactOffice: "District Agriculture Complex, RCD Highway, Khuzdar • Tel: (0848) 412565",
    jurisdiction: "District Khuzdar (Tehsils: Khuzdar, Wadh, Nal, Zehri, Moola, Karkh, Baghbana, Ornach)"
  },
  {
    id: "station-dd-surab",
    name: "Office of Deputy Director Agriculture (Extension), Surab",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Surab (Shaheed Sikandarabad)",
    division: "Kalat Division",
    coordinates: { lat: 28.4900, lng: 66.2600 },
    elevationMeters: 1780,
    focusCrops: ["Apple", "Almond", "Grapes", "Onion", "Seed Potato"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Surab",
    acreageHectares: 18,
    establishedYear: 2017,
    waterArchitecture: "Solarized deep tube wells and Karez systems",
    currentResearchTrial: "Micro-catchment rainwater harvesting and organic composting in high-altitude orchards.",
    contactOffice: "Main RCD Highway, Surab • Tel: (0844) 610020",
    jurisdiction: "District Surab (Tehsils: Surab, Gidar, Marap)"
  },
  {
    id: "station-dd-awaran",
    name: "Office of Deputy Director Agriculture (Extension), Awaran",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Awaran",
    division: "Kalat Division",
    coordinates: { lat: 26.4560, lng: 65.2310 },
    elevationMeters: 560,
    focusCrops: ["Date Palm", "Wheat", "Onion", "Barley", "Melons"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Awaran",
    acreageHectares: 20,
    establishedYear: 1992,
    waterArchitecture: "Kolwa basin seasonal spate flows and solar tube wells",
    currentResearchTrial: "Date palm offshoot propagation and organic wheat production under spate residual moisture.",
    contactOffice: "District HQ, Awaran • Tel: (0856) 510015",
    jurisdiction: "District Awaran (Tehsils: Awaran, Jhal Jhao, Mashkai, Korak, Gishkaur)"
  },
  {
    id: "station-dd-kharan",
    name: "Office of Deputy Director Agriculture (Extension), Kharan",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Kharan",
    division: "Rakhshan Division",
    coordinates: { lat: 28.5833, lng: 65.4167 },
    elevationMeters: 720,
    focusCrops: ["Date Palm (Rabbi, Mozawati)", "Cumin (Zira)", "Wheat", "Pomegranate", "Pistachio"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Kharan",
    acreageHectares: 24,
    establishedYear: 1982,
    waterArchitecture: "Baddo river alluvial aquifer tube wells and historical Karez",
    currentResearchTrial: "Organic black and white cumin (Cuminum cyminum) seed treatment and sand-drift shield trials.",
    contactOffice: "Main Secretariat Road, Kharan • Tel: (0843) 412210",
    jurisdiction: "District Kharan (Tehsils: Kharan, Sar Kharan, Tohumkan)"
  },
  {
    id: "station-dd-washuk",
    name: "Office of Deputy Director Agriculture (Extension), Washuk",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Washuk",
    division: "Rakhshan Division",
    coordinates: { lat: 27.8500, lng: 64.7100 },
    elevationMeters: 680,
    focusCrops: ["Date Palm", "Cumin", "Wheat", "Melons", "Pomegranate"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Washuk",
    acreageHectares: 18,
    establishedYear: 2005,
    waterArchitecture: "Mashkel basin subterranean aquifer and solar lifts",
    currentResearchTrial: "Drought-tolerant date palm cultivar performance under hyper-arid desert conditions.",
    contactOffice: "District Complex, Washuk • Tel: (0843) 610010",
    jurisdiction: "District Washuk (Tehsils: Washuk, Besima, Mashkel, Nag, Shahgori)"
  },
  {
    id: "station-dd-nushki",
    name: "Office of Deputy Director Agriculture (Extension), Nushki",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Nushki",
    division: "Rakhshan Division",
    coordinates: { lat: 29.5542, lng: 66.0215 },
    elevationMeters: 990,
    focusCrops: ["Wheat", "Cumin", "Almond", "Grapes", "Vegetables", "Pomegranate"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Nushki",
    acreageHectares: 22,
    establishedYear: 1988,
    waterArchitecture: "Karez networks and high-efficiency solar tube wells",
    currentResearchTrial: "Water productivity indexing of cumin and wheat under precision laser leveled basins.",
    contactOffice: "District Agriculture Complex, Nushki • Tel: (0875) 412310",
    jurisdiction: "District Nushki (Tehsils: Nushki, Dak)"
  },
  {
    id: "station-dd-chagai",
    name: "Office of Deputy Director Agriculture (Extension), Chagai",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Chagai",
    division: "Rakhshan Division",
    coordinates: { lat: 28.8900, lng: 64.4000 },
    elevationMeters: 850,
    focusCrops: ["Cumin", "Date Palm", "Wheat", "Pomegranate", "Melons"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Chagai",
    acreageHectares: 26,
    establishedYear: 1978,
    waterArchitecture: "Deep desert aquifers and solarized submersible pumps",
    currentResearchTrial: "Commercial black cumin cultivar stabilization and high-brix desert melon trials.",
    contactOffice: "National Highway, Dalbandin, Chagai • Tel: (0825) 210240",
    jurisdiction: "District Chagai (Tehsils: Dalbandin, Chagai, Nok Kundi, Taftan)"
  },
  {
    id: "station-dd-kech",
    name: "Office of Deputy Director Agriculture (Extension), Kech (Turbat)",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Kech (Turbat)",
    division: "Makran Division",
    coordinates: { lat: 26.0020, lng: 63.0500 },
    elevationMeters: 145,
    focusCrops: ["Date Palm (Mozawati, Begum Jangi)", "Mango", "Guava", "Onion", "Papaya"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Kech",
    acreageHectares: 40,
    establishedYear: 1960,
    waterArchitecture: "Karez gravity channels, Kech Kaur river tube wells, and drip lines",
    currentResearchTrial: "Farmer Field School (FFS) training on Red Palm Weevil IPM and solar date dryer adoption.",
    contactOffice: "District Agriculture Complex, Main Airport Road, Turbat • Tel: (0852) 412350",
    jurisdiction: "District Kech (Tehsils: Turbat, Mand, Tump, Buleda, Zamuran, Dasht, Hoshab, Balnigor)"
  },
  {
    id: "station-dd-panjgur",
    name: "Office of Deputy Director Agriculture (Extension), Panjgur",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Panjgur",
    division: "Makran Division",
    coordinates: { lat: 26.9650, lng: 64.0920 },
    elevationMeters: 980,
    focusCrops: ["Mozawati Date", "Pomegranate", "Grapes", "Organic Wheat", "Vegetables"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Panjgur",
    acreageHectares: 32,
    establishedYear: 1972,
    waterArchitecture: "Rakhshan river aquifer, Karez subterranean networks, and solar tube wells",
    currentResearchTrial: "Post-harvest pre-cooling protocols and non-chemical pest mitigation in date storage.",
    contactOffice: "Civil Lines, Panjgur • Tel: (0855) 641205",
    jurisdiction: "District Panjgur (Tehsils: Panjgur, Chitkan, Washbod, Gichk, Paroom, Prom, Tasp)"
  },
  {
    id: "station-dd-gwadar",
    name: "Office of Deputy Director Agriculture (Extension), Gwadar",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Gwadar",
    division: "Makran Division",
    coordinates: { lat: 25.1300, lng: 62.3300 },
    elevationMeters: 15,
    focusCrops: ["Dandari Date", "Coconut", "Papaya", "Watermelon", "Coastal Vegetables"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Gwadar",
    acreageHectares: 25,
    establishedYear: 1985,
    waterArchitecture: "Akra Kaur dam canals, reverse osmosis brackish blends, and spate channels",
    currentResearchTrial: "Coastal halophyte cultivation and sand dune windbreak tree plantations.",
    contactOffice: "Sarawan Avenue, Gwadar City • Tel: (0864) 211895",
    jurisdiction: "District Gwadar (Tehsils: Gwadar, Pasni, Ormara, Jiwani, Suntsar)"
  },
  {
    id: "station-dd-lasbela",
    name: "Office of Deputy Director Agriculture (Extension), Lasbela (Uthal)",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Lasbela",
    division: "Kalat Division",
    coordinates: { lat: 25.8080, lng: 66.6220 },
    elevationMeters: 55,
    focusCrops: ["Papaya (Red Lady 786)", "Banana (G-9)", "Tomato", "Cotton", "Castor", "Chili"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Lasbela",
    acreageHectares: 35,
    establishedYear: 1975,
    waterArchitecture: "Porali river spate canal weir and deep alluvial aquifer tube wells",
    currentResearchTrial: "Commercial high-density papaya fertigation and tomato leaf curl virus IPM protocols.",
    contactOffice: "District Agriculture Complex, RCD Highway, Uthal • Tel: (0853) 610335",
    jurisdiction: "District Lasbela (Tehsils: Uthal, Bela, Lakhra, Liari, Kanraj)"
  },
  {
    id: "station-dd-hub",
    name: "Office of Deputy Director Agriculture (Extension), Hub",
    institution: "Directorate General Agriculture Extension Balochistan",
    district: "Hub",
    division: "Kalat Division",
    coordinates: { lat: 25.0300, lng: 66.8800 },
    elevationMeters: 40,
    focusCrops: ["Vegetables (Tomato, Cucumber, Capsicum)", "Papaya", "Guava", "Fodder", "Floriculture"],
    stationType: "District Deputy Director Office",
    officerInCharge: "Deputy Director Agriculture (Extension), Hub",
    acreageHectares: 20,
    establishedYear: 2022,
    waterArchitecture: "Hub River dam canal supply and commercial industrial-grade boreholes",
    currentResearchTrial: "Controlled-environment tunnel farming for high-value peri-urban vegetable supply to Karachi.",
    contactOffice: "Main RCD Highway, Hub City • Tel: (0853) 310120",
    jurisdiction: "District Hub (Tehsils: Hub, Dureji, Sonmiani / Winder, Gadani)"
  },

  // =========================================================================
  // 3. RESEARCH INSTITUTES, EXPERIMENTAL FARMS & ADAPTIVE TRIAL STATIONS
  // =========================================================================
  {
    id: "station-ari-sariab-quetta",
    name: "Agriculture Research Institute (ARI) Sariab, Quetta",
    institution: "Directorate General Agriculture Research, Government of Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1420, lng: 66.9850 },
    elevationMeters: 1680,
    focusCrops: ["Deciduous Fruits (Apple, Cherry, Almond)", "Seed Potato", "Sariab Surkh Onion", "Saffron", "Wheat Breeding"],
    stationType: "Research Institute",
    officerInCharge: "Director General Agriculture Research, Balochistan",
    acreageHectares: 180,
    establishedYear: 1958,
    waterArchitecture: "Deep tube wells and pressurized drip fertigation networks",
    currentResearchTrial: "Dwarf apple rootstock adaptation (M9, MM106) and water productivity index under high-efficiency drip systems.",
    contactOffice: "Sariab Road, Quetta • Tel: (081) 9211340"
  },
  {
    id: "station-dfdc-sariab",
    name: "Deciduous Fruit Development Centre (DFDC) Sariab, Quetta",
    institution: "Agriculture Research & Extension Department Balochistan",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1400, lng: 66.9840 },
    elevationMeters: 1680,
    focusCrops: ["Apple Rootstocks (M9, MM106, M26)", "Sweet Cherry (Bing, Stella)", "Almond (Nonpareil)", "Controlled Atmosphere Cold Storage"],
    stationType: "Research Institute",
    officerInCharge: "Director DFDC / Horticulture Specialist",
    acreageHectares: 60,
    establishedYear: 1982,
    waterArchitecture: "Pressurized micro-sprinklers and computerized drip fertigation",
    currentResearchTrial: "Controlled atmosphere (CA) storage optimization (1% O₂, 1.5% CO₂, 0.5°C) to extend apple marketing window by 6 months.",
    contactOffice: "Sariab Road, Quetta • Tel: (081) 9211342"
  },
  {
    id: "station-azrc-quetta",
    name: "Arid Zone Research Centre (AZRC / PARC) Quetta",
    institution: "Pakistan Agricultural Research Council (PARC)",
    district: "Quetta",
    division: "Quetta Division",
    coordinates: { lat: 30.1980, lng: 66.9620 },
    elevationMeters: 1720,
    focusCrops: ["Drought-Resilient Wheat", "Cumin", "Barley", "Pistachio", "Saffron", "Range Forages"],
    stationType: "Research Institute",
    officerInCharge: "Director General AZRC Quetta",
    acreageHectares: 95,
    establishedYear: 1977,
    waterArchitecture: "Rainwater harvesting catchments and solarized drip systems",
    currentResearchTrial: "Physiological drought-tolerance gene expression in dryland winter wheat and saffron bulb multiplication.",
    contactOffice: "Brewery Road, Quetta • Tel: (081) 9213286"
  },
  {
    id: "station-ziarat-apple",
    name: "Ziarat High-Altitude Apple & Temperate Fruit Station",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Ziarat",
    division: "Sibi Division",
    coordinates: { lat: 30.3824, lng: 67.7256 },
    elevationMeters: 2450,
    focusCrops: ["Tor Kulu & Shin Kulu Apple", "Sweet Cherry", "Apricot", "Almond", "Walnut"],
    stationType: "Model Extension Farm",
    officerInCharge: "Senior Horticulturist, Ziarat",
    acreageHectares: 50,
    establishedYear: 1965,
    waterArchitecture: "Mountain spring gravity conduits and snowmelt storage ponds",
    currentResearchTrial: "Anti-hail netting impact on fruit skin finish and Codling Moth mating disruption trials.",
    contactOffice: "Near Governor House Road, Ziarat • Tel: (0833) 560124"
  },
  {
    id: "station-sanjawi-trial",
    name: "Sanjawi High-Density Apple & Pomegranate Trial Farm",
    institution: "Agriculture Extension Department Balochistan",
    district: "Ziarat",
    division: "Sibi Division",
    coordinates: { lat: 30.2780, lng: 68.1250 },
    elevationMeters: 1850,
    focusCrops: ["Kandahari Pomegranate", "Gala Apple", "Almond", "Red Delicious", "Tomato"],
    stationType: "Adaptive Trial Station",
    officerInCharge: "Farm Superintendent, Sanjawi",
    acreageHectares: 35,
    establishedYear: 1984,
    waterArchitecture: "Perennial mountain stream gravity canals and high-density drip lines",
    currentResearchTrial: "Evaluation of ultra-high density apple planting (2,500 trees/ha on M9 rootstock) with bamboo support trellises.",
    contactOffice: "Main Loralai-Ziarat Road, Sanjawi • Tel: (0833) 620015"
  },
  {
    id: "station-turbat-date-palm",
    name: "Turbat Date Palm & Tropical Agriculture Research Institute",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Kech (Turbat)",
    division: "Makran Division",
    coordinates: { lat: 25.9964, lng: 63.0450 },
    elevationMeters: 145,
    focusCrops: ["Date Palm (Mozawati, Begum Jangi, Halawi)", "Mango", "Guava", "Onion", "Karez Micro-Hydraulics"],
    stationType: "Research Institute",
    officerInCharge: "Horticulture In-Charge, Turbat Center",
    acreageHectares: 85,
    establishedYear: 1968,
    waterArchitecture: "Historical Karez gravity flume & 50 kW solar-lift tube well hybrid",
    currentResearchTrial: "Sentinel-2 satellite multispectral thermal index correlation with Dang-to-Tamar curing dynamics and Red Palm Weevil early acoustic detection.",
    contactOffice: "District Agriculture Complex, Main Airport Road, Turbat • Tel: (0852) 412354"
  },
  {
    id: "station-panjgur-mozawati",
    name: "Panjgur Model Mozawati Extension & Processing Station",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Panjgur",
    division: "Makran Division",
    coordinates: { lat: 26.9644, lng: 64.0903 },
    elevationMeters: 980,
    focusCrops: ["Mozawati Date", "Chapshuk", "Pomegranate", "Grapes", "Organic Wheat"],
    stationType: "Model Extension Farm",
    officerInCharge: "Senior Agronomist (Panjgur Center)",
    acreageHectares: 62,
    establishedYear: 1974,
    waterArchitecture: "Ancient Karez mother-shaft network with subterranean gravel aquifer",
    currentResearchTrial: "Post-harvest pre-cooling and nitrogen-flush vacuum packaging to preserve fresh caramel texture of Mozawati without chemical preservatives.",
    contactOffice: "Civil Lines, Panjgur • Tel: (0855) 641201"
  },
  {
    id: "station-gwadar-coastal",
    name: "Gwadar Coastal & Saline Agriculture Demonstration Complex",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Gwadar",
    division: "Makran Division",
    coordinates: { lat: 25.4670, lng: 62.4580 },
    elevationMeters: 18,
    focusCrops: ["Dandari & Begum Jangi Date", "Coconut", "Papaya", "Watermelon", "Halophyte Forage"],
    stationType: "Government Seed Nursery",
    officerInCharge: "Coastal Extension Officer",
    acreageHectares: 45,
    establishedYear: 1989,
    waterArchitecture: "Reverse Osmosis brackish water blend and spate flood diversion canals",
    currentResearchTrial: "Salinity threshold trials of Dandari palms under brackish irrigation (EC 4.5 dS/m) and sand dune stabilization.",
    contactOffice: "Sarawan Avenue, Gwadar City • Tel: (0864) 211890"
  },
  {
    id: "station-pishin-grapes",
    name: "Pishin Deciduous Orchards & Table Grapes Extension Station",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Pishin",
    division: "Quetta Division",
    coordinates: { lat: 30.5833, lng: 67.0000 },
    elevationMeters: 1550,
    focusCrops: ["Table Grapes (Kishmishi, Sundarkhani)", "Almond", "Peach", "Plum", "Vegetables"],
    stationType: "Model Extension Farm",
    officerInCharge: "Horticulture Specialist, Pishin",
    acreageHectares: 55,
    establishedYear: 1972,
    waterArchitecture: "Solar tube well grid and micro-catchment water harvesting",
    currentResearchTrial: "Trellis training system efficiency versus traditional pit cultivation for export-grade table grapes.",
    contactOffice: "Bostan Road, Pishin • Tel: (0826) 420112"
  },
  {
    id: "station-khuzdar-olive",
    name: "Khuzdar Olive & High-Value Horticultural Complex",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Khuzdar",
    division: "Kalat Division",
    coordinates: { lat: 27.8100, lng: 66.6100 },
    elevationMeters: 1230,
    focusCrops: ["Olive (Arbequina, Coratina)", "Pistachio", "Almond", "Cumin (Zira)", "Wheat"],
    stationType: "Model Extension Farm",
    officerInCharge: "Olive Development Project Lead",
    acreageHectares: 75,
    establishedYear: 2011,
    waterArchitecture: "Drip fertigation powered by 40 kW solar photovoltaic arrays",
    currentResearchTrial: "Oil content and polyphenol benchmarking across 6 Italian and Spanish olive cultivars in calcareous soils.",
    contactOffice: "RCD Highway, Khuzdar • Tel: (0848) 412560"
  },
  {
    id: "station-lasbela-tropical",
    name: "Lasbela Coastal Papaya, Banana & Vegetable Center",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Lasbela",
    division: "Kalat Division",
    coordinates: { lat: 25.8050, lng: 66.6200 },
    elevationMeters: 55,
    focusCrops: ["Papaya (Red Lady 786)", "Banana (Basrai/G-9)", "Tomato", "Cotton", "Guava"],
    stationType: "Government Seed Nursery",
    officerInCharge: "Sub-Tropical Extension Officer, Bela",
    acreageHectares: 65,
    establishedYear: 1982,
    waterArchitecture: "Porali River alluvial tube well aquifer and high-flow drip lines",
    currentResearchTrial: "High-density Red Lady papaya fertigation protocols and organic bio-fungicide management.",
    contactOffice: "RCD Highway, Uthal, Lasbela • Tel: (0853) 610332"
  },
  {
    id: "station-nasirabad-canal",
    name: "Nasirabad Canal Command Rice & Wheat Research Center",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Nasirabad",
    division: "Nasirabad Division",
    coordinates: { lat: 28.5800, lng: 68.2100 },
    elevationMeters: 62,
    focusCrops: ["Basmati & IRRI Rice", "Wheat (Akbar-19)", "Cotton", "Canola", "Fodder"],
    stationType: "Canal Command Station",
    officerInCharge: "Chief Agronomist (Canal Command)",
    acreageHectares: 120,
    establishedYear: 1962,
    waterArchitecture: "Pat Feeder Canal and Desert Canal gravity command distribution",
    currentResearchTrial: "Direct Seeded Rice (DSR) to conserve 35% irrigation water compared to traditional puddling.",
    contactOffice: "Main National Highway, Dera Murad Jamali • Tel: (0838) 710255"
  },
  {
    id: "station-loralai-pomegranate",
    name: "Loralai Pomegranate & Almond Demonstration Station",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Loralai",
    division: "Loralai Division",
    coordinates: { lat: 30.3700, lng: 68.6000 },
    elevationMeters: 1400,
    focusCrops: ["Pomegranate (Kandahari, Bedana)", "Almond", "Apricot", "Tomato", "Chili"],
    stationType: "Model Extension Farm",
    officerInCharge: "Horticulture Specialist, Loralai",
    acreageHectares: 48,
    establishedYear: 1978,
    waterArchitecture: "Anambar river basin tube wells and pressurized mini-sprinklers",
    currentResearchTrial: "Calcium foliar regimes to eliminate pomegranate fruit rind cracking in high diurnal temperature fluctuations.",
    contactOffice: "Cantonment Road, Loralai • Tel: (0824) 410420"
  },
  {
    id: "station-kalat-onion",
    name: "Kalat High Plateau Onion & Seed Production Center",
    institution: "Agriculture Extension Department, Government of Balochistan",
    district: "Kalat",
    division: "Kalat Division",
    coordinates: { lat: 29.0200, lng: 66.5900 },
    elevationMeters: 2000,
    focusCrops: ["Onion (Phulkara, Sariab Surkh)", "Seed Potato", "Cumin", "Wheat", "Almond"],
    stationType: "Government Seed Nursery",
    officerInCharge: "Seed Certification Officer, Kalat",
    acreageHectares: 40,
    establishedYear: 1985,
    waterArchitecture: "Karez and high-head solar submersible tube wells",
    currentResearchTrial: "Pure line certified seed production of Sariab Surkh onion for provincial distribution.",
    contactOffice: "Main Bazaar Road, Kalat • Tel: (0844) 210150"
  },
  {
    id: "station-mastung-nursery",
    name: "Mastung Government Fruit Nursery & Seed Multiplication Farm",
    institution: "Agriculture Extension Department Balochistan",
    district: "Mastung",
    division: "Kalat Division",
    coordinates: { lat: 29.8100, lng: 66.8500 },
    elevationMeters: 1710,
    focusCrops: ["Certified Apple Saplings", "Grapes Rooted Cuttings", "Almond Seedlings", "Onion Seed"],
    stationType: "Government Seed Nursery",
    officerInCharge: "Nursery Superintendent, Mastung",
    acreageHectares: 38,
    establishedYear: 1970,
    waterArchitecture: "Perennial Karez channel and solarized tube wells",
    currentResearchTrial: "Certification protocols for true-to-type, nematode-free deciduous fruit nursery stock.",
    contactOffice: "RCD Highway, Mastung • Tel: (0823) 810145"
  },
  {
    id: "station-sibi-dhadar-farm",
    name: "Sibi-Dhadar Spate Irrigation & Cereal Adaptive Farm",
    institution: "Agriculture Extension Department Balochistan",
    district: "Kachhi (Bolan)",
    division: "Nasirabad Division",
    coordinates: { lat: 29.4800, lng: 67.6000 },
    elevationMeters: 135,
    focusCrops: ["Spate Wheat", "Sorghum", "Millet", "Sesame", "Mustard"],
    stationType: "Adaptive Trial Station",
    officerInCharge: "Agronomist (Spate Agriculture)",
    acreageHectares: 50,
    establishedYear: 1968,
    waterArchitecture: "Bolan & Nari River spate irrigation diversion structures",
    currentResearchTrial: "Moisture conservation bunding systems to maximize grain yields in single-inundation spate plains.",
    contactOffice: "Main Highway, Dhadar • Tel: (0832) 410025"
  }
];

/**
 * Balochistan Agro-Ecological Zones
 */
export const BALOCHISTAN_AGRO_ZONES = [
  {
    name: "Hyper-Arid Subtropical Basin (Makran / Kech & Panjgur)",
    elevation: "100m – 1,000m MSL",
    climate: "Extreme summer heat (45–50°C), negligible rainfall, low humidity during harvest, ancient subterranean Karez heritage.",
    signatureCrops: ["Date Palm (Mozawati, Begum Jangi)", "Mango", "Guava", "Onion", "Melons"],
    districts: ["Kech (Turbat)", "Panjgur", "Gwadar", "Washuk", "Kharan"]
  },
  {
    name: "Upland Cold-Temperate Plateaus (Quetta, Ziarat, Pishin, Kalat)",
    elevation: "1,500m – 2,500m MSL",
    climate: "Chilling winters (-15°C to 5°C), cool summers, ideal for deciduous fruit bud break and high-sugar table grapes.",
    signatureCrops: ["Apple", "Grapes", "Cherry", "Almond", "Pomegranate", "Seed Potato"],
    districts: ["Quetta", "Ziarat", "Pishin", "Killa Abdullah", "Kalat", "Mastung", "Killa Saifullah"]
  },
  {
    name: "Sub-Coastal Tropical & Spate Plains (Lasbela & Hub)",
    elevation: "10m – 100m MSL",
    climate: "Mild maritime winters, long growing seasons, frost-free, proximity to Karachi consumption hub.",
    signatureCrops: ["Papaya", "Banana", "Tomato", "Cotton", "Guava", "Castor"],
    districts: ["Lasbela", "Hub", "Gwadar Coastal"]
  },
  {
    name: "Indus Canal Irrigated Lowlands (Nasirabad & Jaffarabad)",
    elevation: "50m – 80m MSL",
    climate: "Alluvial fertile plains fed by Pat Feeder and Desert Canals, high summer temperatures, canal flood irrigation.",
    signatureCrops: ["Rice (Basmati & IRRI)", "Wheat", "Cotton", "Canola", "Sesame"],
    districts: ["Nasirabad", "Jaffarabad", "Usta Muhammad", "Sohbatpur"]
  },
  {
    name: "Mid-Altitude Valleys & Olive Belt (Khuzdar, Loralai, Zhob)",
    elevation: "1,000m – 1,500m MSL",
    climate: "Moderate winters, warm summers, low humidity, limestone soils, Mediterranean micro-climate.",
    signatureCrops: ["Olive", "Pomegranate", "Almond", "Cumin", "Citrus", "Tomato"],
    districts: ["Khuzdar", "Loralai", "Barkhan", "Musakhel", "Zhob"]
  }
];
