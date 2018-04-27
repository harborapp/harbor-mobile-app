import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import messages from './messages'
import { increment } from './actions'
import FormattedMessage from '../../components/FormattedMessage'

const app = (props) => (
  <View>
    <FormattedMessage
      {...messages.header}
      values={{ counter: props.value }}
      onPress={() => props.increment(1)} />
  </View>
)

export default connect(state => ({
  value: state.get('app').get('counter')
}), { increment })(app)
