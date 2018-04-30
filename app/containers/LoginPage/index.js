import React, { PureComponent } from 'react'

import Branding from './Branding'
import LoginSection from './LoginSection'
import styles, { gradientBg } from './styles'
import Gradient from '../../components/Gradient'
import Container from '../../components/Container'

/**
 * LoginPage renders the main login page with the branding,
 * and social login buttons.
 *
 * @returns {jsx}
 */
class LoginPage extends PureComponent {
  componentDidMount () {}

  render () {
    return (
      <Gradient style={styles.container} colors={gradientBg}>
        <React.Fragment>
          <Container flex={2}>
            <Branding />
          </Container>

          <Container flex={3}>
            <LoginSection />
          </Container>
        </React.Fragment>
      </Gradient>
    )
  }
}

export default LoginPage
