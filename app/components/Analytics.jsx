"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-JF5377DG23", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
