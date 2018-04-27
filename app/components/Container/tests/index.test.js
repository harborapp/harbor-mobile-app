/* eslint-env jest */
import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import Container from '../'

describe('Container', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Container>
        <Text> Hello world </Text>
      </Container>
    )

    expect(tree).toMatchSnapshot()
  })
})
