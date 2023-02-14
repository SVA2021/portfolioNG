import {langT} from "../layout/interfaces/lang";

export interface ghStatsItemI {
  href: string
  imgSrc: string
  imgAlt: string
}

// export interface ghStatsI {
//   stats: ghStatsItemI | undefined
//   mostUsed: ghStatsItemI | undefined
// }

export type aboutPageT = {
  [key in langT]:  {
    title: aboutTitlesT
    bioFull: string
    stats: ghStatsItemI
    mostUsed: ghStatsItemI
    certificateTip: string
    certificateImgAlt: string
  }
}

export type aboutTitlesT = {
  title: string
  bio: string
  skill: string
  gh: string
  certificate: string
}
