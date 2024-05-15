import React from "react";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/productsApi";
import Banner from "../../components/banner/Banner";
import Bg from "../../components/bg/Bg";
import Category from "../../components/category/Category";
function Home() {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  return (
    <div>
      <Hero />
      <Product data={data?.products} />
      <Banner />
      <Bg />
      <Category />
    </div>
  );
}

export default Home;
