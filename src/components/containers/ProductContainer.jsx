import React from "react";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductContainer = ({ data }) => {
  return (
    <Link
      to={`/product/${data?.id}`}
      state={{ data: data }}
      className="cursor-pointer mb-4"
    >
      <div className=" bg-border_color/50 rounded-md p-4 h-52 w-44 justify-center flex items-center relative">
        <img
          src={data?.image}
          alt="image"
          className="h-40 w-40 object-contain"
        />
        <div className="bg-white shadow absolute p-1 rounded-full top-3 right-3">
          <IoBagRemoveOutline />
        </div>
      </div>

      <div>
        <h4 className="font-poppins text-sm font-semibold text-black mt-2">
          {data?.name}
        </h4>
        <h4 className="font-poppins text-xs font-normal text-black/70">
          {data?.category}
        </h4>
      </div>
      <h4 className="font-poppins text-xs font-medium text-black ">
        ${data?.price}
      </h4>
    </Link>
  );
};

export default ProductContainer;
