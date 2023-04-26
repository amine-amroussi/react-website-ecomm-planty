import React, { useState } from "react";
import styled from "styled-components";
import { FormRow, Alert } from "../components";
import { Link, Navigate } from "react-router-dom";
import formBg from "../assets/form-bg.jpg";
import logo from "../assets/logo.png";
import { useUserContext } from "../context/user_context";
import LoadingPage from "./LoadingPage";

const Login = () => {
  const { login, isAuth, loading } = useUserContext();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ user });
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <Link to="/">
            <img src={logo} alt="logo planty" className="w-[75px]" />
          </Link>
          <Link to={"/register"}>Create new account.</Link>
        </div>

        <div className="form-content">
          <div className="form-title">
            <p className="subtitle">Welcome back!</p>
            <h3>Login in your account.</h3>
          </div>

          <FormRow
            name={"email"}
            label={"E-mail"}
            type={"email"}
            placeholder={"Enter you email"}
            onChange={handleChange}
            full={true}
          />
          <FormRow
            name={"password"}
            label={"Password"}
            type={"password"}
            placeholder={"Enter you secret word"}
            onChange={handleChange}
            full={true}
          />
          <button className="btn btn-login btn-form">login</button>
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

  @media only screen and (max-width: 800px) {
    .image-background {
      display: none;
    }
  }
`;

export default Login;
