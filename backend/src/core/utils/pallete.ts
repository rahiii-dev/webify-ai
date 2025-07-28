export const PALETTE_KEYWORDS: Record<string, string> = {
    "ocean": "Ocean",
    "sunset": "Sunset",
    "forest": "Forest",
};

export function getColorPalettes(palette: string) {
    switch (palette) {
        case "Ocean":
            return {
                primary: "#0ea5e9",
                secondary: "#38bdf8",
                accent: "#06b6d4",
                neutral: "#a5f3fc",
                background: "#e0f2fe",
                foreground: "#0c4a6e",
                text: "text-sky-900",
                border: "border-sky-200",
                ring: "ring-sky-300",
                muted: "text-sky-500/60"
            };

        case "Sunset":
            return {
                primary: "#f97316",
                secondary: "#fb923c",
                accent: "#facc15",
                neutral: "#fde68a",
                background: "#fff7ed",
                foreground: "#7c2d12",
                text: "text-orange-900",
                border: "border-orange-200",
                ring: "ring-orange-300",
                muted: "text-orange-500/60"
            };

        case "Forest":
            return {
                primary: "#22c55e",
                secondary: "#4ade80",
                accent: "#84cc16",
                neutral: "#d9f99d",
                background: "#dcfce7",
                foreground: "#064e3b",
                text: "text-green-900",
                border: "border-green-200",
                ring: "ring-green-300",
                muted: "text-green-500/60"
            };

        case "Aurora":
            return {
                primary: "#7f5af0",
                secondary: "#f67062",
                accent: "#62d2a2",
                neutral: "#cbd5e1",
                background: "#f0fdfa",
                foreground: "#1e293b",
                text: "text-indigo-900",
                border: "border-indigo-200",
                ring: "ring-indigo-300",
                muted: "text-indigo-500/60"
            };

        case "Vintage":
            return {
                primary: "#d97706",
                secondary: "#92400e",
                accent: "#fbbf24",
                neutral: "#f5f5f4",
                background: "#fafaf9",
                foreground: "#3f3f46",
                text: "text-yellow-900",
                border: "border-yellow-200",
                ring: "ring-yellow-300",
                muted: "text-yellow-500/60"
            };

        default:
            return {
                primary: "<CHOOSE_YOUR_OWN>",    
                secondary: "<CHOOSE_YOUR_OWN>",  
                accent: "<CHOOSE_YOUR_OWN>",     
                neutral: "<CHOOSE_YOUR_OWN>",    
                background: "<CHOOSE_YOUR_OWN>", 
                foreground: "<CHOOSE_YOUR_OWN>", 
                text: "<CHOOSE_YOUR_OWN>",
                border: "<CHOOSE_YOUR_OWN>",
                ring: "<CHOOSE_YOUR_OWN>",
                muted: "<CHOOSE_YOUR_OWN>"
            };
    }
}