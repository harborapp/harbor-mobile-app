import { fromJS } from 'immutable'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

import createRootReducer from './reducers'

/**
 * Configure store initializes the Redux store with all the
 * necessary middleware and enhancers. The store object
 * is returned.
 *
 * @param {Object} initialState={}
 * @returns {Object}
 */
export default function configureStore (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [
    sagaMiddleware
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    createRootReducer(),
    fromJS(initialState),
    compose(...enhancers)
  )

  return store
}
