export interface ghStatsItemI {
  href: string
  imgSrc: string
  imgAlt: string
}

export interface ghStatsI {
  stats: ghStatsItemI | undefined
  mostUsed: ghStatsItemI | undefined
}
