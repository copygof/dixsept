import React from 'react'
import { View, ScrollView } from 'react-native'
import {
  Display1,
  Display2,
  Display3,
  Display4,
  Headerline,
  Title,
  SubHeader,
  Body,
  Body2,
  Caption,
  Button as TextButton
} from '../../component/Typography'
import { Button } from '../../component/Button'

const Typepography = () => (
  <View style={{ paddingVertical: 15 }}>
    <ScrollView style={{ paddingHorizontal: 15 }}>
      <Button title="My Button" />
      <Display1 title="Display1" />
      <Display2 title="Display2" />
      <Display3 title="Display3" />
      <Display4 title="Display4" />
      <Headerline title="Headerline" />
      <Title title="Title" />
      <SubHeader title="SubHeader" />
      <Body title="Body" />
      <Body2 title="Body2" />
      <Caption title="Caption" />
      <TextButton title="Button" />
    </ScrollView>
  </View>
)

export default Typepography
