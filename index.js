const DOMSelectors = {
  enter: document.getElementById("enter-button"),
  box: document.getElementById("container"),
  nameinput: document.querySelector("#cat-name"),
  urlinput: document.querySelector("#url"),
  personalityinput: document.querySelector("#cat-personality"),
  delete: document.getElementById("#remove-btn"),
  form: document.getElementById("form"),
};

let nameinput = DOMSelectors.nameinput.value;
let urlinput = DOMSelectors.urlinput.value;
let personalityinput = DOMSelectors.personalityinput.value;

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<section class="cat-box" id="cat-box">
  <div class="display-card">
  <h2 class="cat-box-name">${nameinput}</h2>
  <img class="display-cat" src="${urlinput}"/>
  <p class="cat-box-personality">${personalityinput}</p>
  <button id="remove-btn">Remove Cat :-(</button>
  </div> 
</section>`
  );
});
