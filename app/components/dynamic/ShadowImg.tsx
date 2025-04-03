"use client";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";

type ShadowImgProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width: number;
  height: number;
};

export default function ShadowImg({
  src,
  className = "",
  alt,
  width,
  height,
}: ShadowImgProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={src}
      alt={alt}
      width={width} // Definir ancho
      height={height} // Definir alto
      className={`${className} ${
        resolvedTheme === "dark"
          ? "border-purple-700 shadow-purple-400"
          : "border-[#3b63a9] shadow-blue-500"
      }`}
    />
  );
}
