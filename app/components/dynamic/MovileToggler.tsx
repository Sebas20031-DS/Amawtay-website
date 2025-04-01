"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import PrimaryLink from "./PrimaryLink";
import SecondaryLink from "./SecondaryLink";

import React from "react";

export default function MovileToggler({
  children,
  style,
  styleBtn,
}: {
  children: React.ReactNode;
  style: string;
  styleBtn: string;
}) {
  // Estado para manejar la apertura/cierre del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para cambios por tema claro o oscuro
  const { resolvedTheme } = useTheme();

  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú móvil que aparece cuando isMenuOpen es verdadero */}
      {isMenuOpen && (
        <div
          className={`${style}${
            resolvedTheme === "dark" ? "bg-dark" : "bg-light"
          }`}
        >
          {children}
          <div className={styleBtn}>
            <SecondaryLink href="#">Registrarse</SecondaryLink>
            <PrimaryLink href="#">Iniciar Sección</PrimaryLink>
          </div>
        </div>
      )}
    </>
  );
}
