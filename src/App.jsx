import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const loggedIn = localStorage.getItem("loggedInUser");

  return (
    <TaskProvider>
      <Router>
        {loggedIn && <Navbar />}
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
