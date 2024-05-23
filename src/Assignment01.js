import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Assignment01 = () => {
  const dailyActivity = [
    "Wake-up",
    "Fresh-up",
    "Lecture",
    "Break-fast",
    "Revision",
    "Meals",
    "Monitoring",
    "study",
    "Meals",
    "study",
    "TP",
    "study",
    "Doubt-session",
    "Meals",
    "sleep",
  ];

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleTasks = (e) => {
    e.preventDefault();
    if (task.trim().length !==0 ) {
      setTasks([...tasks, task]);
      setTask("");
    }
    if (task) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please add your Daily Activity");
    }
  };

  return (
    <div className="d-flex justify-content-center text-center">
      <div>
        <h1 className="m-5">Daily Activities</h1>
        <form className="d-flex w-100 justify-content-evenly m-4">
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={handleTaskChange}
              placeholder="Enter your Daily Activity"
            />
          </div>
          <button
            onClick={handleTasks}
            type="submit"
            className="btn btn-primary mb-2"
          >
            Add
          </button>
        </form>
        {errorMessage && (
          <div>
            <h4 className="p-3 mb-2 bg-danger text-white">{errorMessage}</h4>
          </div>
        )}
        <ul className="list-group list-group-flush">
          {tasks.map((item, index) => (
            <li className="list-group-item fs-5" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Assignment01;
