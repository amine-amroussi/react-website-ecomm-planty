import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { useProductContext } from "../../context/product_context";
import Moment from "moment"
import priceFormate from "../../util/priceFormat";

const AdminTableRow = ({ isOpened, product, setOpenedMenu, index }) => {

  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <tr className="text-center mb-5">
      <td className="p-2 bg-white border-r">{product?._id}</td>
      <td className="p-2 bg-white border-r">
        <Link to={`/products/${product?._id}`}>
          <img
            src={`${process.env.REACT_APP_SERVER_URL}${product?.image}`}
            alt="name"
            className="w-[60px] h-[60px] object-cover rounded m-auto"
          />
        </Link>
      </td>
      <td className="p-2 bg-white border-r">{product?.title}</td>
      <td className="p-2 bg-white border-r">In Stock</td>
      <td className="p-2 bg-white border-r">{priceFormate(product?.price)}</td>
      <td className="p-2 bg-white border-r">{Moment(product?.createdAt).format('DD-MM-YYYY')}</td>
      <td className="p-2 bg-white ">
        <button
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpenedMenu(index)}
        >
          <TfiLayoutMenuSeparated />
          <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              !isOpened && "hidden"
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1" role="none">
              <Link
                to="/admin-panel/product/12"
                className="text-gray-700 capitalize block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Show product
              </Link>
              <Link
                to={`/admin-panel/create-product?edit=true&productId=${product._id}`}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                state={{product}}
              >
                Update Product
              </Link>
              <Link
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
                onClick={() => setOpenPopUp(true)}
              >
                Delete Product
              </Link>
            </div>
          </div>
        </button>
      </td>
      {openPopUp && (
        <ConfirmationPopUp
          title={product?.title}
          setOpenPopUp={setOpenPopUp}
          _id={product?._id}
        />
      )}
    </tr>
  );
};

const ConfirmationPopUp = ({ title, setOpenPopUp, _id }) => {
  const { deleteProduct } = useProductContext();

  const handleClick = () => {
    deleteProduct({ productId: _id });
    setOpenPopUp(false);
  };

  return (
    <div className="w-full h-screen p-3 bg-[#2222222d] rounded flex items-center justify-center fixed top-0 left-0">
      <div className="bg-white w-[50%] rounded-md">
        <h2 className="text-2xl text-center capitalize m-5  ">Are you sur ?</h2>
        <h3 className="text-center  text-gray-600 m-3">
          You want to delete {title} from products ?
        </h3>
        <div className="flex justify-center m-5 gap-3">
          <button
            className="bg-red-400 py-2 px-3 text-white rounded"
            onClick={handleClick}
          >
            Yes! I want
          </button>
          <button
            className="bg-gray-300 py-2 px-3 rounded"
            onClick={() => setOpenPopUp(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminTableRow;
