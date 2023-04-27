import React from "react";
import styled, { keyframes } from "styled-components";
import { bounceIn, fadeIn, bounceInLeft, slideInUp } from "react-animations";
import priceFormate from "../util/priceFormat";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import Rating from "./Rating";

const animationObj = {
  bounce: keyframes`${bounceIn}`,
  fade: keyframes`${fadeIn}`,
  bounceLeft: keyframes`${bounceInLeft}`,
  slideIn: keyframes`${slideInUp}`,
};

const Product = ({ image, title, price, _id, shippingCost, averageRating, isStyled }) => {
  const { addToCart } = useCartContext();
  const { isAuth } = useUserContext();
  let navigate = useNavigate();

  const handleClick = () => {
    if (!isAuth) {
      return navigate("/login");
    }

    const cart = {
      productId: _id,
      amount: 1,
      shippingFee: shippingCost,
    };
    addToCart({ cart });
  };

  return (
    <Wrapper isStyled={isStyled}>
      <Link to={`/products/${_id}`}>
        <div className="image">
          <img src={process.env.REACT_APP_SERVER_URL + image} alt={title} />
        </div>
      </Link>
      <div className="content">
        <Rating rating={averageRating} inCenter={true} />
        <h4>{title}</h4>
        <h4>{priceFormate(price)}</h4>
      </div>
      <div className="add-to-cart">
        <button className="add-to-cart-btn btn" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: ${(props) => (prosp.isStyled ? '300px' : '280px')};
  height: 335px;
  border-radius: 5px;
  overflow: hidden;
  /* background-color: white; */
  margin-bottom: 15px;
  position: relative;
  transition: 0.5s ease;
  animation: 1.2s ${animationObj.slideIn};
  .image {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    .stars {
      font-size: 1.2rem;
      color: gold;
      display: flex;
      justify-content: center;
    }
    padding: 10px;
    text-align: center;
  }

  .add-to-cart {
    position: absolute;
    bottom: 0;
    visibility: hidden;
    width: 100%;
    height: 50px;
    background-color: #ffffff88;
    display: flex;
    align-items: center;
    justify-content: center;
    .add-to-cart-btn {
      width: 90%;
      height: 80%;
      border-radius: 10px;
      background-color: white;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 2px;
    }
  }
  :hover .add-to-cart {
    bottom: 70px;
    visibility: visible;
    animation: 0.8s ${animationObj.slideIn};
  }
  :hover {
    box-shadow: 2px -8px 75px -68px rgba(0, 0, 0, 0.87);
    -webkit-box-shadow: 2px -8px 75px -68px rgba(0, 0, 0, 0.87);
    -moz-box-shadow: 2px -8px 75px -68px rgba(0, 0, 0, 0.87);
  }
`;

export default Product;
