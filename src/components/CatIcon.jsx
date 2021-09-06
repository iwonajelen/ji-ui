import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Svg = styled(Icon)` 
  color: ${props => props.color};
`

export const CatIcon = ({ color, text }) => ( 
  <Svg width="100" height="100" color={color}>
    <path d="M 2 2 L 25 25 L 75 25 L 98 2 L 90 80 L 50 98 L 10 80 L 2 2" stroke="#555" stroke-width="2" fill="currentColor" />
    <path d="M 20 42 L 30 45 M 70 45 L 80 42" stroke="#555" stroke-width="2"/>
    {text && <text x="50" y="70" textLength="70%" font-family="arial" font-size="20" text-anchor="middle" fontWeight="700" fill="black">{text}</text>}
  </Svg>
)