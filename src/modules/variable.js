import LocalStorage from './localStorage.js';

export const todoTasks = LocalStorage.get() || [];
export const todoContainer = document.querySelector('.todo-box');
export const clearAllCompletedBtn = document.querySelector('.clear-btn');
export const userTask = document.querySelector('.add-input');