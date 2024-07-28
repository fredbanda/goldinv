import React from "react";
import MainButton from "../common/MainButton";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
         Earn from R650 000 monthly by trading Gold
        </p>
        <p className="text-[1.375rem] font-[500]">

        Investment Project Africa Gold Capital Launched with Support from Patrice Motsepe!
        The most influential figure in the mining industry, Patrice Motsepe, backs this initiative! Open to all residents of South Africa!
        <br />
        <span className="text-2xl text-red-600">The most stable asset, with a minimal investment of just R 2000!</span>

        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
          <div className="flex gap-[1.56rem] items-center">
            <img src="/images/fancy_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal">Learn More</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
          width={1100}
          height={900}
          className="rounded-md h-auto"
        />
      </div>
    </section>
  );
}

export default HeroSection;
