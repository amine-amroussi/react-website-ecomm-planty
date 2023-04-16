import React, { useState } from "react";
import styled from "styled-components";
import { ChangePassword, UserInformationtion } from "../components";
import { AiOutlineUser } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";

const UserProfile = () => {
  const [active, setActive] = useState("user");


  return (
    <Wrapper>
      <div className="user">
        {active === "user" ? <UserInformationtion /> : <ChangePassword />}
      </div>
      <div className="options">
        <button
          className={`btn ${active === "user" && "btn-active"}`}
          onClick={() => setActive("user")}
        >
          <AiOutlineUser className="icon" /> Profile
        </button>
        <button
          className={`btn ${active === "password" && "btn-active"}`}
          onClick={() => setActive("password")}
        >
          <CgPassword className="icon" /> Password
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: flex-start;
  padding: 25px;
  width: 70vw;
  margin: 0 auto;
  height: 100vh;
  .user {
    flex: 8;
  }

  .options {
    flex: 4;
    margin-left: 15px;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    .btn {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 1.3rem;
      width: 100%;
      padding: 7px 14px;
      border-radius: 5px;

      .icon {
        margin-right: 15px;
      }
    }

    .btn-active {
      background-color: var(--green-clr) !important;
      color: white;
    }
  }
  @media only screen and (max-width : 800px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    width: 90vw;
    .user {
      width: 100%;
      margin: auto;
      margin-top: 10px;
    }
    .options {
      width: 100%;
      margin: auto;
    }
  }
`;

export default UserProfile;
