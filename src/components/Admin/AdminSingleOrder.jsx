import moment from "moment";
import React, { useState } from "react";
import priceFormate from "../../util/priceFormat";
import { useOrderContext } from "../../context/order_context";

const AdminSingleOrder = ({
  status,
  orderItems,
  total,
  subtotal,
  shippingFee,
  _id,
  createdAt,
}) => {
  const { editStatus } = useOrderContext();

  const [isEditing, setIsEditing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editStatus(currentStatus, _id);
    }
  };

  return (
    <article className="bg-white py-2 px-5 mb-3 w-[360px] drop-shadow hover:drop-shadow-md ease-linear delay-70 rounded	">
      <div>
        <h2 className="text-[17px]" >Order refernce : {_id} </h2>
      </div>
      <div className="status flex items-center ">
        <div className={`status-crl  ${currentStatus}`}></div>
        <p className="capitalize ml-2">{currentStatus}</p>
      </div>
      <div className="order-date">
        <p className="text-gray-600 text-[13px]">
          Order date - {moment(createdAt).format("DD-MM-YYYY")}
        </p>
      </div>
      <div className="order-images flex">
        {orderItems.map((item) => (
          <div className="image-container  ">
            <img
              src={process.env.REACT_APP_SERVER_URL + item.image}
              alt={item.title}
              className="w-[75px] h-[75px] object-cover mr-2 mt-2 mb-2 rounded"
            />
          </div>
        ))}
      </div>
      <div className="subtotal">
        <h2 className="text-[16px]">
          Order subtotal :{" "}
          <span className="font-bold">{priceFormate(subtotal)} </span>
        </h2>
      </div>
      <div className="subtotal">
        <h2 className="text-[16px]">
          Shipping Fee :{" "}
          <span className="font-bold">{priceFormate(shippingFee)} </span>
        </h2>
      </div>
      <div className="total">
        <h2 className="text-[16px]">
          Total : <span className="font-bold">{priceFormate(total)} </span>
        </h2>
      </div>
      <div className="elements">
        <button
          className="edit bg-blue-100 text-blue-600 px-3 py-1 rounded"
          onClick={handleClick}
        >
          {isEditing ? "Save edit" : "Edit Status"}
        </button>
        {isEditing && (
          <select
            name="status"
            id="status"
            className="ml-2 border py-1 px-2"
            value={currentStatus}
            onChange={(e) => setCurrentStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="failed">Faild</option>
            <option value="delivered">Delivered</option>
            <option value="paid">Paid</option>
            <option value="canceled">Canceled</option>
          </select>
        )}
      </div>
    </article>
  );
};

export default AdminSingleOrder;
