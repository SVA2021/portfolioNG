import {langT} from "../layout/interfaces/lang";

export type certificatesPageT = {
  [key in langT] : certificatesTitlesT
}

export type certificatesTitlesT = {
    title: string
    gbTip: string
    slTip: string
}
export type galleryItemT = {
  caption: string
  imgSrc: string
  imgAlt: string
  href: string
}
