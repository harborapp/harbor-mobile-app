import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'
import Container from '../Container'

/**
 * LoginButton is a component to show the 'Login with <provider>' button.
 * Expects the text to be passed as a child element. It does not deal
 * with showing of the text itself, only the logo and associated styles.
 *
 * @returns {jsx}
 */
const LoginButton = ({ onPress, name, children, iconStyle }) => {
  return (
    <TouchableOpacity style={styles.loginContainer}>
      <Container>
        <Icon name={name} size={35} style={iconStyle} />
      </Container>
      <Container flex={3} style={styles.text}>
        {children}
      </Container>
    </TouchableOpacity>
  )
}

LoginButton.propTypes = {
  iconStyle: PropTypes.any,
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  name: PropTypes.oneOf(['google', 'github']).isRequired
}

LoginButton.defaultProps = {
  iconStyle: {}
}

export default LoginButton
