import styled from "styled-components";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import HeaderMenu from "./HeaderMenu";
import { useUserContext } from "../context/user_context";
import { useCartContext } from "../context/cart_context";

const Header = () => {
  const { isDropDownActive, toggleDropDown,isMobileMenuActive, isAuth, user, toggleMenuMobile  } =
    useUserContext();
    const {products} = useCartContext()
  
  return (
    <Wrapper>
      <MobileMenu className={`${isMobileMenuActive ? "menu active" : "menu"}`} />
      <div className="left">
        <div className="wrap">
          <Link to={`/`}>
            <AiFillHome />
          </Link>
          <div className="cart">
            <Link to={`/cart`}>
              <BsFillCartFill />
            </Link>
            <div className="baget">
              {products.length}
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <input type="search" className="search-input" placeholder="Search" />
      </div>
      <div className="right">
        <button className="btn btn-menu-icon" onClick={toggleMenuMobile}>
          <BiMenuAltRight />
        </button>
        <div className="wrap">
          {isAuth ? (
            <div className="user-info">
              <h2>Welcome, {user?.name}</h2>
              <IoIosArrowDown className="ico" onClick={toggleDropDown} />
            </div>
          ) : (
            <div>
              <Link to="login">Login | Register</Link>
            </div>
          )}
        </div>
      </div>
      <HeaderMenu className={`${isDropDownActive ? "menu active" : "menu"}`} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;
  position: fixed;
  top: -10px;
  left: 0;
  z-index: 200;
  background-color: var(--bg-clr);
  padding-top: 15px;

  .menu.active {
    visibility: visible;
  }

  .left {
    flex: 3;
  }
  .right {
    .btn-menu-icon {
      display: none;
    }
    flex: 3;
    a {
      font-size: 1rem;
    }
    .user-info {
      display: flex;
      align-items: center;
    }
  }
  .middle {
    flex: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .search-input {
      width: 80%;
      padding: 10px;
      border: none;
      outline: none;
      margin-bottom: 10px;
      border-radius: 5px;
      padding-left: 30px;
      font-size: 1rem;
      ::placeholder {
        color: var(--gray-clr);
      }
    }
  }
  span {
    position: absolute;
    left: 100px;
    bottom: 22px;
    color: var(--gray-clr);
  }

  .left,
  .right {
    h2 {
      font-size: 1rem;
      font-weight: 600;
      color: white;
    }
    .ico {
      color: white;
      margin-left: 15px;
      cursor: pointer;
    }
    .wrap {
      display: flex;
      align-items: center;
      background-color: var(--green-clr);
      width: 80%;
      height: 50px;
      border-top-right-radius: 300px;
      border-bottom-left-radius: 300px;
      justify-content: center;
      font-size: 1.2rem;
      /* padding: 10px 0; */
      a {
        color: white;
        margin: 0 10px;
      }
    }
    .cart {
      position: relative;
      .baget {
        position: absolute;
        top: 15px;
        background-color: tomato;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: .9rem !important;
        right: -10px;
        color: white;
        border: 1px solid white;
      }

    }
  }

  @media only screen and (max-width: 540px) {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media only screen and (max-width: 768px) {
    .left {
      flex: 4;
      display: none;
    }
    .right {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      button {
        background-color: var(--green-clr) !important;
        color: white;
        font-size: 1.2rem;
        padding: 4px 10px;
        margin: 0 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        display: block !important;
      }
    }
    .middle {
      flex: 10;
      .search-input {
        width: 100%;
      }
    }
    .wrap {
      visibility: hidden;
    }
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1280px) {
  }
`;

export default Header;
