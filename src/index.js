/* eslint-disable no-plusplus */
import _ from 'lodash';
import './style.css';
import {
  todoTasks, todoContainer, userTask,
} from './modules/variable.js'
import Actions from './modules/actions.js';
import Task from './modules/task.js';
import TaskStatus from './modules/taskStatus.js';
let editId;
let isEditedTask = false;
// On page load render the dynamically created list of tasks in the dedicated placeholder.
window.addEventListener('load', () => {
  Actions.displayTasks(todoTasks);
});
//populate an HTML list item element for each task.
userTask.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && userTask.value) {
    if (!isEditedTask) { // is isEditedTask is not true
      event.preventDefault();
      const task = new Task(userTask);
      Actions.addTask(task);
      Actions.displayTasks(todoTasks);
      userTask.value = '';
    } else { // is isEditedTask is true, so we are editing the task
      Actions.editTask(editId);
      isEditedTask = false;
    }
  }
})