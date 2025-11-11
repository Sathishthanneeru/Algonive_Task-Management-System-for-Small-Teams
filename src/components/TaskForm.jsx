import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/Form.css";

function TaskForm() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !assignee || !deadline) return alert("All fields required");

    const newTask = {
      id: Date.now(),
      title,
      assignee,
      deadline,
      status: "pending",
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setAssignee("");
    setDeadline("");
  };

  return (
    <form className="task-form" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assign to"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
