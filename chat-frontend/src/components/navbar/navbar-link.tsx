"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type userNavLink = {
  name: string;
  href: string;
};

export const NavBarLink = ({ link }: { link: userNavLink }) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <li
      className={`navbar__item ${
        isActive ? "text-black " : "text-muted-foreground"
      }  hover:text-black uppercase block cursor-pointer navigation`}
    >
      <Link href={link.href} scroll={false} className="navbar__link">
        <span className="navbar__link-text">{link.name}</span>
      </Link>
    </li>
  );
};
