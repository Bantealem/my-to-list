/* eslint-disable no-plusplus */
import { todoContainer, todoTasks, clearAllCompletedBtn } from './variable.js';
import LocalStorage from './localStorage.js';
import Actions from './actions.js';

export default class TaskStatus {
  // toggle the completed status
  static toggleCompleted = () => {
    todoContainer.addEventListener('change', (event) => {
      if (event.target.className === 'checkbox') {
        const currentTask = event.target.parentElement.parentElement;
        todoTasks[currentTask.id].completed = !todoTasks[currentTask.id].completed;
        LocalStorage.set(todoTasks);
        event.target.parentElement.classList.toggle('completed');
      }
    });
  };
}
