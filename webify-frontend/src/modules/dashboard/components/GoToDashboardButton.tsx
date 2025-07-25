import { Button } from "@/shared/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoToDashboardButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/dashboard")}
      className="group inline-flex items-center gap-2 transition-all"
    >
      Go to Dashboard
      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform duration-200" />
    </Button>
  );
};

export default GoToDashboardButton;
