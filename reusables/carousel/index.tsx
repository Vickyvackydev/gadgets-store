"use client";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css"; // Import the styles
import Image from "next/image";
import ReusableButton from "../button";
import { ProductDataProps } from "@/types";
import styles from "./carousel.module.css";
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
              key={data.category}
              style={{
                marginTop: "1rem",
                paddingTop: "1rem",
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
                {data.discountpercentage}%
              </div>
              <div className="mt-10 flex flex-col ">
                <div>
                  <Image
                    src={data.displayImage}
                    width={200}
                    height={100}
                    alt="image"
                    className="object-cover"
                  />
                </div>
                <span className="text-left">{data.category}</span>
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
