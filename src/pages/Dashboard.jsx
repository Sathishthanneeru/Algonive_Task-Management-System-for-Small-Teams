// import React, { useContext, useState } from "react";
// import { TaskContext } from "../context/TaskContext";
// import TaskForm from "../components/TaskForm";
// import TaskCard from "../components/TaskCard";
// import "../styles/Dashboard.css";

// function Dashboard() {
//   const { tasks, setTasks } = useContext(TaskContext);
//   const [filter, setFilter] = useState("all");

//   const filteredTasks = tasks.filter(
//     (task) => filter === "all" || task.status === filter
//   );

//   return (
//     <div className="dashboard-container">
//       <h1>Team Task Dashboard</h1>
//       <TaskForm />
//       <div className="filter-section">
//         <button onClick={() => setFilter("all")}>All</button>
//         <button onClick={() => setFilter("pending")}>Pending</button>
//         <button onClick={() => setFilter("in-progress")}>In Progress</button>
//         <button onClick={() => setFilter("completed")}>Completed</button>
//       </div>
//       <div className="task-list">
//         {filteredTasks.length === 0 ? (
//           <p>No tasks found</p>
//         ) : (
//           filteredTasks.map((task, i) => (
//             <TaskCard key={i} task={task} setTasks={setTasks} tasks={tasks} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import Notification from "../components/Notification"; // ✅ Import Notification
import "../styles/Dashboard.css";

function Dashboard() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(
    (task) => filter === "all" || task.status === filter
  );

  return (
    <div className="dashboard-container">
      {/* 🔔 Show notification if a task is due soon */}
      <Notification tasks={tasks} />

      <h1>Team Task Dashboard</h1>

      {/* ✅ Task Form */}
      <TaskForm />

      {/* ✅ Filter Buttons */}
      <div className="filter-section">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className={filter === "in-progress" ? "active" : ""}
          onClick={() => setFilter("in-progress")}
        >
          In Progress
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* ✅ Task List */}
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          filteredTasks.map((task, i) => (
            <TaskCard key={i} task={task} setTasks={setTasks} tasks={tasks} />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;

