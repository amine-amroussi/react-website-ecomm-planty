import React from "react";
import styled from "styled-components";
import AddToCardButton from "./AddToCardButton";
import ProductDetails from "./ProductDetails";
import priceFormate from "../util/priceFormat";
import Rating from "./Rating";

const ProductContent = ({
  title,
  description,
  productDetails,
  price,
  shippingCost,
  averageRating,
  numOfReviews,
  _id,
  amount
}) => {
  return (
    <Wrapper>
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <h3 className="text-[18px] font-semibold underline">Overview</h3>
      <ProductDetails productDetails={productDetails} />
      <h3 className="text-[18px] font-semibold underline">Reviews : </h3>
      <div className="flex items-center">
        <Rating rating={averageRating} className="starts" />
        <div className="ml-2 mt-1 font-semibold" >({numOfReviews})</div>
      </div>
      <h3 className="font-semibold">
        {shippingCost === 0
          ? "Free Shipping !"
          : "Shipping Fee : " + priceFormate(shippingCost)}
      </h3>
      <div className="product-footer">
        <AddToCardButton price={price} _id={_id} shippingCost={shippingCost} amount={amount} />
        <h3 className="price font-bold text-2xl">{priceFormate(price || 0)}</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 25px;
  flex: 5;
  background-color: white;
  margin: 0 15px;
  border-radius: 10px;
  width: 100%;
  .product-title {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  h3 {
    margin-top: 15px;
  }
  .product-footer {
    display: flex;
    align-items: center;
    h3 {
      margin-bottom: 15px;
      margin-left: 25px;
    }
  }
  .starts {
    color: gold;
  }
`;

export default ProductContent;
