import React from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import { Button } from '../../component/Button'
import Cards from '../../component/Cards/Cards'
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

const Actions1 = () => (
  <View style={{ padding: 8, flexDirection: 'row' }}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start'  }}>
      <Button
        title="Actions1" />
      <View style={{ width: 8 }} />
      <Button
        title="Actions2" />
    </View>
  </View>
)

const Actions2 = () => (
  <View style={{ padding: 8, flexDirection: 'row' }}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start'  }}>
      <Button
        title="Actions1" />
      <View style={{ width: 8 }} />
      <Button
        title="Actions2" />
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <Button
        title="/\" />
    </View>
  </View>
)

const Actions3 = () => (
  <View style={{ padding: 8 }}>
    <View style={{ flex: 1  }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Button title="Actions1" />
      </View>
      <View style={{ height: 4 }} />
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Button title="Actions2" />
      </View>
    </View>
  </View>
)

const HeaderCard = () => (
  <View style={{ padding: 16, height: 72, backgroundColor: '#ffffff', justifyContent: 'center' }}>
    <Headerline>Title</Headerline>
    <Caption>SubHeader</Caption>
  </View>
)

const HeaderCard2 = ({ color }) => (
  <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
    <Headerline color={color}>Title</Headerline>
    <Caption color={color}>SubHeader</Caption>
  </View>
)

const Icons = () => (<View style={{ width: 44, height: 44, borderRadius: 44, backgroundColor: '#dfdfdf' }} />)

const HeaderCardIcon = () => (
  <View style={{ padding: 16, height: 72 }}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Icons />
      <View style={{ marginLeft: 8, justifyContent: 'center' }}>
        <Headerline>Title</Headerline>
        <Caption>SubHeader</Caption>
      </View>
    </View>
  </View>
)

const SupportingText = ({ title }) => (
  <View style={{ padding: 16 }}>
    <Body>
      A card collection is coplanar, or a layout of cards on the same plane.
      {title}
    </Body>
  </View>
)

const Media = () => (
  <View
    style={{
      backgroundColor: '#dfdfdf',
      height: Dimensions.get('window').width * 9 / 16,
    }} />
)

const Media2 = () => (
  <View
    style={{
      backgroundColor: '#dfdfdf',
      height: Dimensions.get('window').width * 1 / 1,
    }} />
)

const Media3 = ({ size = 1 }) => (
  <View
    style={{
      backgroundColor: '#dfdfdf',
      height: 80 * size,
      width: 80 * size,
    }} />
)

const ContentOvelay = ({ children }) => (
  <View
    style={{
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0, 0.6)',
      bottom: 0,
      left: 0,
      right: 0
    }}>
    {children}
  </View>
)

const Components = () => (
  <View  style={{ paddingBottom: 15 }}>
    <ScrollView style={{ padding: 8,  }}>
      <Cards>
        <Button />
      </Cards>
      <Cards>
        <HeaderCardIcon />
      </Cards>
      <Cards>
        <HeaderCard />
      </Cards>
      {/* Actions */}
      <Actions1 />
      <View style={{ height: 8 }} />
      <Actions2 />
      {/* Actions */}
      <Media />
      <Cards>
        <HeaderCardIcon />
        <SupportingText />
      </Cards>
      <Cards>
        <Media />
        <SupportingText />
      </Cards>
      <Cards>
        <HeaderCard />
        <Media />
        <SupportingText />
        <Actions1 />
      </Cards>
      <Cards>
        <HeaderCard />
        <Media />
        <Actions3 />
      </Cards>
      <Cards>
        <HeaderCard />
        <Media />
        <Actions3 />
      </Cards>
      <Cards>
        <Media />
        <HeaderCard />
        <Actions1 />
      </Cards>
      <Cards>
        <Media />
        <HeaderCard />
        <Actions2 />
        <SupportingText
          title={`Use to indicate an action in progress ("Downloading…") or incomplete or truncated text. No space before the ellipses.

Omit from menu items or buttons that open a dialog or start some other process.

Midline ellipses (three-bullet glyphs) are also used to represent numeric truncation and the redaction of sensitive data, such as credit cards.

OS keystroke: Option-;`}
          />
      </Cards>
      <Cards>
        <HeaderCard2 />
        <SupportingText />
        <Actions1 />
      </Cards>
      <Cards>
        <Media />
        <Actions2 />
      </Cards>
      <Cards>
        <Media2 />
        <ContentOvelay>
          <HeaderCard2 color="#ffffff" />
          <Actions1 />
        </ContentOvelay>
      </Cards>
      <Cards>
        <View>
          <Media />
          <ContentOvelay>
            <HeaderCard2 color="#ffffff" title="Title" />
          </ContentOvelay>
        </View>
        <Actions1 />
      </Cards>
      <Cards>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <HeaderCard2 />
          <View style={{ paddingTop: 16, paddingRight: 16 }}>
            <Media3 />
          </View>
        </View>
        <Actions1 />
      </Cards>
      <Cards>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <HeaderCard2 />
          <View style={{ paddingTop: 16, paddingRight: 16 }}>
            <Media3 size={1.5} />
          </View>
        </View>
        <Actions1 />
      </Cards>
      <Cards>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <HeaderCard2 />
          <View style={{ paddingTop: 16, paddingRight: 16 }}>
            <Media3 size={2} />
          </View>
        </View>
        <Actions1 />
      </Cards>
      <Cards>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <HeaderCard2 />
          <View style={{ paddingTop: 16, paddingRight: 16 }}>
            <Media3 size={1.5} />
          </View>
        </View>
        <View style={{ height: 16 }} />
      </Cards>
      <Cards>
        <HeaderCard />
        <SupportingText />
      </Cards>
    </ScrollView>
  </View>
)

export default Components
