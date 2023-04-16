import React from "react";
import { SlCalender } from "react-icons/sl";
import { WiHumidity } from "react-icons/wi";
import { CiRuler } from "react-icons/ci";
import { BsArrowsAngleContract } from "react-icons/bs";
import styled from "styled-components";

const ProductDetails = ({productDetails}) => {

  return (
    <Wrapper>
      <div className="detail-item">
        <span className="icon">
          <SlCalender />
        </span>
        <h4 className="detail-content">{productDetails?.lifetime}</h4>
      </div>
      <div className="detail-item">
        <span className="icon">
          <WiHumidity />
        </span>
        <h4 className="detail-content">{productDetails?.humidity} Humidity</h4>
      </div>
      <div className="detail-item">
        <span className="icon">
          <BsArrowsAngleContract />
        </span>
        <h4 className="detail-content">{productDetails?.diameter}" Diameter</h4>
      </div>
      <div className="detail-item">
        <span className="icon">
          <CiRuler />
        </span>
        <h4 className="detail-content">{productDetails?.height}" Heights</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  .detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .icon {
      margin-right: 15px;
      background-color: var(--ligt-pink-clr);
      color: var(--green-clr);
      width: 25px;
      height: 25px;
      padding: 7px;
      border-radius: 50%;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .detail-content {
        font-weight: 600;
    }
  }
`;

export default ProductDetails;
