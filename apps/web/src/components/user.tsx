import AvatarIcon from "@/icons/avatar";

export default function User() {
  return (
    <aside className="hidden md:flex items-center gap-2.5">
      <AvatarIcon />
      
      <span className="text-sm font-medium">Hello, Mariam</span>
    </aside>
  );
}
