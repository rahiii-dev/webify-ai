import { PlusCircle } from "lucide-react";

export type SimplePalette = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
};

interface Props {
  palettes: SimplePalette[];
  selected: string;
  onSelect: (name: string) => void;
  onCreateCustom?: () => void;
}

export const PaletteSelector = ({ palettes, selected, onSelect, onCreateCustom }: Props) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {palettes.map((palette) => (
          <button
            key={palette.name}
            type="button"
            onClick={() => onSelect(palette.name)}
            className={`border rounded-lg p-3 flex flex-col gap-2 transition shadow-sm hover:shadow-md ${
              selected === palette.name ? "ring-2 ring-primary border-primary" : "border-gray-200"
            }`}
          >
            <div className="grid grid-cols-5 gap-1">
              {Object.entries(palette.colors).map(([key, value]) => (
                <div
                  key={key}
                  className="w-6 h-6 rounded"
                  title={key}
                  style={{ backgroundColor: value }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground text-left mt-1">
              {palette.name}
            </span>
          </button>
        ))}

        {onCreateCustom && (
          <button
            type="button"
            onClick={onCreateCustom}
            className="border border-dashed rounded-lg p-3 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted transition"
          >
            <PlusCircle className="w-5 h-5 mb-1" />
            <span className="text-sm">Create Custom</span>
          </button>
        )}
      </div>
  );
};
