import {langT} from "../layout/interfaces/lang";

export type LoginBtnT = {
  login: string
  logout: string
  goto: string
}

export type LoginTextT = {
  title: string
  welcome: string
  admin: string
  guest: string
  login: string
  description: string
}

export type LoginBtnLangT = {
  [key in langT]: LoginBtnT
}
export type LoginTextLangT = {
  [key in langT]: LoginTextT
}
