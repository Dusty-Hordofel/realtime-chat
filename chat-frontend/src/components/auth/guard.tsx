"use client";
import { unauthenticatedRoutes } from "@/app/common/constants/routes";
import { useGetMe } from "@/hooks/use-get-me";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type GuardProps = {
  children: React.ReactNode;
};

const Guard = ({ children }: GuardProps) => {
  const [isUnauthorizedRoute, setIsUnauthorizedRoute] = useState(false);
  const pathname = usePathname(); // Obtenez le pathname actuel

  const { user } = useGetMe();

  useEffect(() => {
    if (unauthenticatedRoutes.includes(pathname)) {
      setIsUnauthorizedRoute(true);
    }
  }, [pathname]);

  return <>{isUnauthorizedRoute ? children : user && children}</>;
};

export default Guard;
