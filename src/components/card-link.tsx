'use client'
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  url: string;
  variant?: "full" | "compact";
  selected?: boolean;
}

export function CardLink({ icon, title, url, variant = "compact", selected = false }: Props) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 350);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const isFull = variant === "full" || isSmallScreen;
  const bgColor = selected ? "bg-[#6c5ce7ad]" : "bg-zinc-800";

  return (
    <Link
      href={url}
      target="_blank"
      className={`w-full flex transition-colors ${bgColor} ${
        isFull
          ? "flex-row items-center justify-between px-8 py-5 rounded-full"
          : "flex-col p-4 rounded-xl"
      }`}
    >
      {isFull ? (
        <>
          <div className="flex items-center gap-3">
            {icon}
            <span>{title}</span>
          </div>
          <ArrowUpRight className="w-6 h-6" />
        </>
      ) : (
        <>
          <div className="w-full flex items-center justify-between">
            {icon}
            <ArrowRight className="w-6 h-6" />
          </div>
          <span className="mt-6 text-base">{title}</span>
        </>
      )}
    </Link>
  );
}
