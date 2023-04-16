import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";

const ProductAmount = ({ productAmount, _id, setProductAmount, isProductAmount }) => {
  const [amount, setAmount] = useState(productAmount || 1);

  const { addToCart, removeFromCart } = useCartContext();

  const handleIncrease = () => {
    setAmount((prev) => prev + 1);
    if(isProductAmount) {
      setProductAmount(amount + 1)
      return;
    }
    const cart = {amount : 1, productId : _id, shippingFee: 455 }
    addToCart({cart});
  };

  const handleDecrease = () => {
    setAmount((prev) => prev - 1);
    if(isProductAmount) {
      if(amount === 1) setAmount(1)
      setProductAmount(amount)
      return;
      
    }
    removeFromCart({ _id });
  };

  return (
    <Wrapper>
      <button
        className="btn flex justify-center items-center btn-decr "
        onClick={handleDecrease}
      >
        <AiOutlineMinus />
      </button>
      <h3 className="amount">{amount}</h3>
      <button
        className="btn btn-incr flex justify-center items-center"
        onClick={handleIncrease}
      >
        <AiOutlinePlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    margin: 0 20px;
    background-color: white;
    color: var(--gray-clr);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 2;
  }
`;

export default ProductAmount;
