import React, { useEffect, useState } from "react";
import "../styles/Notification.css";

const Notification = ({ tasks }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const now = new Date();
    const alerts = tasks
      .filter(
        (task) =>
          task.status !== "completed" &&
          new Date(task.deadline) - now <= 24 * 60 * 60 * 1000 && // within 24 hours
          new Date(task.deadline) > now
      )
      .map((task) => ({
        id: task.id,
        message: `⚠️ Task "${task.title}" is due soon! (${task.deadline})`,
      }));

    setNotifications(alerts);
  }, [tasks]);

  return (
    <>
      {notifications.length > 0 && (
        <div className="notification-container">
          {notifications.map((n) => (
            <div key={n.id} className="notification-card">
              {n.message}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Notification;
