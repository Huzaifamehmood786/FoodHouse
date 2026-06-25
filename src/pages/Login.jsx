import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, setToken } from "../utils/auth";
import PageTransition from "../components/PageTransition";
import FF_1 from "../assets/FF_1.png";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState(""); 
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    let newErrors = {};

    if (!loginInput) {
      newErrors.loginInput = "Enter email or phone number";
    }

    if (!password) {
      newErrors.password = "Enter your password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const user = getUser();

    if (
      user &&
      (user.email === loginInput || user.phone === loginInput) &&
      user.password === password
    ) {
      setToken("token_" + Date.now());
      navigate("/home");
    } else {
      setErrors({ general: "Invalid credentials ❌" });
    }
  };

  return (
    <PageTransition>
      <div className="login-wrapper">
        <div className="login-left">
         <img src={FF_1} alt="Food" className="food-img" />
          <h1 className="log-left-h1">Food House</h1>
        </div>

        <div className="login-right">
          <div className="login-card">
            <h2 className="login-heading">Login</h2>

            {errors.general && (
              <p className="error-text">{errors.general}</p>
            )}

            <input
              type="text"
              placeholder="Email or Phone Number"
              onChange={(e) => setLoginInput(e.target.value)}
            />
            {errors.loginInput && (
              <p className="error-text">{errors.loginInput}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="error-text">{errors.password}</p>
            )}

            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>

            <p className="signup-btn" onClick={() => navigate("/signup")}>
              Create new account: <span className="signup-link">signup</span>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}