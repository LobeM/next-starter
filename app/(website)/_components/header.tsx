"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { IconCalendar, IconMenu } from "@tabler/icons-react";

import BistroLogo from "@/assets/bistro-logo";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import MenuDropdown from "./menu-dropdown";
import MenuNavigation, { NavigationSection } from "./menu-navigation";

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 h-17.5 w-full border-b transition-all duration-300",
        {
          "bg-background shadow-md": isScrolled,
        },
        className
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <BistroLogo />
          <span className="text-primary text-[20px] font-semibold">Bistro</span>
        </a>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          className="max-lg:hidden **:data-[slot=navigation-menu-list]:gap-1"
        />

        {/* Actions */}
        <div className="flex gap-4">
          <ModeToggle />
          <Button
            nativeButton={false}
            variant="outline"
            className="max-sm:hidden"
            render={<Link href="/sign-in">Sign in</Link>}
          />
          <Button
            nativeButton={false}
            className="max-sm:hidden"
            render={<Link href="/sign-in">Get started</Link>}
          />

          {/* Navigation for small screens */}
          <div className="flex gap-3">
            <Button
              nativeButton={false}
              size="icon"
              className="sm:hidden"
              render={
                <Link href="/sign-in">
                  <IconCalendar />
                  <span className="sr-only">Sign in</span>
                </Link>
              }
            />

            <MenuDropdown
              align="end"
              navigationData={navigationData}
              trigger={
                <Button variant="outline" size="icon" className="rounded-full lg:hidden">
                  <IconMenu />
                  <span className="sr-only">Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
