import { MessageSquare, Sparkles, Edit3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      title: "Prompt",
      description: "Describe your website idea in natural language. Tell us about your business, style preferences, and features you need."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: "Generate",
      description: "Our AI analyzes your prompt and generates a complete, responsive website with modern design and functionality."
    },
    {
      icon: <Edit3 className="w-10 h-10 text-white" />,
      title: "Edit",
      description: "Fine-tune your website with our intuitive visual editor. Make changes and see results instantly."
    }
  ];

  return (
    <section className="relative z-10 container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">How It Works</h2>
      <p className="text-xl text-muted-foreground mb-16">Three simple steps to your perfect website</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="space-y-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto relative">
              {step.icon}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-ai-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </div>
            </div>
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
