/* eslint-env jest */
import { fromJS } from 'immutable'

import reducer from '../reducer'
import { increment } from '../actions'

describe('app reducer', () => {
  describe('increment action', () => {
    it('should correctly handle numeric amount', () => {
      const amount = 100
      const state = fromJS({ counter: 100 })
      const newState = reducer(state, increment(amount))

      expect(newState.get('counter')).toEqual(state.get('counter') + amount)
    })
  })
})
