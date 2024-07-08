// Task.js
import React from 'react';

const Task = ({ task, onCompleteTask }) => {
  const handleCheckboxChange = () => {
    onCompleteTask(task.id);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
    </div>
  );
};

export default Task;
