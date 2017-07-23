import colors from './colors'

const baseStyle = {
  primary: colors.red,
  
  // page
  pageBackground: colors.white,
  // typography
  typography: {
    button: {
      textColor: colors.black
    }
  },
  //
  component: {
    button: {
      backgroundColor: colors.blue,
      backgroundColorOnPress: colors.blue,
      backgroundColorOnActive: colors.blue,
      backgroundColorOnDisable: colors.blue,
    }
  }
}

export default baseStyle