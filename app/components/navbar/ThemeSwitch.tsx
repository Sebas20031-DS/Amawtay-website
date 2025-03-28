"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  // Asegurar que <body> tenga la clase "dark" cuando el tema es oscuro
  useEffect(() => {
    if (resolvedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [resolvedTheme]);

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full transition-all duration-300"
      aria-label="Toggle theme"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
