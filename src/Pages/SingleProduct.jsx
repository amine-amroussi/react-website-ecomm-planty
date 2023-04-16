import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ProductImage,
  ProductContent,
  ProductReviews,
  ReviewModal,
} from "../components";
import { useProductContext } from "../context/product_context";
import { useParams } from "react-router-dom";
import { LoadingPage } from "../Pages";

const SingleProduct = () => {
  const [amount, setAmount] = useState(1)
  const setProductAmount = (amount) => {
    setAmount(amount)
  }
  const {
    fetchSingleProduct,
    singleProduct = {image : ""},
    loading,
    isReviewModalOpened,
    fetchProductReviews,
    singleProductReview,
  } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct({ productId: id });
    fetchProductReviews({ productId: id });
    //eslint-disable-next-line
  }, [id]);

  const {
    image,
    title,
    description,
    price,
    productDetails,
    shippingCost,
    averageRating,
    numOfReviews,
  } = singleProduct;

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Wrapper className=""  >
      <ProductImage image={image || ""} title={title} setProductAmount={setProductAmount} />
      <ProductContent
        title={title}
        _id={id}
        price={price}
        description={description}
        productDetails={productDetails}
        shippingCost={shippingCost}
        averageRating={averageRating}
        numOfReviews={numOfReviews}
        amount={amount}
      />
      <ProductReviews
        className="product-reviews"
        reviews={singleProductReview}
      />

      {isReviewModalOpened && <ReviewModal productId={id} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    gap: 15px;
    align-items: center !important;
    .product-image {
      width: 100% !important;
    }
    .product-review {
      width: 100%;
    }
  }
`;

export default SingleProduct;
