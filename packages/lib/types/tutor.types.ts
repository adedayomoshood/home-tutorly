type ObjectValues<T> = T[keyof T];

export type TutorType = {
  id: string;
  name: string;
  bio: string;
  rating: number;
  avatarUrl: string;
  isVerified: boolean;
  isKidsExpert: boolean;
  gender: ObjectValues<typeof GenderAttributes>;
  attributes: string[];
};

export const GenderAttributes = {
  Male: "Male",
  Female: "Female",
} as const;

export const TutorAttributes = {
  Art: "art",
  Maths: "maths",
  English: "english",
  Physics: "physics",
  Science: "science",
  Experienced: "experienced",
} as const;
