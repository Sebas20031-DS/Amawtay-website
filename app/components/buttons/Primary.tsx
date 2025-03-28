"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Primary({
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
    <a
      href={href}
      className={
        resolvedTheme === "dark" ? "btn-primary-dark" : "btn-primary-light"
      }
    >
      {children}
    </a>
  );
}
