import { Shell } from "@/components/layout/shell";
import { Typography } from "@/components/typography";
import React from "react";

const Home = () => {
  return (
    <Shell className="gap-16">
      <section className="w-full min-h-80 flex flex-col items-center justify-center gap-4 text-center py-36 mx-auto bg-hero bg-cover bg-center rounded-md">
        <Typography.h1 classname="text-balance text-white">
          An e-commerce skateshop built with everything new in Next.js
        </Typography.h1>

        <Typography.lead classname="text-gray-300 text-balance max-w-[42rem]">
          Buy and sell skateboarding gears from independent brands and stores
          around the world with ease
        </Typography.lead>
      </section>
    </Shell>
  );
};

export default Home;
