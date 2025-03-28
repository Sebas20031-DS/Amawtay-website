import Link from "next/link";
import { navItems } from "@/app/constants";

export default function NavbarDesktop() {
  return (
    <ul className="hidden lg:flex ml-14 space-x-12">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
