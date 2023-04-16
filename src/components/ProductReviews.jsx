import React, { useEffect } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/product_context";
import { useUserContext } from "../context/user_context";
import Review from "./Review";

const ProductReviews = ({ reviews = [] }) => {
  const { toggleReviewModal, findUserReview, singleUserReview } =
    useProductContext();

  const { isAuth } = useUserContext();

  useEffect(() => {
    findUserReview();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {isAuth && (
        <div>
          {!singleUserReview ? (
            <button
              className="btn btn-create-review"
              onClick={toggleReviewModal}
            >
              Write your review
            </button>
          ) : (
            <button
              className="btn btn-create-review"
              onClick={toggleReviewModal}
            >
              Edit your review
            </button>
          )}
        </div>
      )}

      <h2>Reviews : </h2>
      {reviews.length === 0 && (
        <div className="">
          <h3 className="text-sm font-bold">
            There is no reviews for this product .
          </h3>
        </div>
      )}
      {reviews.map((review) => (
        <Review key={review._id} {...review} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex: 3;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
  .btn {
    margin-bottom: 20px;
    padding: 15px;
    background-color: var(--green-clr);
    border-radius: 15px;
    color: white;
  }
`;

export default ProductReviews;
