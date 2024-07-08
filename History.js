// History.js
import React from 'react';

const History = ({ completedTasks }) => {
  return (
    <div className="history">
      <h2>History</h2>
      {completedTasks.map(task => (
        <div key={task.id} className="completed-task">
          {task.title}
        </div>
      ))}
    </div>
  );
};

export default History;
