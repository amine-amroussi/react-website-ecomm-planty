import React from "react";
import styled from "styled-components";

const AdminPanel = () => {
  return (
    <Wrapper className="w-full m-auto p-5">
      <div className="bg-white w-full p-2 capitalize text-center rounded text-3xl m-auto">
        Dashboard & statics  
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
`;

export default AdminPanel;
