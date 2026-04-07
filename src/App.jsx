import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import DigitalTools from "./components/DigitalTools";
import Counter from "./components/ui/Counter";
import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import Steps from "./components/ui/Steps";

const getProducts = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);
  // console.log(carts);
  return (
    <>
      <Navbar carts={carts} />
      <Hero />
      <div className="bg-linear-to-r from-[#4f39f6] to-purple-500">
        <Counter />
      </div>

      <div className="max-w-10/12 mx-auto py-30">
        <div>
          <h2 className="font-extrabold text-[48px] text-center">
            Premium Digital Tools
          </h2>
          <p className="py-4 w-5/12 text-[16px] mx-auto text-center">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box mb-5 justify-center bg-transparent border-none">
          <input
            type="radio"
            name="product_tabs"
            className="tab rounded-full w-30"
            aria-label="Products"
            onClick={() => setActiveTab("products")}
            defaultChecked
          />
          <input
            type="radio"
            name="product_tabs"
            className="tab rounded-full w-30"
            aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>
        {activeTab === "products" ? (
          <DigitalTools
            productPromise={productPromise}
            activeTab={activeTab}
            carts={carts}
            setCarts={setCarts}
          />
        ) : (
          <Cart carts={carts} setCarts={setCarts} />
        )}
      </div>
      <Steps />
    </>
  );
}

export default App;
