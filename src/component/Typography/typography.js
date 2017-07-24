import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const withStyle = style => {
  const Typography = ({ title, color, children }) => (
    <Text style={[style, color && { color }]}>
      {title}
      {children}
    </Text>
  )
  Typography.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.elements
    ])
  }
  Typography.defaultProps = {
    title: '',
  }

  return Typography  
}



const Display1 = withStyle(styles['display1'])
const Display2 = withStyle(styles['display2'])
const Display3 = withStyle(styles['display3'])
const Display4 = withStyle(styles['display4'])
const Headerline = withStyle(styles['headerLine'])
const Title = withStyle(styles['title'])
const SubHeader = withStyle(styles['subHeader'])
const Body = withStyle(styles['body1'])
const Body2 = withStyle(styles['body2'])
const Caption = withStyle(styles['cation'])
const Button = withStyle(styles['button'])

export {
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
  Button
}
