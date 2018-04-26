import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

import { increment } from './actions'

export const defaultState = fromJS({ counter: 0 })

const reducer = handleActions({
  [increment]: (state, action) =>
    state
      .set('counter', state.get('counter') + action.payload.amount)
}, defaultState)

export default reducer
