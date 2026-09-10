const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

function updateDay() {
  let dy = new Date().getDay();
  let d = new Date().getDate();
  let mon = new Date().getMonth();
  let y = new Date().getFullYear();

  let x;
  switch (dy) {
    case 0:
      x = "Sunday";
      break;
    case 1:
      x = "Monday";
      break;
    case 2:
      x = "Tuesday";
      break;
    case 3:
      x = "Wednesday";
      break;
    case 4:
      x = "Thursday";
      break;
    case 5:
      x = "Friday";
      break;
    case 6:
      x = "Saturday";
      break;
  }

  let a;
  switch (mon) {
    case 0:
      a = "January";
      break;
    case 1:
      a = "February";
      break;
    case 2:
      a = "March";
      break;
    case 3:
      a = "April";
      break;
    case 4:
      a = "May";
      break;
    case 5:
      a = "June";
      break;
    case 6:
      a = "July";
      break;
    case 7:
      a = "August";
      break;
    case 8:
      a = "September";
      break;
    case 9:
      a = "October";
      break;
    case 10:
      a = "November";
      break;
    case 11:
      a = "December";
      break;
  }

  day.innerText = x + ",";
  date.innerText = d + ",";
  month.innerText = a + ",";
  year.innerText = y;

  setTimeout(() => {
    updateDay();
  }, 1000);
}
updateDay();

let tasks = [];

const input = document.getElementById("input");
const carsList = document.querySelector(".cars-list");

function loadeTaska() {
  const save = localStorage.getItem("todo-tasks");
  if (save) {
    tasks = JSON.parse(save);
  }
  renderTask();
}

function saveTasks() {
  localStorage.setItem("todo-tasks", JSON.stringify(tasks));
}

function renderTask() {
  carsList.innerHTML = "";
  tasks.forEach(function (task) {
    const listItems = document.createElement("div");
    listItems.classList = "list1";
    listItems.setAttribute("data.id", task.id);
    listItems.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.done ? "checked" : ""} />
        <span class="taks-text" style='${task.done ? "text-decoration: line-through; opacity: 0.6;" : ""}'>${task.text}</span>
        <i class="fa-regular fa-trash-can btn-delete"></i>
    `;
    carsList.appendChild(listItems);
  });
}

function btnAdd() {
  const text = input.value.trim();
  if (text === "") return;
  const newTask = {
    id: Date.now(),
    text: text,
    done: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTask();

  input.value = "";
}

loadeTaska();

carsList.addEventListener("click", function (e) {
  const listItems = e.target.closest(".list1");
  if (!listItems) return;
  const taskId = Number(listItems.getAttribute("data.id"));
  if (e.target.classList.contains("btn-delete")) {
    tasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    saveTasks();
    renderTask();
  }
  if (e.target.classList.contains("task-checkbox")) {
    tasks = tasks.map(function (task) {
      if (task.id === taskId) {
        task.done = e.target.checked;
      }
      return task;
    });
    saveTasks();
    renderTask();
  }
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btnAdd();
  }
});

function deleteList() {
  const konfirmasi = confirm("anda yakin ingin meghapus");
  if (!konfirmasi) return;

  tasks = [];
  saveTasks();
  renderTask();
}

const body = document.body;
const header = document.getElementById("header");
const wrapperContainer = document.querySelector(".wrapper-container");
const color = document.querySelector(".color");
const clock = document.querySelector(".clock");
const cars2 = document.querySelector(".cars2");

const dark = document.getElementById("dark");
const white = document.getElementById("white");

function darkMode() {
  body.classList.toggle("bgDark");
  header.classList.toggle("headerDark");
  wrapperContainer.classList.toggle("wrapper-containerDark");
  color.classList.toggle("colorDark");
  clock.classList.toggle("clockDark");
  cars2.classList.toggle("cars2Dark");
  dark.style.display = "none";
  white.style.display = "flex";
}

function whiteMode() {
  body.classList.remove("bgDark");
  header.classList.remove("headerDark");
  wrapperContainer.classList.remove("wrapper-containerDark");
  color.classList.remove("colorDark");
  clock.classList.remove("clockDark");
  cars2.classList.remove("cars2Dark");
  white.style.display = "none";
  dark.style.display = "flex";
}

function init() {
  white.style.display = "none";
}

init();
