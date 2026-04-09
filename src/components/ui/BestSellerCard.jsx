import React from "react";

const BestSellerCard = () => {
  return (
    <div className="py-30">
      <div className="w-10/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[48px] font-extrabold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[16px] text-black/60">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          <div className="border-zinc-300 border p-4 rounded-2xl space-y-4 flex flex-col">
            <h2 className="font-extrabold text-3xl ">Starter</h2>
            <p className="">Perfect for getting started</p>
            <p>
              <span className="text-2xl font-bold">$0</span>
              <span className="text-black/60">/month</span>
            </p>
            <ul className="mt-2 list-disc pl-5 text-black/60">
              <li>Access to 10 free tools</li>
              <li>Basic templates</li>
              <li>Community support</li>
              <li>1 project per month</li>
            </ul>
            <button className="btn w-full font-bold text-[16px] rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 py-6 text-white mt-auto">
              Get Started Free
            </button>
          </div>
          <div className="bg-linear-to-r from-[#4f39f6] to-purple-500 py-6 text-white p-4 rounded-2xl space-y-4 relative flex flex-col">
            <span className="text-red-500 bg-amber-200 font-extralight text-[12px] px-3 py-1 rounded-2xl absolute -top-2.5 left-1/2 -translate-x-1/2">
              Most Popular
            </span>
            <h2 className="font-extrabold text-3xl ">Pro</h2>
            <p className="">Best for professionals</p>
            <p>
              <span className="text-2xl font-bold">$29</span>
              <span className="text-white/80">/month</span>
            </p>
            <ul className="mt-2 list-disc pl-5 text-white">
              <li>Access to 10 free tools</li>
              <li>Unlimited templates</li>
              <li>Priority support</li>
              <li>Unlimited projects</li>
              <li>Cloud sync</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="btn mt-auto w-full font-bold text-[16px] rounded-full py-6 text-[#4f39f6]">
              Get Started Free
            </button>
          </div>
          <div className="border-zinc-300 border p-4 rounded-2xl space-y-4 flex flex-col">
            <h2 className="font-extrabold text-3xl ">Starter</h2>
            <p className="">Perfect for getting started</p>
            <p>
              <span className="text-2xl font-bold">$0</span>
              <span className="text-black/60">/month</span>
            </p>
            <ul className="mt-2 list-disc pl-5 text-black/60">
              <li>Everything in Pro</li>
              <li>Team collaboration</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
              <li>SLA guarantee</li>
              <li>Custom branding</li>
            </ul>
            <button className="btn mt-auto w-full font-bold text-[16px] rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 py-6 text-white">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
