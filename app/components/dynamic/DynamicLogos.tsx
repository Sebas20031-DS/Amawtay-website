"use client";

import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type DynamicLogosProps = {
  properties: string;
  darkImage: string | StaticImageData;
  lightImage: string | StaticImageData;
};

export default function DynamicLogos({
  properties = "",
  darkImage,
  lightImage,
}: DynamicLogosProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={`"mr-2" ${properties}`}></div>;

  return (
    <Image
      className={properties}
      alt="logo"
      src={resolvedTheme === "dark" ? darkImage : lightImage}
    />
  );
}
