import React, { use } from "react";
import Product from "./Product";

const DigitalTools = ({ productPromise }) => {
  const products = use(productPromise);

  console.log(products);
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DigitalTools;
