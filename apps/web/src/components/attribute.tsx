import cn from "@/utils/cn";
import { ReactNode } from "react";

export default function UserAttribute({
  label,
  size = "sm",
  icon,
}: {
  size?: "sm" | "md" | "lg";
  label: ReactNode;
  value: string;
  icon?: ReactNode;
  asFilter: boolean;
}) {
  return (
    <section
      className={cn(
        "flex items-center gap-1 font-bold bg-gray-100",
        size === "sm" &&
          "text-xs px-2.5 py-1.5 rounded-full [&>svg]:w-3.5 [&>svg]:h-3.5",
        size === "md" && "text-xs",
        size === "lg" && "text-base"
      )}
    >
      {label}

      {icon && icon}
    </section>
  );
}
