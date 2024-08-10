import React from "react";

const Cart = ({ cart }) => {
  //   console.log(cart.product);
  return (
    <div className=" border border-black p-3 mb-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-1 gap-5 items-center">
          <img src={cart.product.image} alt="" className="h-16" />
          <div className="flex flex-col gap-2">
            <p className="font-bold text2xl">{cart.product.title}</p>
            <p className="text-gray-500">Price (${cart.product.price})</p>
          </div>
        </div>
        <div className="flex-3">
          <div className="flex flex-col gap-4">
            <p>Quantity</p>
            <div className="flex gap-2 items-center">
              <button className="bg-black px-2 text-white">-</button>
              <p>3</p>
              <button className="bg-black px-2 text-white">+</button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <p>${cart.product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
