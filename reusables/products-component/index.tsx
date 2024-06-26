import React from "react";

interface ProductDataProps {
  name: string;
  category: string;
  displayImage: string;
  ratings: number;
  currentprice: string;
  oldprice: string;
  discount: boolean;
  discountpercentage: string;
  raterange: string;
  currency: string;
}

interface ProductProps {
  productdata: ProductDataProps[];
}

function ProductComponent(props: ProductProps) {
  return <main>hello</main>;
}

export default ProductComponent;
