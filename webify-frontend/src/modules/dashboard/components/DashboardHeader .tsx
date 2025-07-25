import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import { UserButton } from "@clerk/clerk-react";

const DashboardHeader = () => {
  return (
    <header
      className="flex h-16 shrink-0 items-center justify-between px-4 bg-background/80 backdrop-blur border-b border-border transition-[height,width] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
    >
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
      </div>
      <div className="flex items-center gap-4">
        <UserButton />
      </div>
    </header>
  );
};

export default DashboardHeader;
