import React from "react";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductContainer = ({ data }) => {

  const imageUrl = import.meta.env.VITE_IMAGE_URL
  return (
    <Link
      to={`/product/${data?._id}`}
      state={{ data: data }}
      className="cursor-pointer mb-4"
    >
      <div className=" bg-border_color/50 rounded-md `p-4 h-52 w-44 justify-center flex items-center relative">
        <img
          src={imageUrl+data?.images[0]}
          alt="image"
          className="h-40 w-40 object-contain"
        />
        <div className="bg-white shadow absolute p-1 rounded-full top-3 right-3">
          <IoBagRemoveOutline />
        </div>
      </div>

      <div>
        <h4 className="font-poppins text-sm font-semibold text-black mt-2">
          {data?.title}
        </h4>
        <h4 className="font-poppins text-xs font-normal text-black/70">
          {data?.category[0]}
        </h4>
      </div>
      <h4 className="font-poppins text-xs font-medium text-black ">
        ${data?.price}
      </h4>
    </Link>
  );
};

export default ProductContainer;
