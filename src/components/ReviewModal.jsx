import React, { useState } from "react";
import styled from "styled-components";
import FormRow from "./FormRow";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import FormArea from "./FormArea";
import { useProductContext } from "../context/product_context";

const ReviewModal = ({ productId }) => {
  const { toggleReviewModal, addReview, singleUserReview, } =
    useProductContext();
  const [selectedReviews, setSelectedReviews] = useState(0);
  const [review, setReview] = useState({
    title: "",
    comment: "",
  });

  const handleRating = (e) => {
    setSelectedReviews(e.target.dataset.rating);
  };

  const handleChange = (e) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    review.rating = 3;
    review.productId = productId;

    addReview({ review });
  };

  return (
    <Wrapper className="w-full h-screen bg-[#22222295] fixed left-0 top-0 z-40">
      <div className="content bg-white h-96 rounded z-50  p-5">
        <h2 className="text-2xl text-center uppercase mt-3 font-semibold">
          What do you think about this product ?
        </h2>
        <div className="rating flex justify-center text-2xl mt-3">
          <button className="btn-rev" data-rating="1" onClick={handleRating}>
            {selectedReviews < 1 ? (
              <AiOutlineStar className="ico" />
            ) : (
              <AiFillStar className="ico" />
            )}
          </button>
          <button className="btn-rev" data-rating="2" onClick={handleRating}>
            {selectedReviews < 2 ? <AiOutlineStar /> : <AiFillStar />}
          </button>
          <button className="btn-rev" data-rating="3" onClick={handleRating}>
            {selectedReviews < 3 ? <AiOutlineStar /> : <AiFillStar />}
          </button>
          <button className="btn-rev" data-rating="4" onClick={handleRating}>
            {selectedReviews < 4 ? <AiOutlineStar /> : <AiFillStar />}
          </button>
          <button className="btn-rev" data-rating="5" onClick={handleRating}>
            {selectedReviews < 5 ? <AiOutlineStar /> : <AiFillStar />}
          </button>
        </div>
        <form className="mt-5" onSubmit={handleSubmite}>
          <FormRow
            name="title"
            type="text"
            full={true}
            label="Review title"
            onChange={handleChange}
            value={review?.title}
          />
          <FormArea
            name="comment"
            full={true}
            label="Review content"
            onChange={handleChange}
            value={review?.comment}
          />
          <div className="button">
            {!singleUserReview ? (
              <button className="bg-blue-400 py-2 mr-3  rounded text-white px-4">
                Add Review
              </button>
            ) : (
              <button className="bg-blue-400 py-2 mr-3  rounded text-white px-4">
                Edit Review
              </button>
            )}

            <button
              className="bg-gray-300 py-2 rounded px-4"
              onClick={toggleReviewModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 600px;
    height: 480px;
    .btn-rev {
      color: gold;
      z-index: 10 !important;
      svg {
        z-index: -1 !important;
        position: relative;
      }
    }
  }
`;

export default ReviewModal;
