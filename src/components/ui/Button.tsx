import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href = "#",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-all duration-300";

  const style =
    variant === "primary"
      ? "bg-black text-white hover:bg-neutral-800"
      : "border border-black text-black hover:bg-black hover:text-white";

  return (
    <Link
      href={href}
      className={`${base} ${style}`}
    >
      {children}
    </Link>
  );
}