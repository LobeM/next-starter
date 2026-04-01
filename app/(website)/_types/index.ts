import { ReactNode } from "react";

export type FooterItem = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

export type MenuData = {
  id: number;
  img: string;
  imgAlt: string;
  userAvatar: string;
  userComment: string;
};

export type NavigationItem = {
  title: string;
  href: string;
};

export type NavigationSection = {
  title: string;
  icon?: ReactNode;
} & (
  | {
      items: NavigationItem[];
      href?: never;
    }
  | {
      items?: never;
      href: string;
    }
);
