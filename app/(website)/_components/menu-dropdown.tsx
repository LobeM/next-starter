"use client";

import type { ReactElement } from "react";

import { IconChevronRight, IconCircle } from "@tabler/icons-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { NavigationSection } from "../_types";

type Props = {
  trigger: ReactElement;
  navigationData: NavigationSection[];
  align?: "center" | "end" | "start";
};

const MenuDropdown = ({ trigger, navigationData, align = "start" }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={trigger} />
      <DropdownMenuContent className="w-56" align={align}>
        {navigationData.map((navItem) => {
          if (navItem.href) {
            return (
              <DropdownMenuItem
                key={navItem.title}
                render={
                  <a href={navItem.href}>
                    {navItem.icon}
                    {navItem.title}
                  </a>
                }
              />
            );
          }

          return (
            <Collapsible
              key={navItem.title}
              render={
                <DropdownMenuGroup>
                  <CollapsibleTrigger
                    render={
                      <DropdownMenuItem
                        onSelect={(event) => event.preventDefault()}
                        className="justify-between"
                      >
                        {navItem.icon}
                        <span className="flex-1">{navItem.title}</span>
                        <IconChevronRight className="shrink-0 transition-transform [[data-state=open]>&]:rotate-90" />
                      </DropdownMenuItem>
                    }
                  ></CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    {navItem.items?.map((item) => (
                      <DropdownMenuItem
                        key={item.title}
                        render={
                          <a href={item.href}>
                            <IconCircle />
                            <span>{item.title}</span>
                          </a>
                        }
                      />
                    ))}
                  </CollapsibleContent>
                </DropdownMenuGroup>
              }
            />
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuDropdown;
