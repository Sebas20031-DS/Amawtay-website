import Link from "next/link";
import { navItems } from "@/app/constants";
import MovileToggler from "../dynamic/MovileToggler";

export default function NavbarMobile() {
  return (
    <div className="lg:hidden flex-col justify-end">
      <MovileToggler>
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
      </MovileToggler>
    </div>
  );
}
