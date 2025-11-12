// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Auth.css";

// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirm) {
//       setError("All fields are required!");
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Invalid email format!");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters!");
//       return;
//     }
//     if (password !== confirm) {
//       setError("Passwords do not match!");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const existing = users.find((u) => u.email === email);
//     if (existing) {
//       setError("User already exists!");
//       return;
//     }

//     users.push({ name, email, password });
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Signup successful! Please login.");
//     navigate("/signin");
//   };

//   return (
//     <div className="auth-container">
//       <h2>Create Account</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>Already have an account? <a href="/signin">Sign In</a></p>
//     </div>
//   );
// }

// export default SignUp;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=-]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!name || !email || !password || !confirm) {
      setError("⚠️ All fields are required!");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("❌ Please enter a valid email address!");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "❌ Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }
    if (password !== confirm) {
      setError("❌ Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existing = users.find((u) => u.email === email);
    if (existing) {
      setError("⚠️ User already exists with this email!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Signup successful! Please login.");
    navigate("/signin");
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
}

export default SignUp;
