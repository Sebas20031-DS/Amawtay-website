"use client";
import { useTheme } from "next-themes";

export default function DynamicBg({
  children,
  className,
  bgDark,
  bgLight,
}: {
  children: React.ReactNode;
  className: string;
  bgDark: string;
  bgLight: string;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`${className} ${resolvedTheme === "dark" ? bgDark : bgLight}`}
    >
      {children}
    </div>
  );
}
