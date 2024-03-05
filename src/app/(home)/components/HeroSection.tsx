import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";
import Tittle from "./tittle";

export default function HeroSection() {
  return (
    <>
      <div className=" min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between ">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className=" space-y-10 text-center lg:text-left">
          <h1 className=" text-4xl lg:text-7xl font-bold">
            Nice to meet you! 👋 <br />{" "}
            <span className=" underline underline-offset-8 decoration-green-500 ">
              {" I'm Ramesh."}
            </span>
          </h1>

          <p className=" md:w-96 text-lg text-gray-300">
            {
              " I'm a web developer passionate about building a modern web application that users love."
            }
          </p>

          <Link href={"mailto:some@gmail.com"} className=" inline-block group">
            <Tittle text="Contact 📧 "/>
          </Link>
        </div>

        <div>
          <div className=" w-72 h-72 space-y-3 -rotate-[30deg] relative ">
            <div className=" flex gap-3 translate-x-8">
              <div className=" w-32 h-32 rounded-2xl bg-green-500"></div>
              <div className=" w-32 h-32 rounded-full bg-indigo-500"></div>
            </div>

            <div className=" flex gap-3 translate-x-8">
              <div className=" w-32 h-32 rounded-full bg-indigo-500"></div>
              <div className=" w-32 h-32 rounded-2xl bg-green-500"></div>
            </div>
            <div className=" glow absolute top-[0%] right-[10%] -z-10"></div>
          </div>
          <Button
        borderRadius="1.75rem"
        className=" font-semibold"
      >
        Availalbe for work
      </Button>
        </div>
      </div>
    </>
  );
}
