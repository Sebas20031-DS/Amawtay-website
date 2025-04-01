"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PrimaryLink({
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

  if (!mounted) return <div className="py-2 px-4 border rounded-md"></div>;

  return (
    <Link
      href={href}
      className={` grid justify-center items-center ${
        resolvedTheme === "dark" ? "btn-primary-dark" : "btn-primary-light"
      }
      `}
    >
      {children}
    </Link>
  );
}
