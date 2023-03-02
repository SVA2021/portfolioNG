import {baseLangT, langT} from "../layout/interfaces/lang";
import {webSkill} from "./admin";

export type  pageTitlesT = {
  title: string
  actual: string
  future: string
}

export type projectTitlesT = {
  why: string
  technologies: string
  newSkills: string
  additional: string
}

export type pageLangTitlesT = {
  [key in langT]: pageTitlesT
}

export type projectLangTitlesT = {
  [key in langT]: projectTitlesT
}

export type baseProjectT = {
  id?: number | string
  name: string
  technologies: string
  why: baseLangT
  description: baseLangT
}

export  type futureProjectT = baseProjectT & {
  newSkills: string
}

export  type actualProjectT = baseProjectT & {
  additional: baseLangT
  gallery: string[]
  skills: webSkill[]
  links: linkT[]
}

export type linkT = {
  href: string
  title: baseLangT
}
