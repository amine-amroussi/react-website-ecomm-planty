import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { categories } from "../mockData";

const Categories = () => {
 
  return (
    <Wrapper className="section">
      <div className="title">
        <h1>Relax and choose your category</h1>
        <div className="underline"></div>
      </div>
      <div className="categories">
        {categories.map((cat, idx) => (
          <Category title={cat.title} image={cat.image} key={idx}  />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  .categories {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 15px;
  }
`;

export default Categories;
