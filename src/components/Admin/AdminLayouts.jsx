import React from "react";
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import Alert from "../Alert";

const AdminLayouts = () => {
  const { user } = useUserContext();

  if (user.role !== "admin") return <Navigate to="/not-founded" />;

  return (
    <Wrapper>
      <AdminHeader />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
      <Alert />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  .sidebar {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  .content {
    width: inherit;
  }
`;

export default AdminLayouts;
