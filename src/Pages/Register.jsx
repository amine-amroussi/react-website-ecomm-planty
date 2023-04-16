import React, { useState } from "react";
import styled from "styled-components";
import { Alert, FormRow } from "../components";
import { Link, Navigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import formBg from "../assets/form-bg.jpg";
import { useUserContext } from "../context/user_context";

const Register = () => {
  const { register, isAuth } = useUserContext();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    numberPhone: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ user });
  };

  if(isAuth) return <Navigate to={"/"} />;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Pnatify</h2>
          <Link to={"/login"}>Already have an account.</Link>
        </div>

        <div className="form-content">
          <div className="form-title">
            <p className="subtitle">Join the plants lovers</p>
            <h3>ِCreate new account</h3>
          </div>

          <FormRow
            name={"name"}
            label={"Full name"}
            type={"text"}
            placeholder={"Enter your full name"}
            onChange={handleChange}
          />
          <FormRow
            name={"email"}
            label={"E-mail"}
            type={"email"}
            placeholder={"Enter you email"}
            onChange={handleChange}
          />
          <div className="form-row">
            <label>Phone Number (Optional)</label>
            <PhoneInput
              inputClass="phone-input"
              value={user.numberPhone}
              onChange={(phone) =>
                setUser((prev) => ({ ...prev, numberPhone: phone }))
              }
            />
          </div>
          <FormRow
            name={"password"}
            label={"Password"}
            type={"password"}
            placeholder={"Enter you password"}
            onChange={handleChange}
          />

          <button className="btn btn-login btn-form">Craete account</button>
        </div>
      </form>
      <div className="image-background"></div>
      <Alert />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form,
  .image-background {
    width: 100%;
    height: 100%;
  }
  .image-background {
    background-image: url(${formBg});
    background-position: center;
    background-size: cover;
  }
  form {
    background-color: white;
    border-right: 3px solid var(--green-clr);
    padding: 20px;
    width: 100%;
    .form-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 15px;
      margin-bottom: 25px;
    }
    .form-content {
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      .form-title {
        text-align: center;
        margin-bottom: 15px;
        p {
          font-size: 1.4rem;
          color: var(--gray-clr);
        }
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default Register;
