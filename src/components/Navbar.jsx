import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="navbar"
    >
      <h2>🍔 Food Bank</h2>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </motion.nav>
  );
}