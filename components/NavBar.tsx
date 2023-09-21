import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

export const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="object-contain"
            width={150}
            height={50}
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="text-emerald-400 rounded-full bg-white min-w-[130px] hover:scale-110 sm:hover:scale-100 sm:border border-emerald-400 xl:hover:bg-black xl:hover:border-none sm:hover:bg-emerald-400 sm:hover:text-white"
          btnType="button"
        />
      </nav>
    </header>
  );
};
