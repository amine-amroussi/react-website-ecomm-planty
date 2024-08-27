import React, { useEffect } from "react";
import {
  Banner,
  FearuredProducts,
  Services,
  Newsletter,
  Categories,
} from "../components";
import { useProductContext } from "../context/product_context";



const Home = () => {

  const {fetchFeaturedProducts} = useProductContext()
  useEffect(() => {
   fetchFeaturedProducts()
   // eslint-disable-next-line
  }, [])
  
  return (
    <main >
      <Banner />
      <Categories />
      <FearuredProducts />
      <Services />
      <Newsletter />
    </main>
  );
};

export default Home;
