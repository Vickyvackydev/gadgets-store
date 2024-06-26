import Hero from "@/components/Hero/hero";
import MoreInfo from "@/components/more-info";
import Newproduct from "@/components/product-sections/newproduct";
import Sponsor from "@/components/sponsors/sponsor";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <Sponsor />
      <MoreInfo />
      <Newproduct />
    </>
  );
}

export default Home;
