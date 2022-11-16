const DOMSelectors = {
  enter: document.getElementById("enter-button"),
  box: document.getElementById("container"),
  nameinput: document.querySelector("#cat-name"),
  personalityinput: document.querySelector("#cat-personality"),
  urlinput: document.querySelector("#url"),
  delete: document.getElementById("#remove-btn"),
};

function makeCard() {}

DOMSelectors.enter.addEventListener("click", function makeCard() {});

Document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});
