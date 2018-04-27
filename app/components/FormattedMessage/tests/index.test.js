/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'

import FormattedMessage from '../'

describe('FormattedMessage', () => {
  it('should render', () => {
    const props = {
      id: 'greeting',
      defaultMessage: 'Welcome to Harbor'
    }

    const tree = renderer.create(
      <IntlProvider locale='en'>
        <FormattedMessage {...props} />
      </IntlProvider>
    )

    expect(tree).toMatchSnapshot()
  })
})
