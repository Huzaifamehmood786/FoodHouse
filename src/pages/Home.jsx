import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { logout } from "../utils/auth";
import PageTransition from "../components/PageTransition";
import FF_1 from "../assets/FF_1.png";

export default function Home() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="home-layout">

        {/* 🔥 TOP BAR */}
        <div className="topbar">
          <img src={FF_1} alt="Logo" className="main-FF_1" />

          <h2 className="food">Food House</h2>

          <div className="top-actions">
            {/* 🛒 LIVE CART BADGE */}
            <button onClick={() => navigate("checkout")}>
              🛒 Cart ({cart.length}) 
            </button>

            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* 🔥 BODY */}
        <div className="body">

          {/* SIDEBAR */}
          <div className="sidebar">
            <NavLink to="/home" end>🏠 Home</NavLink>
            <NavLink to="menu">🍕 Menu</NavLink>
            <NavLink to="orders">🛒 Orders</NavLink>
            <NavLink to="profile">👤 Profile</NavLink>

            {/* 🔥 CONDITIONAL CHECKOUT */}
            {cart.length > 0 && (
              <NavLink to="checkout">💳 Checkout</NavLink>
            )}
          </div>

          {/* CONTENT */}
          <div className="content">
            <Outlet />
          </div>

        </div>
      </div>
    </PageTransition>
  );
}