import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa6";

import CustomInput from "../components/common/CustomInput";
import OrderContainer from "../components/containers/OrderContainer";
import { dummData } from "../components/utils";
import CustomButton from "../components/common/CustomButton";

const Checkout = () => {
  const [totalAmounts, setTotalAmounts] = useState([]); // Array to store product amounts

  // Update the total amount for each product
  const handleTotalUpdate = (productId, newAmount) => {
    setTotalAmounts((prevAmounts) => {
      // Check if the product already exists in the array
      const productIndex = prevAmounts.findIndex(
        (item) => item.id === productId
      );

      if (productIndex !== -1) {
        // Update the existing product amount
        const updatedAmounts = [...prevAmounts];
        updatedAmounts[productIndex].amount = newAmount;
        return updatedAmounts;
      } else {
        // Add a new product if it doesn't exist
        return [...prevAmounts, { id: productId, amount: newAmount }];
      }
    });
  };

  // To calculate the total overall amount
  const overallTotal = totalAmounts.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="mx-4 lg:mx-20 my-4">
      <h1 className="font-poppins font-semibold text-2xl">Checkout</h1>
      <p className="text-xs text-black/70 font-poppins font-light">
        To buy your favourite products what you have liked.
      </p>
      {/* PRODUCT -BILL SECTION */}
      <div className="lg:flex flex-col lg:flex-row items-start justify-between gap-6">
        <div className="LEFT-SIDE">
          {/* PHONE NUMBER - EMAIL ADDRESS */}
          <div className="border p-4 rounded-lg my-4">
            <div className="flex items-center gap-2 pb-2 ">
              <FaRegCircleUser color={"#111827"} size={16} />

              <h2 className="font-poppins font-normal text-sm text-primary">
                Contact Info
              </h2>
            </div>
            <div className="-mx-4">
              <hr />
            </div>

            {/* LISTING - FIELDS */}
            <div className="flex gap-4 mt-3">
              <CustomInput
                placeholder={"0123456789"}
                label={"Phone Number"}
                inputType="numeric"
              />

              <CustomInput
                placeholder={"your@gmail.com"}
                label={"Email Address"}
                inputType="email"
              />
            </div>
          </div>

          {/* 
1.FIRST NAME
2.LAST NAME
3. ADDRESS
4.CITY
5.COUNTRY
6.STATE
7.POSTAL CODE
*/}
          <div className="border p-4 rounded-lg my-4">
            <div className="flex items-center gap-2 pb-2 ">
              <FaRegCompass color={"#111827"} size={16} />

              <h2 className="font-poppins font-normal text-sm text-primary">
                Shipping Address
              </h2>
            </div>
            <div className="-mx-4">
              <hr />
            </div>

            {/* LISTING - FIELDS */}
            <div className="grid grid-cols-2 gap-4 mt-3">
              <CustomInput
                placeholder={"XXXXXXX"}
                label={"First Name"}
                inputType="text"
              />

              <CustomInput
                placeholder={"YYYYYYY"}
                label={"Last Name"}
                inputType="text"
              />

              <CustomInput
                type={"textarea"}
                placeholder={"XXXXXXX"}
                label={"Address"}
                inputType="text"
              />

              <CustomInput
                placeholder={"YYYYYYY"}
                label={"Country"}
                inputType="text"
              />

              <CustomInput
                placeholder={"XXXXXXX"}
                label={"State"}
                inputType="text"
              />
              <CustomInput
                placeholder={"YYYYYYY"}
                label={"City"}
                inputType="text"
              />
              <CustomInput
                placeholder={"XXXXXXX"}
                label={"Postal Code"}
                inputType="numeric"
              />
            </div>
          </div>
        </div>
        <div className="RIGHT-SIDE  w-full">
          <h2 className="font-poppins font-semibold text-sm  mt-2 pb-3">
            Order Summary
          </h2>
          <hr />
          <div className="mt-4">
            {dummData?.map((item, index) => {
              return (
                <OrderContainer
                  key={index}
                  data={item}
                  onAmountChange={handleTotalUpdate}
                  totalLength={dummData?.length}
                />
              );
            })}
          </div>

          <div className="mt-4">
            <CustomButton btnTitle={`Confirm Order $${overallTotal ?? 0}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
