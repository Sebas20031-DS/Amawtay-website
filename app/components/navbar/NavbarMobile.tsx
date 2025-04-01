import Link from "next/link";
import { navItems } from "@/app/constants";
import MovileToggler from "../dynamic/MovileToggler";

export default function NavbarMobile() {
  return (
    <div className="lg:hidden flex-col justify-center ">
      <MovileToggler
        style="fixed right-0 z-20 w-full flex flex-col items-center justify-center py-2 mt-5 "
        styleBtn="grid grid-cols-2 gap-6 p-6 "
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
      </MovileToggler>
    </div>
  );
}
