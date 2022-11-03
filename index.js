const DOMSelectors = {
  button: document.getElementById("butt"),
  text: document.querySelector("#text"),
  box: document.getElementById("ahh"),
  pointTwo: document.querySelectorAll(".point"),
};

console.log(DOMSelectors.pointTwo);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "red ahh big";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
