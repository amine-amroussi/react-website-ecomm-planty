import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const Rating = ({rating, inCenter }) => {
  return (
    <Wrapper className={`rating flex ${inCenter && "justify-center"}  text-xl mt-1`} >
      <div>
        {rating < 1 ? (
          <AiOutlineStar className="ico" />
        ) : (
          <AiFillStar className="ico" />
        )}
      </div>
      <div>{rating < 2 ? <AiOutlineStar /> : <AiFillStar />}</div>
      <div>{rating < 3 ? <AiOutlineStar /> : <AiFillStar />}</div>
      <div>{rating < 4 ? <AiOutlineStar /> : <AiFillStar />}</div>
      <div>{rating < 5 ? <AiOutlineStar /> : <AiFillStar />}</div>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  color: gold;
  justify-content: ${(prop) => prop.inCenter === false && "flex-start"} !important;
`

export default Rating;
