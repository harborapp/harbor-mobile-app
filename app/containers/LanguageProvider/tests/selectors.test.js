/* eslint-env jest */
import { fromJS } from 'immutable'
import { createSelector } from 'reselect'

import { selectLanguage, makeSelectLocale } from '../selectors'

describe('selectLanguage', () => {
  it('should select the global state', () => {
    const globalState = fromJS({})
    const mockedState = fromJS({
      lang: globalState
    })

    expect(selectLanguage(mockedState)).toEqual(globalState)
  })

  it('should correctly create the selector', () => {
    const selector = createSelector(
      makeSelectLocale(),
      (locale) => ({ locale })
    )
    const state = fromJS({
      lang: {
        locale: 'en'
      }
    })

    expect(selector(state)).toEqual({ locale: 'en' })
  })
})
