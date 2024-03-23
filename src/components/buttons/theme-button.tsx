"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button onClick={changeTheme} variant="ghost" size='sm'>
      {mounted && theme === "dark" ? <Icons.Sun /> : <Icons.Moon />}
    </Button>
  );
};
