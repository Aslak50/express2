import { makeFilter } from '../../../src/back/makeFilter'

describe('makeFilter', () => {
  it('should make filter', () => {
    expect(makeFilter(['89098767', '12345678'])).toBe(
      '{"identifier":[{"operator":"IN","value":["89098767","12345678"]}]}'
    )
  })
})
