import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useOrderContext } from "../context/order_context";
import { useUserContext } from "../context/user_context";

const Success = () => {
  const { createOrder } = useOrderContext();

  useEffect(() => {

    const cartProducts = window.localStorage.getItem("cart-products");
    const cart = JSON.parse(cartProducts);
    if (cartProducts) {
      createOrder(cart);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="h-screen flex justify-center items-center text-center">
      <div className="mb-[100px]">
        <h2 className="text-3xl mt-5mb-5">Your oder successfuly </h2>
        <div className="text-[8rem] flex items-center justify-center text-green-600 relative ">
          <MdVerified className="" />
          <div className="cyrcel w-[150px] h-[150px] bg-green-200 absolute "></div>
        </div>
        <p className="text-gray-600 text-xl mt-5 mb-2">
          Your order well shipped soon be tuned
        </p>
        <Link
          to="/products"
          className="bg-green-600 capitalize rounded-lg py-1 px-4 mt-5 text-white"
        >
          See other products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cyrcel {
    z-index: -10;
    border-radius: 50%;
  }
`;

export default Success;
