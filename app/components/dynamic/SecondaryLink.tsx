"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SecondaryLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="py-2 px-3 border rounded-md"></div>;

  return (
    <Link
      href={href}
      className={
        resolvedTheme === "dark" ? "btn-secondary-dark" : "btn-secondary-light"
      }
    >
      {children}
    </Link>
  );
}
