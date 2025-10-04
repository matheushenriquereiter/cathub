"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthCheck({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const publicRoutes = ["/login", "/register"];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && !publicRoutes.includes(pathname)) {
      router.push("/register");
    }
  }, [pathname, router]);

  return children;
}
