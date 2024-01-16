
declare type Food = {
  id: number
  name: string
  description: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
}
