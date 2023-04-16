import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import priceFormate from "../util/priceFormat";

const CartInformations = () => {
  const {shippingFee, total, subtotal} = useCartContext()
  return (
    <Wrapper>
      <article className="discount-box box">
        Discount <span>0 %</span>
      </article>
      <article className="discount-box box text-[12px] ">
        Shipping Fee <span>{priceFormate(shippingFee)}</span>
      </article>
      <article className="discount-box box text-[12px]">
        Subtotal <span>{priceFormate(subtotal)}</span>
      </article>
      <article className="discount-box box text-[12px]">
        Total <span>{priceFormate(total)}</span>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 15px;
  flex-wrap: wrap;
  .box {
    border: 1px solid gray;
    padding: 20px;
    font-size: 1rem;
    width: 200px;
    margin : 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        font-weight: 600;
    }
  }
  @media only screen and (max-width: 800) {

  }
`;

export default CartInformations;
