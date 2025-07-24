import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/shared/components/ui/sidebar";
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavMainProps {
    items: {
        name: string;
        icon: LucideIcon;
        url: string;
        isActive: boolean;
    }[];
}

export const NavMain = ({ items }: NavMainProps) => {
    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map(item => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                            <Link to={item.url}>
                                <item.icon />
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}

