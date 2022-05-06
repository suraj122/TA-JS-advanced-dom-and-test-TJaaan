let form = document.querySelector("form");
let root = document.querySelector(".root");

let cardData = JSON.parse(localStorage.getItem("cards")) || [];

function handleSubmit(event) {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardData.push({ title, category });
  localStorage.setItem("cards", JSON.stringify(cardData));
  createUI(cardData, root);
}

function handleEdit(event, category, id, label) {
  let input = document.createElement("input");
  input.value = category;
  input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      let updatedValue = e.target.value;
      cardData[id].label = updatedValue;
      createUI(cardData, root);
      localStorage.setItem("cards", JSON.stringify(cardData));
    }
  });
  input.addEventListener("blur", (e) => {
    let updatedValue = e.target.value;
    cardData[id][label] = updatedValue;
    createUI(cardData, root);
    localStorage.setItem("cards", JSON.stringify(cardData));
  });
  let target = event.target;
  let parent = event.target.parentElement;
  parent.replaceChild(input, target);
}

function createUI(data, root) {
  root.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach((card, index) => {
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    h2.innerText = card.title;
    h2.addEventListener("dblclick", (event) =>
      handleEdit(event, card.title, index, "title")
    );
    let span = document.createElement("span");
    span.innerText = card.category;
    span.addEventListener("dblclick", (event) =>
      handleEdit(event, card.category, index, "category")
    );
    article.append(span, h2);
    fragment.appendChild(article);
  });
  root.append(fragment);
}
form.addEventListener("submit", handleSubmit);
createUI(cardData, root);
