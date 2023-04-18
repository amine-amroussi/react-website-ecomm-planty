import React from "react";
import { useOrderContext } from "../context/order_context";
import moment from "moment";
import priceFormate from "../util/priceFormat";

const Orders = () => {
  const { orders } = useOrderContext();

  return (
    <div className="screen p-5">
      <h2 className="text-2xl">Your orders</h2>
      <div className="">
        {orders.map((order) => (
          <article className="bg-white py-2 px-5 mb-3 w-[320px] drop-shadow hover:drop-shadow-md ease-linear delay-70 rounded	">
            <div className="status flex items-center ">
              <div className={`status-crl  ${order.status}`}></div>
              <p className="capitalize ml-2">{order.status}</p>
            </div>
            <div className="order-date">
              <p className="text-gray-600 text-[13px]">
                Order date - {moment(order.createdAt).format("DD-MM-YYYY")}
              </p>
            </div>
            <div className="order-images flex">
              {order?.orderItems.map((item) => (
                <div className="image-container  ">
                  <img src={process.env.REACT_APP_SERVER_URL + item.image} alt={item.title} className="w-[75px] h-[75px] object-cover mr-2 mt-2 mb-2 rounded" />
                </div>
              ))}
            </div>
            <div className="subtotal">
              <h2 className="text-[16px]" >Order subtotal : <span className="font-bold" >{priceFormate(order.subtotal)} </span></h2>
            </div>
            <div className="total">
              <h2 className="text-[16px]" >Total : <span className="font-bold" >{priceFormate(order.total)} </span></h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Orders;
