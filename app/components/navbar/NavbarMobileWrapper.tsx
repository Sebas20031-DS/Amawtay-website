"use client";

import { useState } from "react";
import NavbarMobile from "./NavbarMobile";

export default function NavbarMobileWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <NavbarMobile isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />;
}
