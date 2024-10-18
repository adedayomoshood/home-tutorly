"use client";

import CheckIcon from "@/icons/check";
import FilterAttribute from "../filter-attribute";
import FilterIcon from "@/icons/filter";
import StarIcon from "@/icons/star";
import { useState } from "react";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { FilterParams } from "@repo/lib/types/filter.types";

export default function Filter() {
  const { handleFilter } = useAppContext();
  const [selectedFilters, setSelectedFilters] = useState<FilterParams>();

  const handleCheckboxChange = (key: string, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };

      switch (key) {
        case "gender":
          newFilters.gender =
            newFilters.gender === value ? null : (value as "male" | "female");
          break;
        case "isVerified":
          newFilters.isVerified = newFilters.isVerified ? undefined : true;
          break;
        case "isKidsExpert":
          newFilters.isKidsExpert = newFilters.isKidsExpert ? undefined : true;
          break;
        case "isFiveStar":
          newFilters.isFiveStar = !!newFilters.isFiveStar ? undefined : true;
          break;
        default:
          break;
      }

      handleFilter(newFilters);
      return newFilters;
    });
  };

  return (
    <aside>
      <section className="md:w-64 p-8 flex-col bg-white rounded-xl sticky top-8">
        <section className="flex justify-between items-center mb-6">
          <h3 className="font-extrabold">Filter</h3>
          <FilterIcon />
        </section>

        <section className="flex flex-wrap gap-2">
          <FilterAttribute
            value="isVerified"
            label="Verified"
            size="md"
            icon={<CheckIcon className="fill-green-500" />}
            onChange={() => handleCheckboxChange("isVerified", "true")}
            isChecked={selectedFilters?.isVerified}
          />

          <FilterAttribute
            size="md"
            value="male"
            label="Male"
            onChange={() => handleCheckboxChange("gender", "male")}
            isChecked={selectedFilters?.gender === "male"}
          />

          <FilterAttribute
            size="md"
            value="female"
            label="Female"
            onChange={() => handleCheckboxChange("gender", "female")}
            isChecked={selectedFilters?.gender === "female"}
          />

          <FilterAttribute
            size="md"
            value="Kids Expert"
            label="Kids Expert"
            onChange={() => handleCheckboxChange("isKidsExpert", "true")}
            isChecked={selectedFilters?.isKidsExpert}
          />

          <FilterAttribute
            size="md"
            value="Science"
            label="Science"
            onChange={() => handleCheckboxChange("attributes", "Science")}
            isChecked={selectedFilters?.attributes?.includes("Science")}
          />

          <FilterAttribute
            size="md"
            value="Art"
            label="Art"
            onChange={() => handleCheckboxChange("attributes", "Art")}
            isChecked={selectedFilters?.attributes?.includes("Art")}
          />

          <FilterAttribute
            size="md"
            value="5 Stars"
            label="5 Stars"
            icon={<StarIcon className="fill-yellow-500" />}
            onChange={() => handleCheckboxChange("isFiveStar", "true")}
            isChecked={selectedFilters?.isFiveStar}
          />

          <FilterAttribute
            size="md"
            value="Maths"
            label="Maths"
            onChange={() => handleCheckboxChange("attributes", "Maths")}
            isChecked={selectedFilters?.attributes?.includes("Maths")}
          />

          <FilterAttribute
            size="md"
            value="Physics"
            label="Physics"
            onChange={() => handleCheckboxChange("attributes", "Physics")}
            isChecked={selectedFilters?.attributes?.includes("Physics")}
          />

          <FilterAttribute
            size="md"
            value="3 Years of Experience"
            label="3 Years of Experience"
            onChange={() => handleCheckboxChange("attributes", "3yoe")}
            isChecked={selectedFilters?.attributes?.includes("3yoe")}
          />
        </section>
      </section>
    </aside>
  );
}
