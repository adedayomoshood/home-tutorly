"use client";

import { useAppContext } from "@repo/lib/hooks/useAppContext";
import Tutor from "./tutor";
import useFilteredTutors from "@repo/lib/hooks/useFilteredTutors";
import { TutorType } from "@repo/lib/types/tutor.types";

export default function Tutors({ tutors }: { tutors: TutorType[] }) {
  const { filter } = useAppContext();
  const filteredTutors = useFilteredTutors(tutors, filter);

  return (
    <main className="bg-white p-5 gap-5 rounded-xl md:rounded-3xl grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
      {filteredTutors.map((tutor) => (
        <Tutor tutor={tutor} key={tutor.id} />
      ))}
    </main>
  );
}
