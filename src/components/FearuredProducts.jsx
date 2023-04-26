import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useProductContext } from "../context/product_context";

const FearuredProducts = () => {
  const { featuredProducts } = useProductContext();
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>trending now</h2>
        <div className="underline"></div>
      </div>

      <div className="products">
       
        {featuredProducts.map((product) => {
          return (
            <AnimationOnScroll
              animateIn="animate__jackInTheBox"
              delay={500}
              animateOnce={true}
              className="prod-item"
              key={product._id}
            >
              <Product {...product} />
            </AnimationOnScroll>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;

  .products {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media only screen and (max-width: 550px) {
  }

  @media only screen and (max-width: 768px) {
    .prod-item {
      width: 380px !important;
    }
    .products {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 992px) {
    .prod-item {
      width: 47%;
    }
  }

  @media only screen and (min-width: 1280px) {
  }
`;

export default FearuredProducts;
