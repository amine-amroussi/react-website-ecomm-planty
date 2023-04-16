import React from "react";
import FormRow from "../FormRow";

const AdminFreeShipping = ({ handleChange ,  value , isChecked}) => {
  return (
    <div>
      <div className="flex mt-3">
        <label htmlFor="freeShipping" className="mr-4">
          Free Shipping ?
        </label>
        <input
          type="checkbox"
          name="free_shipping"
          id="freeShipping"
          onChange={handleChange[0]}
          value={isChecked}
        />
      </div>
      {
       !isChecked && <FormRow
          type="number"
          name="shippingCost"
          placeholder="Shipping cost..."
          onChange={handleChange[1]}
        />
      }
    </div>
  );
};

export default AdminFreeShipping;
