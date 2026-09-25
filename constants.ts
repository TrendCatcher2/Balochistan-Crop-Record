import { MapStyleConfig } from "./types";

export const DEFAULT_SITE = "Kech River Central Date Palm Belt, Makran";

export const MAKRAN_PRIMARY_OASES = [
  "Turbat Kech Central Palm Belt",
  "Panjgur Rakhshan Valley Oasis",
  "Buleda Canyon Groves",
  "Tump Nihing River Date Estate",
  "Mand Frontier Palm Orchards",
  "Parom Cold-Plateau Basin",
  "Dasht Valley Spate Belt",
  "Mirani Dam Modern Plantations"
];

export const MAP_STYLES: MapStyleConfig[] = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#f7f5ed" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#267b82" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [{ color: "#e8e1cd" }]
  }
];
