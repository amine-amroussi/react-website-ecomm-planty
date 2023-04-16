import React from "react";
import styled, { keyframes } from "styled-components";
import image from "../assets/banner-img.png";

import { bounceIn, fadeIn, bounceInLeft, slideInUp } from "react-animations";
import { Link } from "react-router-dom";

const animationObj = {
  bounce: keyframes`${bounceIn}`,
  fade: keyframes`${fadeIn}`,
  bounceLeft: keyframes`${bounceInLeft}`,
  slideIn: keyframes`${slideInUp}`,
};

const Banner = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>
          Touching the heart of all <span>plants</span> lovers
        </h1>
        <p>
          your one-stop shop for all plant related goodness. It’s a place to
          learn how to become the best possible plant parent and connect with
          other plant lovers throughout Europe
        </p>
        <Link to='/products' className="btn descover-btn">descover plants</Link>
      </div>
      <div className="banner-img">
        <img src={image} alt="plants banner flowers" className="img" />
        <div className="circel"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  height: 90vh;
  border-radius: 10px;
  padding-left: 20px;
  .banner-img {
    flex: 6;
    position: relative;
    height: 100%;
    overflow: hidden;
    .img {
      width: 600px;
      z-index: 100;
      position: absolute;
      animation: 0.8s ${animationObj.bounce};
      /* transform: scaleX(-1); */
    }
    .circel {
      width: 450px;
      height: 450px;
      background-color: var(--ligt-pink-clr);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      animation: 1s ${animationObj.fade};
    }
  }
  .content {
    flex: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 3rem;
      letter-spacing: 2px;
      animation: 0.8s ${animationObj.bounceLeft};
      span {
        color: var(--green-clr);
        text-transform: uppercase;
        animation: 0.8s ${animationObj.slideIn};
      }
    }
    p {
      font-size: 1.2rem;
      animation: 0.8s ${animationObj.slideIn};
    }
    .descover-btn {
      background-color: var(--green-clr);
      color: white;
      padding: 7px 10px;
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: capitalize;
      border-radius: 15px;
      align-self: flex-start;
      animation: 0.8s ${animationObj.slideIn};
      margin-top: 10px;
      :hover {
        opacity: 0.8;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    background-image: url("https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-position: center;
    background-size: cover;
    margin-bottom: 60px;
    
    .banner-img {
      display: none !important;
    }

    .content {
      p {
        font-size: 1rem;
        width: 80%;
        align-self: flex-start;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .content {
      flex: 5 !important;
      h1 {
        font-size: 1.8rem !important;
      }
    }
    .banner-img {
      flex: 7 !important;
      .circel {
        width: 200px !important;
        height: 200px !important;
      }
      .img {
        width: 400px !important;
        margin-top: 30px;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .content {
      flex: 5;
      h1 {
        font-size: 2.5rem;
      }
    }
    .banner-img {
      flex: 7;
      .circel {
        width: 300px;
        height: 300px;
      }
      .img {
        width: 550px;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
  }
`;

export default Banner;
