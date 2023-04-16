import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { useCartContext } from "../context/cart_context";

const HeaderMenu = () => {
  let navigate = useNavigate();
  const { user, isDropDownActive, logout, toggleDropDown } = useUserContext();
  const { clearCart } = useCartContext();

  const handleClick = () => {
    logout();
    clearCart();
    navigate("/login");
    toggleDropDown();
  };

  return (
    <Wrapper className={`${isDropDownActive ? "menu active" : "menu"}`}>
      <ul>
        <li>
          <Link to={"/profile"} onClick={toggleDropDown} >Profile</Link>
        </li>
        <li>
          <Link to={"/orders"} onClick={toggleDropDown} >Your Orders</Link>
        </li>
        {user.role === "admin" && (
          <li>
            <Link to={"/admin-panel"} onClick={toggleDropDown} >Admin Panel</Link>
          </li>
        )}
        <li>
          <button className="btn btn-logout" onClick={handleClick}>
            Logout
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 200px;
  padding: 15px;
  position: absolute;
  top: 50px;
  background-color: white;
  right: 75px;
  border-radius: 15px;
  z-index: 1000;
  transition: all 0.5s linear;
  visibility: hidden;
  ul {
    list-style: none;
    li {
      margin-bottom: 10px;
    }
    li a {
      color: black;
      cursor: pointer;
      margin-bottom: 10px;
    }
    li .btn {
      background-color: tomato;
      margin-top: 10px;
      padding: 4px 10px;
      color: white;
      font-weight: 600;
      width: 100%;
      border-radius: 10px;
    }
  }
`;

export default HeaderMenu;
