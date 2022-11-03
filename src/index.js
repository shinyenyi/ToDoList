import './style.css';
import addNewTask from '../modules/addTask.js';

const taskInput = document.querySelector('.input-task');

let tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));

// const tasks = [
//   {
//     description: 'wash dishes',
//     completed: true,
//     index: 0,
//   },
//   {
//     description: 'buy groceries',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'clean carpet',
//     completed: false,
//     index: 2,
//   },
// ];

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
          <i <i class="fa fa-trash task-menu" aria-hidden="true"></i>
        </li>
      `;
    });
  }

  tasksListSection.innerHTML = tasksList;
};

createTasksList(tasks);

taskInput.addEventListener('keydown', (event) => {
  addNewTask(event, taskInput);
  tasks = Array.from(JSON.parse(localStorage.getItem('tasks') || '[]'));
  createTasksList(tasks);
});