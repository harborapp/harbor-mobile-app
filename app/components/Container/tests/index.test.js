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

  it('should render with custom style props', () => {
    const tree = renderer.create(
      <Container style={{ justifyContent: 'center' }}>
        <Text> Hello world </Text>
      </Container>
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render with center children prop', () => {
    const tree = renderer.create(
      <Container centerChildren>
        <Text> Hello world </Text>
      </Container>
    )

    expect(tree).toMatchSnapshot()
  })
})
