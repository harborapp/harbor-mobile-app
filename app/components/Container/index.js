import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

/**
 * Container is a generic element to wrap children
 * in a flex View.
 *
 * @returns {jsx}
 */
const Container = (props) => <View style={{ flex: 1 }}>{props.children}</View>

Container.propTypes = {
  children: PropTypes.element.isRequired
}

export default Container
