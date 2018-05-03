import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './styles'

/**
 * HR is used to render two horizontal lines with text in between.
 * It makes no assumptions about how the text is shown (for e.g
 * with a Formatted Intl message instead of Text) by consuming a
 * child as a function.
 *
 * @returns {jsx}
 *
 */
const HR = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.line} />
    <View>{children(styles.text)}</View>
    <View style={styles.line} />
  </View>
)

HR.propTypes = {
  children: PropTypes.func.isRequired
}

export default HR
