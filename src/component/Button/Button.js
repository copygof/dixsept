import React from 'react'
import DefaultButton from './DefaultButton'
import { Button as TextButton } from '../Typography'

const Button = ({ title, ...props }) => (
  <DefaultButton {...props}>
    <TextButton title={title} color={'#ffffff'} />
  </DefaultButton>
)

export default Button
