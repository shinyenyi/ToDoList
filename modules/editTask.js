const editTask = (event, tasks) => {
  tasks[event.target.name].description = event.target.value;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default editTask;