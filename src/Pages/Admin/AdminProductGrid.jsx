import React from "react";
import { AdminProduct, AdminTitle } from "../../components/Admin";
import AdminFiltringAndSorting from "../../components/Admin/AdminFiltringAndSorting";
import { useProductContext } from "../../context/product_context";

const AdminProductGrid = () => {
  const { products } = useProductContext();

  return (
    <main className="p-5 w-full">
      <AdminTitle title="Products Grid" />
      <AdminFiltringAndSorting />
      <section className="w-49 flex m-auto p-5 flex-wrap gap-2">
        {products.map((product) => (
          <AdminProduct key={product._id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default AdminProductGrid;
