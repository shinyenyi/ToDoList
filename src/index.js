import './style.css';
import addNewTask from '../modules/addTask.js';
import deleteTask from '../modules/deleteTask.js';

const taskInput = document.querySelector('.input-task');

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
            <input class="task-checkbox" type="checkbox" name="" id="" ${checked}>
            <p class="task-name">${task.description}</p>
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