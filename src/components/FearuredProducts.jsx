import React from "react";
import styled from "styled-components";
import Product from "./Product";
import LoadingSnipper from "./LoadingSnipper";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useProductContext } from "../context/product_context";
import { Link } from "react-router-dom";

const FearuredProducts = () => {
  const { featuredProducts, loading } = useProductContext();
  return (
    <Wrapper className="section">
      <div className="title mb-5">
        <h2>trending now</h2>
        <div className="underline"></div>
      </div>
      {loading ? (
        <div className="h-[40vh] flex items-center justify-center w-[100%]"  >
          <LoadingSnipper className='m-auto' />
        </div>
      ) : (
        <>
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
                  <Product {...product} isStyled={true} />
                </AnimationOnScroll>
              );
            })}
          </div>
          <div className="mb-3 block  text-center">
            <Link to="/products">
              <button className="bg-[#02c39a] rounded py-1 px-4 text-white m-3">
                See more
              </button>
            </Link>
          </div>
        </>
      )}
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
