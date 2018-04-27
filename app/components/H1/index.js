import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

/**
 * H1 is a wrapper around the Text component to
 * style it in a way that it matches
 * an <h1> header.
 *
 * @returns {jsx}
 */
const H1 = ({ children, style, ...props }) => (
  <Text style={[styles.header, style]} {...props}>{children}</Text>
)

H1.propTypes = {
  children: PropTypes.element.isRequired,
  style: Text.propTypes.style
}

export default H1
