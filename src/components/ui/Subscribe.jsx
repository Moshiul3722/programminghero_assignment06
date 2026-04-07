import React from "react";

const Subscribe = () => {
  return (
    <div className="py-30 bg-linear-to-r from-[#4f39f6] to-purple-500 text-white">
      <div className="w-10/12 mx-auto">
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-[40px] font-extrabold mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-[16px] text-white/60 font-extralight w-5/12">
            Join thousands of professionals who are already using Digitools to
            work smarter.Start your free trial today.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="btn rounded-full text-purple-500">
              Explore Products
            </button>
            <button className="btn rounded-full bg-transparent text-white/60 font-light">
              View Pricing
            </button>
          </div>
          <ul className="flex gap-4 mt-3 text-white/60 font-thin">
            <li>14-day free trial</li>
            <li>No credit card required</li>
            <li>Cancel anytime</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
