import { makeFilter } from '../../../src/back/makeFilter'

describe('makeFilter', () => {
  it('should make filters, only made of skus', () => {
    expect(makeFilter('89098767, , aslak,12345678876')).toBe('{"identifier":[{"operator":"IN","value":["89098767"]}]}')
  })
})
