import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

export const MainNav = () => {
  return (
    <div className="items-center gap-4 hidden md:flex">
      <Link href="/">
        <Icons.Logo cursor="pointer" size={26} />
      </Link>
    </div>
  );
};
