import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  // console.log(carts);
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    if (carts.length != 0) {
      toast.success("Payment successful!");
    }
  };
  const handleDelete = (item) => {
    const filteredItems = carts.filter(
      (filterItem) => filterItem.id !== item.id,
    );
    setCarts(filteredItems);
    toast.warning("Item Deleted!");
  };
  return (
    <div className="border border-gray-300 rounded-2xl p-6 text-2xl">
      <h2 className="text-2xt font-bold">Your Cart</h2>
      {carts.length === 0 ? (
        <p className="text-center font-bold text-black/60 bg-amber-100 rounded-2xl mt-4 py-8">
          Cart is empty
        </p>
      ) : (
        <>
          {carts.map((item) => (
            <div key={item.id} className="py-2">
              <div className="bg-gray-100 p-5 rounded-2xl flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-[20px]">{item.name}</span>
                  <span className="text-[16px] text-black/50">
                    ${item.price}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-[#ff3980] text-[16px] font-bold cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="flex justify-between my-4">
        <div className="text-[16px]">Total:</div>
        <div className="font-bold">$ {totalPrice.toFixed(2)}</div>
      </div>
      <button
        onClick={handlePayment}
        className="btn w-full rounded-full bg-linear-to-r from-[#4f39f6] to-purple-500 px-4 py-3 text-white"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
