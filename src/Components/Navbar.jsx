import React from "react";

export default function Navbar({cartCount, openCart}) {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button className="relative" onClick={openCart}>
        🛒 Cart
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
          {cartCount}
        </span>
        </button>
    </nav>
  );
}
