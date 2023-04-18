import React from "react";
import { useRouteError , Link} from "react-router-dom";
import styled from "styled-components";
import errorImage from "../assets/error-img.png";

const Error = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      <div className="error-content">
        <div className="error-image">
          <img src={errorImage} alt="error errorimage not found page" />
          <div className="circel"></div>
        </div>
        <h1>Opps ! {error.statusText} .</h1>
        <h3>{error.status}</h3>
        <Link to={'/'} >Go ! Back to home page</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .error-image {
    position: relative;
    text-align: center;
    margin-bottom: 15px;
    img {
      width: 350px;
    }
    .circel {
      width: 400px;
      height: 400px;
      background-color: var(--light-green-clr);
      border-radius: 50%;
      position: absolute;
      top: 0;
      z-index: -1;
    }
  }
  h1 {
    margin-top: 35px;
    font-size: 3rem;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  a {
    background-color: var(--green-clr);
    padding: 8px 15px;
    margin-top: 15px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 5px;
  }
`;

export default Error;
