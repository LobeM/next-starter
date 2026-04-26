"use client";

import Link from "next/link";
import * as React from "react";

import {
  IconAlertTriangle,
  IconHelp,
  IconInnerShadowTop,
  IconPill,
  IconPrescription,
  IconSettings,
  IconStethoscope,
  IconUsers,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Patients",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Appointments",
      url: "#",
      icon: IconStethoscope,
    },
    {
      title: "Prescriptions",
      url: "#",
      icon: IconPrescription,
    },
    {
      title: "Allergies",
      url: "#",
      icon: IconAlertTriangle,
    },
    {
      title: "Drugs",
      url: "#",
      icon: IconPill,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={
                <Link href="/">
                  <IconInnerShadowTop className="size-5!" />
                  <span className="text-base font-semibold">MediTrack</span>
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
