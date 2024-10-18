"use client";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import Filter from "./filter";
import cn from "@/utils/cn";

export default function MobileFilter() {
  const { isOpenFilter} = useAppContext();

  return (
    <section
      className={cn(
        "flex [&>*]:w-full md:hidden",
        isOpenFilter
          ? "max-h-[500px] opacity-100 pb-4 transition-all"
          : "max-h-0 opacity-0 overflow-hidden transition-none"
      )}
    >
      <Filter />
    </section>
  );
}
