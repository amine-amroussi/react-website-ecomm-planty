import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const MobileMenu = () => {
  const { toggleMenuMobile, isMobileMenuActive, isAuth, logout, user } =
    useUserContext();

  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <Wrapper isOpened={isMobileMenuActive}>
      <button className="btn btn-close " onClick={toggleMenuMobile}>
        <GrClose className="text-white" style={{ color: "white" }} />
      </button>
      <ul className="list">
        {isAuth && (
          <>
            <li className="profile">
              {user?.name}
              <button
                className="btn "
                style={{ color: "white", fontSize: "1.2rem", marginTop: "5px" }}
                onClick={() => setOpenedMenu(!openedMenu)}
              >
                <IoIosArrowDown />
              </button>
            </li>
            <div  >
              <ul className={`toggle-menu ${openedMenu && "active"}`}>
                <li className="text-[10px]"><Link to='/Profile' onClick={toggleMenuMobile} >Profile</Link> </li>
                <li className="text-[10px]"><Link to='/orders' onClick={toggleMenuMobile} >Orders</Link></li>
              </ul>
            </div>
          </>
        )}

        <li>
          <Link to="/" onClick={toggleMenuMobile}>Home</Link>
        </li>
        <li>
          <Link onClick={toggleMenuMobile} to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/products" onClick={toggleMenuMobile}>Products</Link>
        </li>
        {isAuth ? (
          <li>
            <button
              className="logout bg-red-700 text-white px-5 rounded py-2"
              onClick={logout}
            >
              {" "}
              Logout{" "}
            </button>
          </li>
        ) : (
          <li>
            <Link
              className="bg-[#02c39a] text-white py-2 px-5 rounded"
              to={"/login"}
              onClick={toggleMenuMobile}
            >
              Rgister / Login
            </Link>
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.isOpened ? "translate(0)" : "translate(-100vw)"};
  transition: all 0.5s linear;
  .toggle-menu {
    background: var(--bg-clr);
    width: 80%;
    margin: auto;
    transition: height 0.5s linear;
    height: 0;
    overflow: hidden;
  }
  .toggle-menu.active {
    height: auto !important;
  }
  .toggle-menu li {
    font-size: 1rem !important;
  }
  .list {
    list-style: none;
    width: 100%;
    li {
      margin-bottom: 10px;
      padding: 15px;
      width: 80%;
      margin: auto;
      font-size: 1.3rem;
      text-align: center;
      border-radius: 5px;
    }
    .profile {
      background-color: var(--green-clr);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
  .btn-close {
    position: absolute;
    top: 50px;
    right: 50px;
    background-color: tomato;
    padding: 7px 10px;
    color: white !important;
    border-radius: 5px;
  }
`;

export default MobileMenu;
