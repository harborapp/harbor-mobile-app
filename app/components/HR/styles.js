import { StyleSheet } from 'react-native'

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
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15
  }
})
