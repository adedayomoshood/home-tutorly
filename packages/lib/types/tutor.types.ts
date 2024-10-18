export type TutorType = {
  id: string;
  name: string;
  bio: string;
  rating: number;
  avatarUrl: string;
  isVerified: boolean;
  isKidsExpert: boolean;
  isFiveStar?: boolean;
  gender: "male" | "female";
  attributes: string[];
  experience: number;
};
