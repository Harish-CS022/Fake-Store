import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import CartModel from "./Components/CartModel";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);

    if (isExist) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);

    if (item.quantity === 1) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setShowCart(true)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
        </div>

        {showCart && (
      <CartModel
        cartItems={cart}
        closeCart={() => setShowCart(false)}
        removeFromCart={removeFromCart}
      />
    )}
      </div>
  );
}

export default App;
