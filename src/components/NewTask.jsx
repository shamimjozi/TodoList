import React, { useContext } from "react";
import Context from "../Context/Context";

const NewTask = () => {
  const context = useContext(Context);
  const {
    taskTitle,
    taskDueTime,
    setTaskTitle,
    setTaskDueTime,
    handleNewTask,
  } = context;

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <input
            type="text"
            value={taskTitle}
            placeholder="Enter task title..."
            onChange={setTaskTitle}
          />
          <input
            type="text"
            value={taskDueTime}
            placeholder="Enter task dueTime..."
            onChange={setTaskDueTime}
          />
          <button type="submit" onClick={handleNewTask}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
