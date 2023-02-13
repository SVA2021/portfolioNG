import {langT} from "../layout/interfaces/lang";

export interface HomeLinkI {
  src: string
  id: string
  href: string
}

export type HomeNameT = {
  [key in langT]: string[];
};
