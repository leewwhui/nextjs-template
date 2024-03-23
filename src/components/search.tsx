"use client";

import { Button } from "./ui/button";
import { Typography } from "./typography";
import { Icons } from "./icons";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "./ui/command";
import { useState } from "react";

export const Search = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="w-52 flex gap-2 justify-start items-center"
        onClick={() => setOpen(true)}
      >
        <Icons.Search size={16} />
        <Typography.p>Search products...</Typography.p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </>
  );
};
