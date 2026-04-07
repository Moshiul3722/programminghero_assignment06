import React from "react";
import user from "/public/assets/user.png";
// import rocket from "../../../public/assets/rocket";
// import package from "../../../public/assets/package";

const Steps = () => {
  return (
    <div className="py-30 bg-[#f9fafc]">
      <div className="w-10/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[48px] font-extrabold">Get Started In 3 Steps</h2>
          <p className="text-[16px] text-black/60">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-6 flex flex-col items-center relative rounded-2xl">
            <h2 className="absolute right-5 w-9 h-9 rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 text-white flex items-center justify-center text-[13px]">
              01
            </h2>
            <div className="bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/15 px-4 py-3 text-white w-20 h-20 rounded-full">
              <img src={user} alt="" />
            </div>
            <h2 className="py-4 text-[24px] font-bold">Create Account</h2>
            <p className="text-center text-black/60">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center relative rounded-2xl">
            <h2 className="absolute right-5 w-9 h-9 rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 text-white flex items-center justify-center text-[13px]">
              01
            </h2>
            <div className="bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/15 px-4 py-3 text-white w-20 h-20 rounded-full">
              <img src={user} alt="" />
            </div>
            <h2 className="py-4 text-[24px] font-bold">Create Account</h2>
            <p className="text-center text-black/60 mb-10">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center relative rounded-2xl">
            <h2 className="absolute right-5 w-9 h-9 rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 text-white flex items-center justify-center text-[13px]">
              01
            </h2>
            <div className="bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/15 px-4 py-3 text-white w-20 h-20 rounded-full">
              <img src={user} alt="" />
            </div>
            <h2 className="py-4 text-[24px] font-bold">Create Account</h2>
            <p className="text-center text-black/60 mb-10">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
