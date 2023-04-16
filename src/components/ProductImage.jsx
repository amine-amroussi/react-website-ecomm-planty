import React from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import ProductAmount from "./ProductAmount";

const ProductImage = ({image, title, setProductAmount }) => {

 const {isAuth} = useUserContext()

  return (
    <Wrapper>
      <img src={`${process.env.REACT_APP_SERVER_URL}${image || ""}`} alt={title} />
      <div className="product-amount">
      {isAuth && <ProductAmount setProductAmount={setProductAmount} isProductAmount={true} />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 100%;
  flex: 4;
  img {
    width: 100%;
    height: 450px;
    border-radius: 10px;
    object-fit: cover;
  }
  .product-amount {
    margin-top: 15px;
  }
`;

export default ProductImage;
