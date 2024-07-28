import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";

function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-4">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <Image src="/images/logo.png" alt="footer logo" width={50} height={50} />
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © {currentYear} {" "} Gold Profit Share Initiative. All rights reserved.
        </div>
        <div className="flex gap-4">
          {/* <p className="text-lightBlue text-[1rem]">Portfolio</p>
          <p className="text-lightBlue text-[1rem]">How it Works</p>
          <p className="text-lightBlue text-[1rem]">Pricing</p>
          <p className="text-lightBlue text-[1rem]">About</p>
          <p className="text-lightBlue text-[1rem]">Login</p> */}
        </div>
      </div>
      <Separator className="w-full bg-gray-500"/>
      <div className="pb-[2.56rem]">
        <p className="text-customGray text-center text-4xl font-bold">
        time is now or never !!
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
