import Link from "next/link";

import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            nativeButton={false}
            variant="outline"
            className="hidden sm:inline-flex"
            render={<Link href="/sign-in">Sign In</Link>}
          />

          <Button
            nativeButton={false}
            className="inline-flex"
            render={<Link href="/sign-in">Get Started</Link>}
          />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
