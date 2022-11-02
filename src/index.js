import './style.css';

const tasks = [
  {
    description: 'wash dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'buy groceries',
    completed: false,
    index: 1,
  },
  {
    description: 'clean carpet',
    completed: false,
    index: 2,
  },
];

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
          <i class="fa fa-ellipsis-v task-menu" aria-hidden="true"></i>
        </li>
      `;
    });
  }

  tasksListSection.innerHTML = tasksList;
};

createTasksList(tasks);