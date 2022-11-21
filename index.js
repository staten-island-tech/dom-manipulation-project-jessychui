const DOMSelectors = {
  enter: document.getElementById("enter-button"),
  box: document.getElementById("container"),
  nameinput: document.querySelector("#cat-name"),
  urlinput: document.querySelector("#url"),
  personalityinput: document.querySelector("#cat-personality"),
  form: document.getElementById("form"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameinput = DOMSelectors.nameinput.value;
  let urlinput = DOMSelectors.urlinput.value;
  let personalityinput = DOMSelectors.personalityinput.value;

  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<section class="cat-box" id="cat-box">
  <div class="display-card">
  <h2 class="cat-box-name">${nameinput}</h2>
  <img id="e" class="display-cat" src="${urlinput}"/>
  <p class="cat-box-personality">${personalityinput}</p>
  <button id="remove-btn">Remove Cat :-(</button>
  </div> 
</section>`
  );
  const element = document.getElementById("cat-box");
  const remove = document.getElementById("remove-btn");
  remove.addEventListener("click", function () {
    element.remove();
  });
});
