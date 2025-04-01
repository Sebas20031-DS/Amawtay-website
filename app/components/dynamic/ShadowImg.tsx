"use client";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";

type ShadowImgProps = {
  src: string | StaticImageData;
  imgstyle: string; // Acepta tanto URL como imagen importada
};

export default function ShadowImg({ src, imgstyle }: ShadowImgProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={src}
      alt="Imagen"
      className={`${imgstyle} ${
        resolvedTheme === "dark"
          ? "border-purple-700 shadow-purple-400"
          : "border-[#3b63a9] shadow-blue-500"
      }`}
    />
  );
}
