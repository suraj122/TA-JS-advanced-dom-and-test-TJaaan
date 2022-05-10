let form = document.querySelector("form");
let ul = document.querySelector("ul");

let todo = ["Play", "Eat", "Sleep", "Code", "Repeat"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = event.target.elements.title.value;
  todo.push(title);
  createUI(todo, ul);
});

function handleDragStart(e) {
  this.style.opacity = "0.4";
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}
function handleDragOver(e) {
  e.preventDefault();
  return false;
}
function handleDragEnter(e) {
  this.classList.add("over");
}
function handleDragLeave(e) {
  this.classList.remove("over");
}
function handleDragEnd(e) {
  this.style.opacity = "1";
}

function handleDrop(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}

function createUI(list, root) {
  root.innerHTML = "";
  list.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    li.draggable = true;
    li.addEventListener("dragstart", handleDragStart);
    li.addEventListener("dragover", handleDragOver);
    li.addEventListener("dragenter", handleDragEnter);
    li.addEventListener("dragleave", handleDragLeave);
    li.addEventListener("dragend", handleDragEnd);
    li.addEventListener("drop", handleDrop);
    root.append(li);
  });
}

createUI(todo, ul);
