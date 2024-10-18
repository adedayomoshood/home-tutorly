import { TutorType } from '@repo/lib/types/tutor.types'
import UserAttribute from "./attribute";
import cn from "@/utils/cn";
import CheckIcon from "@/icons/check";
import StarIcon from "@/icons/star";
import Link from "next/link";
import Image from 'next/image';

export default function Tutor({ tutor }: { tutor: TutorType }) {
  return (
    <Link href="/" className="flex flex-col gap-4 group/tutor cursor-pointer outline-none">
      <figure
        className={cn(
          "border-4 border-gray-50 group-focus/tutor:border-primary-500/20 group-hover/tutor:border-primary-500/20",
          "transition-all ease-in rounded-xl h-44 md:h-auto md:max-h-64 md:aspect-[230/245] relative"
        )}
      >
        <Image src={tutor.avatarUrl} fill alt={tutor.name} className="rounded-xl w-full h-full object-cover" />
      </figure>

      <section className="flex flex-col gap-1">
        <section className="flex flex-wrap gap-2">
          {tutor.isVerified && (
            <UserAttribute
              value="isVerified"
              label="Verified"
              asFilter={false}
              icon={<CheckIcon className="fill-green-500" />}
            />
          )}

          <UserAttribute
            label={tutor.rating}
            value="true"
            asFilter={false}
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
