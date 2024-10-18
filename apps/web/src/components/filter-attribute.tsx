"usec client";
import { ReactNode } from "react";
import cn from "@/utils/cn";

type FilterAttributeProps = {
  label: ReactNode;
  size?: "sm" | "md" | "lg";
  value: string;
  icon?: ReactNode;
  onChange: () => void;
  isChecked?: boolean;
};

export default function FilterAttribute({
  label,
  size = "sm",
  icon,
  value,
  onChange,
  isChecked,
}: FilterAttributeProps) {
  return (
    <label className={cn("flex items-center gap-1 cursor-pointer text-xs")}>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={cn(
          "flex items-center gap-1 font-bold px-2.5 py-1.5 rounded-full",
          isChecked ? "bg-black text-white" : "bg-gray-100",
          size === "sm" && "[&>svg]:w-3.5 [&>svg]:h-3.5",
          size === "md" && "px-2.5 [&>svg]:w-4 [&>svg]:h-4"
        )}
      >
        {label}
        {icon && icon}
      </div>
    </label>
  );
}
