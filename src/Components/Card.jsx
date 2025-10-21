import React from "react";

const Card = ({ prod }) => {
  return (
    <div className="border border-slate-500 rounded-md p-4 bg-blue-500/10 backdrop-blur-md cursor-pointer shadow-md hover:scale-105 transition">
      <img
        src={prod.image}
        alt={prod.title}
        className="w-full h-48 object-contain mb-4"
      />
      <p className="font-semibold  mb-2 line-clamp-2">{prod.title}</p>

      <div className="flex justify-between items-center">
        <p className=" text-lg font-semibold">${prod.price}</p>
        <button className="bg-blue-500 border border-slate-400 rounded-full px-4 py-2  text-sm transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
