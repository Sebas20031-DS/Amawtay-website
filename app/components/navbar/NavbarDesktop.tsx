import Link from "next/link";
import { navItems } from "@/app/constants";
import GradientLink1 from "../dynamic/GradientLink1";
import GradientLink2 from "../dynamic/GradientLink2";

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
        <GradientLink2
          href="#"
          className="grid justify-center items-center"
          darkcolor="link-secondary-dark"
          lightcolor="link-secondary-light"
        >
          Registrarse
        </GradientLink2>
        <GradientLink1
          href="#"
          className="grid justify-center items-center"
          darkcolor="link-primary-dark"
          lightcolor="link-primary-light"
        >
          Iniciar Sección
        </GradientLink1>
      </div>
    </div>
  );
}
