import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="px-10 bg-red-500 py-3 flex justify-between">
      <div className="flex gap-14 items-center">
        <Link href={""} className="flex  text-white gap-2 ">
          <span>
            <AiOutlineMenu />
          </span>
          <span className="text-sm"> All Categories</span>
        </Link>
        <Link href={""} className="text-gray-50 text-sm">
          Products
        </Link>
        <Link href={""} className="text-gray-50 text-sm">
          Blog
        </Link>
        <Link href={""} className="text-gray-50 text-sm">
          Contact
        </Link>
      </div>
      <div className="flex gap-14 items-center">
        <Link href={""} className="flex  text-white gap-2 items-center">
          <span className="text-sm">LIMITED SALE</span>
          <span>
            <FaChevronDown className="text-xs" />
          </span>
        </Link>
        <Link href={""} className="text-gray-50 text-sm">
          Best Seller
        </Link>
        <Link href={""} className="text-gray-50 text-sm">
          New Arrival
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
