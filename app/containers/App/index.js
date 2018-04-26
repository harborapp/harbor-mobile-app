import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { increment } from './actions'

const app = (props) => (
  <View>
    <FormattedMessage {...messages.header}>
      { 
      text => <Text onPress={() => props.increment(1)}>text {props.value}</Text>
      }
    </FormattedMessage>
  </View>
)

export default connect(state => ({
  value: state.get('app').get('counter')
}), { increment })(app)
