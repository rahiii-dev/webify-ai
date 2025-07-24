import { Button } from "@components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative z-10 container mx-auto px-4 py-12 text-center max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Turn Prompts into Websites Instantly
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Describe your vision in plain English and watch AI create stunning, responsive websites in seconds. No coding required.
      </p>
      <Button variant="hero" size="lg" className="text-lg px-8 py-4">
        <Zap className="w-5 h-5 mr-2" />
        Start Building
      </Button>
    </section>
  );
};

export default HeroSection;
