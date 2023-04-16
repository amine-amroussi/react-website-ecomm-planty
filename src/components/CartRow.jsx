import React from "react";
import styled from "styled-components";
import ProductAmount from "./ProductAmount";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import priceFormate from "../util/priceFormat";

const CartRow = ({ image, _id, title, price, amount, product, removeProductFromCart}) => {
  return (
    <Wrapper>
      <td className="tb-image">
        <Link to={`/products/${product}`}>
          <img src={process.env.REACT_APP_SERVER_URL + image} alt={title} />
        </Link>
      </td>
      <td className="tb-description">
        <h5>{title}</h5>
        <p>
          Product Code : <span>{product}</span>
        </p>
      </td>
      <td className="tb-quantity">
        <ProductAmount productAmount={amount} _id={product} />
      </td>
      <td className="tb-remove">
        <button className="btn btn-remove" onClick={() => removeProductFromCart({_id : product})}>{<GrClose />}</button>
      </td>
      <td className="tb-price">
        <h4>{priceFormate(price)}</h4>
      </td>
    </Wrapper>
  );
};

const Wrapper = styled.tr`
  td {
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
  }
  .tb-image {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 65px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .tb-description {
    h5 {
      font-size: 1.1rem;
    }
    p {
      font-weight: 600;
    }
  }
  .tb-remove {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    .btn {
      border: 1px solid gray;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      margin-top: 25px;
      height: 30px;
    }
  }
`;

export default CartRow;
