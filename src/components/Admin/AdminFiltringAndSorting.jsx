import React from "react";

const AdminFiltringAndSorting = () => {
  return (
    <section className="flex items-center bg-white justify-between p-3 w-49 rounded drop-shadow-md mt-3 mb-3 m-auto">
      <h4 className="text-2xl">Sort And Filter</h4>
      <div className="filer-sort">
        <select name="sort" id="sort" className="border py-2 px-4">
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <select name="sort" id="sort" className="border py-2 px-4 text-center ml-2">
          <option value="asc">All</option>
          <option value="home">Home & Decors</option>
          <option value="flowers">Bouquets & Flowers</option>
          <option value="office">Office</option>
          <option value="tree">Trees</option>
          <option value="gifts">Gifts & Packs</option>
        </select>
      </div>
    </section>
  );
};

export default AdminFiltringAndSorting;
