import React from 'react'
import styled from 'styled-components'
import loading from "../assets/loadinng.gif"

const LoadingPage = () => {
  return (
    <Wrapper>
        <img src={loading} alt="loading sinpper" />
    </Wrapper>
  )
}

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default LoadingPage