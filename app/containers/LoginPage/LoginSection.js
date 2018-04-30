import React from 'react'
import { SocialIcon } from 'react-native-elements'

import styles from './styles'
import messages from './messages'
import Container from '../../components/Container'
import FormattedMessage from '../../components/FormattedMessage'

/**
 * Login section renders the login options allowed in the app.
 *
 * @returns {jsx}
 */
const LoginSection = () => (
  <Container>
    <React.Fragment>
      <FormattedMessage
        {...messages.loginSectionTitle}
        style={styles.loginSectionTitleText}
      />
      <SocialIcon
        button
        title='Sign In with Google'
        type='google-plus-official'
      />
    </React.Fragment>
  </Container>
)

export default LoginSection
