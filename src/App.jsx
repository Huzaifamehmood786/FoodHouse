import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound"

import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🔥 HOME LAYOUT */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >

<Route index element={<Dashboard />} />

        {/* NESTED ROUTES */}
        <Route path="menu" element={<Menu />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />

        {/* ✅ FIXED CHECKOUT */}
        <Route path="checkout" element={<Checkout />} />

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;