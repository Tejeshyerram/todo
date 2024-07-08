// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import History from './components/History';
import Tab from './components/Tab';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('todo');

  // Add a new task to the Todo List
  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Handle completion of a task
  const onCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Move completed tasks to History after 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      const completed = tasks.filter(task => task.completed);
      setCompletedTasks([...completedTasks, ...completed]);
      setTasks(tasks.filter(task => !task.completed));
    }, 60000); // 1 minute delay

    return () => clearTimeout(timer);
  }, [tasks, completedTasks]);

  // Change active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Application</h1>
      </header>
      <Tab activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="content">
        {activeTab === 'todo' && (
          <TodoList
            tasks={tasks}
            onCompleteTask={onCompleteTask}
            onAddTask={addTask}
          />
        )}
        {activeTab === 'history' && (
          <History completedTasks={completedTasks} />
        )}
      </div>
    </div>
  );
};

export default App;
