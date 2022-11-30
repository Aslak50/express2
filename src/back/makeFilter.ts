export function makeFilter(skus: string) {
  const parsedSkus = skus.split(/(?:\r?\n)|(?:\s*,\s*)|(?:\s+)/).filter((code) => code.match(/8[0-9]{7}/))
  return `{"identifier":[{"operator":"IN","value":[${parsedSkus.map((sku) => `"${sku}"`)}]}]}`
}
