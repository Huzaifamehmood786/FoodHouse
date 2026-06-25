import "./style.css"



export default function FoodCard({ name, addToCart }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid white" }}>
      <h3>{name}</h3>

      {/* ✅ Button Working */}
      <button onClick={() => addToCart(name)}>
        Add to Cart
      </button>
    </div>
  );
}