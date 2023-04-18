import React, { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { Product, FilterProducts } from "../components";
import { useProductContext } from "../context/product_context";
import { LoadingPage } from "../Pages";
import { AiFillFilter } from "react-icons/ai";
import { useUserContext } from "../context/user_context";

const Products = () => {
  const { filtredProducts, loading, sortProducts, clearFilterProducts } =
    useProductContext();
  const { isFilterBarOpen, toggleFilterBar } = useUserContext();
  // Get params
  const params = new URL(document.location).searchParams;
  const isCategory = params.get("category");

  useEffect(() => {
    !isCategory && clearFilterProducts();
    // eslint-disable-next-line
  }, [isCategory]);

  if (loading) return <LoadingPage />;

  return (
    <Wrapper className="relative">
      <div
        className={`overlay fixed h-screen w-full bg-black hidden  ${
          isFilterBarOpen && "block"
        } `}
        onClick={toggleFilterBar}
      ></div>
      <div
        className={`filter-products-wrap fixed left-[-15px] p-2 ${
          isFilterBarOpen && "active"
        }`}
      >
        <button
          className="absolute right-[-45px] top-0 bg-blue-400 text-white px-3 py-2"
          onClick={toggleFilterBar}
        >
          <AiFillFilter />
        </button>
        <FilterProducts />
      </div>
      <div className="product-view p-5">
        <div className="mb-3 bg-white p-3 w-[80%] m-auto hover:drop-shadow rounded flex justify-between items-center ">
          <h3 className="font-semibold text-[20px]">Sort </h3>
          <div className="sort border py-2 px-3">
            <select
              name="sort"
              id="sort"
              onChange={(e) => sortProducts(e.target.value)}
            >
              <option value="none">None</option>
              <option value="price-asc">Price (Asc)</option>
              <option value="price-desc">Price (Desc)</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
            </select>
          </div>
        </div>
        <div className="products screen ">
          {filtredProducts?.length === 0 ? (
            <h2>There is no products ...</h2>
          ) : (
            filtredProducts?.map((product) => (
              <Product key={product._id} {...product} />
            ))
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  .overlay {
    z-index: 10;
    opacity: 0.4;
  }
  .filter-products-wrap.active {
    width: 350px;
    z-index: 10;
    background-color: white;
    left: 0;
  }
  .filter-products-wrap {
    width: 0px;
    border-right: 4px solid var(--green-clr);
  }
  .product-view {
    flex: 5 !important;
  }
  .products {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    padding: 20px;
    width: 95%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 650px) {
    .prod-item {
      width: 100%;
    }
    margin-top: 65px;
    .filter-products-wrap.active {
      width: 85%;
    }
  }
`;

export default Products;
