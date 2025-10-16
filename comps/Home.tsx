"use client";
import { useState } from "react";
import { BannerDataTypes, ProductsTypes } from "../app/page";
import FooterBanner from "../comps/FooterBanner";
import MainBanner from "./MainBanner";
import Products from "../app/Products";

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

    {/* sorting by price.. creating a state variable for sortOrder */}
    const Home = ({ products, bannerData }: HomeProps) => {
      const [sortOrder, setSortOrder] = useState("low");
    
      const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "low") return a.price - b.price;
        return b.price - a.price;  // high to low
      });    
  
  return (
    <main>
      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData[0]} />

      <section className="  mb-4 flex items-center flex-col">
        <h1
          className=" headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl"
        >
          Best Selling Headphones
        </h1>
        {/* <p className=" text-base text-secondary">Best in the Market</p> */}
      {/* adding the sort dropdown */}
        <select
    className="border text-secondary
         font-sans font-extrabold rounded px-3 py-2 mt-2"
    onChange={(e) => setSortOrder(e.target.value)}
  >
    <option value="low">Sort: Low to High</option>
    <option value="high">Sort: High to Low</option>
  </select>
      </section>

      {/* === SHOW PRODUCTS  */}
      { /* chaging the grid style from 4 X 3 to 3 X 4 */}
      <section
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3
       lg:mx-20 overflow-hidden
      "
      >
        {/* === MAP PRODUCTS  */}
        {/* changing  */}
        {sortedProducts?.map((products: ProductsTypes) => {
          return <Products key={products._id} products={products} />;
        })}
      </section>

      {/* ==== FOOTER BANNER  */}
      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;
