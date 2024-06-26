"use client";
import { fakeData } from "@/constants";
import { CarouselSlider } from "@/reusables/carousel";
import { SelectorBox } from "@/reusables/selectorbox";
import React from "react";

const frameworks = [
  {
    value: "Tablet",
    label: "Tablet",
  },
  {
    value: "Phone",
    label: "Phone",
  },
  {
    value: "Audio",
    label: "Audio",
  },
  {
    value: "Home",
    label: "Home",
  },
  {
    value: "Laptop",
    label: "Laptop",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5,
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
function Newproduct() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <main className="my-14 mx-20">
      <div className="flex justify-between">
        <span className="font-bold text-2xl">New Products</span>
        <div className="flex gap-2 items-center">
          <span>Sort by:</span>
          <SelectorBox
            selectorData={frameworks}
            open={open}
            setOpen={setOpen}
            value={value}
            setvalue={setValue}
          />
        </div>
      </div>
      <div>
        <CarouselSlider responsive={responsive} productdata={fakeData} />
      </div>
    </main>
  );
}

export default Newproduct;
