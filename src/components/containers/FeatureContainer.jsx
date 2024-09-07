import React from "react";
import { featureData } from "../utils";

const FeatureContainer = () => {
  return (
    <div className="lg:border my-8 rounded-lg  lg:mx-20 py-4 px-4 lg:py-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-4 lg:space-y-0">
      {featureData.map((item, index) => (
        <div className="flex lg:border-0 border rounded-lg py-4 items-center lg:space-x-4 w-full lg:w-auto" key={index}>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-sm font-semibold font-poppins text-black">
              {item.title}
            </h3>
            <p className="text-xs font-light font-poppins text-black/70">
              {item.desc}
            </p>
          </div>
          {featureData?.length !== index + 1 && (
            <div className="hidden lg:block h-10 ml-6 w-[1px] bg-border_color" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureContainer;
