"use client";

import FilterIcon from "@/icons/filter";
import SearchIcon from "@/icons/search";
import cn from "@/utils/cn";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { useDebounce } from "@repo/lib/hooks/useDebounce";
import { useEffect, useState } from "react";

export default function Search() {
  const { searchTerm, setSearchTerm, onToggleFilter, isOpenFilter } =
    useAppContext();
  const [formValue, setFormValue] = useState("");
  const debouncedFormValue = useDebounce<string>(formValue, 300);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchTerm(formValue);
  };

  useEffect(() => {
    setSearchTerm(debouncedFormValue);
  }, [debouncedFormValue]);

  return (
    <form className="flex gap-2 mb-4" onSubmit={handleSearch}>
      <button
        onClick={onToggleFilter}
        className={cn(
          "transition-all flex md:hidden h-full rounded-lg bg-white items-center justify-center aspect-square",
          isOpenFilter ? "bg-gray-950 text-white" : "bg-white"
        )}
      >
        <FilterIcon width={24} height={24} />
      </button>

      <section className="flex flex-1 gap-2 p-2 md:p-3 pl-4 md:pl-8 bg-white rounded-xl">
        <input
          defaultValue={searchTerm}
          className="flex-1 bg-transparent h-8 md:h-9 outline-none placeholder:text-gray-900"
          placeholder="Search tutors"
          onChange={(e) => setFormValue(e.target.value)}
        />

        <button
          type="submit"
          className="bg-primary-500 text-white h-8 md:h-9 aspect-square flex items-center justify-center rounded-lg"
        >
          <SearchIcon />
        </button>
      </section>
    </form>
  );
}
