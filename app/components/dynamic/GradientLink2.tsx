"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

type GradientLink1Props = {
  children: React.ReactNode;
  href: string;
  className: string; // Made optional
  darkcolor: string; // Made optional with default
  lightcolor: string; // Made optional with default
};

export default function GradientLink2({
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
      className={`${className}  ${
        resolvedTheme === "dark" ? darkcolor : lightcolor
      }
      `}
    >
      {children}
    </Link>
  );
}
