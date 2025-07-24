import Logo from "@/shared/components/Logo";
import FooterSection from "@/shared/components/FooterSection";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div>
            <Logo className="mb-4" size="sm" colorClass="text-white" asLink />
            <p className="text-muted-foreground">
              Turn prompts into websites instantly with the power of AI.
            </p>
          </div>

          {/* Footer Link Sections */}
          <FooterSection
            title="Product"
            links={[
              { label: "Features", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Examples", href: "#" },
            ]}
          />

          <FooterSection
            title="Support"
            links={[
              { label: "Documentation", href: "#" },
              { label: "Help Center", href: "#" },
              { label: "Contact", href: "#" },
            ]}
          />

          <FooterSection
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Privacy", href: "#" },
            ]}
          />
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Webify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
