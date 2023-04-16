import React, { useState } from "react";
import styled from "styled-components";
import { FormRow } from "../components";
import { useUserContext } from "../context/user_context";

const ChangePassword = () => {
  const { changePassword } = useUserContext();

  const [userPasswords, setUserPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordRepeat: "",
  });

  const handleChange = async (e) => {
    setUserPasswords((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPasswords.newPassword === userPasswords.oldPassword) return;

    changePassword({ userPasswords });
  };

  return (
    <Wrapper>
      <h2>Cahange your password</h2>
      <form onSubmit={handleSubmit}>
        <div className="change-password">
          <FormRow
            label="Old Password"
            type="password"
            name="oldPassword"
            placeholder="Enter your old secret"
            full={true}
            onChange={handleChange}
          />
          <FormRow
            label="New Password"
            type="password"
            name="newPassword"
            placeholder="Enter the new secret"
            full={true}
            onChange={handleChange}
          />
          <FormRow
            label="New Password Repeat"
            type="password"
            name="newPasswordRepeat"
            placeholder="Repeat new secret"
            full={true}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-save">
          Save Changes
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  h2 {
    margin-bottom: 15px;
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  .btn-save {
    background-color: var(--green-clr);
    color: white;
    font-weight: 600;
    padding: 7px 14px;
    border-radius: 10px;
  }
`;

export default ChangePassword;
