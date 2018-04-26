import { createAction } from 'redux-actions'

import { INCREMENT } from './constants'

export const increment = createAction(INCREMENT, amount => {
  return {
    amount: typeof (amount) !== 'number' ? 0 : amount
  }
})
