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

  // Update status
  static updateStatus = (id) => {
    todoTasks[id].completed = !todoTasks[id].completed;
    LocalStorage.set(todoTasks);
    return todoTasks;
  };

  // Implement a function for the "Clear all completed"
  static deleteAllCompleted = () => {
    clearAllCompletedBtn.addEventListener('click', () => {
      const TasksToRemove = todoTasks.filter((todo) => todo.completed === true);
      for (let i = 0; i < TasksToRemove.length; i++) {
        Actions.removeTask(TasksToRemove[i].id - 1);
      }
      Actions.displayTasks(todoTasks);
    });
  };

  // Clear All completed
  static clearAllCompleted = () => {
    const incompletedTasks = todoTasks.filter((todo) => todo.completed === false);
    return incompletedTasks;
  };
}