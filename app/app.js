import 'intl'
import React from 'react'
import { Provider } from 'react-redux'

import App from './containers/App'
import translationMessages from './i18n'
import configureStore from './configureStore'
import LanguageProvider from './containers/LanguageProvider'

// Initialize the Redux store
const store = configureStore({})

// Create a renderer that renders the root component
const createRenderer = (messages) => () => (
  <Provider store={store}>
    <LanguageProvider messages={messages}>
      <App />
    </LanguageProvider>
  </Provider>
)

export default createRenderer(translationMessages)
