import { CarouselSlider } from "@/reusables/carousel";
import React from "react";

function Hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main className="px-24 mt-5 mx-25 h-[380px]">
      <CarouselSlider responsive={responsive} productdata={[]} />
    </main>
  );
}

export default Hero;
