import React, { useState } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import "./AdminComponent.css";

function LoginComponent({ theme }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/admin");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="login-container" style={{ backgroundColor: theme.body }}>
      <div className="login-card" style={{ backgroundColor: theme.highlight }}>
        <h2 style={{ color: theme.text }}>Nexus Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="save-btn">
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
