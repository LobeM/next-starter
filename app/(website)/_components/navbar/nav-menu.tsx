import Link from "next/link";

import { NavigationMenuRootProps } from "@base-ui/react/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const NavMenu = (props: NavigationMenuRootProps) => (
  <NavigationMenu
    {...props}
    className={cn(props.className, {
      "max-w-none flex-none justify-start": props.orientation === "vertical",
    })}
  >
    <NavigationMenuList
      className={cn("gap-6 space-x-0", {
        "flex-none flex-col items-start justify-start": props.orientation === "vertical",
      })}
    >
      {navItems.map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink render={<Link href={item.href}>{item.label}</Link>} />
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
