// ================================
// validation.js
// Utility for form validation (SignIn, SignUp, etc.)
// ================================

// Email validation (simple + standard pattern)
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Password validation
// At least 6 characters, one uppercase letter, one number
export const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  return regex.test(password);
};

// Optional: Validate non-empty name
export const validateName = (name) => {
  return name && name.trim().length >= 2;
};
