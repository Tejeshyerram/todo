// TodoList.js
import React, { useState } from 'react';
import Task from './Task';

const TodoList = ({ tasks, onCompleteTask, onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleInputChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      onAddTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="add-task">
        <input
          type="text"
          placeholder="my todos for the day"
          value={newTaskTitle}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add </button>
      </div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onCompleteTask={onCompleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
