/* eslint-env jest */
import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import H1 from '../'

describe('H1', () => {
  it('should render', () => {
    const tree = renderer.create(
      <H1 id='hello'>
        <Text> Hello world! </Text>
      </H1>
    )

    expect(tree).toMatchSnapshot()
  })
})
