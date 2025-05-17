import { addTask } from "./add-task.js";
import {
  renderTaskList,
  taskList,
  saveToStorage,
  isCompleted,
} from "./task-list.js";

renderTaskList();
renderPage();

const task = document.querySelector(".js-input-task");

document
  .querySelector(".js-input-task")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (task.value !== "") {
        event.preventDefault();
        addTask(task.value);
        task.value = "";
        renderPage();
      } else {
        event.preventDefault();
        console.log("Please enter a task");
      }
    }
  });

function renderPage() {
  document.querySelectorAll(".js-trash").forEach((trash) => {
    trash.addEventListener("click", () => {
      const indexId = Number(trash.dataset.id);
      taskList.splice(indexId, 1);
      renderTaskList();
      renderPage();
      saveToStorage();
    });
  });

  document.querySelectorAll(".js-check").forEach((check) => {
    check.addEventListener("click", (event) => {
      const checkId = Number(check.dataset.checkId);
      isCompleted(checkId);
      saveToStorage();
      renderTaskList();
      renderPage();
    });
  });
}
