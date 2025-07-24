import { Card } from "@/shared/components/ui/card";
import { Sparkles, Palette, Download } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "AI Generation",
    description: "Advanced AI creates pixel-perfect designs, writes compelling copy, and optimizes for performance automatically."
  },
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Website Editor",
    description: "Professional drag-and-drop editor with advanced styling options. Customize every element with precision."
  },
  {
    icon: <Download className="w-8 h-8 text-white" />,
    title: "Export Options",
    description: "Download clean HTML/CSS code, deploy to popular hosting platforms, or publish instantly to our CDN."
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative z-10 container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
      <p className="text-xl text-muted-foreground mb-16">Everything you need to create professional websites</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="bg-gradient-card border-white/10 shadow-card backdrop-blur-md p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
