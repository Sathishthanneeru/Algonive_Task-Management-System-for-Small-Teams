import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=-]).{8,}$/;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError("❌ Enter a valid email address!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setError("⚠️ No account found with this email!");
      return;
    }

    setError("");
    setStep(2); // Go to password reset step
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(newPassword)) {
      setError(
        "❌ Password must include uppercase, lowercase, number, and special character (min 8 chars)."
      );
      return;
    }
    if (newPassword !== confirm) {
      setError("❌ Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === email ? { ...u, password: newPassword } : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("✅ Password reset successful! You can now log in.");
    navigate("/signin");
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>

      {step === 1 ? (
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Verify Email</button>
        </form>
      ) : (
        <form onSubmit={handlePasswordReset}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Reset Password</button>
        </form>
      )}

      <p>
        Remember your password? <a href="/signin">Go back to Login</a>
      </p>
    </div>
  );
}

export default ForgotPassword;
