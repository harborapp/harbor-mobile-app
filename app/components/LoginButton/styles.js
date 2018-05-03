import { StyleSheet } from 'react-native'

import * as colors from '../../constants/colors'

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1
  }
})
