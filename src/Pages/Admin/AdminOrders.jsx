import React, { useState } from "react";
import { useOrderContext } from "../../context/order_context";
import { AdminSingleOrder } from "../../components/Admin";

const AdminOrders = () => {
  const { allOrders } = useOrderContext();

  const [orders, setOrders] = useState([...allOrders]);
  const [orderValue, setOrderValue] = useState("");

  const handleClick = () => {
    if (orderValue === "") {
     setOrders([...allOrders])
    }else {

        const filtredOrders = orders.filter((order) => order._id === orderValue);
        setOrders([...filtredOrders]);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold bg-white p-5 text-center ">See All Orders</h1>
      <div className="mb-4">
        <p>Search order</p>
        <input
          type="text"
          value={orderValue}
          placeholder="Enter the order reference or id "
          className="outline-none border px-2 py-1 w-[300px]"
          onChange={(e) => setOrderValue(e.target.value)}
        />
        <button
          className="bg-green-100 text-grenn-600 px-2 py-1"
          onClick={handleClick}
        >
          Search{" "}
        </button>
      </div>
      <div className="orders  ">
        {orders.length < 1 ? (
          <>
            <h1>There is no orders ...</h1>
          </>
        ) : (
          orders.map((order) => <AdminSingleOrder key={order._id} {...order} />)
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
