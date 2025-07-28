import { Sparkles } from "lucide-react";

const GeneratingPlaceholder = () => {
  return (
    <div className="size-full flex flex-col items-center justify-center text-sm text-muted-foreground gap-2 animate-pulse">
      <Sparkles className="h-6 w-6 text-primary animate-bounce" />
      <p>Generating website from AI...</p>
    </div>
  );
};

export default GeneratingPlaceholder;
