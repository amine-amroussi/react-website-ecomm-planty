import React, { useState } from "react";
import styled from "styled-components";
import { FormRow } from "../components";
import { useUserContext } from "../context/user_context";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const UserInformationtion = () => {
  const { user, updateUser } = useUserContext();
  const [userInfo, setUserInfo] = useState({
    email: user.email || "",
    name: user.name || "",
    numberPhone: user.numberPhone || "",
    adress: user.adress || "",
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ user: userInfo });
  };

  return (
    <Wrapper className="user-information ">
      <h2>Basic informations</h2>
      <form onSubmit={handleSubmit}>
        <div className="rows ">
          <FormRow
            label="Full name *"
            type="text"
            name="name"
            placeholder="Enter your name "
            full={true}
            onChange={handleChange}
            value={userInfo?.name}
          />
          <FormRow
            label="E-mail *"
            type="email"
            name="email"
            placeholder="Edit your name"
            full={true}
            onChange={handleChange}
            value={userInfo?.email}
          />
          <FormRow
            label="Adress"
            type="text"
            name="adress"
            placeholder="Enter your adress"
            full={true}
            onChange={handleChange}
            value={userInfo?.adress}
          />
          <div className="form-row  full">
            <label>Phone Number</label>
            <PhoneInput
              inputClass="phone-input"
              onChange={(phone) =>
                setUserInfo((prev) => ({ ...prev, numberPhone: phone }))
              }
            />
          </div>
        </div>
        <button type="submit" className="btn btn-save">
          Save changes
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 8;
  transition: all 0.5s linear;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  h2 {
    font-size: 2rem;
    text-transform: capitalize;
  }
  .btn-save {
    margin-top: 15px;
    background-color: var(--green-clr);
    color: white;
    padding: 7px 14px;
    font-weight: 600;
    border-radius: 10px;
  }
`;

export default UserInformationtion;
