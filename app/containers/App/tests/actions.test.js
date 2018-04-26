/* eslint-env jest */
import { increment, INCREMENT } from '../actions'

describe('increment action', () => {
  it('should correctly create the payload', () => {
    const amount = 500

    expect(increment(amount)).toEqual({
      type: INCREMENT,
      payload: {
        amount
      }
    })
  })

  it('should correctly handle non-numeric input', () => {
    const amount = undefined

    expect(increment(amount)).toEqual({
      type: INCREMENT,
      payload: {
        amount: 0
      }
    })
  })
})
