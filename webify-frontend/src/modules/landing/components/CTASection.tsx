import { AuthActionButton } from "@/shared/components/AuthActionButton";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative z-10 container mx-auto px-4 py-20 text-center max-w-3xl">
      <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
      <p className="text-xl text-muted-foreground mb-8">
        Join thousands of creators who've already built amazing websites with Webify. Start your free trial today.
      </p>
      <AuthActionButton
        redirect
        to="/dashboard"
        size="lg"
        variant="hero"
        className="text-lg px-8 py-4"
      >
        <ArrowRight className="w-5 h-5 mr-2" />
        Try Webify Free
      </AuthActionButton>
    </section>
  );
};

export default CTASection;
