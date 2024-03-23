import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  classname?: string;
}

const typographyFactory = (tag: string, style: string) => {
  return (props: TypographyProps) =>
    React.createElement(tag, {
      className: cn(style, props.classname || ""),
      children: props.children,
    });
};

const h1 = "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl";
const h2 = "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0";
const h3 = "scroll-m-20 text-2xl font-semibold tracking-tight";
const h4 = "scroll-m-20 text-xl font-semibold tracking-tight";
const p = "leading-7";
const lead = "text-xl text-muted-foreground";
const large = "text-lg font-semibold";
const small = "text-sm font-medium leading-none";
const mute = "text-sm text-muted-foreground";

export const Typography = {
  h1: typographyFactory("h1", h1),
  h2: typographyFactory("h2", h2),
  h3: typographyFactory("h3", h3),
  h4: typographyFactory("h4", h4),
  p: typographyFactory("p", p),
  lead: typographyFactory("p", lead),
  large: typographyFactory("div", large),
  small: typographyFactory("small", small),
  muted: typographyFactory("small", mute),
};
