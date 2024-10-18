"use client";

import FilterIcon from "@/icons/filter";
import SearchIcon from "@/icons/search";
import cn from "@/utils/cn";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { useState } from "react";

export default function Search() {
  const { handleFilter, filter, onToggleFilter, isOpenFilter } = useAppContext();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    handleFilter({
      searchValue,
    });
  };

  return (
    <section className="flex gap-2 mb-4">
      <button
        onClick={onToggleFilter}
        className={cn(
          "transition-all flex md:hidden h-full rounded-lg bg-white items-center justify-center aspect-square",
          isOpenFilter ? "bg-gray-950 text-white" : "bg-white"
        )}
      >
        <FilterIcon width={24} height={24} />
      </button>

      <section className="flex flex-1 gap-2 p-3 pl-8 bg-white rounded-xl">
        <input
          defaultValue={filter.searchValue}
          className="flex-1 bg-transparent h-9 outline-none placeholder:text-gray-900"
          placeholder="Search tutors"
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch();
          }}
        />

        <button className="bg-primary-500 text-white h-9 w-9 flex items-center justify-center rounded-lg">
          <SearchIcon />
        </button>
      </section>
    </section>
  );
}
