import Link from "next/link";
import { navItems } from "@/app/constants";
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex ml-14 space-x-10 items-center justify-center">
      <ul className="hidden lg:flex  space-x-10">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex space-x-6">
        <Secondary href="#">Registrarse</Secondary>
        <Primary href="#">Iniciar Sección</Primary>
      </div>
    </div>
  );
}
