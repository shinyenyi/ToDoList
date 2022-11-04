const taskStatus = (event, tasks) => {
  if (event.target.id === 'task-checkbox') {
    if (event.target.checked) {
      tasks[event.target.name].completed = true;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks[event.target.name].completed = false;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
};

export default taskStatus;