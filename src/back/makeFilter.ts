export function makeFilter(skus: string[]) {
  return `{"identifier":[{"operator":"IN","value":[${skus.map((sku) => `"${sku}"`)}]}]}`
}
