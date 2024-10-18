import Filter from "@/components/filter";
import Search from "@/components/search";
import Tutors from "@/components/tutors";
import FilterIcon from "@/icons/filter";
import { tutors } from "@repo/lib/data/tutors";

export default function Home() {

  return (
    <section className="grid md:grid-cols-[max-content_1fr] gap-6">
      <section className="hidden md:flex">
        <Filter />
      </section>
 
      <section className="flex flex-col gap-4">
        <section className="flex gap-2">
          <section className="flex md:hidden h-full rounded-lg bg-white items-center justify-center aspect-square">
            <FilterIcon />
          </section>

          <Search />
        </section>

        <section className="block md:hidden">
          <Filter />
        </section>
        
        <Tutors tutors={tutors} />
      </section>
    </section>
  );
}
