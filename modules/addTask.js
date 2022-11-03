const addNewTask = (event, taskInput, tasks) => {
  if (event.code === 'Enter') {
    if (taskInput.value) {
      const task = {
        description: taskInput.value,
        completed: false,
        index: tasks.length,
      };
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
    }
  }
};

export default addNewTask;