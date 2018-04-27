import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styleNames from '../../utils/styleNames'

/**
 * Container is a generic element to wrap children
 * in a flex View.
 *
 * @returns {jsx}
 */
const Container = ({ children, centerChildren, flex, style, ...props }) => {
  const styles = styleNames({ flex })
    .ifThen(style !== undefined, style)
    .ifThen(centerChildren === true, { alignItems: 'center', justifyContent: 'center' })
    .eval()

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
