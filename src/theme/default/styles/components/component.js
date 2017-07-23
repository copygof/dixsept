import { StyleSheet } from 'react-native'
import baseColor from '../../baseColor'
import fonts from '../../fonts'

const { component: { button } } = baseColor

export default StyleSheet.create({
  button: {
    backgroundColor: button.backgroundColor,
    height: 36,
    minWidth: 64,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
})