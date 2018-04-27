/* eslint-env jest */
import React from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'

import Branding from '../Branding'

describe('Branding', () => {
  it('should render', () => {
    const tree = renderer.create(
      <IntlProvider locale='en'>
        <Branding />
      </IntlProvider>
    )

    expect(tree).toMatchSnapshot()
  })
})
