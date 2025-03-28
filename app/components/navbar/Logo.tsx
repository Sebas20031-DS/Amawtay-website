"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import logoDark from "@/public/imgs/logo_dark.svg";
import logoLight from "@/public/imgs/logo_light.svg";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 w-1"></div>;

  return (
    <Image
      className="h-9 w-9"
      alt="logo"
      src={resolvedTheme === "dark" ? logoDark : logoLight}
    />
  );
}
