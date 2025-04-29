import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={onToggle}>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
