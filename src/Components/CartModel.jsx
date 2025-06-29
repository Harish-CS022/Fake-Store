import React from 'react'

export default function CartModel({cartItems, closeCart, removeFromCart}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>

        {cartItems.length === 0 ? (
          <p className="text-center">Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
                <p className="text-sm">Price: ${item.price}</p>
                <p className="text-sm">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={closeCart}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
