const DOMSelectors = {
  button: document.getElementById("enter-button"),
  box: document.getElementById("container"),
  input: document.querySelector("#input"),
  cat: document.querySelector("cat-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", DOMSelectors.cat);
});
