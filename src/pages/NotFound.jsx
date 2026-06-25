import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="notfound">

        {/* BIG 404 */}
        <h1 className="error-code">404</h1>

        <h2>Oops! Page Not Found 🍔</h2>

        <p>
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* ACTION BUTTONS */}
        <div className="actions">
          <button onClick={() => navigate("/home")} className="btn">
            Go Home 🏠
          </button>

          <button onClick={() => navigate("/")} className="btn outline">
            Login 🔐
          </button>
        </div>

        {/* DECORATION FOOD ICONS */}
        <div className="food-icons">
          🍔 🍕 🍟 🌭 🍩
        </div>

      </div>
    </PageTransition>
  );
}