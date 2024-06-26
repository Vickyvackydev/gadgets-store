import React from "react";
import Image from "next/image";
import ReusableButton from "@/reusables/button";
function MoreInfo() {
  return (
    <main className="flex justify-center flex-wrap gap-4 ">
      <div
        className="bg-[#F5F5F5] w-[700px] h-[710px] bg-no-repeat  rounded-lg relative"
        style={{
          backgroundImage: 'url("/Box-Transparent.png")',
          backgroundSize: "center",
        }}
      >
        <div className="z-50 px-20 pt-32 flex flex-col gap-3">
          <span className="text-3xl font-bold ">Free Shipping</span>
          <span className="text-lg text-slate-700 font-medium">
            Special orders over $500.00 worldwide.
            <br /> Available throughout May and June 2024
          </span>

          <div className="mt-10">
            <ReusableButton
              title="Shop Now"
              className=""
              handleClick={() => {}}
              type="button"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-[#F5F5F5] w-[450px] h-[350px] rounded-lg relative">
          <div className="z-50 px-10 pt-20 flex flex-col gap-3">
            <span className="text-3xl font-bold ">
              Black Friday <br />
              Clearance
            </span>
            <span className="text-sm text-slate-700 font-medium">
              Up 80% off
            </span>

            <div className="mt-10">
              <ReusableButton
                title="Shop Now"
                className=""
                handleClick={() => {}}
                type="button"
              />
            </div>
          </div>
          <div className="absolute -right-6 top-0 mt-7">
            <Image
              src={"/tecno-camon-20.png"}
              width={350}
              height={350}
              alt="phone"
            />
          </div>
        </div>
        <div className="bg-[#F5F5F5] w-[450px] h-[350px] rounded-lg relative ">
          <div className="z-50 px-10 pt-20 flex flex-col gap-3">
            <span className="text-3xl font-bold ">
              First Purchase <br />
              20% Discount
            </span>
            <span className="text-sm text-slate-700 font-medium">
              Up FIRSTPAY Code
            </span>

            <div className="mt-10">
              <ReusableButton
                title="Shop Now"
                className=""
                handleClick={() => {}}
                type="button"
              />
            </div>
          </div>
          <div className="absolute -right-9 top-0 mt-28 ">
            <Image
              src={"/pink-headphone.png"}
              width={350}
              height={350}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MoreInfo;
