import { useEffect, useState } from "react";

import fastfood1 from "../assets/fastfood1.jpg";
import fastfood2 from "../assets/fastfood2.jpg";
import fastfood3 from "../assets/fastfood3.jpg";
import fastfood4 from "../assets/fastfood4.jpg";
import fastfood5 from "../assets/fastfood5.jpg";
import fastfood6 from "../assets/fastfood6.jpg";
import fastfood7 from "../assets/fastfood7.jpg";
import fastfood8 from "../assets/fastfood8.jpg";
import fastfood9 from "../assets/fastfood9.jpg";
import fastfood10 from "../assets/fastfood10.jpg";

export default function Dashboard() {
  // 👉 default data
  const defaultFoods = [
    { id: 1, name: "Burger and Fries", img: fastfood1 },
    { id: 2, name: "Pizza", img: fastfood7 },
    { id: 3, name: "Hot Dogs", img: fastfood8 },
    { id: 4, name: "French Fries", img: fastfood9 },
    { id: 5, name: "Fried Chicken", img: fastfood10 },
    { id: 6, name: "Fish and Chips", img: fastfood6 },
  ];

  // 🔥 load from localStorage
  const [foods, setFoods] = useState(() => {
    const saved = localStorage.getItem("foods");
    return saved ? JSON.parse(saved) : defaultFoods;
  });

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [newFood, setNewFood] = useState({ name: "", img: "" });

  // 💾 SAVE to localStorage whenever foods change
  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // 🔍 SEARCH
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  // ➕ ADD FOOD
  const addFood = () => {
    if (!newFood.name || !newFood.img) return;

    const newItem = {
      id: Date.now(),
      name: newFood.name,
      img: newFood.img,
    };

    setFoods([newItem, ...foods]);
    setNewFood({ name: "", img: "" });
  };

  // 🗑️ DELETE FOOD
  const deleteFood = (id) => {
    setFoods(foods.filter((item) => item.id !== id));
  };

  // ❤️ FAVORITE
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="library" >🍔 Menu Library</h1>
      <p>😋 All Item Tasti or Yami 😋</p>

      {/* SEARCH */}
      <input
        className="search-bar"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ADD FOOD */}
      <div className="add-food">
        <input
          placeholder="Food name"
          value={newFood.name}
          onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
        />
        <input
          placeholder="Image URL"
          value={newFood.img}
          onChange={(e) => setNewFood({ ...newFood, img: e.target.value })}
        />
        <button onClick={addFood}>➕ Add</button>
      </div>

      {/* GRID */}
      <div className="food-grid">
        {filteredFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>

            <div className="actions">
              <button onClick={() => toggleFavorite(food.id)}>
                {favorites.includes(food.id) ? "❤️" : "🤍"}
              </button>

              <button onClick={() => deleteFood(food.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}