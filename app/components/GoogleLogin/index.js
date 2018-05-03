import React from 'react'
import { TouchableHighlight } from 'react-native'

import styles from './styles'

/**
 * GoogleLogin is a component to show the 'Login with Google' button.
 * Expects the text to be passed as a child element. It does not deal
 * with showing of the text itself, only the logo and associated styles.
 *
 * @returns {jsx}
 */
const GoogleLogin = ({ onPress, children, ...props }) => {
  return <TouchableHighlight
    onPress={onPress}
    style={styles.loginContainer}
    {...props}>
    {children}
  </TouchableHighlight>
}

export default GoogleLogin
