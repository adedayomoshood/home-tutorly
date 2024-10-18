"use client";

import SearchIcon from "@/icons/search";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { useState } from "react";

export default function Search() {
  const { handleFilter, filter } = useAppContext();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    handleFilter({
      searchValue,
    });
  };

  return (
    <section className="flex flex-1 gap-2 p-3 pl-8 bg-white rounded-xl">
      <input
        defaultValue={filter.searchValue}
        className="flex-1 bg-transparent h-9 outline-none placeholder:text-gray-900"
        placeholder="Search tutors"
        onChange={(e) => {setSearchValue(e.target.value)
          handleSearch();
        }}
        onBlur={handleSearch}
      />

      <button className="bg-primary-500 text-white h-9 w-9 flex items-center justify-center rounded-lg">
        <SearchIcon />
      </button>
    </section>
  );
}
