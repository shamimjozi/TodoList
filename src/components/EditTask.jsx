import React, { useContext } from "react";
import Context from "../Context/Context";

const EditTask = () => {
  const context = useContext(Context);
  const {
    editableTaskTitle,
    editableTaskDueTime,
    setEditableTaskTitle,
    setEditableTaskDueTime,
    handleCancelTask,
  } = context;

  return (
    <div>
      <input
        type="text"
        value={editableTaskTitle}
        onChange={setEditableTaskTitle}
      />
      <input
        type="text"
        value={editableTaskDueTime}
        onChange={setEditableTaskDueTime}
      />
      <button onClick={handleCancelTask}>Cancel</button>
    </div>
  );
};

export default EditTask;
