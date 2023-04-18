import React from "react";
import { useEffect } from "react";
import { ShippingModal } from "../components";
import { useCartContext } from "../context/cart_context";
import priceFormate from "../util/priceFormat";

const Checkout = () => {
  const {
    adress,
    fetchAdress,
    products,
    isAdressModalOpened,
    toggleAdressModal,
    handleStripe,
    shippingFee,
  } = useCartContext();

  useEffect(() => {
    fetchAdress();
    const cartObj = { products, shippingFee, tax: 0 };
    window.localStorage.setItem("cart-products", JSON.stringify(cartObj));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="relative screen">
      {isAdressModalOpened && <ShippingModal />}
      <div className="p-5">
        <div className="adress-section">
          <h2 className="text-2xl mb-3 capitalize underline">
            Shipping informations
          </h2>

          {!adress ? (
            <div>
              <button
                className="py-3 px-2 bg-[#02c39a] capitalize text-white font-bold rounded"
                onClick={toggleAdressModal}
              >
                Add your shipping informations
              </button>
            </div>
          ) : (
            <div className="shipping-info bg-white w-[400px] p-5 rounded drop-shadow-md ">
              <div className="font-semibold text-xl ">
                <h5>
                  Adress : <span className="ml-5">{adress?.mainAdress}</span>
                </h5>
                <h5>
                  Country : <span className="ml-5">{adress?.country}</span>
                </h5>
                <h5>
                  City : <span className="ml-5">{adress?.city}</span>
                </h5>
                <h5>
                  Zip Code : <span className="ml-5">{adress?.zip}</span>
                </h5>
                <h5>
                  Telephone : <span className="ml-5">{adress?.telephone}</span>
                </h5>
              </div>
              <button
                className=" text-blue-900 bg-blue-200 px-4 py-2 mt-2 font-semibold rounded-md "
                onClick={toggleAdressModal}
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="card-content">
          <h3 className="text-xl mt-5 mb-3">Review your bag.</h3>
          <div className="products ">
            {products.map((prod) => (
              <div className="mb-2 flex" key={prod._id}>
                <div className="image ">
                  <img
                    className="w-[70px] h-[70px] object-cover rounded"
                    src={`${process.env.REACT_APP_SERVER_URL}/${prod.image}`}
                    alt={prod.title}
                  />
                </div>
                <div className="info">
                  <h4 className="ml-2 ">{prod.title}</h4>
                  <p className="text-gray-600 text-[14px] ml-2 italic">
                    Price : {priceFormate(prod.price + prod.shippingCost)}
                  </p>
                  <p className="text-gray-600 text-[14px] ml-2 italic">
                    Quantity : {prod.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {adress && (
            <button
              className="uppercase py-3 px-4  font-bold mt-5 text-white bg-[#02c39a] rounded"
              onClick={handleStripe}
            >
              make your order now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
