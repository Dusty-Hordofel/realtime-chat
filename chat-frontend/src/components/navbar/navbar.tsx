"use client";
import { usePathname } from "next/navigation";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { disableNavAndFooter } from "@/app/(public)/data/disable-navbar-and-footer";

export type NavLink = {
  name: string;
  href: string;
};

export const Navbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const pathname = usePathname();
  return (
    <div className="p-5 sticky top-0 z-10">
      {!disableNavAndFooter.includes(pathname) && (
        <>
          <DesktopNavbar navLinks={navLinks} />
          <MobileNavbar navLinks={navLinks} />
        </>
      )}
    </div>
  );
};
