import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const { addToCart } = useCart();

  const foods = [
    { id: 1, name: "Burger", price: 5, category: "burger" },
    { id: 2, name: "Pizza", price: 8, category: "pizza" },
    { id: 3, name: "Noodles", price: 6, category: "fastfood" },
    { id: 4, name: "Fries", price: 3, category: "fastfood" },
    { id: 5, name: "Sandwich", price: 4, category: "fastfood" },
    { id: 6, name: "Hot Dog", price: 4, category: "fastfood" },
    { id: 7, name: "Pasta", price: 7, category: "pasta" },
    { id: 8, name: "Shawarma", price: 5, category: "fastfood" },
    { id: 9, name: "Biryani", price: 6, category: "rice" },
    { id: 10, name: "Karahi", price: 10, category: "rice" },
    { id: 11, name: "BBQ Wings", price: 7, category: "chicken" },
    { id: 12, name: "Grilled Chicken", price: 9, category: "chicken" },
    { id: 13, name: "Fried Chicken", price: 8, category: "chicken" },
    { id: 14, name: "Club Sandwich", price: 6, category: "fastfood" },
    { id: 15, name: "Tacos", price: 5, category: "fastfood" },
    { id: 16, name: "Nachos", price: 6, category: "fastfood" },
    { id: 17, name: "Donut", price: 2, category: "dessert" },
    { id: 18, name: "Ice Cream", price: 3, category: "dessert" },
    { id: 19, name: "Milkshake", price: 4, category: "drink" },
    { id: 20, name: "Cold Drink", price: 2, category: "drink" },
    { id: 21, name: "Coffee", price: 3, category: "drink" },
    { id: 22, name: "Tea", price: 2, category: "drink" },
    { id: 23, name: "Samosa", price: 1, category: "snacks" },
    { id: 24, name: "Spring Rolls", price: 4, category: "snacks" },
    { id: 25, name: "Paneer Tikka", price: 7, category: "veg" },
    { id: 26, name: "Mutton Korma", price: 11, category: "rice" },
    { id: 27, name: "Fish Fry", price: 9, category: "seafood" },
    { id: 28, name: "Zinger Burger", price: 6, category: "burger" },
    { id: 29, name: "Chicken Roll", price: 5, category: "fastfood" },
    { id: 30, name: "Paratha", price: 2, category: "breakfast" },
    { id: 31, name: "Omelette", price: 3, category: "breakfast" },
    { id: 32, name: "Pancakes", price: 5, category: "dessert" },
    { id: 33, name: "Waffles", price: 6, category: "dessert" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFoods = foods.filter((item) =>
    selectedCategory === "all"
      ? true
      : item.category === selectedCategory
  );

  return (
    <div>
      <h2 className="menu">🍕 Menu</h2>

      {/* 🔥 CATEGORY BUTTONS */}
      <div className="categories-buttons">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("burger")}>Burger</button>
        <button onClick={() => setSelectedCategory("pizza")}>Pizza</button>
        <button onClick={() => setSelectedCategory("fastfood")}>Fast Food</button>
        <button onClick={() => setSelectedCategory("chicken")}>Chicken</button>
        <button onClick={() => setSelectedCategory("rice")}>Rice</button>
        <button onClick={() => setSelectedCategory("drink")}>Drinks</button>
        <button onClick={() => setSelectedCategory("dessert")}>Dessert</button>
        <button onClick={() => setSelectedCategory("snacks")}>Snacks</button>
        <button onClick={() => setSelectedCategory("breakfast")}>Breakfast</button>
      </div>

      {/* FOOD GRID */}
      <div className="categories">
        {filteredFoods.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button
              className="btn"
              onClick={() => addToCart(item)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}