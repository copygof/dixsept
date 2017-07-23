import { StyleSheet } from 'react-native'
import baseColor from '../../baseColor'
import fonts from '../../fonts'

const { typography: { button } } = baseColor

export default StyleSheet.create({
  display4: {
    color: button.textColor,
    fontFamily: fonts.base.light,
    fontSize: 112
  },
  display3: {
    color: button.textColor,
    fontFamily: fonts.base.regular,
    fontSize: 56
  },
  display2: {
    color: button.textColor,
    fontFamily: fonts.base.regular,
    fontSize: 45
  },
  display1: {
    color: button.textColor,
    fontFamily: fonts.base.regular,
    fontSize: 34
  },
  headerLine: {
    color: button.textColor,
    fontFamily: fonts.base.regular,
    fontSize: 24
  },
  title: {
    color: button.textColor,
    fontFamily: fonts.base.medium,
    fontSize: 20
  },
  subHeader: {
    color: button.textColor,
    fontFamily: fonts.base.regular,
    fontSize: 16
  },
  body1: {
    color: button.textColor,
    fontFamily: fonts.base.regular,
    fontSize: 14
  },
  body2: {
    color: button.textColor,
    fontFamily: fonts.base.medium,
    fontSize: 14
  },
  caption: {
    color: button.textColor,
    fontFamily: fonts.base.regular,
    fontSize: 12
  },
  button: {
    color: button.textColor,
    fontFamily: fonts.base.medium,
    fontSize: 14
  },
})
// light
// medium
// bold