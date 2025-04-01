"use client";
import { useTheme } from "next-themes";

export default function GradientWord({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <span
      className={`bg-gradient-to-r ${
        resolvedTheme === "dark"
          ? "from-purple-500 to-purple-800"
          : "from-[#3b63a9] to-blue-600"
      } text-transparent bg-clip-text`}
    >
      {children}
    </span>
  );
}
