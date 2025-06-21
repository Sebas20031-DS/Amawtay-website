"use client";
import { useTheme } from "next-themes";
import React from "react";

type ShadowVideoProps = {
  src: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
};

export default function ShadowVideo({
  src,
  className = "",
  width = "100%",
  height = "auto",
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
}: ShadowVideoProps) {
  const { resolvedTheme } = useTheme();

  const shadowClasses =
    resolvedTheme === "dark"
      ? "border-purple-700 shadow-purple-400"
      : "border-[#3b63a9] shadow-blue-500";

  return (
    <video
      src={src}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      className={`rounded-lg border shadow-lg ${shadowClasses} ${className}`}
    />
  );
}
