import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper><h2>All rights has reserved at Palnty shop &copy; {new Date().getFullYear()}</h2></Wrapper>
  )
}

const Wrapper = styled.footer`
   h2 {
    padding: 15px;
    background-color: #2e2e2e;
    text-align: center;
    font-weight: 600;
    color: white;
    font-size: 1.2rem;
   }
`

export default Footer