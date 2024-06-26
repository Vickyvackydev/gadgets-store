"use client";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css"; // Import the styles
import Image from "next/image";
import ReusableButton from "../button";
import { ProductDataProps } from "@/types";
import styles from "./carousel.module.css";
import { FaStar } from "react-icons/fa";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

interface CarouselSliderProps {
  responsive: any;
  productdata: ProductDataProps[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
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

export function CarouselSlider(props: CarouselSliderProps) {
  const generateStar = (ratings: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < ratings) {
        stars.push(
          <Image src={"/star.png"} width={15} height={15} alt="star" />
        );
      } else {
        stars.push(
          <Image src={"/gray-star.png"} width={15} height={15} alt="star" />
        );
      }
    }

    return stars;
  };
  return (
    <div className="max-w-6xl mx-auto my-8">
      {props.productdata.length !== 0 ? (
        <Carousel
          responsive={responsive}
          draggable
          containerClass="carousel-container"
          autoPlaySpeed={1000}
          autoPlay
          infinite
          itemClass={`carousel-item ${styles.carouselItem} `}
          customTransition="transform 300ms ease-in-out"
          arrows
        >
          {props.productdata.map((data) => (
            <div
              className="w-full h-full overflow-hidden relative flex flex-col justify-between"
              key={data.id}
              style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                paddingBottom: "2rem",
              }}
            >
              <div
                className="w-6 h-6 z-50 absolute right-0 top-0 bg-red-200 rounded-md "
                style={{
                  backgroundColor: "#FFE2E9",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  color: "red",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {data.discount ? `${data.discountpercentage}%` : ""}
              </div>
              <div className="mt-10 flex flex-col ">
                <div className="w-full" style={{ height: "200px" }}>
                  <Image
                    src={data.displayImage}
                    width={200}
                    height={100}
                    alt="image"
                    className="object-cover"
                  />
                </div>
                <span
                  className="text-left"
                  style={{
                    fontFamily: "Jura",
                  }}
                >
                  {data.category.toUpperCase()}
                </span>
              </div>
              <div>
                <div>
                  <span className="w-[140px] break-words font-bold">
                    {data.name.length > 70
                      ? `${data.name.slice(0, 70)}...`
                      : data.name}
                  </span>
                  <div className="flex gap-1 items-center">
                    <div className="flex">
                      {generateStar(Number(data.ratings))}
                    </div>
                    <span className="text-xs">{`(${data.raterange})`}</span>
                  </div>
                </div>
                <div className="mt-5 flex gap-5 items-center">
                  <span
                    className={`font-bold text-lg`}
                    style={{
                      color: data.activatenewprice ? "red" : "black",
                    }}
                  >{`${data.currency}${data.currentprice}.00`}</span>
                  <span
                    className="text-gray-200"
                    style={{
                      textDecorationLine: "line-through",
                    }}
                  >
                    {data.oldprice !== "" && data.activatenewprice
                      ? `${data.currency}${data.oldprice}.00`
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel
          responsive={props.responsive}
          containerClass="carousel-container"
          autoPlaySpeed={1000}
          autoPlay={true}
          infinite={true}
          itemClass="carousel-item"
          arrows={true}
        >
          <div
            className="h-64 flex items-center justify-between text-black"
            style={{
              backgroundColor: "#F5F5F5",
              height: "400px",
              paddingLeft: "150px",
              paddingRight: "150px",
              backgroundImage: "url('/green_ring.svg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="text-black flex flex-col gap-3 "
              style={{ paddingLeft: "10px" }}
            >
              <div
                className=" leading-tight flex flex-col"
                style={{ color: "#000000", fontSize: "2rem", fontWeight: 600 }}
              >
                <span>Your One-Stop</span>
                <span>Electronic Market</span>
              </div>
              <div className="font-normal text-gray-300 text-sm">
                Welcome to e-shop a place where you <br />
                buy everything about electronics. Sales everyday
              </div>
              <div className="mt-10">
                <ReusableButton
                  title="Shop Now"
                  className=""
                  handleClick={() => {}}
                  type="button"
                />
              </div>
            </div>
            <Image src={"/iphone.png"} height={400} width={400} alt="samsung" />
          </div>
          <div
            className=" h-64 flex items-center justify-center text-black"
            style={{
              backgroundColor: "#F5F5F5",
              height: "400px",
              backgroundImage: "url('/green_ring.svg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="text-black flex flex-col gap-3 "
              style={{ paddingLeft: "40px" }}
            >
              <div
                className=" leading-tight flex flex-col"
                style={{ color: "#000000", fontSize: "2rem", fontWeight: 600 }}
              >
                <span>Elevate Your Tech</span>
                <span>Gadget Game</span>
              </div>
              <div className="font-normal text-gray-300 text-sm">
                Shop the latest technology available here <br />
                in e-shop. Sales and discount offers everyday
              </div>
              <div className="mt-10">
                <ReusableButton
                  title="Shop Now"
                  className=""
                  handleClick={() => {}}
                  type="button"
                />
              </div>
            </div>
            <Image
              src={"/Galaxy-S23.png"}
              height={600}
              width={600}
              alt="samsung"
            />
          </div>
          <div
            className=" h-64 flex items-center justify-center text-black"
            style={{
              backgroundColor: "#F5F5F5",
              height: "400px",
              backgroundImage: "url('/green_ring.svg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="text-black flex flex-col gap-3 "
              style={{ paddingLeft: "40px" }}
            >
              <div
                className="  leading-tight flex flex-col"
                style={{ color: "#000000", fontSize: "2rem", fontWeight: 600 }}
              >
                <span>Take your Gaming</span>
                <span>To the Next Level</span>
              </div>
              <div className="font-normal text-gray-300 text-sm">
                Shop the latest gaming console, gaming laptops <br />
                in e-shop. All in stock with discount offers
              </div>
              <div className="mt-10">
                <ReusableButton
                  title="Shop Now"
                  className=""
                  handleClick={() => {}}
                  type="button"
                />
              </div>
            </div>
            <Image
              src={"/Playstation-5.png"}
              height={600}
              width={600}
              alt="samsung"
            />
          </div>
        </Carousel>
      )}
    </div>
  );
}
