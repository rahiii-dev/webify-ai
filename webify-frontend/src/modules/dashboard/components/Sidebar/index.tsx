import * as React from "react"
import {
  Frame,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/shared/components/ui/sidebar"
import { SideBarHeaderLogo } from "./header-logo"
import { NavMain } from "./nav-main"
import { useLocation } from "react-router-dom"

const rawNavItems = [
    {
      title: "Website Builder",
      url: "web-pages",
      icon: Frame,
      isActive: false,
    },
  ];

export default function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = useLocation();

  const navMain = rawNavItems.map((item) => ({
    ...item,
    isActive: location.pathname === `/dashboard/${item.url}`,
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
          <SideBarHeaderLogo/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain}></NavMain>
      </SidebarContent>
      <SidebarFooter>
        <h1>footer</h1>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
