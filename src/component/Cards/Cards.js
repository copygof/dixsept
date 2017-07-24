import React from 'react'
import { View } from 'react-native'


const Cards = ({ children }) => (
  <View
    style={{
      // flex: 1,
      // padding: 16,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      elevation: 2,
      borderRadius: 2,
      margin: 8
    }}>
    {children}
  </View>
)

export default Cards
