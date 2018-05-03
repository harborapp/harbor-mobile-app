import { StyleSheet } from 'react-native'

import * as global from '../../global-styles'
import * as colors from '../../constants/colors'

export const gradientBg = [colors.GRADIENT_LOW, colors.GRADIENT_HIGH]

export default StyleSheet.create({
  container: {
    flex: 1
  },

  loginContainer: {
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 35
  },

  brandingTitleText: {
    ...global.fonts.header,
    color: colors.WHITE,
    elevation: 1 // TODO: Handle this better.
  },

  brandingSubtitleText: {
    ...global.fonts.primary,
    color: colors.WHITE,
    fontSize: 14
  },

  separatorText: {
    color: colors.DIMMED_BLUE
  },

  loginOptionsText: {
    ...global.fonts.header,
    color: colors.GRADIENT_HIGH,
    fontSize: 18
  },

  googleIcon: {
    color: colors.GOOGLE_ORANGE
  },

  githubIcon: {
    color: colors.BLACK
  }
})
