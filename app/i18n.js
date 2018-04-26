import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'

import enTranslations from './translations/en.json'
import { DEFAULT_LOCALE } from './containers/App/constants'

addLocaleData(enLocaleData)

/**
 * Format the translation messages with the locale and messages for
 * that locale. If any keys of the provided locale are undefined,
 * use the default translation.
 *
 * @returns {Object}
 */
export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslations)
    : {}

  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key]
    return Object.assign(formattedMessages, { [key]: formattedMessage })
  }, {})
}

export const appLocales = ['en']

export default {
  en: formatTranslationMessages('en', enTranslations)
}
