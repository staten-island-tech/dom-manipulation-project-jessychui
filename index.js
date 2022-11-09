const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container"),
  input: document.querySelector("#input"),
  cat: document.querySelector("cat-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", DOMSelectors.cat);
  DOMSelectors.input.value = "";
});

function catinsert(catholder, deletebutton) {}
