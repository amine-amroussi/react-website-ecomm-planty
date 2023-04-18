import React, { useState } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/product_context";
import { categories } from "../mockData";
import priceFormate from "../util/priceFormat"

const FilterProducts = () => {
  const [active, setActive] = useState(-1);
  const { filterProducts, filtredBy, minPrice, maxPrice } = useProductContext();
  const [isCheked, setIsChecked] = useState(false)

  const handleChange = (e) => {
    filterProducts(e);
    setIsChecked(e.target.checked)
  };

  const handleClick = (e, idx) => {
    filterProducts(e)
    setActive(idx)
  }

  return (
    <Wrapper className="relative xs:border-r" >

      <button className="tg-btn absolute right-[-35px] top-0 md:hidden sm:block">
        Open 
      </button>

      <div className="text-2xl text-center border-b ">
        <h3 className="">Filter Products</h3>
        <div className="underline"></div>
      </div>

      <div className="filter-item">
        <h4>title</h4>
        <input
          type="search"
          name="title"
          onChange={handleChange}
          id="name"
          placeholder="search your product"
          className="search-input"
        />
      </div>

      <div className="filter-item">
        <h4>Category</h4>
        <ul className="">
          <li>
            <button
              className={`btn btn-filter ${active === -1 && 'active'}`}
              name="category"
              value=""
              onClick={(e) => handleClick(e, -1)}
            >
              All
            </button>
          </li>

          {categories.map((cat, idx) => (
            <li key={idx} >
              <button
              className={`btn btn-filter ${active === idx && 'active'}`}
              name="category"
                value={cat.title}
                onClick={(e) => handleClick(e, idx)}
              >
                {cat.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-item">
        <h4>price</h4>
        <div className="price-screen">{priceFormate(filtredBy?.price)} $</div>
        <input type="range" name="price" id="price" value={filtredBy?.price} min={minPrice} max={maxPrice} onChange={handleChange} />
      </div>
      <div className="filter-item">
        <h4>free shipping</h4>
        <label
          htmlFor="shipping"
          className={`toggle-radio ${isCheked && "active"} `}
        >
        <div className="ball active"></div>
        </label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="shipping"
          id="shipping"
          className="shipping-input"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  margin-top: 20px;
  .title {
    margin-bottom: 35px;
  }
  .filter-item {
    h4 {
      text-transform: capitalize;
      margin-bottom: 5px;
      letter-spacing: 2px;
      font-size: 1.2rem;
    }
    .search-input {
      padding: 7px 10px;
      width: 100%;
      border: none;
      outline: none;
      border: 1px solid transparent;
      :focus {
        border-bottom: 1px solid var(--green-clr);
      }
    }
    ul {
      list-style: none;
      .btn-filter {
        font-size: 1rem !important;
        margin-bottom: 5px;
        text-transform: capitalize;
      }
      .btn-filter.active {
        position: relative;
        ::after {
          content: "";
          display: block;
          width: 100%;
          height: 3px;
          background-color: var(--green-clr);
        }
      }
    }
    .toggle-radio {
      width: 50px;
      height: 20px;
      border-radius: 30px;
      background-color: white;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: flex-start;
      cursor: pointer;
      padding: 2px;
      border: 1px solid #f2f2f2;
      transition: all .6s linear;
      .ball {
        width: 18px;
        height: 18px;
        background-color: var(--gray-clr);
        border-radius: 50%;
      transition: all .6s linear;

      }

      
    }
    .toggle-radio.active {
      justify-content: flex-end !important;
      border-color: var(--green-clr);
      .ball {
        background-color: var(--green-clr);
      }
    }

    .shipping-input {
      visibility: hidden;
    }
  }
  
`;

export default FilterProducts;
