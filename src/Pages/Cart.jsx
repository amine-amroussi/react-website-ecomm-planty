import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartInformations, CartRow, TableHeader } from "../components";
import CartDiscountAndCheckout from "../components/CartDiscountAndCheckout";
import { useCartContext } from "../context/cart_context";

const Cart = () => {
  const { products, removeProductFromCart, calculateTotal } = useCartContext();

  useEffect(() => {
    calculateTotal()
    // eslint-disable-next-line
  }, [products])
  

  return (
    <Wrapper>
      {products?.length === 0 ? (
        <div className="text-center h-screen flex items-center justify-center flex-col">
          <h2 className="text-3xl font-semibold">Your cart is empty !</h2>
          <Link
            to={"/products"}
            className="bg-[#02c39a] text-white mt-3 uppercase py-2 px-3 rounded"
          >
            fill it ...
          </Link>
        </div>
      ) : (
        <div>
          <div className="title">
            <h1>Cart Items</h1>
            <div className="underline"></div>
          </div>
          <section className="cart-items">
            <table className="table border-spacing-5">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                {products.map((product) => (
                  <CartRow key={product._id} {...product} removeProductFromCart={removeProductFromCart} />
                ))}
              </tbody>
            </table>
          </section>
          <CartInformations />
          <CartDiscountAndCheckout />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  .table {
    width: 100%;
    padding: 15px;
  }

  .cart-items {
    border-radius: 10px;
    margin: 15px auto;
    background-color: white;
    height: 70vh;
    overflow-y: scroll;
    width: 95%;
    margin: 0 auto;
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background-color: gray;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--green-clr);
    }
  }
`;

export default Cart;
