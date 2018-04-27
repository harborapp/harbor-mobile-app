import { Text } from 'react-native'
import React, { PureComponent } from 'react'

import styles, { gradientBg } from './styles'
import Gradient from '../../components/Gradient'

class LoginPage extends PureComponent {
  render () {
    return (
      <Gradient style={styles.container} colors={gradientBg}>
        <Text> Hello world </Text>
      </Gradient>
    )
  }
}

export default LoginPage
