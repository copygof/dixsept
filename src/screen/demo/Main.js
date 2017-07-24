import React from 'react'
import { View, ScrollView } from 'react-native'
import { Button } from '../../component/Button'


const Main = ({ navigation: { navigate } }) => (
  <View style={{ paddingVertical: 15 }}>
    <Button
      title="Typepography"
      onPress={() =>
        navigate('Typepography', { })
      } />
    <View style={{ height: 10 }} />
    <Button
      title="Component"
      onPress={() =>
        navigate('Component', { })
      } />
  </View>
)

export default Main
