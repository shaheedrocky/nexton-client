import React, { useCallback, useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import FeatureContainer from "../components/containers/FeatureContainer";
import ProductContainer from "../components/containers/ProductContainer";
import {toast} from 'react-hot-toast'
import api from "../components/common/API";

const Home = () => {
  const [products, setProducts] = useState([]);
  const ProductAPI = useCallback(async() => {
    try {
      const  response  = await api.get("/product/list");
      if (response.status === 200) {

        setProducts(response.data);
      }
    } catch (error) {
      console.log("Error from Product API: ", error);
      toast.error(error.message);
    }
  },[])

  useEffect(() => {
    ProductAPI();
  }, []);

  return (
    <div>
      <Banner />
      <FeatureContainer />
      <h2 className="mx-4 lg:mx-20 text-border_color font-poppins font-bold text-xl lg:text-4xl">
        <span className="text-primary">Recommendations.</span> Best matching
        products for you
      </h2>

      <div className="lg:block flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4 mx-4 lg:mx-20 my-8">
          {products?.data?.map((item, index) => (
            <ProductContainer key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
