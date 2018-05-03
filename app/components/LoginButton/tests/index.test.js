/* eslint-env jest */
import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import LoginButton from '../'

describe('LoginButton', () => {
  it('should render google login button', () => {
    const tree = renderer.create(
      <LoginButton
        onPress={() => true}
        name='google'
      >
        <Text>Login with Google</Text>
      </LoginButton>
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render github login button', () => {
    const tree = renderer.create(
      <LoginButton
        onPress={() => true}
        name='github'
      >
        <Text>Login with Github</Text>
      </LoginButton>
    )

    expect(tree).toMatchSnapshot()
  })

  it('should render login button with custom icon style', () => {
    const tree = renderer.create(
      <LoginButton
        onPress={() => true}
        name='github'
        iconStyle={{ color: 'red' }}
      >
        <Text>Login with Github</Text>
      </LoginButton>
    )

    expect(tree).toMatchSnapshot()
  })
})
