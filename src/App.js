import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import Context from "./Context/Context";
import { Tasks } from "./initialData/tasks";

import Header from "./components/Header";
import TasksList from "./components/TasksList";
import NewTask from "./components/NewTask";

const App = () => {
  const [allTasks, setTasks] = useState(Tasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDueTime, setNewTaskDueTime] = useState("");
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [editedTaskDueTime, setEditedTaskDueTime] = useState("");

  const setTaskTitle = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const setTaskDueTime = (event) => {
    setNewTaskDueTime(event.target.value);
  };

  const setEditableTaskTitle = (event) => {
    setEditedTaskTitle(event.target.value);
  };

  const setEditableTaskDueTime = (event) => {
    setEditedTaskDueTime(event.target.value);
  };

  const handleNewTask = () => {
    const tasks = [...allTasks];

    if (newTaskTitle !== "" && newTaskDueTime !== "") {
      let id = uuidv4();
      let temp = {
        id: id,
        title: newTaskTitle,
        dueTime: newTaskDueTime,
        editMode: false,
      };
      tasks.push(temp);
      setTasks(tasks);
      setNewTaskTitle("");
      setNewTaskDueTime("");
    } else alert("Complete fields");
  };

  const handleDeleteTask = (id) => {
    let tasks = [...allTasks];

    tasks = tasks.filter((task) => task.id !== id);
    setTasks(tasks);
  };

  const handleEditTask = (index) => {
    let tasks = [...allTasks];
    tasks.map((task) => (task["editMode"] = false));
    tasks[index]["editMode"] = true;
    setEditedTaskTitle(tasks[index]["title"]);
    setEditedTaskDueTime(tasks[index]["dueTime"]);
    setTasks(tasks);
  };

  const handleSaveTask = (index) => {
    let tasks = [...allTasks];
    let temp = {
      id: tasks[index]["id"],
      title: editedTaskTitle,
      dueTime: editedTaskDueTime,
      editMode: false,
    };
    tasks[index] = temp;

    setTasks(tasks);
  };

  const handleCancelTask = () => {
    let tasks = [...allTasks];

    tasks.forEach(function (element) {
      element["editMode"] = false;
    });
    setEditedTaskTitle("");
    setEditedTaskDueTime("");
  };

  return (
    <Context.Provider
      value={{
        tasks: allTasks,
        taskTitle: newTaskTitle,
        taskDueTime: newTaskDueTime,
        editableTaskTitle: editedTaskTitle,
        editableTaskDueTime: editedTaskDueTime,
        setTaskTitle: setTaskTitle,
        setTaskDueTime: setTaskDueTime,
        setEditableTaskTitle: setEditableTaskTitle,
        setEditableTaskDueTime: setEditableTaskDueTime,
        handleNewTask: handleNewTask,
        handleDeleteTask: handleDeleteTask,
        handleEditTask: handleEditTask,
        handleSaveTask: handleSaveTask,
        handleCancelTask: handleCancelTask,
      }}
    >
      <Header tasksLength={allTasks.length} appTitle="Todo List" />
      <NewTask />
      <TasksList />
    </Context.Provider>
  );
};

export default App;
