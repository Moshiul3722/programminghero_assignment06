import React from "react";
import user from "/public/assets/user.png";
// import rocket from "../../../public/assets/rocket";
// import package from "../../../public/assets/package";

const Steps = () => {
  return (
    <div className="py-30 bg-[#f9fafc]">
      <div className="w-10/12 mx-auto">
        <div className="text-center">
          <h2 className="text-[48px] font-extrabold">Get Started In 3 Steps</h2>
          <p className="text-[16px] text-black/60">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-6 flex flex-col items-center">
            <span className="text-right w-full">batch</span>
            <div className="bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/15 px-4 py-3 text-white w-20 h-20 rounded-full">
              <img src={user} alt="" />
            </div>
            <h2>Create Account</h2>
            <p className="text-center">
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
