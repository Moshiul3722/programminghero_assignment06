import React, { useState } from "react";

const Product = ({ product }) => {
  const [isBuy, setBuy] = useState(false);
  return (
    <div className="border-zinc-300 border p-4 rounded-2xl space-y-4">
      <p className="">{product.tag}</p>
      <h2 className="font-extrabold text-3xl ">{product.name}</h2>
      <p className="text-black/60">{product.description}</p>
      <p>
        <span className="text-2xl font-bold">${product.price}</span>
        <span className="text-black/60">/{product.period}</span>
      </p>
      <ul className="mt-2 list-disc pl-5 text-black/60">
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        onClick={() => setBuy(true)}
        className="btn mt-2.5 w-full font-bold text-[16px] rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 py-6 text-white"
      >
        {isBuy ? "Add to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Product;
