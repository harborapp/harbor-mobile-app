import { combineReducers } from 'redux-immutable'

import appReducer from './containers/App/reducer'

/**
 * Create Root Reducer uses Redux's combineReducers
 * on the respective reducers. This function exists
 * to dynamically inject reducers if need be.
 *
 * @param {...Object} injectedReducers
 * @returns {undefined}
 */
export default function createRootReducer (injectedReducers) {
  return combineReducers({
    app: appReducer
  })
}
