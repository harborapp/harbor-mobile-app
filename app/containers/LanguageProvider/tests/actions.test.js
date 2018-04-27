/* eslint-env jest */
import { changeLocale } from '../actions'
import { CHANGE_LOCALE } from '../constants'

describe('changeLocale action', () => {
  it('should correctly create the payload', () => {
    const locale = 'de'

    expect(changeLocale(locale)).toEqual({
      type: CHANGE_LOCALE,
      payload: {
        locale
      }
    })
  })
})
