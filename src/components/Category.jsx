import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/product_context";

const Category = ({ title, image }) => {

 const {setCategory} = useProductContext()

  return (
    <Wrapper>
      <AnimationOnScroll
        animateIn="animate__flipInX"
        delay={500}
        animateOnce={true}
        className="cat-item"
      >
        <div className="image">
          <img src={image} alt={title} />
          <div className="overlay"></div>
        </div>
        <h3 className="title">
          <Link to="/products?category=true" onClick={() => setCategory(title) } >{title}</Link>
        </h3>
      </AnimationOnScroll>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  position: relative;

  .image {
    border-radius: 10px;
    overflow: hidden;
    border: 4px solid var(--light-green-clr);
    height: 100%;
    width: 100%;
    position: relative;
    height: 250px;

    .overlay {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      opacity: 0;
      transition: all 0.6s linear;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.6s linear;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    background-color: white;
    font-size: 1rem;
    z-index: 12;
    opacity: 0;
    transition: all 0.6s linear;
  }
  &:nth-child(1) {
    grid-column: span 3;
  }
  &:nth-child(2) {
    grid-column: span 3;
  }
  &:nth-child(3) {
    grid-column: span 2;
  }
  &:nth-child(4) {
    grid-column: span 2;
  }
  &:nth-child(5) {
    grid-column: span 2;
  }
  &:hover .overlay {
    opacity: 1;
  }
  &:hover .title {
    opacity: 1;
  }
  &:hover {
    img {
      transform: scale(1.15);
    }
  }
`;

export default Category;
