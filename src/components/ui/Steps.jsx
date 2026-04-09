import React from "react";
import user from "/public/assets/user.png";
import rocket from "/public/assets/rocket.png";
import packageBox from "/public/assets/package.png";

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
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          <div className="bg-white p-6 flex flex-col items-center relative rounded-2xl min-h-100">
            {/* Number Badge */}
            <h2 className="absolute right-5 w-9 h-9 rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 text-white flex items-center justify-center text-[13px]">
              01
            </h2>

            {/* Icon Circle */}
            <div className="mt-10 bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/15 w-20 h-20 rounded-full flex items-center justify-center">
              <img src={user} alt="user icon" className="w-10 h-10" />
            </div>

            {/* Title */}
            <h2 className="py-4 text-[24px] font-bold">Create Account</h2>

            {/* Description */}
            <p className="text-center font-thin w-10/12 text-black/60 mb-10">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center relative rounded-2xl min-h-100">
            {/* Number Badge */}
            <h2 className="absolute right-5 w-9 h-9 rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 text-white flex items-center justify-center text-[13px]">
              02
            </h2>

            {/* Icon Circle */}
            <div className="mt-10 bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/15 w-20 h-20 rounded-full flex items-center justify-center">
              <img src={packageBox} alt="user icon" className="w-10 h-10" />
            </div>

            {/* Title */}
            <h2 className="py-4 text-[24px] font-bold">Choose Products</h2>

            {/* Description */}
            <p className="text-center font-thin w-10/12 text-black/60 mb-10">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center relative rounded-2xl min-h-100">
            {/* Number Badge */}
            <h2 className="absolute right-5 w-9 h-9 rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 text-white flex items-center justify-center text-[13px]">
              03
            </h2>

            {/* Icon Circle */}
            <div className="mt-10 bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/15 w-20 h-20 rounded-full flex items-center justify-center">
              <img src={rocket} alt="user icon" className="w-12 h-12" />
            </div>

            {/* Title */}
            <h2 className="py-4 text-[24px] font-bold">Start Creating</h2>

            {/* Description */}
            <p className="text-center font-thin w-10/12 text-black/60 mb-10">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
