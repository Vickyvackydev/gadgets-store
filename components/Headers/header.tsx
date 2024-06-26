import React from "react";
import Navbar from "./navbar/navbar";

import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSearch,
  FaShoppingCart,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

import { FaLocationPin } from "react-icons/fa6";
import Image from "next/image";

const TopHeader = () => (
  <main className="flex justify-between items-center px-10 pb-3 pt-4 border-b-2 border-gray-100">
    <div className="flex gap-4">
      <div className="flex gap-2 items-center">
        <FaLocationPin className="text-red-500" />

        <span className="text-gray-400 font-normal text-sm">
          Ikorodu, Lagos Nigeria
        </span>
      </div>
      <div className="border-r-2 border-gray-100" />
      <div className="flex gap-2 items-center">
        <span>
          <FaPhone className="scale-x-[-1] text-red-500" />
        </span>
        <span className="text-gray-400 font-normal text-sm">
          +234 8127378079
        </span>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 border-r-2 border-gray-100 pr-4">
        <span className="font-normal text-gray-400 text-sm">USD</span>
        <FaChevronDown className="font-normal text-sm text-gray-400" />
      </div>

      <div className="flex items-center gap-2 border-r-2 border-gray-100 pr-4">
        <Image src={"/ukFlag.png"} height={20} width={20} alt="eng" />
        <span className="font-normal text-gray-400 text-sm">English</span>
        <FaChevronDown className="font-extralight text-sm text-gray-400" />
      </div>
      <div className="flex items-center gap-3">
        <FaFacebook className="font-normal text-sm text-gray-400" />
        <FaTwitter className="font-normal text-sm text-gray-400" />
        <FaInstagram className="font-normal text-sm text-gray-400" />
      </div>
    </div>
  </main>
);
function Header() {
  return (
    <main>
      <TopHeader />
      <header className="px-10 py-4 flex  items-center w-full justify-between">
        <div className="flex items-center gap-[2px]">
          <span className="font-semibold text-black text-2xl">e-shop</span>
          <div className="w-[5px] h-[5px] rounded-full bg-red-500 mt-2" />
        </div>
        <div className="flex w-[40vw] gap-5">
          <div className="flex items-center w-full rounded-lg px-10 py-2 border-2 border-gray-100">
            <input
              type="search"
              placeholder="Search Products..."
              className="placeholder:text-sm placeholder:text-gray-300"
            />
            <FaSearch className="text-sm font-normal text-red-300" />
          </div>
          <div className="flex items-center gap-3 w-full ">
            <div className="flex flex-col items-end">
              <div className="w-[3px] h-[3px] rounded-full bg-red-500 " />
              <FaShoppingCart />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-normal text-gray-400">Cart</span>
              <span className="font-semibold text-black text-xs">$ 150,00</span>
            </div>
          </div>
          <div className="border-r-2 border-gray-100" />
          <div className="flex items-center gap-3 w-full">
            <FaUser className="text-red-500" />
            <div className="flex flex-col">
              <span className="text-xs font-normal text-gray-400">User</span>
              <span className="font-semibold text-black text-xs">Account</span>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </main>
  );
}

export default Header;
