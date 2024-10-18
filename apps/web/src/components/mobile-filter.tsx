"use client";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import Filter from "./filter";
import cn from "@/utils/cn";

export default function MobileFilter() {
  const { isOpenFilter} = useAppContext();

  return (
    <section
      className={cn(
        "flex flex-1 [&>*]:w-full md:hidden transition-all",
        isOpenFilter
          ? "max-h-[500px] pb-4"
          : "max-h-0 overflow-hidden"
      )}
    >
      <Filter />
    </section>
  );
}
