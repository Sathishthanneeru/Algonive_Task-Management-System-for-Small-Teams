import React from "react";
import "../styles/TaskCard.css";

function TaskCard({ task, tasks, setTasks }) {
  const handleStatusChange = () => {
    const nextStatus =
      task.status === "pending"
        ? "in-progress"
        : task.status === "in-progress"
        ? "completed"
        : "pending";

    const updated = tasks.map((t) =>
      t.id === task.id ? { ...t, status: nextStatus } : t
    );
    setTasks(updated);
  };

  const handleDelete = () => {
    const updated = tasks.filter((t) => t.id !== task.id);
    setTasks(updated);
  };

  return (
    <div className={`task-card ${task.status}`}>
      <h3>{task.title}</h3>
      <p><strong>Assigned to:</strong> {task.assignee}</p>
      <p><strong>Deadline:</strong> {task.deadline}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <div className="actions">
        <button onClick={handleStatusChange}>Change Status</button>
        <button onClick={handleDelete} className="delete">Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
