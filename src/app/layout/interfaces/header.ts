import {langT} from "./lang";

export type MenuItemI = {
  href: string
  title: string
}

export type HeaderMenu = {
  [key in langT]: MenuItemI[];
};

export type HeaderLogo = {
  [key in langT]: string;
};
