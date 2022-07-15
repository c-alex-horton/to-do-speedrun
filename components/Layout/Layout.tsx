import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyles>
      <Header/>
      {children}
    </LayoutStyles>
  )
}
