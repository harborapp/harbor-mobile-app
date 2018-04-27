import React from 'react'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'

const Gradient = ({ colors, children, ...props }) => {
  return (
    <LinearGradient colors={colors} {...props}>
      {children}
    </LinearGradient>
  )
}

Gradient.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element
}

export default Gradient
