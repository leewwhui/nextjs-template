import React from "react";
import { MainNav } from "./main-nav";
import { Search } from "@/components/search";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeButton } from "@/components/buttons/theme-button";

export const Navigation = () => {
  return (
    <nav className="border-b shadow-sm h-16 items-center px-14 justify-between flex">
      <MainNav />
      <MobileNav />

      <div className="flex items-center gap-3">
        <Search />

        <Link href="/signin">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
        </Link>

        <ThemeButton />
      </div>
    </nav>
  );
};
