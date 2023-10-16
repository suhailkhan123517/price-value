import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="border-b">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="text-2xl font-semibold text-blue-600">
              PriceValue
            </Link>
            <button className="px-4 py-2 rounded-3xl bg-black border-[1px] hover:bg-transparent text-white hover:text-black transition-all duration-200">
              Sign In
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
