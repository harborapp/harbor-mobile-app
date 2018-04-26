import { createAction } from 'redux-actions'

export const INCREMENT = 'increment'

export const increment = createAction(INCREMENT, amount => {
  return {
    amount: typeof (amount) !== 'number' ? 0 : amount
  }
})
