"use client";
import { unauthenticatedRoutes } from "@/app/common/constants/routes";
import { useGetUser } from "@/hooks/use-get-user";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const [isUnauthorizedRoute, setIsUnauthorizedRoute] = useState(false);
  const pathname = usePathname(); // Obtenez le pathname actuel

  const { user } = useGetUser();

  useEffect(() => {
    if (unauthenticatedRoutes.includes(pathname)) {
      setIsUnauthorizedRoute(true);
    }
  }, [pathname]);

  return <>{isUnauthorizedRoute ? children : user && children}</>;
};

export default AuthGuard;
