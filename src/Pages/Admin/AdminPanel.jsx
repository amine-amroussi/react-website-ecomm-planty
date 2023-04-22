import React from "react";
import styled from "styled-components";
import { useOrderContext } from "../../context/order_context";
import { useEffect } from "react";
import priceFormat from "../../util/priceFormat";
import { useProductContext } from "../../context/product_context";
import { Chart, Pie } from "../../components/Admin";

const AdminPanel = () => {
  const { revenue, calculateRevenue, allOrders, sales } = useOrderContext();
  const { products } = useProductContext();

  useEffect(() => {
    calculateRevenue();
  }, [revenue]);

  return (
    <Wrapper className="w-full m-auto p-5 ">
      <div className="bg-white w-full p-2 capitalize text-center rounded text-3xl m-auto">
        Dashboard & statics
      </div>
      <div className="boxes flex mt-3 justify-between">
        <div className="box w-[230px] p-5 bg-white flex flex-col border border-emerald-300 rounded drop-shadw-md">
          <h4 className="font-semibold text-center text-3xl   ">Sales</h4>
          <h4 className="font-semibold text-center text-xl   ">
            {priceFormat(sales)}
          </h4>
        </div>
        <div className="box w-[230px] p-5 bg-white flex flex-col border border-rose-600	 rounded drop-shadw-md">
          <h4 className="font-semibold text-center text-3xl   ">N Orders</h4>
          <h4 className="font-semibold text-center text-xl   ">
            {allOrders.length}
          </h4>
        </div>
        <div className="box w-[230px] p-5 bg-white flex flex-col border border-sky-400 rounded drop-shadw-md">
          <h4 className="font-semibold text-center text-3xl   ">N Products</h4>
          <h4 className="font-semibold text-center text-xl   ">
            {products.length}
          </h4>
        </div>
        <div className="box w-[230px] p-5 bg-white flex flex-col border border-blue-800 rounded drop-shadw-md">
          <h4 className="font-semibold text-center text-3xl   ">Revenue</h4>
          <h4 className="font-semibold text-center text-xl   ">
            {priceFormat(revenue)}
          </h4>
        </div>
      </div>
      <div className="statics flex mt-5">
        <Chart />
        {/* <Pie /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
`;

export default AdminPanel;
