import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import { Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-xl">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-10 h-10 text-ai-primary animate-pulse" />
        </div>
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page you're looking for doesn’t exist.
        </p>
        <Button asChild size="lg" variant="hero">
          <a href="/">
            Go Back Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
