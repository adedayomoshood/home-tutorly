import NavItem from "./nav-item";

export default function Nav() {
  return (
    <nav className="flex gap-6">
      <NavItem href="/about-us" label="About us" />
      <NavItem href="/contact" label="Contact" />
    </nav>
  );
}

