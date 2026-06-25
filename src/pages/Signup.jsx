import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/auth";
import PageTransition from "../components/PageTransition";
import FF_1 from "../assets/FF_1.png";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState(""); // ✅ new
  const [phone, setPhone] = useState(""); // ✅ new
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !age || !phone || !email || !password) {
      alert("Please fill all fields ❌");
      return;
    }

    // optional: simple validation
    if (age < 10 || age > 100) {
      alert("Enter valid age");
      return;
    }

    if (phone.length < 10) {
      alert("Enter valid phone number");
      return;
    }

    setUser({ name, age, phone, email, password });

    alert("Account Created ✅");
    navigate("/");
  };

  return (
    <PageTransition>
      <div className="auth-container">
        <div className="auth-card">

          <h2 className="title">Create Account 🍔</h2>
          <p className="subtitle">Join Food House today</p>

          {/* Full Name */}
          <input
            className="input"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />

          {/* Age */}
          <input
            className="input"
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />

          {/* Phone */}
          <input
            className="input"
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Email */}
          <input
            className="input"
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn" onClick={handleSignup}>
            Create Account
          </button>

          <p className="login-button" onClick={() => navigate("/")}>
            Already have an account? <span className="login-link">Login</span>
          </p>

        </div>
          
      </div>
    </PageTransition>
  );
}