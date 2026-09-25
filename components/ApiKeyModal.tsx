import React, { useState, useEffect } from 'react';
import { 
  Key, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  Loader2, 
  Building2, 
  Trash2,
  ExternalLink,
  Cpu,
  Layers,
  Zap
} from 'lucide-react';
import { 
  getApiKey, 
  getUserApiKey, 
  saveUserApiKey, 
  hasActiveApiKey,
  AVAILABLE_AI_MODELS,
  getSelectedAiModel,
  setSelectedAiModel
} from '../services/geminiService';
import { GoogleGenAI } from '@google/genai';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyUpdated?: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onKeyUpdated }) => {
  const [apiKeyInput, setApiKeyInput] = useState<string>('');
  const [showKey, setShowKey] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<string>(getSelectedAiModel());
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [testMessage, setTestMessage] = useState<string>('');
  const [savedKeyExists, setSavedKeyExists] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const current = getUserApiKey();
      setApiKeyInput(current);
      setSelectedModel(getSelectedAiModel());
      setSavedKeyExists(!!current);
      setTestStatus('idle');
      setTestMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    setSelectedAiModel(modelId);
    setTestStatus('idle');
    setTestMessage(`Switched active AI slot to: ${AVAILABLE_AI_MODELS.find(m => m.id === modelId)?.name}`);
    onKeyUpdated?.();
  };

  const handleSave = () => {
    saveUserApiKey(apiKeyInput.trim());
    setSelectedAiModel(selectedModel);
    setSavedKeyExists(!!apiKeyInput.trim());
    setTestStatus('idle');
    setTestMessage('Settings saved successfully in local session.');
    onKeyUpdated?.();
  };

  const handleClear = () => {
    saveUserApiKey('');
    setApiKeyInput('');
    setSavedKeyExists(false);
    setTestStatus('idle');
    setTestMessage('API Key cleared. Applet will use default system key or local precision engine.');
    onKeyUpdated?.();
  };

  const handleTestKey = async () => {
    if (selectedModel === 'built-in-offline') {
      setTestStatus('success');
      setTestMessage('Built-in offline precision engine verified! Zero latency, no API key required.');
      return;
    }

    const keyToTest = apiKeyInput.trim() || getApiKey();
    if (!keyToTest) {
      setTestStatus('failed');
      setTestMessage('Please enter a Gemini API Key to test cloud connection.');
      return;
    }

    setTestStatus('testing');
    setTestMessage(`Verifying connection with Google ${AVAILABLE_AI_MODELS.find(m => m.id === selectedModel)?.name}...`);

    try {
      const ai = new GoogleGenAI({ apiKey: keyToTest });
      const response = await ai.models.generateContent({
        model: selectedModel,
        contents: 'Confirm connection in one short sentence for Directorate General Agriculture Extension Balochistan.'
      });

      if (response && response.text) {
        setTestStatus('success');
        setTestMessage(`Connection verified! Response: "${response.text.trim().slice(0, 80)}..."`);
        saveUserApiKey(keyToTest);
        setSavedKeyExists(true);
        onKeyUpdated?.();
      } else {
        setTestStatus('failed');
        setTestMessage('Received empty response from Gemini API.');
      }
    } catch (err: any) {
      console.error(err);
      setTestStatus('failed');
      setTestMessage(err.message || 'API connection failed. Please check key validity and quota.');
    }
  };

  const active = hasActiveApiKey();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#fdfcf9] border-2 border-emerald-900 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0c291e] to-[#164734] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black shadow-md">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight font-display">
                AI Model & API Configuration Slots
              </h3>
              <p className="text-xs text-emerald-300 font-medium">
                Directorate General Agriculture Extension Balochistan
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs text-stone-700 overflow-y-auto">
          
          {/* SECTION 1: ALL FREE AI MODEL SLOTS (USER REQUESTED) */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-emerald-950 tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              Select Active Free AI Model Slot:
            </label>

            <div className="grid grid-cols-1 gap-2">
              {AVAILABLE_AI_MODELS.map((model) => {
                const isSelected = selectedModel === model.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => handleModelSelect(model.id)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-700 shadow-sm'
                        : 'bg-white hover:bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <strong className={`font-black text-xs ${isSelected ? 'text-emerald-950' : 'text-stone-800'}`}>
                          {model.name}
                        </strong>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          model.tier === 'Free Flash' ? 'bg-emerald-100 text-emerald-800' :
                          model.tier === 'Ultra Fast' ? 'bg-amber-100 text-amber-800' :
                          model.tier === 'Built-in Engine' ? 'bg-purple-100 text-purple-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {model.tier}
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-600 leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-stone-300" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: OPTIONAL USER API KEY SLOT */}
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <label className="text-[11px] font-bold text-stone-800 block">
              Custom Google Gemini API Key (Optional Slot):
            </label>

            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy... (Leave empty for default free built-in slots)"
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] text-stone-500 pt-1">
              <span>Key is stored securely in your browser's local storage.</span>
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-800 hover:text-emerald-950 font-bold flex items-center gap-0.5 underline"
              >
                <span>Get API Key</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Test Status Banner */}
          {testMessage && (
            <div className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
              testStatus === 'success' ? 'bg-emerald-50 border-emerald-300 text-emerald-900' :
              testStatus === 'failed' ? 'bg-rose-50 border-rose-300 text-rose-900' :
              'bg-blue-50 border-blue-200 text-blue-900'
            }`}>
              {testStatus === 'testing' ? <Loader2 className="w-4 h-4 animate-spin text-blue-600 shrink-0 mt-0.5" /> :
               testStatus === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> :
               <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />}
              <span className="leading-relaxed">{testMessage}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-200">
            <button
              onClick={handleClear}
              disabled={!savedKeyExists}
              className="px-3 py-2 rounded-xl text-stone-600 hover:text-rose-700 hover:bg-rose-50 font-bold transition-all disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset to Free Defaults</span>
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={handleTestKey}
                disabled={testStatus === 'testing'}
                className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold transition-all disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
              >
                {testStatus === 'testing' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                <span>Test Active Slot</span>
              </button>

              <button
                onClick={() => {
                  handleSave();
                  onClose();
                }}
                className="px-4 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold shadow-md transition-all cursor-pointer"
              >
                Save & Apply
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
