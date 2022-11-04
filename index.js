const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container"),
  input: document.querySelector("#input"),
};

/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("after", `<h1>We are an H1 ${cat} </h1>`);
 */

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `${input}`);
});
