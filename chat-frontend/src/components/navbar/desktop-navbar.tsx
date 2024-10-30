"use client";
import NavbarLinks from "./navbar-links";
import UserButton from "./user-button";
import Logo from "./logo";
import { useGetUser } from "@/hooks/use-get-user";

export type NavLink = {
  name: string;
  href: string;
};
export const DesktopNavbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const { user } = useGetUser();
  console.log("🚀 ~ DesktopNavbar ~ user:", user);

  return (
    <header className="hidden min-[840px]:flex items-center justify-between">
      <nav
        className="navbar flex items-center justify-between w-full  bg-yellow-200"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="navbar__left flex gap-x-10">
          <Logo />
          <div className=" flex w-auto gap-x-2 items-center justify-center">
            <NavbarLinks navLinks={navLinks} />
          </div>
        </div>

        {user && (
          <div className="navbar__right flex items-center justify-center">
            <UserButton />
          </div>
        )}
      </nav>
    </header>
  );
};
