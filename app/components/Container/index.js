import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

/**
 * Container is a generic element to wrap children
 * in a flex View.
 *
 * @returns {jsx}
 */
const Container = ({ children, centerChildren, flex, style, ...props }) => {
  const styles = [
    { flex },
    style,
    centerChildren ? { alignItems: 'center', justifyContent: 'center' } : undefined
  ]

  return <View style={styles}>{children}</View>
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
  style: View.propTypes.style,
  flex: PropTypes.number,
  centerChildren: PropTypes.bool
}

Container.defaultProps = {
  flex: 1,
  centerChildren: false
}

export default Container
