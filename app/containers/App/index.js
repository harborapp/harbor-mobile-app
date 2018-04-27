import React from 'react'
import { connect } from 'react-redux'

import messages from './messages'
import { increment } from './actions'
import styles, { gradientBg } from './style'
import Gradient from '../../components/Gradient'
import Container from '../../components/Container'
import FormattedMessage from '../../components/FormattedMessage'

const app = (props) => (
  <Container>
    <Gradient style={styles.container} colors={gradientBg}>
      <FormattedMessage
        {...messages.header}
        style={styles.header}
        values={{ counter: props.value }}
        onPress={() => props.increment(1)}
      />
    </Gradient>
  </Container>
)

export default connect(state => ({
  value: state.get('app').get('counter')
}), { increment })(app)
