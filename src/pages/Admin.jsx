import { useEffect, useState } from "react";

export default function Admin() {
  const [stats, setStats] = useState({
    orders: 120,
    revenue: 540,
    users: 80,
  });

  const [orders, setOrders] = useState([]);

  // fake live data effect
  useEffect(() => {
    const data = [
      { id: 1, name: "Burger Order", status: "Pending", amount: 12 },
      { id: 2, name: "Pizza Order", status: "Delivered", amount: 20 },
      { id: 3, name: "Noodles Order", status: "Pending", amount: 8 },
    ];

    setOrders(data);
  }, []);

  return (
    <div className="admin-container">

      {/* HEADER */}
      <div className="admin-header">
        <h2>📊 Admin Dashboard</h2>
        <p>Welcome back, Admin 👋</p>
      </div>

      {/* STATS CARDS */}
      <div className="admin-stats">

        <div className="stat-card">
          <h3>Orders</h3>
          <p>{stats.orders}</p>
        </div>

        <div className="stat-card">
          <h3>Revenue</h3>
          <p>${stats.revenue}</p>
        </div>

        <div className="stat-card">
          <h3>Users</h3>
          <p>{stats.users}</p>
        </div>

      </div>

      {/* DASHBOARD GRID */}
      <div className="admin-grid">

        {/* ORDERS TABLE */}
        <div className="admin-box">
          <h3>🛒 Recent Orders</h3>

          {orders.map((order) => (
            <div key={order.id} className="order-row">
              <span>{order.name}</span>
              <span>${order.amount}</span>
              <span className={order.status === "Pending" ? "pending" : "done"}>
                {order.status}
              </span>
            </div>
          ))}
        </div>

        {/* ACTIVITY PANEL */}
        <div className="admin-box">
          <h3>📈 Activity</h3>

          <div className="activity">
            <p>🔥 New order received</p>
            <p>👤 5 new users joined</p>
            <p>💳 Revenue updated</p>
            <p>📦 2 orders delivered</p>
          </div>
        </div>

      </div>

    </div>
  );
}