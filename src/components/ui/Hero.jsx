import React from "react";
import HeroImage from "../../assets/hero.jpg";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="flex py-15 items-center w-10/12 mx-auto">
      <div>
        <span className="rounded-full px-4 py-1 bg-[#e1e7ff]">
          New: AI-Powered Tools Available
        </span>
        <h2 className="font-bold text-[72px] text-base/20 py-4 text-[#101727]">
          Supercharge Your Digital Workflow
        </h2>
        <p className="font-extralight leading-7 text-[18px] mb-8">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="space-x-4 flex">
          <a
            href="#"
            className="font-bold text-[16px] rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 px-4 py-3 text-white"
          >
            Explore Product
          </a>
          <a
            href="#"
            className="rounded-full font-bold text-[16px] px-4 py-3 flex flex-row items-center gap-1 border"
          >
            <CiPlay1 />
            Watch Demo
          </a>
        </div>
      </div>
      <div className="pl-15">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
