import DashboardSidebar from "@/modules/dashboard/components/Sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <SidebarProvider defaultOpen>
            <DashboardSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                                        Building Your Application
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-background">
                   <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};


export default DashboardLayout;
