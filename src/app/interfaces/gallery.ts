import {langT} from "../layout/interfaces/lang";

export type navButtonsT = {
  'prev': string
  'fullscreen': string
  'slideshow': string
  'next': string
}

export type navButtonsLangT = {
  [key in langT]: navButtonsT
}

export type imgAltT = {
  [key in langT]: string
}
