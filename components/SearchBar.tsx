"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item"></div>
    </form>
  );
};
