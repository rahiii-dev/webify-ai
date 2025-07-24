import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface LogoProps {
  variant?: "default" | "compact" | "iconOnly" | "textOnly";
  asLink?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  colorClass?: string;
}

const Logo = ({
  variant = "default",
  asLink = false,
  size = "md",
  className = "",
  colorClass = "text-ai-primary",
}: LogoProps) => {
  // Handle size
  const sizeClasses = {
    sm: { icon: "w-5 h-5", text: "text-lg" },
    md: { icon: "w-6 h-6 md:w-8 md:h-8", text: "text-xl md:text-2xl" },
    lg: { icon: "w-8 h-8 md:w-10 md:h-10", text: "text-2xl md:text-3xl" },
  };

  const { icon, text } = sizeClasses[size];

  const iconElement = <Sparkles className={clsx(icon, "text-ai-primary")} />;
  const textElement = <span className={clsx(text, "font-bold", colorClass)}>Webify</span>;

  const content = (
    <div className={clsx("flex items-center gap-2", className)}>
      {(variant === "default" || variant === "compact" || variant === "iconOnly") && iconElement}
      {(variant === "default" || variant === "compact" || variant === "textOnly") && textElement}
    </div>
  );

  return asLink ? <Link to="/">{content}</Link> : content;
};

export default Logo;
