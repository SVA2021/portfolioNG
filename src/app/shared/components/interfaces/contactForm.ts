import {langT} from "../../../layout/interfaces/lang";

export type formWarnings = {
  minLength: string
  maxLength: string
  email: string
}

export type formFields = {
  name: string
  email: string
  message: string
  submit: string
}

export type contactForm = {
  [key in langT]: {
    fields: formFields,
    warnings: formWarnings,
  }
}
