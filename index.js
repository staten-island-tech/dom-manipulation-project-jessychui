const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container"),
  input: document.querySelector("#input"),
  cat: document.querySelector("cat-box"),
};

function favTutorial() {
  var mylist = document.getElementById("myList");
  document.getElementById("dropdownlist").value =
    mylist.options[mylist.selectedIndex].text;
}
