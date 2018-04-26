import { combineReducers } from 'redux-immutable'

import appReducer from './containers/App/reducer'
import langReducer from './containers/LanguageProvider/reducer'

/**
 * Create Root Reducer uses Redux's combineReducers
 * on the respective reducers. This function exists
 * to dynamically inject reducers if need be.
 *
 * @returns {Object}
 */
export default function createRootReducer () {
  return combineReducers({
    app: appReducer,
    lang: langReducer
  })
}
