export function getColorPalettes(palette: string) {
    switch (palette) {
        case "Ocean":
            return {
                primary: "#0ea5e9",
                secondary: "#38bdf8",
                accent: "#06b6d4",
                background: "#e0f2fe",
                foreground: "#0c4a6e",
            };

        case "Sunset":
            return {
                primary: "#f97316",
                secondary: "#fb923c",
                accent: "#facc15",
                background: "#fff7ed",
                foreground: "#7c2d12",
            };

        case "Forest":
            return {
                primary: "#22c55e",
                secondary: "#4ade80",
                accent: "#84cc16",
                background: "#dcfce7",
                foreground: "#064e3b",
            };

        default:
            return undefined;
    }
}