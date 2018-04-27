import React from 'react'

import styles from './styles'
import messages from './messages'
import H1 from '../../components/H1'
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

export default Branding
