import React, {  useState } from "react";
import { AdminTitle } from "../../components/Admin";
import AdminFiltringAndSorting from "../../components/Admin/AdminFiltringAndSorting";
import AdminTableRow from "../../components/Admin/AdminTableRow";
import { useProductContext } from "../../context/product_context";

const AdminProductList = () => {
  const { products } = useProductContext();

  const [openedMenu, setOpenedMenu] = useState(null);
  
  return (
    <section className="w-full p-5 ">
      <AdminTitle title="Products List" />
      <AdminFiltringAndSorting />
      <section className="w-49 mt-5 p-4 ">
        <h4 className="text-2xl text-center bg-white p-3">Product List</h4>
        <table className="table-auto w-full font-semibold rounded mt-3 border-spacing-2 border-separate">
          <thead>
            <th className="border-r  p-2 ">ID</th>
            <th className="border-r  p-2 ">IMAGE</th>
            <th className="border-r  p-2 ">NAME</th>
            <th className="border-r  p-2 ">STOCK</th>
            <th className="border-r  p-2 ">PRICE</th>
            <th className="border-r  p-2 ">CREATED AT</th>
            <th className=" p-2 ">ACTIONS</th>
          </thead>
          <tbody className="">
            {products.map((product, idx) => (
              <AdminTableRow
                product={product}
                setOpenedMenu={setOpenedMenu}
                index={idx}
                isOpened={idx === openedMenu ? true : false}
              />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default AdminProductList;
