import React from 'react'
import { Platform, TouchableOpacity, Text, View, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'

const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback
})

const Button = ({ onPress, children }) => (
  <Touchable onPress={onPress}>
    {children}
  </Touchable>
)

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.element
}
Button.propTypes = {
  onPress: '',
}

export default Button
