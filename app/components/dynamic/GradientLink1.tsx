"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

type GradientLink1Props = {
  children: React.ReactNode;
  href: string;
  className: string;
  darkcolor: string;
  lightcolor: string;
};

export default function GradientLink1({
  children,
  href,
  className,
  darkcolor,
  lightcolor,
}: GradientLink1Props) {
  const { resolvedTheme } = useTheme();

  return (
    <Link
      href={href}
      className={`${className} ${
        resolvedTheme === "dark" ? darkcolor : lightcolor
      }`}
    >
      {children}
    </Link>
  );
}
