import React from 'react'

import styles from './styles'
import messages from './messages'
import HR from '../../components/HR'
import Container from '../../components/Container'
import LoginButton from '../../components/LoginButton'
import FormattedMessage from '../../components/FormattedMessage'

/**
 * Login section renders the login options allowed in the app.
 *
 * @returns {jsx}
 */
const LoginSection = () => (
  <Container style={styles.loginContainer}>
    <React.Fragment>
      <LoginButton name='google' iconStyle={styles.googleIcon} onPress={() => true}>
        <FormattedMessage style={styles.loginOptionsText} {...messages.loginGoogle} />
      </LoginButton>

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

      <LoginButton name='github' iconStyle={styles.githubIcon} onPress={() => true}>
        <FormattedMessage style={styles.loginOptionsText} {...messages.loginGithub} />
      </LoginButton>
    </React.Fragment>
  </Container>
)

export default LoginSection
