import { 
  CropPestDetail, 
  CropDiseaseDetail, 
  CropFertilizerDetailed, 
  CropEngineeringDetailed, 
  CropIrrigationPruningDetailed, 
  CropTradeExportDetailed 
} from '../types';

export interface CropFullAgronomyExtension {
  pestsAndDiseases: {
    activePests: CropPestDetail[];
    majorDiseases: CropDiseaseDetail[];
  };
  fertilizerPlan: CropFertilizerDetailed;
  landLevelingPlan: CropEngineeringDetailed;
  irrigationAndPruningPlan: CropIrrigationPruningDetailed;
  tradeAndExportPlan: CropTradeExportDetailed;
}

export const CROP_AGRONOMY_DATABASE: Record<string, CropFullAgronomyExtension> = {
  // 1. DATE PALM
  "date-palm": {
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Red Palm Weevil (Rhynchophorus ferrugineus)",
          localUrduName: "سرخ کھجور کی سنڈی",
          symptoms: "Brown viscous sap oozing from trunk wounds, chewed fiber pushed out of boreholes, acoustic crunching sound inside trunk.",
          organicCure: "Pheromone-kairomone traps (1 trap/ha) baited with dates and ethyl acetate; trunk whitewashing with slaked lime (10kg) + copper sulfate (1kg) up to 1.5m height.",
          chemicalCure: "Aluminum phosphide (2 tablets/borehole) sealed immediately with wet mud plaster; trunk injection of Emamectin Benzoate 5% SG (20ml/palm).",
          applicationDose: "Emamectin Benzoate @ 20ml diluted in 100ml water via pressurized trunk injector.",
          sprayTiming: "Apply post-harvest in October and spring offshoot emergence in March.",
          urgency: "Critical"
        },
        {
          pestName: "Old World Date Mite (Oligonychus afrasiaticus)",
          localUrduName: "کھجور کی گرد والی جُوں (مائٹ)",
          symptoms: "Silken dusty webbing enclosing fruit bunches at Chimri stage; fruit skin turns grayish-brown, hardens, and cracks prematurely.",
          organicCure: "High-pressure wash with water + potassium soap (2%) during early fruit formation; predatory phytoseiid mites release.",
          chemicalCure: "Micronized elemental sulfur dust (80% WP) or Hexythiazox 5.45% EC.",
          applicationDose: "Elemental sulfur dust @ 250–300g per palm canopy or Hexythiazox @ 1.5ml/L water.",
          sprayTiming: "First week of May at pea-size fruit stage before webbing becomes dense.",
          urgency: "High"
        },
        {
          pestName: "Lesser Date Moth (Batrachedra amydraula)",
          localUrduName: "چھوٹی کھجور کا کیڑا",
          symptoms: "Unripe fruitlets drop in masses with tiny pinholes near the calyx tied by silken strands.",
          organicCure: "Bacillus thuringiensis (Bt) kurstaki sprays; light traps in grove corners.",
          chemicalCure: "Spinosad 240 SC or Chlorantraniliprole 20 SC.",
          applicationDose: "Spinosad @ 0.4ml/L water sprayed directly onto flower bunches.",
          sprayTiming: "Immediately following pollination spathe opening (March/April).",
          urgency: "Moderate"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Graphiola Leaf Spot / False Smut (Graphiola phoenicis)",
          causalAgent: "Fungus (Graphiola phoenicis)",
          symptoms: "Hard black cup-shaped fruiting bodies (spores) bursting through both sides of older fronds, causing premature yellowing.",
          preventativeCare: "Prune heavily infected lower fronds in winter; avoid overhead sprinkler splashing; improve grove aeration.",
          chemicalCure: "Copper Oxychloride 50% WP or Mancozeb 75% WP.",
          applicationTiming: "Spray in November after frond pruning and again in February."
        },
        {
          diseaseName: "Black Scorch / Thielaviopsis Fruit Rot",
          causalAgent: "Fungus (Thielaviopsis paradoxa / Ceratocystis)",
          symptoms: "Charred, burnt appearance of heart fronds, spathe decay, and trunk terminal bud rot.",
          preventativeCare: "Disinfect pruning saws with 10% bleach solution; seal all cut offshoot wounds with copper paste.",
          chemicalCure: "Thiophanate-Methyl 70% WP or Copper Hydroxide.",
          applicationTiming: "Immediate drench of wound sites upon offshoot detachment."
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "Single Superphosphate (SSP) 1.5 kg + Potassium Sulfate (SOP) 1.0 kg per mature palm applied in circular trench in December.",
        vegetativeStage: "Urea 750g per palm split into 2 doses applied in February (spathe push) and April (fruit set).",
        floweringFruiting: "Potassium Nitrate (13-0-45) 500g per palm in May during rapid Chimri cell expansion.",
        foliarMicronutrients: "Zinc Sulfate (33%) 0.2% + Boric Acid (17%) 0.15% + Iron Chelate (Fe-EDDHA) 50g/palm to prevent chlorosis in alkaline soils."
      },
      organicAndBioFertilizers: {
        fymRequirement: "40–50 kg well-decomposed cow/sheep manure per mature tree incorporated 1 meter away from trunk in December.",
        greenManuring: "Inter-row sowing of Sesbania (Jantar) or Cowpea in May, incorporated into soil at 45 days before monsoon.",
        bioStimulants: "Humic Acid (85%) @ 25g/palm applied via irrigation water twice a year.",
        saltReclamationGypsum: "Agricultural Gypsum (CaSO4·2H2O) @ 5–10 kg per palm basin annually to displace exchangeable sodium in saline soils."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Precision laser land leveling with zero slope across basin terraces to ensure 100% uniform flood wetting and eliminate saline dry spots.",
      hardpanSubsoilingDepth: "Deep subsoiling to 90–120 cm with single-shank ripper in cross-grid to shatter hard calcareous petrocalcic caliche pans.",
      bedRidgeDimensions: "Planting pits 1m x 1m x 1m excavated on 8m x 8m (156 palms/ha) or 9m x 9m square grids.",
      drainageAndBundSpecs: "Perimeter soil bunds 45 cm high with 30 cm deep drainage bypass ditches to evacuate spate flood silt and prevent waterlogging >48 hours."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Karez Warabandi cycle of 10–14 days in winter, accelerating to 5–7 days in peak summer heat (May–July).",
      dripFlowRateAndHours: "Pressure-compensating drip emitters delivering 120–160 Liters/palm/day during fruit sizing in June.",
      pruningTrainingSystem: "Maintain standard 8:1 to 9:1 green leaf-to-bunch ratio (60–80 healthy fronds per mature palm).",
      thinningAndCanopyManagement: "Hand thin 25–35% of inner fruit strands at pollination; prune lower dried fronds with curved sickles in December."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Gwadar Deep Sea Port (Direct Gulf freight)", "Taftan & Rimdan Border (Iran & Central Asia)", "Karachi Port (Containerized Reefer to EU & USA)"],
      quarantineAndPhytosanitary: "Mandatory methyl bromide or phosphine vacuum fumigation; freedom from Red Palm Weevil and Ephestia storage moth certification.",
      importSubstitutionImpact: "Saves Pakistan over $180M annually in foreign exchange through domestic substitution of high-grade table and industrial dates.",
      coldChainAndPackagingStandards: "Pre-cooling to 4°C within 12 hours of harvest; continuous -18°C frozen storage for Mozawati Rutab blocks in 500g thermo-formed vacuum packs."
    }
  },

  // 2. APPLE
  "apple": {
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Codling Moth (Cydia pomonella)",
          localUrduName: "سیب کا اندرونی کیڑا (سنڈی)",
          symptoms: "Entry holes on fruit surface plugged with dark brown granular frass; premature fruit drop in Ziarat & Pishin valleys.",
          organicCure: "Pheromone mating disruption dispensers (400 dispensers/ha); cardboard banding around trunks to trap pupae.",
          chemicalCure: "Chlorantraniliprole (Coragen 20 SC) or Emamectin Benzoate 1.9 EC.",
          applicationDose: "Coragen @ 0.3ml/L water timed precisely at 100 GDD after biofix catch.",
          sprayTiming: "First generation: 3 weeks after petal fall (May); second generation: mid-July.",
          urgency: "Critical"
        },
        {
          pestName: "Woolly Apple Aphid (Eriosoma lanigerum)",
          localUrduName: "سیب کا سفید روئی دار تیلا",
          symptoms: "White cottony/woolly clusters on twigs, pruning wounds, and subterranean root galls causing tree stunting.",
          organicCure: "Release of parasitoid wasp Aphelinus mali; paint trunk pruning cuts with neem oil + copper.",
          chemicalCure: "Spirotetramat 240 SC (Movento) or Imidacloprid 200 SL root drench.",
          applicationDose: "Movento @ 1.0ml/L water as systemic foliar spray.",
          sprayTiming: "Post-bloom in May when upward crawler migration starts.",
          urgency: "High"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Apple Scab (Venturia inaequalis)",
          causalAgent: "Fungus (Venturia inaequalis)",
          symptoms: "Olive-green to velvety black corky lesions on leaves and fruit rind, leading to severe fruit cracking.",
          preventativeCare: "Rake and compost all fallen leaves in autumn; apply urea (5%) foliar spray before leaf fall to accelerate decomposition.",
          chemicalCure: "Difenoconazole (Score 250 EC) or Mancozeb 80% WP.",
          applicationTiming: "Green tip, pink bud, and petal fall critical protective stages."
        },
        {
          diseaseName: "Powdery Mildew (Podosphaera leucotricha)",
          causalAgent: "Fungus (Podosphaera leucotricha)",
          symptoms: "White powdery fungal growth covering terminal shoots, causing narrow deformed leaves and russeted fruit skin.",
          preventativeCare: "Prune out white mildewed terminal shoot tips during winter pruning.",
          chemicalCure: "Penconazole 100 EC or Wettable Sulfur 80% WP.",
          applicationTiming: "Pink bud stage in April and repeat at 14-day intervals."
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "DAP 1.0 kg + SOP 1.0 kg per mature tree applied in circular trench at drip line in February.",
        vegetativeStage: "Urea 500g applied at green tip (March) and 500g post-bloom (May).",
        floweringFruiting: "Calcium Nitrate (15.5-0-0 + 19% Ca) @ 300g/tree to prevent Bitter Pit disorder.",
        foliarMicronutrients: "Zinc Sulfate 0.3% + Boron (Solubor) 0.1% at pink bud stage; Calcium Chloride 0.5% foliar sprays in June/July."
      },
      organicAndBioFertilizers: {
        fymRequirement: "35–45 kg well-rotted farmyard manure per tree incorporated in autumn with leaf fall.",
        greenManuring: "Winter cover crop of Alfalfa or Vetch sown between tree rows.",
        bioStimulants: "Seaweed extract (Ascophyllum nodosum) foliar spray @ 2ml/L during cell division.",
        saltReclamationGypsum: "Not typically required in highlands; apply sulfur to lower soil pH where >7.8."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Contour bench terracing on mountain slopes with 1% inward slope to retain snowmelt and prevent soil erosion.",
      hardpanSubsoilingDepth: "Ripping and subsoiling to 80 cm depth to break limestone compaction.",
      bedRidgeDimensions: "Semi-dwarf rootstocks (MM106) planted at 4m x 3m (833 trees/ha); standard rootstocks at 6m x 6m.",
      drainageAndBundSpecs: "Stone retaining terrace bunds with gravel-lined percolation drains."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Mountain spring gravity channels or deep tube wells scheduled every 8–10 days from April to September.",
      dripFlowRateAndHours: "Dual inline drip lines delivering 45–60 Liters/tree/day during June fruit expansion.",
      pruningTrainingSystem: "Modified Central Leader or Slender Spindle training system.",
      thinningAndCanopyManagement: "Hand thin to 1 fruit per spur cluster (15–20 cm fruit-to-fruit distance) within 30 days of petal fall."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Chaman & Torkham border to Afghanistan & Central Asia", "Air freight from Quetta/Karachi to UAE and Sri Lanka"],
      quarantineAndPhytosanitary: "Certified pest-free from Codling Moth larvae; residue testing below international MRLs.",
      importSubstitutionImpact: "Supplies >80% of national apple consumption, substituting $250M of potential fruit imports.",
      coldChainAndPackagingStandards: "Controlled Atmosphere (CA) storage at 0.5°C, 92% RH with 1.5% O2 and 1.0% CO2 for 8 months."
    }
  },

  // 3. POMEGRANATE
  "pomegranate": {
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Pomegranate Butterfly / Fruit Borer (Virachola isocrates)",
          localUrduName: "انار کی تتلی / اندرونی سنڈی",
          symptoms: "Caterpillars bore into growing fruits, excreting offensive-smelling feces; fruit rots and drops prematurely.",
          organicCure: "Bagging young fruits with non-woven fabric bags when marble-sized; release of Trichogramma chilonis wasps.",
          chemicalCure: "Spinetoram 11.7 SC or Chlorantraniliprole 18.5 SC.",
          applicationDose: "Spinetoram @ 0.5ml/L water sprayed when adult butterflies observed hovering.",
          sprayTiming: "Late April when first floral petals drop and fruit sets.",
          urgency: "Critical"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Bacterial Blight / Oily Spot (Xanthomonas axonopodis pv. punicae)",
          causalAgent: "Bacterium (Xanthomonas axonopodis)",
          symptoms: "Dark brown water-soaked angular spots on leaves, nodal stem cankers, and 'Y' or 'L' shaped oily cracks on fruit.",
          preventativeCare: "Strict sanitation, prune infected shoots 5 cm below lesion, apply Bordeaux paste to wounds.",
          chemicalCure: "Streptomycin Sulfate + Copper Oxychloride (Bacticide).",
          applicationTiming: "Pruning stage in February and post-monsoon in August."
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "DAP 500g + SOP 600g per mature plant in December.",
        vegetativeStage: "Urea 300g in February and 300g in April.",
        floweringFruiting: "Calcium Nitrate 250g in June to strengthen rind and eliminate fruit splitting.",
        foliarMicronutrients: "Foliar Zinc Sulfate 0.2% + Solubor 0.15% at full bloom in May."
      },
      organicAndBioFertilizers: {
        fymRequirement: "30 kg decomposed manure per bush in winter.",
        greenManuring: "Inter-row green manuring with Cowpea.",
        bioStimulants: "Humic acid drenching @ 20g/bush.",
        saltReclamationGypsum: "Gypsum @ 4 kg/plant in alkaline soils."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Laser leveled basins with gentle 0.2% slope for drainage.",
      hardpanSubsoilingDepth: "Subsoiling to 75 cm.",
      bedRidgeDimensions: "Planting pits 75cm x 75cm at 5m x 4m spacing (500 trees/ha).",
      drainageAndBundSpecs: "Perimeter ridges 30cm high."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Regular irrigation every 6–8 days; critical to maintain uniform soil moisture to avoid rind burst.",
      dripFlowRateAndHours: "30–40 Liters/plant/day.",
      pruningTrainingSystem: "Multi-stem training (3–4 main stems) to prevent total tree loss if stem borer attacks.",
      thinningAndCanopyManagement: "Remove root suckers continuously and thin overcrowded fruit clusters."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Karachi Port to UAE, Oman, Qatar", "Taftan border to Iran"],
      quarantineAndPhytosanitary: "Free of fruit borer certification, cushioned corrugated carton packaging.",
      importSubstitutionImpact: "Reduces import of foreign pomegranates and exports premium Kandahari fruits.",
      coldChainAndPackagingStandards: "Cold storage at 5°C with 90% RH for up to 3 months."
    }
  },

  // 4. ONION
  "onion": {
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Onion Thrips (Thrips tabaci)",
          localUrduName: "پیاز کا رس چوسنے والا کیڑا (تھراپس)",
          symptoms: "Silvery streaks on leaf blades, curling of leaf tips, and stunted bulb formation.",
          organicCure: "Yellow and blue sticky traps (30/ha); spray neem seed kernel extract (5%).",
          chemicalCure: "Spinosad 45 SC or Fipronil 5 SC.",
          applicationDose: "Spinosad @ 0.3ml/L water.",
          sprayTiming: "Early morning spray when thrips count exceeds 5 per plant.",
          urgency: "High"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Purple Blotch (Alternaria porri)",
          causalAgent: "Fungus (Alternaria porri)",
          symptoms: "Small water-soaked lesions on leaves turning purple with concentric rings and yellow halo.",
          preventativeCare: "Crop rotation with wheat or legumes; avoid dense planting.",
          chemicalCure: "Mancozeb 75% WP or Tebuconazole 250 EC.",
          applicationTiming: "Preventative spray at 45 and 60 days after transplanting."
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "DAP 1.5 bags/acre + SOP 1 bag/acre at final seedbed preparation.",
        vegetativeStage: "Urea 1 bag/acre at 30 days after transplanting.",
        floweringFruiting: "Urea 1 bag/acre + SOP 1 bag/acre at 60 days (bulb initiation).",
        foliarMicronutrients: "Zinc Sulfate 0.5% + Boron 0.2% spray at bulb swelling."
      },
      organicAndBioFertilizers: {
        fymRequirement: "25 tonnes decomposed farmyard manure per hectare.",
        greenManuring: "Sesbania incorporated 45 days prior to nursery transplanting.",
        bioStimulants: "Azotobacter bio-fertilizer seed/seedling root dip.",
        saltReclamationGypsum: "Gypsum @ 2 tonnes/ha on saline calcisols."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Precision laser leveling to zero grade across raised beds.",
      hardpanSubsoilingDepth: "Subsoiling to 60 cm.",
      bedRidgeDimensions: "Raised beds 1m wide with 30cm furrows; seedlings planted at 15cm x 10cm.",
      drainageAndBundSpecs: "Perimeter field drainage to avoid waterlogging."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Furrow irrigation every 5–7 days; withhold irrigation 10 days before harvest.",
      dripFlowRateAndHours: "Inline drip lines with 20cm emitter spacing delivering 2 Liters/hr.",
      pruningTrainingSystem: "Keep strictly weed-free; de-bolt seed stalks if commercial bulb crop.",
      thinningAndCanopyManagement: "Maintain plant population of 600,000 plants/ha."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Karachi Port to Sri Lanka, Bangladesh, Malaysia, UAE", "Taftan border to Iran"],
      quarantineAndPhytosanitary: "Cured outer skin with dry necks; freedom from Ditylenchus stem nematode.",
      importSubstitutionImpact: "Stabilizes national onion prices during the critical July–October supply window.",
      coldChainAndPackagingStandards: "Ventilated mesh bags (40kg) stored in well-ventilated dry sheds at 0–2°C."
    }
  },

  // 5. WHEAT
  "wheat": {
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Wheat Aphid (Rhopalosiphum padi)",
          localUrduName: "گندم کا سست تیلا (ایفڈ)",
          symptoms: "Colonies suck sap from leaf sheaths and earheads, producing honeydew and reducing grain weight.",
          organicCure: "Conservation of Ladybird beetles and Chrysoperla predators.",
          chemicalCure: "Imidacloprid 200 SL or Flonicamid 50 WG.",
          applicationDose: "Imidacloprid @ 100ml/acre.",
          sprayTiming: "When aphid population exceeds economic threshold (15 aphids/tiller) in February.",
          urgency: "Moderate"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Yellow / Stripe Rust (Puccinia striiformis)",
          causalAgent: "Fungus (Puccinia striiformis)",
          symptoms: "Bright yellow pustules arranged in linear stripes on leaf blades; severe grain shriveling.",
          preventativeCare: "Sow rust-resistant certified cultivars (Akbar-19, Fakhr-e-Bhakkar).",
          chemicalCure: "Tebuconazole 250 EC or Azoxystrobin + Difenoconazole.",
          applicationTiming: "Immediate spray upon first observation of rust foci in late January/February."
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "DAP 1.5 bags/acre + SOP 1 bag/acre drilled with seed.",
        vegetativeStage: "Urea 1 bag/acre at 1st irrigation (CRI stage, 21 days post-sowing).",
        floweringFruiting: "Urea 1 bag/acre at booting stage (heading).",
        foliarMicronutrients: "Zinc Sulfate (33%) 5 kg/acre basal or 0.2% foliar spray at tillering."
      },
      organicAndBioFertilizers: {
        fymRequirement: "15 tonnes FYM/ha incorporated during summer ploughing.",
        greenManuring: "Sesbania (Jantar) green manuring in summer post-wheat harvest.",
        bioStimulants: "Phosphorus Solubilizing Bacteria (PSB) seed inoculation.",
        saltReclamationGypsum: "Gypsum @ 3 tonnes/ha in canal saline-sodic patches."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Laser land leveling with precision grade of 0.05% for uniform flood advance.",
      hardpanSubsoilingDepth: "Subsoiling to 70 cm.",
      bedRidgeDimensions: "Drill in rows 20–22 cm apart at seed rate of 125 kg/ha.",
      drainageAndBundSpecs: "Check basins (1 kanal blocks) with strong border bunds."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "4–5 critical irrigations: CRI (21 days), Tillering (45 days), Booting (75 days), Milk stage (95 days).",
      dripFlowRateAndHours: "Border flood or Karez Warabandi gravity flow.",
      pruningTrainingSystem: "Broadleaf weed control with Bromoxynil + MCPA at 35 days.",
      thinningAndCanopyManagement: "Optimum plant density of 3.5 million tillers/ha."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["National strategic reserves & Government Food Department procurement"],
      quarantineAndPhytosanitary: "Grain moisture <12%, freedom from Tilletia indica (Karnal Bunt).",
      importSubstitutionImpact: "Maintains provincial food sovereignty and flour milling supply across Balochistan.",
      coldChainAndPackagingStandards: "Airtight silo storage or polypropylene bags with aluminum phosphide fumigation."
    }
  }
};

