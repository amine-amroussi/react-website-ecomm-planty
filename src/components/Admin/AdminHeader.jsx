import React from "react";
import styled from "styled-components";
import {IoIosArrowDown} from "react-icons/io"

const AdminHeader = () => {
  return (
    <Wrapper className="flex items-center justify-between px-4 py-4 mx-auto bg-white">
      {/* <div className="left flex-4">
        <h1 className="text-3xl font-bold">Pantify</h1>
      </div>
      
      <div className="right flex justify-end flex-4 w-full align-center text-right">
        <h4 className="font-medium text-2xl">Amine Amroussi</h4>
        <button className="bg-gray-200 color-white ml-3 rounded-md p-2" ><IoIosArrowDown /> </button>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.header``;

export default AdminHeader;
