import Link from "next/link";
import { navItems } from "@/app/constants";
import { X, Menu } from "lucide-react";

export default function NavbarMobile({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="lg:hidden md:flex flex-col justify-end">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed right-0 z-20 bg-neutral-100/90 w-full p-8 flex flex-col items-center justify-center">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-3">
                <Link href={item.href} className="text-neutral-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
