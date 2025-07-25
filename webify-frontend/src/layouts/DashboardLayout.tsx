import DashboardHeader from "@/modules/dashboard/components/DashboardHeader ";
import DashboardSidebar from "@/modules/dashboard/components/Sidebar";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <SidebarProvider defaultOpen>
            <DashboardSidebar />
            <SidebarInset>
                <DashboardHeader />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-background">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};


export default DashboardLayout;
