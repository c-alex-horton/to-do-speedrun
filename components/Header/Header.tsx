import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  width: 100%;
  background-color: #121215;
`;

export default function Header() {
  return (
    <HeaderStyles><h1>ToDoes</h1></HeaderStyles>
  )
}
