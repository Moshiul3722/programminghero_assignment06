import React from "react";

const Counter = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-around py-15 ">
      <div className="text-center">
        <h2 className="text-white text-[60px] font-extrabold">50K+</h2>
        <p className="text-[24px] text-white/80">Active Users</p>
      </div>
      <div className="text-center">
        <h2 className="text-white text-[60px] font-extrabold">200+</h2>
        <p className="text-[24px] text-white/80">Premium Tools</p>
      </div>
      <div className="text-center">
        <h2 className="text-white text-[60px] font-extrabold">4.9</h2>
        <p className="text-[24px] text-white/80">Rating</p>
      </div>
    </div>
  );
};

export default Counter;
