import Link from "next/link";

import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";

import { footerSections } from "../_constants";

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
        <div className="col-span-full xl:col-span-2">
          {/* Logo */}
          <Logo />

          <p className="mt-4 text-muted-foreground">
            Design amazing digital experiences that create more happy in the world.
          </p>
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-4">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="text-muted-foreground hover:text-foreground">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="https://github.com/lobem" target="_blank">
            Next.js Starter
          </Link>
          . All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank">
            <IconBrandTwitter className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <IconBrandDribbble className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <IconBrandInstagram className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <IconBrandGithub className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
