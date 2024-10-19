import { useMemo } from "react";
import { TutorType } from "../types/tutor.types";
import { AppContextType, useAppContext } from "./useAppContext";

export function useFilteredTutors(
  tutors: TutorType[],
  {
    activeFilters,
    searchTerm,
  }: { activeFilters: AppContextType["activeFilters"]; searchTerm: string }
) {
  return useMemo(() => {
    return tutors.filter((tutor) => {
      const matchesSearchTerm = searchTerm
        ? tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tutor.bio.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesFilters = activeFilters.every((filter) => {
        switch (filter) {
          case "verified":
            return tutor.isVerified;
          case "male":
            return tutor.gender === "male";
          case "female":
            return tutor.gender === "female";
          case "kidsExpert":
            return tutor.isKidsExpert;
          case "fiveStars":
            return tutor.rating === 5.0;
          case "experience":
            return tutor.experience >= 3;
          case "science":
            return tutor.attributes.includes("science");
          case "art":
            return tutor.attributes.includes("art");
          case "maths":
            return tutor.attributes.includes("maths");
          case "physics":
            return tutor.attributes.includes("physics");
          case "english":
            return tutor.attributes.includes("english");
          default:
            return true;
        }
      });

      return matchesSearchTerm && matchesFilters;
    });
  }, [tutors, activeFilters, searchTerm]);
}

export default useFilteredTutors;
