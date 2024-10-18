import Nav from "@/components/nav";
import User from "@/components/user";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-6 md:grid md:grid-cols-3 md:h-11 items-center pb-6 box-content">
      <h1 className="font-extrabold text-lg -tracking-wide">
        <Link href="/">Home tutorly</Link>
      </h1>

      <section className="block ml-auto md:contents">
        <section className="flex items-center md:justify-center">
          <Nav />
        </section>

        <section className="flex items-center md:justify-end">
          <User />
        </section>
      </section>
    </header>
  );
}
