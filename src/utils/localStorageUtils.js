// ================================
// localStorage.js
// Utility for handling Local Storage safely and cleanly
// ================================

// Save data to localStorage
export const saveToLocal = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

// Retrieve data from localStorage
export const getFromLocal = (key) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
};

// Remove specific key
export const removeFromLocal = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing item from localStorage:", error);
  }
};

// Clear all localStorage (optional use on logout)
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};
