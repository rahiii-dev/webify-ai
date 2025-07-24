import Logo from "@/shared/components/Logo";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/components/ui/sidebar"

export const SideBarHeaderLogo = () => {
    const {state} = useSidebar();
    const isCollapsed = state === "collapsed";
    
    return (
     <SidebarMenu className="p-1">
        <SidebarMenuItem>
            <Logo variant={isCollapsed ? "iconOnly": "default"}/>
        </SidebarMenuItem>
     </SidebarMenu>
    );
}

