import { useForm } from "react-hook-form";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import { useState } from "react";
import { DEFAULT_PALETTES, LANGUAGES, TEMPLATES } from "./constants";
import { WandSparkles } from "lucide-react";
import { TemplateSelector } from "./TemplateSelector";
import { PaletteSelector } from "./PaletteSelector";
import { LanguageSelector } from "./LanguageSelector";
import { Spinner } from "../../ui/kibo-ui/spinner";

type FormValues = {
  name: string;
  prompt: string;
  palette: string;
  template: string;
  language: string;
};

interface Props {
  onSubmit: (values: FormValues) => void;
  isSubmitting?: boolean;
}

export const ProjectForm = ({ onSubmit, isSubmitting }: Props) => {
  const { register, handleSubmit, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      name: "",
      prompt: "",
      palette: "",
      template: "",
      language: "en",
    }
  });
  const [loading, setLoading] = useState(false);

  const handleImprovePrompt = async () => {
    setLoading(true);
    const original = watch("prompt");

    // 🔧 Replace with actual AI call (e.g. Gemini or OpenAI)
    const improved = `Improved: ${original}`;
    setValue("prompt", improved);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Project Name */}
      <div>
        <Label className="mb-2">Project Name *</Label>
        <Input {...register("name", { required: true })} placeholder="My Website" />
      </div>

      {/* Prompt */}
      <div>
        <div className="relative">
          <Textarea
            {...register("prompt", { required: true })}
            placeholder="Describe your project (e.g., Landing page with hero and testimonials)"
            className="pr-28 h-40 overflow-auto resize-none"
          />
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={handleImprovePrompt}
            disabled={loading}
            className="absolute bottom-2 right-2 items-center gap-1 hidden"
          >
            <WandSparkles className="w-4 h-4" />
            Improve
          </Button>
        </div>
      </div>

      {/* Template */}
      <div>
        <Label className="mb-2">Template</Label>
        <TemplateSelector
          templates={TEMPLATES}
          selected={watch("template")}
          onSelect={(template) => setValue("template", template)}
        />
      </div>

      {/* Palette */}
      <div>
        <Label className="mb-2">Color Palette</Label>
        <PaletteSelector
          palettes={DEFAULT_PALETTES}
          selected={watch("palette")}
          onSelect={(name) => setValue("palette", name)}
        />
      </div>

      {/* Language */}
      <div>
        <Label className="mb-2">Language</Label>
        <LanguageSelector
          languages={LANGUAGES}
          selected={watch("language")}
          onSelect={(val) => setValue("language", val)}
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <Button type="submit" className="w-full flex justify-center items-center" disabled={isSubmitting}>
          {isSubmitting ? (
            < Spinner />
          ) : "Generate WebPages"}
        </Button>
      </div>
    </form>
  );
};
