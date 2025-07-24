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

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      name: "Projects",
      url: "/projects",
      icon: Frame,
      isActive: true,
    },
  ],

}

export default function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
          <SideBarHeaderLogo/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain}></NavMain>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        <h1>footer</h1>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
