import { taskList, renderTaskList, saveToStorage } from "./task-list.js";

export function addTask(taskName) {
  taskList.push({
    name: taskName,
    isComplete: false,
  });
  renderTaskList();
  saveToStorage();
}
