import React, { useState } from 'react';
import { 
  BalochistanCrop, 
  CropCategory 
} from '../types';
import { BALOCHISTAN_CROPS, BALOCHISTAN_AGRI_DEPT_META } from '../data/balochistanAgriData';
import { PhenologicalCalendarView } from './PhenologicalCalendarView';
import { 
  TreePalm, 
  Apple, 
  Wheat, 
  Sparkles, 
  Calendar, 
  Droplet, 
  Sun, 
  ShieldCheck, 
  Search, 
  ChevronRight, 
  Building2, 
  Info, 
  TrendingUp, 
  Thermometer, 
  Layers, 
  Activity,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface BalochistanCropsViewProps {
  onAskAiAboutCrop?: (cropName: string) => void;
}

export const BalochistanCropsView: React.FC<BalochistanCropsViewProps> = ({ onAskAiAboutCrop }) => {
  const [selectedCropId, setSelectedCropId] = useState<string>(BALOCHISTAN_CROPS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDetailSection, setActiveDetailSection] = useState<'guide' | 'pests' | 'fertilizer' | 'engineering' | 'irrigation' | 'soil' | 'water' | 'climate' | 'calendar' | 'trade' | 'export'>('guide');

  const selectedCrop = BALOCHISTAN_CROPS.find(c => c.id === selectedCropId) || BALOCHISTAN_CROPS[0];

  const filteredCrops = BALOCHISTAN_CROPS.filter(c => {
    const matchesCategory = activeCategory === 'all' || c.category === activeCategory;
    const matchesSearch = !searchQuery || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.localBalochiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.majorDistricts.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4">
      
      {/* Official Government Department Banner */}
      <div className="bg-gradient-to-r from-[#0c2a1e] via-[#144230] to-[#1c553f] text-white rounded-2xl p-4 shadow-sm border border-emerald-800">
        <div className="flex items-center justify-between pb-1.5 border-b border-emerald-800/80">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest">
              Government of Balochistan • Agriculture Extension Department
            </span>
          </div>
          <span className="text-[10px] font-mono bg-emerald-950/80 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-700">
            Nazeer Ahmed, Agri Office Turbat
          </span>
        </div>
        <h2 className="text-lg font-display font-black text-white mt-1.5">
          Balochistan Comprehensive Crops, Trees & Horticultural Atlas
        </h2>
        <p className="text-xs text-stone-200 mt-1 leading-relaxed">
          Authoritative technical specifications, soil-water dynamics, 8-stage plantation guides, and trade flows across all agro-ecological zones.
        </p>
      </div>

      {/* Category Filter Pills & Search */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'all'
                ? 'bg-emerald-950 text-amber-300 shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            All Crops ({BALOCHISTAN_CROPS.length})
          </button>

          {(['Orchard & Fruit Tree', 'Vegetable', 'Field & Cash Crop'] as CropCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-emerald-950 text-amber-300 shadow-xs'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              {cat === 'Orchard & Fruit Tree' ? '🌳 Fruit & Orchard Trees' :
               cat === 'Vegetable' ? '🥕 High-Value Vegetables' : '🌾 Field & Cash Crops'}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search crop by name, Balochi name, or district (e.g. Date, Apple, Onion, Turbat)..."
            className="w-full bg-white text-xs pl-8 pr-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
          />
        </div>
      </div>

      {/* Crop Selector Horizontal Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-h-48 overflow-y-auto no-scrollbar p-0.5">
        {filteredCrops.map((crop) => {
          const isSelected = selectedCrop.id === crop.id;
          return (
            <button
              key={crop.id}
              onClick={() => setSelectedCropId(crop.id)}
              className={`p-2.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-400 border-amber-200 text-emerald-950 font-black shadow-md ring-2 ring-emerald-700'
                  : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black truncate">{crop.name}</span>
                  <span className="text-[10px] font-bold opacity-80">{crop.localBalochiName.split(' ')[0]}</span>
                </div>
                <div className="text-[9px] opacity-75 truncate mt-0.5">{crop.scientificName}</div>
              </div>
              <div className="mt-2 pt-1 border-t border-black/10 flex items-center justify-between text-[9px] font-mono">
                <span>{crop.balochistanStats.nationalSharePercent}% Pak Share</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Crop Deep-Dive Dossier */}
      <div className="bg-white border-2 border-emerald-900/30 rounded-3xl p-4 shadow-sm space-y-4">
        
        {/* Crop Hero Card */}
        <div className="bg-[#fcfaf5] border border-[#ded7c4] rounded-2xl p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-display font-black text-emerald-950">
                  {selectedCrop.name}
                </h3>
                <span className="text-base font-bold text-amber-700">
                  ({selectedCrop.localBalochiName})
                </span>
                <span className="text-xs font-semibold text-stone-500">
                  / {selectedCrop.localUrduName}
                </span>
              </div>
              <div className="text-xs font-mono text-stone-600 mt-0.5 italic">
                {selectedCrop.scientificName} • {selectedCrop.category}
              </div>
            </div>

            <button
              onClick={() => onAskAiAboutCrop?.(selectedCrop.name)}
              className="px-3 py-1.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask Extension Officer</span>
            </button>
          </div>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-white p-2.5 rounded-xl border border-stone-200">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Balochistan Acreage:</span>
              <div className="text-base font-mono font-black text-emerald-950 mt-0.5">
                {selectedCrop.balochistanStats.totalAcreageHectares.toLocaleString()} ha
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold">
                {selectedCrop.balochistanStats.nationalSharePercent}% of Pakistan
              </span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Annual Production:</span>
              <div className="text-base font-mono font-black text-amber-950 mt-0.5">
                {selectedCrop.balochistanStats.annualProductionMT.toLocaleString()} MT
              </div>
              <span className="text-[10px] text-stone-500">
                {selectedCrop.balochistanStats.avgYieldPerHa}
              </span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Primary Hub:</span>
              <div className="text-xs font-bold text-stone-800 mt-0.5 line-clamp-1">
                {selectedCrop.primaryProductionHub}
              </div>
              <span className="text-[10px] text-stone-500">
                Key Districts: {selectedCrop.majorDistricts.slice(0, 2).join(', ')}
              </span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Current Status:</span>
              <div className="text-xs font-bold text-emerald-800 mt-0.5 line-clamp-2">
                {selectedCrop.balochistanStats.currentSeasonStatus}
              </div>
            </div>
          </div>

          {/* Key Varieties */}
          <div className="text-xs pt-1 border-t border-stone-200 flex flex-wrap items-center gap-1.5">
            <span className="font-extrabold text-stone-700">Top Cultivars / Varieties:</span>
            {selectedCrop.varietiesOrCultivars.map((v) => (
              <span key={v} className="bg-amber-100 text-amber-950 font-semibold px-2 py-0.5 rounded-lg text-[11px] border border-amber-300">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveDetailSection('guide')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'guide'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            📋 Plantation Guide
          </button>

          <button
            onClick={() => setActiveDetailSection('pests')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'pests'
                ? 'bg-emerald-950 text-amber-300 shadow-xs ring-1 ring-amber-400'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            🐛 Pests & Diseases (Cures & Doses)
          </button>

          <button
            onClick={() => setActiveDetailSection('fertilizer')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'fertilizer'
                ? 'bg-emerald-950 text-amber-300 shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            🧪 Fertilizer & Organic FYM
          </button>

          <button
            onClick={() => setActiveDetailSection('engineering')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'engineering'
                ? 'bg-emerald-950 text-amber-300 shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            🚜 Land Leveling & Ridges
          </button>

          <button
            onClick={() => setActiveDetailSection('irrigation')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'irrigation'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            💧 Irrigation & Pruning
          </button>

          <button
            onClick={() => setActiveDetailSection('calendar')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'calendar'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            📅 12-Month Phenology
          </button>

          <button
            onClick={() => setActiveDetailSection('soil')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'soil'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            🌱 Soil & Salinity
          </button>

          <button
            onClick={() => setActiveDetailSection('climate')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'climate'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            ☀️ Weather & Climate
          </button>

          <button
            onClick={() => setActiveDetailSection('export')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'export'
                ? 'bg-emerald-950 text-amber-300 shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            🚢 Export & Import Trade
          </button>

          <button
            onClick={() => setActiveDetailSection('trade')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeDetailSection === 'trade'
                ? 'bg-emerald-950 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            📦 Mandi & Production
          </button>
        </div>

        {/* SECTION 1: 8-STAGE PLANTATION TO HARVEST GUIDE */}
        {activeDetailSection === 'guide' && (
          <div className="space-y-2.5 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Step-by-Step Plantation-to-Harvest Agronomic Protocol (Official Guide):
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">1</span>
                  Nursery & Propagation
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.nurseryAndSeedPrep}
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">2</span>
                  Land Preparation & Tillage
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.landPreparation}
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">3</span>
                  Spacing, Geometry & Planting
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.spacingAndPlanting}
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">4</span>
                  Fertilization & Nutrition
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.irrigationAndFertilizer}
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">5</span>
                  Pruning, Canopy & Fruit Thinning
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.pruningThinningCanopy}
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">6</span>
                  Pest & Disease IPM
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.pestAndDiseaseManagement}
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">7</span>
                  Harvesting & Maturity Indices
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.harvestingIndices}
                </p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 space-y-1">
                <span className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">8</span>
                  Curing, Packaging & Cold Storage
                </span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {selectedCrop.plantationToHarvestGuide.curingAndPostHarvest}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 1B: COMPREHENSIVE PESTS, DISEASES, CURES & APPLICATIONS (USER REQUESTED) */}
        {activeDetailSection === 'pests' && (
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-black text-emerald-950 uppercase tracking-wider block">
                Active Pests, Pathogens, Symptoms, Dosages & Cures:
              </span>
              <span className="bg-rose-100 text-rose-900 font-bold px-2 py-0.5 rounded-full text-[10px] border border-rose-300">
                Extension Clinical Field Guide
              </span>
            </div>

            {/* Active Pests Section */}
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                Key Insect Pests & Recommended Field Cures:
              </h4>

              {selectedCrop.pestsAndDiseases?.activePests && selectedCrop.pestsAndDiseases.activePests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCrop.pestsAndDiseases.activePests.map((pest, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <strong className="text-emerald-950 text-sm block font-extrabold">
                            {pest.pestName}
                          </strong>
                          {pest.localUrduName && (
                            <span className="text-xs font-semibold text-emerald-700 font-serif">
                              {pest.localUrduName}
                            </span>
                          )}
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          pest.urgency === 'Critical' ? 'bg-rose-100 text-rose-900 border border-rose-300' :
                          pest.urgency === 'High' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                          'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        }`}>
                          {pest.urgency}
                        </span>
                      </div>

                      <div className="p-2 bg-stone-50 rounded-xl border border-stone-100 text-stone-700">
                        <span className="text-[10px] font-bold text-stone-500 uppercase block mb-0.5">Symptoms & Damage:</span>
                        <p className="text-[11px] leading-relaxed">{pest.symptoms}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 bg-emerald-50/70 rounded-xl border border-emerald-200 text-emerald-950">
                          <strong className="block text-emerald-900 font-bold mb-0.5">🌿 Organic / Bio-Cure:</strong>
                          <p>{pest.organicCure}</p>
                        </div>
                        <div className="p-2 bg-blue-50/70 rounded-xl border border-blue-200 text-blue-950">
                          <strong className="block text-blue-900 font-bold mb-0.5">🧪 Chemical Formulation:</strong>
                          <p>{pest.chemicalCure}</p>
                        </div>
                      </div>

                      <div className="p-2 bg-amber-50/70 rounded-xl border border-amber-200 text-[11px] text-amber-950 flex flex-wrap justify-between gap-2">
                        <div>
                          <span className="font-bold block">Application Dosage:</span>
                          <span className="font-mono text-stone-800">{pest.applicationDose}</span>
                        </div>
                        <div>
                          <span className="font-bold block">Ideal Spray Timing:</span>
                          <span className="text-stone-800">{pest.sprayTiming}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#fbf9f4] p-3.5 rounded-2xl border border-stone-200 space-y-2">
                  <strong className="text-emerald-950 block">Integrated Pest Management (IPM) Directive:</strong>
                  <p className="text-stone-700 leading-relaxed text-[11px]">
                    {selectedCrop.plantationToHarvestGuide.pestAndDiseaseManagement}
                  </p>
                </div>
              )}
            </div>

            {/* Major Diseases Section */}
            {selectedCrop.pestsAndDiseases?.majorDiseases && selectedCrop.pestsAndDiseases.majorDiseases.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-stone-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Pathological Diseases & Fungicidal/Bacterial Directives:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCrop.pestsAndDiseases.majorDiseases.map((dis, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                      <div className="flex items-start justify-between">
                        <strong className="text-emerald-950 text-sm font-extrabold">{dis.diseaseName}</strong>
                        <span className="font-mono text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-lg">
                          {dis.causalAgent}
                        </span>
                      </div>

                      <p className="text-stone-700 text-[11px] leading-relaxed">
                        <strong className="text-stone-900">Symptoms:</strong> {dis.symptoms}
                      </p>

                      <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-950">
                        <strong className="block font-bold mb-0.5">🛡️ Cultural & Preventative Protocol:</strong>
                        <p>{dis.preventativeCare}</p>
                      </div>

                      <div className="p-2 bg-blue-50 rounded-xl border border-blue-200 text-[11px] text-blue-950">
                        <strong className="block font-bold mb-0.5">🧪 Prescribed Cure & Application:</strong>
                        <p>{dis.chemicalCure} ({dis.applicationTiming})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SECTION 1C: FERTILIZER & ORGANIC NUTRITION (USER REQUESTED) */}
        {activeDetailSection === 'fertilizer' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Nutrition Schedule, Synthetic NPK & Organic Manuring Plan:
            </span>

            {selectedCrop.fertilizerPlan ? (
              <div className="space-y-3">
                {/* Synthetic NPK */}
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200 space-y-2">
                  <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                    🧪 Chemical Fertilization Schedule:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 bg-[#fbf9f4] rounded-xl border border-stone-200">
                      <strong className="text-emerald-900 block font-bold mb-1">Basal Dose (Pre-Planting/Winter):</strong>
                      <p className="text-stone-700">{selectedCrop.fertilizerPlan.chemicalSchedule.basalDose}</p>
                    </div>
                    <div className="p-2.5 bg-[#fbf9f4] rounded-xl border border-stone-200">
                      <strong className="text-emerald-900 block font-bold mb-1">Vegetative Growth Stage:</strong>
                      <p className="text-stone-700">{selectedCrop.fertilizerPlan.chemicalSchedule.vegetativeStage}</p>
                    </div>
                    <div className="p-2.5 bg-[#fbf9f4] rounded-xl border border-stone-200">
                      <strong className="text-emerald-900 block font-bold mb-1">Flowering & Fruit Sizing:</strong>
                      <p className="text-stone-700">{selectedCrop.fertilizerPlan.chemicalSchedule.floweringFruiting}</p>
                    </div>
                    <div className="p-2.5 bg-[#fbf9f4] rounded-xl border border-stone-200">
                      <strong className="text-emerald-900 block font-bold mb-1">Foliar Micronutrients (Zn, B, Fe):</strong>
                      <p className="text-stone-700">{selectedCrop.fertilizerPlan.chemicalSchedule.foliarMicronutrients}</p>
                    </div>
                  </div>
                </div>

                {/* Organic & Bio Fertilizers */}
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200 space-y-2">
                  <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                    🌿 Organic Nutrition, FYM & Soil Conditioners:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <strong className="text-emerald-950 block font-bold mb-1">Farmyard Manure (FYM) Dosage:</strong>
                      <p className="text-stone-800">{selectedCrop.fertilizerPlan.organicAndBioFertilizers.fymRequirement}</p>
                    </div>
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <strong className="text-emerald-950 block font-bold mb-1">Green Manuring / Cover Crops:</strong>
                      <p className="text-stone-800">{selectedCrop.fertilizerPlan.organicAndBioFertilizers.greenManuring}</p>
                    </div>
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <strong className="text-emerald-950 block font-bold mb-1">Bio-Stimulants & Microbials:</strong>
                      <p className="text-stone-800">{selectedCrop.fertilizerPlan.organicAndBioFertilizers.bioStimulants}</p>
                    </div>
                    {selectedCrop.fertilizerPlan.organicAndBioFertilizers.saltReclamationGypsum && (
                      <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200">
                        <strong className="text-amber-950 block font-bold mb-1">Salinity / Gypsum Reclamation:</strong>
                        <p className="text-stone-800">{selectedCrop.fertilizerPlan.organicAndBioFertilizers.saltReclamationGypsum}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Fertilization Protocol:</strong>
                <p className="text-stone-700">{selectedCrop.plantationToHarvestGuide.irrigationAndFertilizer}</p>
              </div>
            )}
          </div>
        )}

        {/* SECTION 1D: LAND LEVELING & ENGINEERING (USER REQUESTED) */}
        {activeDetailSection === 'engineering' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Precision Land Leveling, Ridges, Bunds & Soil Engineering:
            </span>

            {selectedCrop.landLevelingPlan ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">🚜 Laser Land Leveling Specs:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.landLevelingPlan.laserLevelingSpecs}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">⛏️ Subsoiling & Hardpan Breaking:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.landLevelingPlan.hardpanSubsoilingDepth}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">📐 Bed, Ridge & Furrow Dimensions:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.landLevelingPlan.bedRidgeDimensions}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">🌊 Drainage Channels & Perimeter Bunds:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.landLevelingPlan.drainageAndBundSpecs}</p>
                </div>
              </div>
            ) : (
              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Land Preparation & Geometry:</strong>
                <p className="text-stone-700">{selectedCrop.plantationToHarvestGuide.landPreparation}</p>
              </div>
            )}
          </div>
        )}

        {/* SECTION 1E: IRRIGATION & PRUNING (USER REQUESTED) */}
        {activeDetailSection === 'irrigation' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Irrigation Hydraulics, Karez Cycles, Pruning & Canopy Architecture:
            </span>

            {selectedCrop.irrigationAndPruningPlan ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">💧 Karez & Gravity Canal Scheduling:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.irrigationAndPruningPlan.karezAndWaterScheduling}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">⏱️ Drip System Flow Rates & Pressure:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.irrigationAndPruningPlan.dripFlowRateAndHours}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">✂️ Pruning & Canopy Training System:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.irrigationAndPruningPlan.pruningTrainingSystem}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">🌿 Fruit Thinning & Leaf-to-Fruit Ratio:</strong>
                  <p className="text-stone-700 text-[11px] leading-relaxed">{selectedCrop.irrigationAndPruningPlan.thinningAndCanopyManagement}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">Pruning & Canopy Management:</strong>
                  <p className="text-stone-700">{selectedCrop.plantationToHarvestGuide.pruningThinningCanopy}</p>
                </div>
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">Irrigation Regimes:</strong>
                  <p className="text-stone-700">{selectedCrop.waterRequirements.irrigationMethods.join('; ')}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SECTION 1F: EXPORT & IMPORT TRADE (USER REQUESTED) */}
        {activeDetailSection === 'export' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              International Export Corridors, Phytosanitary Protocols & Trade Dynamics:
            </span>

            {selectedCrop.tradeAndExportPlan ? (
              <div className="space-y-2.5">
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 font-bold block mb-1">🚢 Export Trade Corridors & Exit Ports:</strong>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedCrop.tradeAndExportPlan.exportCorridorsAndPorts.map((port, i) => (
                      <span key={i} className="bg-blue-50 text-blue-900 border border-blue-200 font-semibold px-2 py-0.5 rounded-lg text-[11px]">
                        📍 {port}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="bg-white p-3 rounded-2xl border border-stone-200">
                    <strong className="text-emerald-950 font-bold block mb-1">🛡️ Department of Plant Protection (DPP) Quarantine:</strong>
                    <p className="text-stone-700 text-[11px]">{selectedCrop.tradeAndExportPlan.quarantineAndPhytosanitary}</p>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-stone-200">
                    <strong className="text-emerald-950 font-bold block mb-1">📦 Cold Chain & Global Packaging Specs:</strong>
                    <p className="text-stone-700 text-[11px]">{selectedCrop.tradeAndExportPlan.coldChainAndPackagingStandards}</p>
                  </div>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200 text-emerald-950">
                  <strong className="font-bold block mb-1">💰 Macro Import Substitution & Foreign Exchange Value:</strong>
                  <p className="text-[11px] leading-relaxed">{selectedCrop.tradeAndExportPlan.importSubstitutionImpact}</p>
                </div>
              </div>
            ) : (
              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Export Destinations:</strong>
                <p className="text-stone-700">{selectedCrop.tradeAndEconomics.exportDestinations.join(', ')}</p>
              </div>
            )}
          </div>
        )}

        {/* SECTION 2: SOIL REQUIREMENTS */}
        {activeDetailSection === 'soil' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Edaphic & Soil Chemistry Specifications:
            </span>

            <div className="space-y-2">
              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Preferred Soil Texture & Horizon:</strong>
                <p className="text-stone-700">{selectedCrop.soilRequirements.soilType}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">pH Range:</strong>
                  <span className="font-mono text-emerald-800 font-bold">{selectedCrop.soilRequirements.phRange}</span>
                </div>
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">Salinity / Electrical Conductivity Tolerance:</strong>
                  <span className="text-amber-800 font-semibold">{selectedCrop.soilRequirements.salinityTolerance}</span>
                </div>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Organic Matter & FYM Requirements:</strong>
                <p className="text-stone-700">{selectedCrop.soilRequirements.organicMatter}</p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Subsoil Permeability & Drainage:</strong>
                <p className="text-stone-700">{selectedCrop.soilRequirements.drainageNeeds}</p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: WATER & IRRIGATION */}
        {activeDetailSection === 'water' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Hydrological Demands & Karez / Tube-Well Strategy:
            </span>

            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">Annual Water Demand:</strong>
                  <span className="font-mono text-blue-900 font-bold text-sm">{selectedCrop.waterRequirements.annualWaterNeedMm}</span>
                </div>
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">Water Quality Tolerance (TDS / EC):</strong>
                  <span className="text-stone-800 font-semibold">{selectedCrop.waterRequirements.waterQualityTolerance}</span>
                </div>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Critical Irrigation Stages:</strong>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedCrop.waterRequirements.criticalStages.map((stage) => (
                    <span key={stage} className="bg-blue-50 text-blue-900 px-2.5 py-1 rounded-xl border border-blue-200 font-semibold">
                      💧 {stage}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Recommended Irrigation Delivery:</strong>
                <p className="text-stone-700">{selectedCrop.waterRequirements.irrigationMethods.join('; ')}</p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: WEATHER & CLIMATE */}
        {activeDetailSection === 'climate' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Thermal Regimes & Agro-Climatic Boundaries:
            </span>

            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#fbf9f4] p-2.5 rounded-2xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Optimal Range:</span>
                  <span className="font-mono font-bold text-emerald-900 text-xs">{selectedCrop.weatherClimateRequirements.optimalTempRangeC}</span>
                </div>
                <div className="bg-[#fbf9f4] p-2.5 rounded-2xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Max Heat Limit:</span>
                  <span className="font-mono font-bold text-rose-800 text-xs">{selectedCrop.weatherClimateRequirements.maxHeatToleranceC}°C</span>
                </div>
                <div className="bg-[#fbf9f4] p-2.5 rounded-2xl border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Min Frost Limit:</span>
                  <span className="font-mono font-bold text-cyan-800 text-xs">{selectedCrop.weatherClimateRequirements.minFrostToleranceC}°C</span>
                </div>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Chilling Hours / Growing Degree Days:</strong>
                <p className="text-stone-700">{selectedCrop.weatherClimateRequirements.chillHoursOrGdd}</p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Precipitation & Relative Humidity Sensitivity:</strong>
                <p className="text-stone-700">{selectedCrop.weatherClimateRequirements.rainfallAndHumidityImpact}</p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: PHENOLOGICAL CALENDAR (DYNAMIC SEASONAL STATUS & CRITICAL WINDOWS) */}
        {activeDetailSection === 'calendar' && (
          <div className="space-y-3">
            <PhenologicalCalendarView
              initialCropId={selectedCrop.id}
              onAskAiAboutWindow={(cropName, windowName) => {
                onAskAiAboutCrop?.(`${cropName} ${windowName}`);
              }}
            />
          </div>
        )}

        {/* SECTION 6: MANDI ECONOMICS & TRADE */}
        {activeDetailSection === 'trade' && (
          <div className="space-y-3 text-xs">
            <span className="font-black text-emerald-950 uppercase tracking-wider block">
              Market Economics & Provincial Trade Corridors:
            </span>

            <div className="space-y-2">
              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Domestic Wholesale Mandi Markets:</strong>
                <p className="text-stone-700">{selectedCrop.tradeAndEconomics.domesticMarkets.join(', ')}</p>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                <strong className="text-emerald-950 block mb-1">Export Trade Corridors:</strong>
                <p className="text-stone-700">{selectedCrop.tradeAndEconomics.exportDestinations.join(', ')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">Farm-Gate Price Range:</strong>
                  <span className="font-mono text-emerald-900 font-bold">{selectedCrop.tradeAndEconomics.avgFarmGatePricePkrKg}</span>
                </div>
                <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200">
                  <strong className="text-emerald-950 block mb-1">Processing & Value Addition:</strong>
                  <span className="text-stone-800">{selectedCrop.tradeAndEconomics.processingAndValueAddition}</span>
                </div>
              </div>

              <div className="bg-[#fbf9f4] p-3 rounded-2xl border border-stone-200 text-stone-700">
                <strong className="text-emerald-950 block mb-1">Macro-Economic Significance:</strong>
                <p>{selectedCrop.tradeAndEconomics.economicSignificance}</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
