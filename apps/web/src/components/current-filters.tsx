"use client";

import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { filterOptions } from "@repo/lib/data/filter-options";
import CheckIcon from "@/icons/check";
import StarIcon from "@/icons/star";
import CloseIcon from "@/icons/close";
import cn from "@/utils/cn";

export default function CurrentFilters() {
  const { activeFilters, removeFilter } = useAppContext();

  return (
    <section
      className={cn(
        "transition-all ease-in h-fit",
        activeFilters.length
          ? "max-h-64 opacity-100 pb-4"
          : "max-h-0 opacity-0 transition-none"
      )}
    >
      <section
        className={cn(
          "flex gap-2 flex-wrap min-h-8",
          activeFilters.length ? "opacity-100" : "opacity-0"
        )}
      >
        {activeFilters.map((filterId) => {
          const filter = filterOptions.find((option) => option.id === filterId);
          if (!filter) return null;
          return (
            <section
              key={filterId}
              className="group leading-4 flex bg-white items-center gap-1 font-bold px-3.5 py-1.5 rounded-full text-xs border border-transparent hover:border-gray-200 transition-all"
            >
              <span>{filter.label.toString()}</span>

              {filterId === "verified" && (
                <CheckIcon className="w-4 h-4 fill-green-500" />
              )}

              {filterId === "fiveStars" && (
                <StarIcon className="w-4 h-4 fill-yellow-400" />
              )}
              <button
                type="button"
                aria-label={`delete ${filter.label}`}
                onClick={() => removeFilter(filterId)}
                className="ml-0.5 group text-gray-300"
              >
                <CloseIcon
                  className="h-4 w-4 group-hover:text-gray-400 hover:text-gray-600 transition-all"
                  strokeWidth={2}
                />
              </button>
            </section>
          );
        })}
      </section>
    </section>
  );
}
