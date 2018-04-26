import React from 'react'
import { Provider } from 'react-redux'

import App from './containers/App'
import translationMessages from './i18n'
import configureStore from './configureStore'

// Initialize the Redux store
const store = configureStore({})

// Create a renderer that renders the root component
const createRenderer = (messages) => () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default createRenderer(translationMessages)
