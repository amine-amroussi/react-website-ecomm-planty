import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormRow from "./FormRow";

const CartDiscountAndCheckout = () => {

  return (
    <Wrapper>
      <p className="caption">
        If you have a discount or promotion code enter it here!
      </p>
      <div className="discount-checkout">
        <div className="discount">
          <FormRow
            name="discount"
            type="text"
            onChange={() => {}}
            placeholder="Enter your coupon code here !"
          />
          <button className="btn btn-discount">Apply Discount</button>
        </div>
        <div className="checkout">
          <Link to="/checkout" className="btn btn-checkout"  >Check out your order !</Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 95%;
  margin: 15px auto;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  .caption {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  .discount-checkout {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    .discount {
      flex: 8;
      align-items: center;
      display: flex;
      .btn {
        background-color: var(--green-clr);
        padding: 11px;
        margin-bottom: 10px;
        /* margin-top: 5px; */
        color: white;
      }
    }
    .btn-checkout {
      background-color: #252525;
      padding: 10px;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 5px;
      
    }
  }
  box-shadow: 2px -8px 75px -68px rgba(0, 0, 0, 0.87);
  -webkit-box-shadow: 2px -8px 75px -68px rgba(0, 0, 0, 0.87);
  -moz-box-shadow: 2px -8px 75px -68px rgba(0, 0, 0, 0.87);
`;

export default CartDiscountAndCheckout;
 