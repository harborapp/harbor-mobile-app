/* eslint-env jest */
import reducer, { initialState } from '../reducer'
import { changeLocale } from '../actions'

describe('LanguageProvider reducer', () => {
  it('should correctly handle changeLocale action', () => {
    const action = changeLocale('de')
    const newState = reducer(initialState, action)

    expect(newState.get('locale')).toEqual('de')
  })
})
