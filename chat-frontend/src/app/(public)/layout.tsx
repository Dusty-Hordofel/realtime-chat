import { userNavLinksData } from "@/components/navbar/data/user-nav-links-data";
import { Navbar } from "@/components/navbar/navbar";
import React, { ReactNode } from "react";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar navLinks={userNavLinksData} />
      {children}
    </>
  );
}

export default PublicLayout;
