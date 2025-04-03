"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { X, Menu } from "lucide-react";
import React from "react";

type MovileTogglerProps = {
  children: React.ReactNode;
  className: string;
  bgDark: string;
  bgLight: string;
};

export default function MovileToggler({
  children,
  className,
  bgDark,
  bgLight,
}: MovileTogglerProps) {
  // Estado para manejar la apertura/cierre del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para cambios por tema claro o oscuro
  const { resolvedTheme } = useTheme();

  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        {/* Llamamos a los componentes X y Menu como JSX */}
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú móvil que aparece cuando isMenuOpen es verdadero */}
      {isMenuOpen && (
        <div
          className={`${className} ${
            resolvedTheme === "dark" ? bgDark : bgLight
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
}
