const tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));

const addNewTask = (event, taskInput) => {
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