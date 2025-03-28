import Link from "next/link";
import { navItems } from "@/app/constants";
import Primary from "../buttons/Primary";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex ml-14 space-x-12 items-center justify-center">
      <ul className="hidden lg:flex mt-2  space-x-12">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <a href="#" className="py-2 px-3 border rounded-md">
        Registrarse
      </a>
      <Primary href="#">Iniciar Sección</Primary>
    </div>
  );
}
