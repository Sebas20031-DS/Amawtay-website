"use client";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";

type ShadowImgProps = {
  src: string | StaticImageData; // Acepta tanto URL como imagen importada
};

export default function ShadowImg({ src }: ShadowImgProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={src}
      alt="Imagen"
      className={`rounded-lg w-1/3 border shadow-lg mx-2 ${
        resolvedTheme === "dark"
          ? "border-purple-700 shadow-purple-400"
          : "border-[#3b63a9] shadow-blue-500"
      }`}
    />
  );
}
