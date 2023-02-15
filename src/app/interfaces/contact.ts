import {langT} from "../layout/interfaces/lang";

export type titleT = {
  [key in langT]: string
}

export  type contactItem = {
  type: string
  data: string
  href: string
}
