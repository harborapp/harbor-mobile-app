import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Gradient = (props) => {
  return (
    <LinearGradient colors={props.colors}>
      {props.children}
    </LinearGradient>
  )
}

export default Gradient
