import Link from "next/link";

import { IconMenu } from "@tabler/icons-react";

import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTitle className="sr-only">Navigation Drawer</SheetTitle>
      <SheetTrigger className={buttonVariants({ variant: "outline", size: "icon" })}>
        <IconMenu />
      </SheetTrigger>
      <SheetContent className="p-6">
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <Button
            nativeButton={false}
            variant="outline"
            className="w-full sm:hidden"
            render={<Link href="/sign-in">Sign In</Link>}
          />
          <Button
            nativeButton={false}
            className="w-full sm:hidden"
            render={<Link href="/sign-up">Get Started</Link>}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
