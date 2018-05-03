import { StyleSheet } from 'react-native'

import * as colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.LOGIN_OPTIONS_SEP
  },
  text: {
    marginLeft: 15,
    marginRight: 15
  }
})
