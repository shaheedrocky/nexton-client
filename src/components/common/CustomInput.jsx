import React from "react";
import { CiSearch } from "react-icons/ci";

const CustomInput = ({
  inputType = "text",
  type,
  placeholder,
  onChange,
  value,
  label,
}) => {
  switch (type) {
    case "search":
      return (
        <div className="bg-border_color p-2 rounded-full flex items-center space-x-1 lg:w-1/4 w-1/2">
          <CiSearch size={18} color="grey" />
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border-none outline-none bg-transparent w-full font-poppins text-sm font-normal text-black"
          />
        </div>
      );
    case "textarea":
      return (
        <div>
          <h2 className="text-black font-poppins text-xs font-medium mb-1">
            {label}
          </h2>
          <div className="border px-2 py-1 w-[300px] rounded-md">
            <textarea
              type={inputType}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="border-none outline-none bg-transparent w-full font-poppins text-xs font-normal text-black"
            />
          </div>
        </div>
      );
    default:
      return (
        <div>
          <h2 className="text-black font-poppins text-xs font-medium mb-1">
            {label}
          </h2>
          <div className="border px-2 py-1 w-[300px] rounded-md">
            <input
              type={inputType}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="border-none outline-none bg-transparent w-full font-poppins text-xs font-normal text-black"
            />
          </div>
        </div>
      );
  }
};

export default CustomInput;
