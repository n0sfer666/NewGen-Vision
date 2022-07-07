type TPrice = number | null
type TPrices = [TPrice, TPrice]
type TCourse = {
  name: string,
  prices: TPrices
}

interface ICompare {
  (value: TPrices, condition: TPrices): boolean
}
interface INormalize {
  (value: TPrices): [number, number]
}