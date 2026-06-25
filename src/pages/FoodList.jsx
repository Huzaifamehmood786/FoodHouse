import { useState } from "react";
import FoodCard from "../components/FoodCard";
import PageTransition from "../components/PageTransition";
export default function FoodList() {
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart function
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2 className="food-menu">Food Menu</h2>

      {/* Food Items */}
      <FoodCard name="Burger" addToCart={addToCart} />
      <FoodCard name="Pizza" addToCart={addToCart} />
      <FoodCard name="Pasta" addToCart={addToCart} />

      {/* Cart Display */}
      <h3>🛒 Cart Items:</h3>
      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}
    </div>
  );
}