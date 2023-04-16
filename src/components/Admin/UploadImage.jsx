import React from "react";
import upImg from "../../assets/uploadImage.png";
import { useProductContext } from "../../context/product_context";
import LoadingSnipper from "../LoadingSnipper";

const UploadImage = () => {
  const { uploadImage, uploadedImage, loadingImage } = useProductContext();

  const handleChange = (e) => {
    const form = new FormData();
    form.append("image", e.target.files[0]);
    uploadImage({ imageFile: form });
  };

  return (
    <div className="w-full text-center relative">
      <label htmlFor="upload-img" className="w-full text-center">
        <img
          src={
            !uploadedImage
              ? upImg
              : `${process.env.REACT_APP_SERVER_URL}${uploadedImage}`
          }
          alt="upload"
          crossorigin="anonymous"
          className="w-3/5 m-auto mt-2 mb-3 cursor-pointer"
        />
        <input
          type="file"
          hidden
          name="upload-img"
          id="upload-img"
          onChange={handleChange}
        />
      </label>
      {loadingImage && (
        <div className="absolute bg-[#2222447d] flex items-center justify-center w-[100%] h-[100%] top-0 left-0 ">
          <LoadingSnipper />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
