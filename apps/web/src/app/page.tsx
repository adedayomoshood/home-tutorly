import Filter from "@/components/filter";
import MobileFilter from "@/components/mobile-filter";
import Search from "@/components/search";
import Tutors from "@/components/tutors";
import { tutors } from "@repo/lib/data/tutors";

export default function Home() {
  return (
    <section className="grid md:grid-cols-[max-content_1fr] gap-6">
      <section className="hidden md:flex">
        <Filter />
      </section>

      <section className="flex flex-col">
        <Search />

        <MobileFilter />

        <Tutors tutors={tutors} />
      </section>
    </section>
  );
}
