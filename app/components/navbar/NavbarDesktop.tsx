import Link from "next/link";
import { navItems } from "@/app/constants";
import PrimaryLink from "../dynamic/PrimaryLink";
import SecondaryLink from "../dynamic/SecondaryLink";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex ml-14 space-x-10 items-center justify-center">
      <ul className="hidden lg:flex  space-x-10">
        {navItems.map((item, index) => (
          <li key={index} className="py-3 px-6 hover-primary rounded-lg">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex space-x-6">
        <SecondaryLink href="#">Registrarse</SecondaryLink>
        <PrimaryLink href="#">Iniciar Sección</PrimaryLink>
      </div>
    </div>
  );
}
