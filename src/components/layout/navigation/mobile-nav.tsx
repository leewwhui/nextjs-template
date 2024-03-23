import React from "react";
import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const MobileNav = () => {

  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Icons.Menu className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="flex gap-2 items-center">
              <Icons.Logo></Icons.Logo>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
