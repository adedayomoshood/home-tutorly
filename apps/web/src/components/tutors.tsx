"use client";

import { useAppContext } from "@repo/lib/hooks/useAppContext";
import Tutor from "./tutor";
import useFilteredTutors from "@repo/lib/hooks/useFilteredTutors";
import { TutorType } from "@repo/lib/types/tutor.types";

export default function Tutors({ tutors }: { tutors: TutorType[] }) {
  const { activeFilters, searchTerm } = useAppContext();

  const filteredTutors = useFilteredTutors(tutors, {
    activeFilters,
    searchTerm,
  });

  return (
    <main className="bg-white flex-1 p-5 gap-5 rounded-xl md:rounded-3xl grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
      {filteredTutors.map((tutor) => (
        <Tutor tutor={tutor} key={tutor.id} />
      ))}

      <section className="col-span-full">
        {filteredTutors.length === 0 && (
          <p className="text-red-700 p-2 border border-red-500/20 rounded-lg text-center bg-red-100 w-full">
            No tutors match your {searchTerm ? "search" : "filter"} criteria
          </p>
        )}
      </section>
    </main>
  );
}
