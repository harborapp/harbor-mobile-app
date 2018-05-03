import React from 'react'
import { StyleSheet } from 'react-native'

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
    <React.Fragment>
      <GoogleLogin onPress={() => true}>
        <FormattedMessage {...messages.loginGoogle} />
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
        <FormattedMessage {...messages.loginGithub} />
      </GoogleLogin>
    </React.Fragment>
  </Container>
)

export default LoginSection
