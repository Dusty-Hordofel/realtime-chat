import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div
      aria-label="Cliquez sur le logo pour vous rendre sur la page d'accueil"
      tabIndex={0}
      className="navbar__logo"
    >
      <Link href="/" className="navbar__logo-link text-2xl font-extrabold">
        <span className="navbar__logo-text">BILOKO</span>
      </Link>
    </div>
  );
};

export default Logo;
