import React from "react";
import { NavBarLink } from "./navbar-link";

export type NavLink = {
  name: string;
  href: string;
};

const NavbarLinks = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <ul className="navbar__list flex flex-col min-[840px]:flex-row min-[840px]:gap-x-4 gap-y-5">
      {navLinks.map((navLink, index) => (
        <NavBarLink key={index} link={navLink} />
      ))}
    </ul>
  );
};

export default NavbarLinks;
