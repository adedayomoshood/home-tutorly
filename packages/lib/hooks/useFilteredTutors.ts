import { useMemo } from "react";
import { FilterParams } from "../types/filter.types";
import {  TutorType } from "../types/tutor.types";

export function useFilteredTutors(data: TutorType[], filterParams: FilterParams) {
  return useMemo(() => {
    return data.filter((tutor) => {
      const matchesAttributes = filterParams.attributes
        ? filterParams.attributes.every((attr) =>
            tutor.attributes.includes(attr)
          )
        : true;

      const matchesSearchValue = filterParams.searchValue
        ? tutor.name
            .toLowerCase()
            .includes(filterParams.searchValue.toLowerCase())
        : true;

      const matchesIsVerified =
        filterParams.isVerified !== undefined
          ? tutor.isVerified === filterParams.isVerified
          : true;

      const matchesIsKidsExpert =
        filterParams.isKidsExpert !== undefined
          ? tutor.isKidsExpert === filterParams.isKidsExpert
          : true;

      const matchesGender = filterParams.gender
        ? tutor.gender.toLowerCase() === filterParams.gender.toLowerCase()
        : true;

      return (
        matchesAttributes &&
        matchesSearchValue &&
        matchesIsVerified &&
        matchesIsKidsExpert &&
        matchesGender
      );
    });
  }, [data, filterParams]);
};

export default useFilteredTutors;
