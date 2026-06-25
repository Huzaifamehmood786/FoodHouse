import PageTransition from "../components/PageTransition";
import "./style.css";
import { useCart } from "../context/CartContext";
import { getOrders, saveOrder } from "../utils/orders";
import { useState, useEffect } from "react";

export default function Orders() {
  const { cart } = useCart();
  const [orders, setOrders] = useState([]);

  // load orders
  useEffect(() => {
    setOrders(getOrders());
  }, []);

  // 🟢 CREATE ORDER
  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      ),
      status: "Pending",
      date: new Date().toLocaleString(),
    };

    saveOrder(newOrder);
    setOrders(getOrders());

    alert("Order placed successfully 🚀");
  };

  return (
    <PageTransition>
      <div className="orders">

        <h2 className="order">🛒 Orders</h2>

        {/* 🔥 PLACE ORDER BUTTON */}
        {cart.length > 0 && (
          <button className="btn" onClick={placeOrder}>
            Place Order 🚀
          </button>
        )}

        {/* EMPTY STATE */}
        {orders.length === 0 ? (
          <p>No orders yet 😴</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="card">

              <h3>Order #{order.id}</h3>
              <p>Date: {order.date}</p>

              {/* ITEMS */}
              {order.items.map((item) => (
                <div key={item.id}>
                  🍔 {item.name} x {item.qty}
                </div>
              ))}

              {/* TOTAL */}
              <h4>Total: ${order.total}</h4>

              {/* STATUS */}
              <p
                style={{
                  color:
                    order.status === "Pending"
                      ? "orange"
                      : "lightgreen",
                  fontWeight: "bold",
                }}
              >
                Status: {order.status}
              </p>

            </div>
          ))
        )}

      </div>
    </PageTransition>
  );
}