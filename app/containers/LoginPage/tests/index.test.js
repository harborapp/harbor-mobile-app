/* eslint-env jest */
import React from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'

import LoginPage from '../'

describe('LoginPage', () => {
  it('should render', () => {
    const tree = renderer.create(
      <IntlProvider locale='en'>
        <LoginPage />
      </IntlProvider>
    )

    expect(tree).toMatchSnapshot()
  })
})
