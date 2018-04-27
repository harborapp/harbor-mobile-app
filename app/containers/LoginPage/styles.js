import { StyleSheet } from 'react-native'

import * as global from '../../global-styles'
import * as colors from '../../constants/colors'

export const gradientBg = [colors.GRADIENT_LOW, colors.GRADIENT_HIGH]

export default StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    ...global.fonts.primary,
    fontSize: 40
  }
})
