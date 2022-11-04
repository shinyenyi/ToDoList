import './style.css';
import addNewTask from '../modules/addTask.js';
import deleteTask from '../modules/deleteTask.js';
import editTask from '../modules/editTask.js';
import taskStatus from '../modules/taskStatus.js';

const taskInput = document.querySelector('.input-task');
const clearCompleted = document.getElementById('clear');

let tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));

const tasksListSection = document.querySelector('.tasks-list');

const createTasksList = (tasks) => {
  let tasksList = '';
  if (tasks) {
    tasks.forEach((task) => {
      let checked = '';
      if (task.completed === true) {
        checked = 'checked';
      }
      tasksList += `
        <li class="task-item">
          <div class="task-item-div">
            <input class="task-checkbox" type="checkbox" name="${task.index}" id="task-checkbox" ${checked}>
            <input id="edit-input" class="task-name" type="text" name="${task.index}" value="${task.description}">
          </div>
          <i id="${task.index}" class="fa fa-trash task-menu" aria-hidden="true"></i>
        </li>
      `;
    });
  }

  tasksListSection.innerHTML = tasksList;
};

createTasksList(tasks);

taskInput.addEventListener('keydown', (event) => {
  addNewTask(event, taskInput, tasks);
  tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));
  createTasksList(tasks);
});

tasksListSection.addEventListener('click', (event) => {
  if (event.target.id * 1 === parseInt(event.target.id, 10)) {
    tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));
    deleteTask(event, tasks);
    createTasksList(tasks);
  }
});

tasksListSection.addEventListener('keydown', (event) => {
  if (event.target.id === 'edit-input' && event.target.value && event.code === 'Enter') {
    tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));
    editTask(event, tasks);
    createTasksList(tasks);
  }
});

tasksListSection.addEventListener('change', (event) => {
  tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));
  taskStatus(event, tasks);
});

clearCompleted.addEventListener('click', () => {
  tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));
  tasks = tasks.filter((task) => task.completed === false);
  tasks.forEach((task, index) => {
    task.index = index;
  });
  createTasksList(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
});