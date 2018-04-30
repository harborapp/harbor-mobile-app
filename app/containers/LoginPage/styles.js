import { StyleSheet } from 'react-native'

import * as global from '../../global-styles'
import * as colors from '../../constants/colors'

export const gradientBg = [colors.GRADIENT_LOW, colors.GRADIENT_HIGH]

export default StyleSheet.create({
  container: {
    flex: 1
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
  loginSectionTitleText: {
    ...global.fonts.primary,
    color: colors.WHITE,
    alignSelf: 'center',
    fontSize: 18
  }
})
