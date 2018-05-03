/* eslint-env jest */
import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import HR from '../index'

describe('HR', () => {
  it('should render', () => {
    const tree = renderer.create(
      <HR>
        {(style) => <Text style={style}>Hello</Text>}
      </HR>
    )

    expect(tree).toMatchSnapshot()
  })
})