/**
 * Universal Fallback for any crop not explicitly listed above
 */
export const getCropFullAgronomy = (cropId: string): CropFullAgronomyExtension => {
  if (CROP_AGRONOMY_DATABASE[cropId]) {
    return CROP_AGRONOMY_DATABASE[cropId];
  }

  // Generate complete agronomic protocols dynamically
  return {
    pestsAndDiseases: {
      activePests: [
        {
          pestName: "Sap Sucking Insects & Borers",
          localUrduName: "رس چوسنے والے کیڑے و سنڈیاں",
          symptoms: "Foliage curling, chlorotic spots, sap oozing, and fruit blemish.",
          organicCure: "Neem oil extract (2%) + yellow sticky traps (25 traps/ha) + predatory insects.",
          chemicalCure: "Targeted systemic insecticides (Acetamiprid or Spinosad) at recommended field rates.",
          applicationDose: "Acetamiprid @ 1.0g/L water.",
          sprayTiming: "Early morning or late afternoon scouting.",
          urgency: "Moderate"
        }
      ],
      majorDiseases: [
        {
          diseaseName: "Fungal Leaf Spot & Root Rot",
          causalAgent: "Pathogenic Fungi (Fusarium / Alternaria spp.)",
          symptoms: "Necrotic foliage spots, vascular wilt, and root collar browning.",
          preventativeCare: "Soil solarization, certified seed treatment, and balanced irrigation.",
          chemicalCure: "Copper Oxychloride (50% WP) or Mancozeb + Metalaxyl.",
          applicationTiming: "Preventative drenching at transplanting or flush emergence."
        }
      ]
    },
    fertilizerPlan: {
      chemicalSchedule: {
        basalDose: "Balanced NPK (1:1:1) basal application incorporated during seedbed preparation.",
        vegetativeStage: "Nitrogen top dressing split in 2 applications during active vegetative leaf flush.",
        floweringFruiting: "Potassium Sulfate (SOP) application during fruit/seed development.",
        foliarMicronutrients: "Zinc Sulfate (0.2%) + Solubor (0.1%) foliar spray."
      },
      organicAndBioFertilizers: {
        fymRequirement: "20–30 tonnes well-rotted farmyard manure per hectare.",
        greenManuring: "Sesbania (Jantar) incorporated in summer.",
        bioStimulants: "Humic acid drench @ 25g/plant or 5 kg/ha.",
        saltReclamationGypsum: "Gypsum @ 2–4 tonnes/ha in alkaline soils."
      }
    },
    landLevelingPlan: {
      laserLevelingSpecs: "Precision laser leveling to 0.05% slope for uniform water advance.",
      hardpanSubsoilingDepth: "Subsoiling to 75 cm to shatter calcareous subsoil hardpans.",
      bedRidgeDimensions: "Raised beds or contour terrace planting aligned with slope.",
      drainageAndBundSpecs: "Perimeter soil bunds with drainage bypass channels."
    },
    irrigationAndPruningPlan: {
      karezAndWaterScheduling: "Scheduled irrigation according to local Karez or tube-well Warabandi cycles.",
      dripFlowRateAndHours: "Drip emitters delivering optimal crop evapotranspiration requirement.",
      pruningTrainingSystem: "Open center or central leader training to optimize solar irradiance.",
      thinningAndCanopyManagement: "Sanitation pruning of dead and diseased wood in winter."
    },
    tradeAndExportPlan: {
      exportCorridorsAndPorts: ["Karachi Mandi", "Quetta Wholesale Market", "Gwadar Port & Taftan Border"],
      quarantineAndPhytosanitary: "Phytosanitary inspection, proper grading and certified packaging.",
      importSubstitutionImpact: "Generates high rural farm income and enhances national food security.",
      coldChainAndPackagingStandards: "Graded in corrugated cartons and stored under climate-controlled conditions."
    }
  };
};
