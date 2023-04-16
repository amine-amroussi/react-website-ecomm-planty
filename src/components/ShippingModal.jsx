import React, { useState } from "react";
import FormRow from "./FormRow";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCartContext } from "../context/cart_context";

const ShippingModal = () => {
  const { allCountries,createAdress, adress,toggleAdressModal,updateAdress } = useCartContext();
  

  const [shippingInfos, setShippingInfos] = useState({
    mainAdress: adress?.mainAdress || "",
    country: adress?.country || "",
    city: adress?.city || "",
    zip: adress?.zip || "",
    telephone: adress?.telephone || "",
  });

  const handleChange = (e) => {
    setShippingInfos((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault()
    if(!adress)
      return createAdress(shippingInfos)
    else 
      return updateAdress(shippingInfos)
  }

  return (
    <div className="fixed bg-[#33333378] h-[100vh] w-[100vw] modal p-5 flex items-center justify-center">
      <form className="shipping-content bg-white w-[650px] rounded p-4" onSubmit={handleSubmit} >
        <h3 className="text-xl font-semibold capitalize text-center">
          Your shipping informations
        </h3>
        <div className="fileds flex justify-between mt-5 ">
          <div className="left w-[48%]">
            <FormRow
              name="mainAdress"
              type="text"
              full={true}
              label="Shipping adress"
              value={shippingInfos.mainAdress}
              onChange={handleChange}
            />
            <FormRow full={true} type="text" name="city" label="City" onChange={handleChange} value={shippingInfos.city} />
            <FormRow full={true} type="text" name="zip" label="Zip Code" onChange={handleChange} value={shippingInfos.zip} />
          </div>
          <div className="right w-[48%] px-2">
            <div className="w-[100%]">
              <label className="mb-[20px]">Phone Number </label>
              <PhoneInput inputClass="phone-number" onChange={(value) => setShippingInfos({...shippingInfos , telephone : value})} value={shippingInfos.telephone} />
            </div>
            <div className="mt-[25px] w-[100%]">
              <label>Country </label>
              <select
                name="country"
                id="country"
                className="select mb-2 w-[100%]"
                onChange={handleChange}
                value={shippingInfos.country}
              >
                <option value="none">Select your country</option>
                {allCountries?.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="btns">
          <button className="bg-green-300 text-green-800 font-semibold py-2 px-3 rounded" type="submit">
            Submit
          </button>
          <button className=" text-gray-800 ml-2 font-semibold py-2 px-3 rounded" onClick={toggleAdressModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingModal;
