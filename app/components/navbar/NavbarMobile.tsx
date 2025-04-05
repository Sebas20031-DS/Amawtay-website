import Link from "next/link";
import { navItems } from "@/app/constants";
import MovileToggler from "./MovileToggler";
import GradientLink1 from "../dynamic/GradientLink1";
import GradientLink2 from "../dynamic/GradientLink2";

export default function NavbarMobile() {
  return (
    <div className="lg:hidden flex-col justify-center ">
      <MovileToggler
        className="fixed right-0 z-20 w-full flex flex-col items-center justify-center py-2 mt-3 "
        bgDark="bg-dark"
        bgLight="bg-light"
      >
        <ul className="rounded-lg  px-25">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="py-3 px-6 hover-primary border-b border-gray-100 "
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-6 p-6 ">
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
      </MovileToggler>
    </div>
  );
}
