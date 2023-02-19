import {langT} from "../layout/interfaces/lang";

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

export type futureProjectsLangT = {
  [key in langT]: futureProjectT[]
}

export type actualProjectsLangT = {
  [key in langT]: actualProjectT[]
}

export type baseProjectT = {
  name: string
  description: string
  why: string
  technologies: string[]
}

export  type futureProjectT = baseProjectT & {
  newSkills: string[]
}

export  type actualProjectT = baseProjectT & projectFilesT & {
  additional: string
}

export  type projectFilesT = {
  gallery: string[]
  skills: string[]
  links: linkT[]
}

export type linkT = {
  href: string
  title: string
}
