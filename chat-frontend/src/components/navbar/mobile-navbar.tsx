"use client";
import React, { SVGProps, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import NavbarLinks from "./navbar-links";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";
import { useGetUser } from "@/hooks/auth/use-get-user";
import UserButton from "./user-button";

export type NavLink = {
  name: string;
  href: string;
};

export const MobileNavbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { user } = useGetUser();

  return (
    <div className="min-[840px]:hidden flex justify-between items-center h-full">
      <Logo />
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="text-2xl font-normal">
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="px-5 py-10 space-y-4">
            <div className="flex items-center justify-center mb-5">
              <Logo />
            </div>
            <div className=" flex w-auto gap-x-2 items-center justify-center">
              <NavbarLinks navLinks={navLinks} />
            </div>

            {user && (
              <div className=" flex items-center justify-center bg-red-400">
                <UserButton />
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
