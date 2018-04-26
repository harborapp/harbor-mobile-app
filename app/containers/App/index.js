import React from 'react'
// import { fromJS } from 'immutable'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import { increment } from './actions'

const app = (props) => (
  <View>
    <Text onPress={() => props.increment(1)}>Hi from Srishan - Value is {props.value}!</Text>
  </View>
)

export default connect(state => ({
  value: state.get('app').get('counter')
}), { increment })(app)
