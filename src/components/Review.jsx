import React from "react";
import styled from "styled-components";
import Rating from "./Rating";

const Review = ({user, title, comment, rating}) => {
  return (
    <Wrapper>
      <div className="review-header">
        <h5 className="review-client-name text-xl font-bold">{user?.name}</h5>
      </div>
      <div className="review-title">
        <h5 className="font-semibold text-sm">{title}</h5>
        <p className="text-sm text-gray-600">{comment}</p>
        <div className="stars">
         <Rating rating={rating} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  margin-bottom: 15px;
  .stars {
    display: flex;
    font-size: 1.2rem;
    color: gold;
  }
`;

export default Review;
