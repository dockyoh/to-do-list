export let taskList = JSON.parse(localStorage.getItem("list")) || [];

export function renderTaskList() {
  let html = "";
  taskList.forEach((task, index) => {
    if (!task.isComplete) {
      console.log("display not completed task");
      html += `
        <li class="two-column">
          <div class="col-left"><p class="js-task-check-${index}">${task.name}</p></div>
          <div class="col-right">
            <img src="asset/default_checkbox.png" alt="default check box" class="js-check" data-check-id="${index}"/>
            <img src="asset/completed_checkbox.png" alt="completed check box" class="js-check js-completed-check" data-check-id="${index}"/>
            <img src="asset/delete.png" alt="trash bin" class="js-trash" data-id="${index}" />
          </div>
        </li>
    `;
    } else {
      console.log("display completed task");
      html += `
        <li class="two-column">
          <div class="col-left"><p class="js-task-check-${index} completed">${task.name}</p></div>
          <div class="col-right">
            <img src="asset/default_checkbox.png" alt="default check box" class="js-check js-hide-check" data-check-id="${index}"/>
            <img src="asset/completed_checkbox.png" alt="completed check box" class="js-check" data-check-id="${index}"/>
            <img src="asset/delete.png" alt="trash bin" class="js-trash" data-id="${index}" />
          </div>
        </li>
    `;
    }
  });

  document.querySelector(".js-list").innerHTML = html;
}

export function saveToStorage() {
  localStorage.setItem("list", JSON.stringify(taskList));
}

export function isCompleted(checkId) {
  const matchingTask = taskList[checkId];

  if (matchingTask.isComplete === false) {
    matchingTask.isComplete = true;
  } else {
    matchingTask.isComplete = false;
  }
}
