import { TutorType } from "@repo/lib/types/tutor.types";
import cn from "@/utils/cn";
import CheckIcon from "@/icons/check";
import StarIcon from "@/icons/star";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export default function Tutor({ tutor }: { tutor: TutorType }) {
  return (
    <Link
      href="/"
      className="flex flex-col gap-4 group/tutor cursor-pointer outline-none"
    >
      <figure
        className={cn(
          "border-4 border-gray-50 group-focus/tutor:border-primary-500/20 group-hover/tutor:border-primary-500/20",
          "transition-all ease-in rounded-xl h-44 md:h-auto md:max-h-64 md:aspect-[230/245] relative overflow-hidden"
        )}
      >
        <Image
          src={tutor.avatarUrl}
          width={230}
          height={230}
          alt={tutor.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <section className="flex flex-col gap-1">
        <section className="flex flex-wrap gap-2">
          {tutor.isVerified && (
            <UserAttribute
              label="Verified"
              icon={<CheckIcon className="fill-green-500" />}
            />
          )}

          <UserAttribute
            label={tutor.rating.toString()}
            icon={<StarIcon className="fill-yellow-500" />}
          />
        </section>

        <h3 className="font-extrabold transition-all ease-in group-focus/tutor:text-primary-500 group-hover/tutor:text-primary-500">
          {tutor.name}
        </h3>

        <p className="font-ibm font-light text-sm leading-relaxed">
          {tutor.bio}
        </p>
      </section>
    </Link>
  );
}

function UserAttribute({ label, icon }: { label: string; icon?: ReactNode }) {
  return (
    <section
      className={cn(
        "flex items-center gap-1 font-bold bg-gray-100",
        "text-xs px-2.5 py-1.5 rounded-full [&>svg]:w-3.5 [&>svg]:h-3.5"
      )}
    >
      {label}

      {icon && icon}
    </section>
  );
}
