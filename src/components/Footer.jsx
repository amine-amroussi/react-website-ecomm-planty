import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import cards from "../assets/cards.png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo planty" className="w-[75px]" />
        </Link>
      </div>
      <div className="caption text-white font-semibold capitalize text text-center">
        <h2 cla>All rights was reserved at PLANTY {new Date().getFullYear()} &copy;</h2>
      </div>
      <div className="cards">
        <img src={cards} alt="payments card" className="w-[270px]" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #333533;
  border-top: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo,
  .caption,
  .cards {
    flex :1;
  }

  .cards {
    img {
      float: right;
    }
  }
`;

export default Footer;
