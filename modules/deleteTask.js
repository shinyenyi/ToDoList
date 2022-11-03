const deleteTask = (event, tasks) => {
  const index = event.target.id;
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = index;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default deleteTask;