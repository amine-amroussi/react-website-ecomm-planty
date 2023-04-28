import React from "react";
import styled from "styled-components";
import loading from '../assets/loadinng.gif'

const LoadingSnipper = () => {
  return (
    <Wrapper >
      <img src={loading} alt="loading" />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
`;

export default LoadingSnipper;
