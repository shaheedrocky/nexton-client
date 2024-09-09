import React, { useState } from "react";
import { Logo } from "../utils";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import CustomInput from "../common/CustomInput";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="flex items-center justify-between lg:px-20 px-4 border-b-[1px] py-2">
      {/* LOGO OF THE HEADER */}
      <img
        src={Logo}
        alt="logo"
        className="lg:h-10 lg:w-20 h-8 w-16 object-contain"
      />
      {/* SEARCH PART OF THE HEADER */}
      <CustomInput
        type={"search"}
        placeholder={"Search here"}
        onChange={handleSearch}
        value={search}
      />
      {/* NAV - LINKS */}
      <div className="flex space-x-4">
        <IoPersonOutline />
        <div className="relative">
          <IoCartOutline size={18} />
          <div className="h-3 w-3 bg-blue text-white  flex items-center justify-center rounded-full absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 text-[8px] font-semibold">
            9
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
