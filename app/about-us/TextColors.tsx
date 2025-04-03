"use client";
import { useTheme } from "next-themes";

type TextColorProps = {
  children: React.ReactNode;
  className: string;
};

export default function TextColor({ children, className }: TextColorProps) {
  const { resolvedTheme } = useTheme();

  return (
    <p
      className={`${className} ${
        resolvedTheme === "dark" ? "text-purple-300" : "text-blue-700"
      }`}
    >
      {children}
    </p>
  );
}
