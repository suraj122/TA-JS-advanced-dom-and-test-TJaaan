let root = document.querySelector("ul");

let max = 7;
let index = 0;

function addQuote() {
  for (let i = 0; i < max; i++) {
    let li = document.createElement("li");
    let blockquote = document.createElement("blockquote");
    blockquote.innerText = quotes[index].quoteText;
    let cite = document.createElement("cite");
    cite.innerText = quotes[index].quoteAuthor;
    li.append(blockquote, cite);
    root.append(li);
    index++;
  }
}

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
    addQuote();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  alert("DOM content loaded");
  addQuote();
});
