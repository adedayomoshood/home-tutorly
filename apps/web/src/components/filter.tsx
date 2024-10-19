"use client";

import CheckIcon from "@/icons/check";
import FilterIcon from "@/icons/filter";
import StarIcon from "@/icons/star";
import cn from "@/utils/cn";
import { filterOptions } from "@repo/lib/data/filter-options";
import { useAppContext } from "@repo/lib/hooks/useAppContext";

export default function Filter() {
  const { toggleFilter, activeFilters } = useAppContext();

  return (
    <aside>
      <section className="md:w-64 p-8 flex-col bg-white rounded-xl sticky top-8">
        <section className="flex justify-between items-center mb-6">
          <p className="font-extrabold">Filter</p>

          <FilterIcon className="hidden md:flex" />
        </section>

        <section className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              type="button"
              key={option.id}
              aria-label={`filter by ${option.label}`}
              onClick={() => toggleFilter(option.id)}
              className={cn(
                "flex items-center gap-1 font-bold px-4 py-1.5 rounded-full text-xs leading-4",
                activeFilters.includes(option.id)
                  ? "bg-black text-white"
                  : "bg-gray-100"
              )}
            >
              <span>{option.label}</span>

              {option.id === "verified" && (
                <CheckIcon className="w-4 h-4 fill-green-500" />
              )}

              {option.id === "fiveStars" && (
                <StarIcon className="w-4 h-4 fill-yellow-400" />
              )}
            </button>
          ))}
        </section>
      </section>
    </aside>
  );
}
