"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import GradientLink1 from "./GradientLink1";
import GradientLink2 from "./GradientLink2";

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
      )}
    </>
  );
}
