import React, { useEffect, useState } from "react";
import {
  AdminChooseCategory,
  AdminFreeShipping,
  AdminTitle,
  UploadImage,
} from "../../components/Admin";
import {
  BtnSnipper,
  FormArea,
  FormRow,

} from "../../components";
import { useProductContext } from "../../context/product_context";
import { useLocation } from "react-router-dom";
import { useAlertContext } from "../../context/alert_context";

const AdminCreateProduct = () => {
  const { uploadedImage, createProduct, loading, updateProduct, selectImage } =
    useProductContext();

  const { showPenddingAlert } = useAlertContext();

  const params = new URL(document.location).searchParams;
  const edit = params.get("edit");
  const productId = params.get("productId");
  const location = useLocation();

  const productData = location.state?.product || {};

  const {
    title,
    description,
    price,
    image,
    category: productCategory,
    productDetails: productInfo,
    shippingCost,
    freeShipping : shipping,
    featured : isFeatured
  } = productData;

  useEffect(() => {
    selectImage({ image });
    if (loading) {
      showPenddingAlert("Please, Wait ...");
    }
    // eslint-disable-next-line
  }, [productId]);

  // const { humidity, height, diameter, lifetime } = productInfo ;

  const [product, setProduct] = useState({
    title: title || "",
    price: price || "",
    description: description || "",
    image: uploadedImage || "",
    shippingCost: shippingCost || "",
  });

  const [productDetails, setProductDetails] = useState({
    humidity: productInfo?.humidity || "",
    lifetime: productInfo?.lifetime || "",
    diameter: productInfo?.diameter || "",
    height: productInfo?.height || "",
    
  });

  const [category, setCategory] = useState(productCategory || "");

  const [freeShipping, setFreeShipping] = useState(shipping);

  const [featured, setFeatured] = useState(isFeatured)

  const handleSubmit = (e) => {
    e.preventDefault();

    const productObj = { ...product, productDetails, category, freeShipping, featured };
    if (edit) {
      return updateProduct({ productId, productData: productObj });
    }
    createProduct({ product: productObj });
  };

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hadleProductDetailsChange = (e) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFeaturedChange = (e) => {
    setFeatured(e.target.checked)
  }

  console.log(featured)

  // if (loading) return "Loading";

  return (
    <main className="w-full p-5  ">
      <AdminTitle title="Create product" />

      <form
        className="bg-white w-4/5 m-auto mt-5 rounded hover:drop-shadow-md p-4 md:w-[100%] "
        onSubmit={handleSubmit}
      >
        <section className="flex justify-between  ">
          <div className="left flex-1  p-2">
            <FormRow
              label="Product title *"
              type="text"
              name="title"
              value={product?.title}
              placeholder="Enter your product title ..."
              full={true}
              onChange={handleChange}
            />
            <FormRow
              label="Product Price *"
              name="price"
              type="number"
              placeholder="Enter your product price ..."
              full={true}
              value={product?.price}
              onChange={handleChange}
            />
            <FormRow
              label="Inventory"
              name="inventory"
              type="number"
              value="15"
              placeholder="Enter your product quantity ..."
              full={true}
              onChange={handleChange}
            />
            <FormArea
              label="Product Description *"
              name="description"
              placeholder="write product description ..."
              full={true}
              value={product?.description}
              onChange={handleChange}
            />
          </div>
          <div className="left flex-1 pl-2 mt-2 border-l-2">
            <UploadImage image={product?.image} />
            <AdminChooseCategory
              handleChange={handleCategoryChange}
              selectedCategory={category}
            />
            <AdminFreeShipping
              isChecked={freeShipping}
              handleChange={[(e) => setFreeShipping(e.target.checked), handleChange]}
              value={ product?.shippingCost}
            />
            <div className="flex" >
              <label htmlFor="featured">Is Featured :</label>
              <input type="checkbox" name="featured" className=" ml-5" checked={featured}  id="featured" onChange={handleFeaturedChange} />
            </div>
            <div className="product-charcters flex mt-3 capitalize">
              <div className="left mr-1 ">
                <FormRow
                  label="Plant lifetime"
                  type="text"
                  full={true}
                  placeholder="values with Days or Weeks"
                  name="lifetime"
                  value={productDetails?.lifetime}
                  onChange={hadleProductDetailsChange}
                />
                <FormRow
                  label="Plant humidity"
                  type="text"
                  name="humidity"
                  full={true}
                  placeholder="with %"
                  value={productDetails?.humidity}
                  onChange={hadleProductDetailsChange}
                />
              </div>
              <div className="right ml-1">
                <FormRow
                  label="Plant Heights"
                  type="text"
                  name="height"
                  onChange={hadleProductDetailsChange}
                  full={true}
                  value={productDetails?.height}
                  placeholder="in inche"
                />
                <FormRow
                  label="Plant Diameter"
                  type="text"
                  name="diameter"
                  full={true}
                  placeholder="in inche"
                  value={productDetails?.diameter}
                  onChange={hadleProductDetailsChange}
                />
              </div>
            </div>
          </div>
        </section>
        <button
          type="submit"
          className={`bg-blue-600 rounded-md py-2 px-5 text-white font-semibold ${
            loading && "opacity-75 "
          }`}
        >
          {loading ? <BtnSnipper /> : edit ? "Edit Product" : "Create Product"}
        </button>
      </form>
    </main>
  );
};

export default AdminCreateProduct;
