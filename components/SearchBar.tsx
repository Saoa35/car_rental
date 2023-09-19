"use client";

// import Image from "next/image";
// import Link from "next/link";
import React, { useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
