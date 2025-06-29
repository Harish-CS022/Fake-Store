import React from "react";

export default function ProductCard({product, addToCart}) {
  return (
    <div className="border rounded-lg p-4 shadow flex flex-col">
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-2" />
      <h2 className="font-semibold text-md">{product.title}</h2>
      <p className="text-lg font-bold mt-1">{product.price}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mt-auto" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
