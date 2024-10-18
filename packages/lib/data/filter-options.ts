export const filterOptions = [
  { id: "verified", label: "Verified" },
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "kidsExpert", label: "Kids Expert" },
  { id: "science", label: "Science" },
  { id: "art", label: "Art" },
  { id: "fiveStars", label: "5" },
  { id: "maths", label: "Maths" },
  { id: "english", label: "English" },
  { id: "physics", label: "Physics" },
  { id: "experience", label: "3 Years of Experience" },
];

export type FilterOptionType = (typeof filterOptions)[number];