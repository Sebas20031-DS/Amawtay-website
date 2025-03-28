"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Primary from "./Primary";
import Secondary from "./Secondary";

import React from "react";

export default function MovileToggler({
  children,
}: {
  children: React.ReactNode;
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
          className={`fixed right-0 z-20 w-full flex flex-col items-center justify-center py-2 mt-5 ${
            resolvedTheme === "dark" ? "bg-dark" : "bg-light"
          }`}
        >
          {children}
          <div className="grid grid-cols-2 gap-4 p-5">
            <Secondary href="#">Registrarse</Secondary>
            <Primary href="#">Iniciar Sección</Primary>
          </div>
        </div>
      )}
    </>
  );
}
