// "use client";

// import { CustomButtonProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="object-contain"
            width={118}
            height={18}
          />
        </Link>
      </nav>
    </header>
  );
};
