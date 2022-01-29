import { createContext } from "react";

const Context = createContext({
  tasks: [],
  taskTitle: "",
  taskDueTime: "",
  editableTaskTitle: "",
  editableTaskDueTime: "",
  setTaskTitle: () => {},
  setTaskDueTime: () => {},
  setEditableTaskTitle: () => {},
  setEditableTaskDueTime: () => {},
  handleNewTask: () => {},
  handleDeleteTask: () => {},
  handleEditTask: () => {},
  handleSaveTask: () => {},
  handleCancelTask: () => {},
});

export default Context;
