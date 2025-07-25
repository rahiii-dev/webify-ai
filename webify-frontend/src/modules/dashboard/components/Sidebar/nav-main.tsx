import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/shared/components/ui/sidebar";
import { useModal } from "@/shared/hooks/use-modal";
import CreatePageModal from "@/shared/modals/CreatePageModal";
import { PlusCircle, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavMainProps {
    items: {
        title: string;
        icon: LucideIcon;
        url: string;
        isActive?: boolean;
    }[];
}

export const NavMain = ({ items }: NavMainProps) => {
    const {openModal} = useModal();
    const handleQuickCreate = () => {
        openModal(<CreatePageModal />);
    };

    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center gap-2">
                        <SidebarMenuButton
                            onClick={handleQuickCreate}
                            tooltip="Quick Create"
                            className="bg-primary justify-center text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
                        >
                            <PlusCircle />
                                <span>Quick Create</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton tooltip={item.title} isActive={item.isActive} >
                                {item.icon && <item.icon />}
                                <Link to={item.url}>{item.title}</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}

