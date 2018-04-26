import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

import { changeLocale } from './actions'
import { DEFAULT_LOCALE } from '../App/constants'

const initialState = fromJS({
  locale: DEFAULT_LOCALE
})

const reducer = handleActions({
  [changeLocale]: (state, action) => state.set('locale', action.locale)
}, initialState)

export default reducer
