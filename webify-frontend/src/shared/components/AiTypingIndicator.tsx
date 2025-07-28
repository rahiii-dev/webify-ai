import { Sparkles } from "lucide-react";

const AiTypingIndicator = () => {
  return (
    <div className="flex items-center space-x-3 px-4 py-2">
      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
};

export default AiTypingIndicator;
