// Tab.js
import React from 'react';

const Tab = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === 'todo' ? 'tab-btn active' : 'tab-btn'}
        onClick={() => onTabChange('todo')}
      >
        Todo List
      </button>
      <button
        className={activeTab === 'history' ? 'tab-btn active' : 'tab-btn'}
        onClick={() => onTabChange('history')}
      >
        History
      </button>
    </div>
  );
};

export default Tab;
