import React from 'react'
import { Text, StyleSheet } from 'react-native'

import styles from './styles'
import messages from './messages'
import HR from '../../components/HR'
import Container from '../../components/Container'
import GoogleLogin from '../../components/GoogleLogin'
import FormattedMessage from '../../components/FormattedMessage'

/**
 * Login section renders the login options allowed in the app.
 *
 * @returns {jsx}
 */
const LoginSection = () => (
  <Container style={StyleSheet.flatten(styles.loginContainer)}>
    <GoogleLogin onPress={() => true}>
      <Text> Login with Google </Text>
    </GoogleLogin>

    <Container>
      <HR>
        {(textStyles) => (
          <FormattedMessage
            {...messages.loginOptionsSeparator}
            style={[textStyles, styles.separatorText]}
          />
        )}
      </HR>
    </Container>

    <GoogleLogin onPress={() => true}>
      <Text> Login with Github </Text>
    </GoogleLogin>
  </Container>
)

export default LoginSection
