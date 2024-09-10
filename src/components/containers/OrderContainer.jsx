import React, { useState, useEffect } from "react";

const OrderContainer = ({ data, totalLength, onAmountChange }) => {
  const [count, setCount] = useState(1); // Default count is 1

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Whenever the count changes, update the total amount in the parent component
  useEffect(() => {
    onAmountChange(data.id, count * data.price);
  }, [count, data.id, data.price]);
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          <div className="bg-border_color px-4 py-2 rounded-lg">
            <img
              src={data?.image}
              alt="product"
              className="h-16 object-cover"
            />
          </div>
          <div>
            <h2 className="font-poppins font-medium text-sm">{data?.name}</h2>
            <p className="font-poppins font-normal text-xs">{data?.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrement}
            className="bg-border_color h-5 justify-center rounded-full flex items-center w-5 text-white"
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            onClick={handleIncrement}
            className="bg-border_color h-5 justify-center rounded-full flex items-center w-5 text-white"
          >
            +
          </button>
        </div>
        <h2 className="font-poppins font-medium text-sm">${count * data?.price}</h2>
      </div>

      {totalLength !== data?.id && (
        <div className="my-4">
          <hr />
        </div>
      )}
    </>
  );
};

export default OrderContainer;
