import { Button } from "@/shared/components/ui/button";
import clsx from "clsx";

interface Props {
  templates: string[];
  selected: string;
  onSelect: (template: string) => void;
}

export const TemplateSelector = ({ templates, selected, onSelect }: Props) => {
  return (
      <div className="flex flex-wrap gap-2 mt-2">
        {templates.map((template) => (
          <Button
            key={template}
            type="button"
            variant={selected === template ? "default" : "outline"}
            className={clsx(
              "text-sm px-3 py-1 rounded-full capitalize",
              selected === template ? "border border-primary" : ""
            )}
            onClick={() => onSelect(template)}
          >
            {template}
          </Button>
        ))}
      </div>
  );
};
