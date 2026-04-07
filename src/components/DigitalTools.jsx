import React, { use } from "react";
import Product from "./Product";

const DigitalTools = ({ productPromise, activeTab, carts, setCarts }) => {
  const products = use(productPromise);

  // console.log(activeTab);
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default DigitalTools;
