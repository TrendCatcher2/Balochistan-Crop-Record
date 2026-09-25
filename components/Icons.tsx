import React from 'react';
import { 
  TreePalm, 
  MapPin, 
  Scan, 
  Eye, 
  Crosshair, 
  Layers, 
  Sparkles, 
  Coins, 
  Globe2, 
  Ship, 
  TrendingUp, 
  Droplet, 
  SunMedium, 
  Scale, 
  CheckCircle2, 
  Activity,
  Trees
} from 'lucide-react';

export const PalmIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Trunk */}
    <path d="M12 22V10" />
    <path d="M10 22h4" />
    <path d="M11 16l2 -1" />
    <path d="M13 13l-2 -1" />
    {/* Fronds */}
    <path d="M12 10C10.5 7 7 6 4 7c2 2 3.5 4 4 6" />
    <path d="M12 10C13.5 7 17 6 20 7c-2 2-3.5 4-4 6" />
    <path d="M12 10C11 6.5 10 3 12 2c2 1 1 4.5 0 8" />
    <path d="M12 10C8.5 9 5 11 3 14c3 0 6-1 9-4" />
    <path d="M12 10C15.5 9 19 11 21 14c-3 0-6-1-9-4" />
    {/* Dates bunch hanging */}
    <circle cx="10.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="13.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const DateClusterIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none" 
    className={className}
  >
    <ellipse cx="12" cy="8" rx="3.5" ry="5" className="opacity-90" />
    <ellipse cx="8" cy="13" rx="3.2" ry="4.5" className="opacity-80" />
    <ellipse cx="16" cy="13" rx="3.2" ry="4.5" className="opacity-80" />
    <ellipse cx="12" cy="17" rx="3" ry="4.2" className="opacity-95" />
    <path d="M12 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 4l-2 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M14 4l2 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const KarezIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Mountain slope */}
    <path d="M2 18L9 6l5 6 8-4" />
    {/* Karez shafts */}
    <circle cx="8" cy="13" r="1.5" fill="currentColor" />
    <line x1="8" y1="13" x2="8" y2="19" strokeDasharray="1 1" />
    <circle cx="13" cy="14" r="1.5" fill="currentColor" />
    <line x1="13" y1="14" x2="13" y2="19" strokeDasharray="1 1" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
    <line x1="18" y1="12" x2="18" y2="19" strokeDasharray="1 1" />
    {/* Subterranean water channel */}
    <path d="M5 19h17" strokeWidth="2.2" />
  </svg>
);

interface TechIconProps {
  type: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ type, className = "w-4 h-4" }) => {
  switch (type) {
    case 'tree':
    case 'palm':
      return <PalmIcon className={className} />;
    case 'karez':
    case 'water':
      return <Droplet className={className} />;
    case 'scan':
    case 'counter':
      return <Crosshair className={className} />;
    case 'drone':
    case 'aerial':
      return <Eye className={className} />;
    case 'trade':
    case 'export':
      return <TrendingUp className={className} />;
    case 'yield':
    case 'scale':
      return <Scale className={className} />;
    case 'sun':
    case 'curing':
      return <SunMedium className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};
