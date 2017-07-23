import React from 'react'
import { Platform, TouchableOpacity, Text, View, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback
})

const DefaultButton = ({ onPress, children, width }) => (
  <Touchable onPress={onPress}>
    <View style={[styles.button, { width }]}>
      {children}
    </View>
  </Touchable>
)

DefaultButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.element,
  width: PropTypes.number,
}
DefaultButton.propTypes = {
  onPress: () => {},
}

export default DefaultButton
