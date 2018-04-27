import React, { PureComponent } from 'react'

import messages from './messages'
import H1 from '../../components/H1'
import styles, { gradientBg } from './styles'
import Gradient from '../../components/Gradient'
import Container from '../../components/Container'
import FormattedMessage from '../../components/FormattedMessage'

/**
 * Branding renders the static title and subtitle
 * in the login pages.
 *
 * @returns {jsx}
 */
const Branding = () => (
  <Container centerChildren>
    <React.Fragment>
      <H1>
        <FormattedMessage
          {...messages.brandingTitle}
          style={styles.brandingTitleText}
        />
      </H1>
      <FormattedMessage
        {...messages.brandingSubtitle}
        style={styles.brandingSubtitleText}
      />
    </React.Fragment>
  </Container>
)

/**
 * LoginPage renders the main login page with the branding,
 * and social login buttons.
 *
 * @returns {jsx}
 */
class LoginPage extends PureComponent {
  render () {
    return (
      <Gradient style={styles.container} colors={gradientBg}>
        <React.Fragment>
          <Container flex={2}>
            <Branding />
          </Container>

          <Container flex={3} />
        </React.Fragment>
      </Gradient>
    )
  }
}

export default LoginPage
