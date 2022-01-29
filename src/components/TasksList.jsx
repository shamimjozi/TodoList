import React, { useContext } from "react";
import Context from "../Context/Context";
import EditTask from "./EditTask";

const TasksList = () => {
  const context = useContext(Context);
  const { tasks, handleDeleteTask, handleEditTask, handleSaveTask } = context;
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <h4>{task.dueTime}</h4>
            {task.editMode ? <EditTask /> : null}

            <br />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button
              onClick={
                task.editMode
                  ? () => handleSaveTask(index)
                  : () => handleEditTask(index)
              }
            >
              {task.editMode ? "Save" : "Edit"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
