import Link from "next/link";

import { NavigationMenuRootProps } from "@base-ui/react/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const NavMenu = (props: NavigationMenuRootProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navItems.map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink render={<Link href={item.href}>{item.label}</Link>} />
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
