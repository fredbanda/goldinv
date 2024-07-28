import React from "react";
import MainButton from "../common/MainButton";
import Image from "next/image";

function VideoPlayerSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 mt-[-3.31rem]">
      <div>
        <p className="text-lightBlue font-bold text-2xl ">
          Patrice Motsepe
        </p>
        <p className="text-slate-700 text-[1.2rem] mt-4 mb-8">

          A billionaire who made a $3 billion fortune in the mining industry, including gold!
          Billionaire Patrice Motsepe Opens Access to His New Project AGC (Africa Gold Capital) for South African Residents!

          Patrice Motsepe, a billionaire who made his $3 billion fortune in the mining industry, including gold, has launched a new initiative. He believes that gold is the most stable and profitable asset, which led him to open a platform where everyone can earn from R 550,000 monthly with minimal effort.

          Motsepe has invested a lot of time, money, and effort into this project, utilizing his successful company, African Rainbow Minerals (ARM), as the main capital investor.

          On this platform, anyone can earn with minimal investments, says Motsepe. Gold is a virtually risk-free asset that even a child can invest in! Don’t miss your chance to start earning from R 550,000 by trading gold. The number of spots is limited! Register now!
        </p>
        <MainButton
          text="Explore"
          classes="!h-[3.01544rem] hover:bg-white w-[8.2925rem] text-lightBlue font-bold text-[1rem] rounded-[6.25rem] border-[4px] border-[#EBEAED] bg-white shadow-none"
        />
      </div>
      <div>
        <Image 
        src="/images/happy_guy.png" 
        alt="video player"
        width={1900}
        height={1490}
        className="h-auto object-contain rounded-md"
         />
      </div>
    </section>
  );
}

export default VideoPlayerSection;
