import React from "react";

const AdminChooseCategory = ({ handleChange, selectedCategory }) => {
  return (
    <div className="">
      <h4 className="text-md font-semibold mb-2">Choose product category</h4>
      <div className="flex">
        <div className="left flex-1">
          <CheckBox
            category="tree"
            handleChange={handleChange}
            selectedCategory={selectedCategory}
          />
          <CheckBox
            category="home and decors"
            handleChange={handleChange}
            selectedCategory={selectedCategory}
          />
          <CheckBox
            category="office"
            handleChange={handleChange}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="right flex-1">
          <CheckBox
            category="flowers and bouquets"
            handleChange={handleChange}
            selectedCategory={selectedCategory}
          />
          <CheckBox
            category="gifts and packs"
            handleChange={handleChange}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

const CheckBox = ({ category, handleChange, selectedCategory }) => {
  return (
    <div className="gap-1 flex capitalize">
      <label htmlFor={category}>
        <input
          type="radio"
          className="mr-2"
          name="category"
          id={category}
          value={category}
          onChange={handleChange}
          checked={selectedCategory === category && true}
        />
        {category}
      </label>
    </div>
  );
};

export default AdminChooseCategory;
