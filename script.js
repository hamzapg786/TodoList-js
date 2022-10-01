let inputField = document.getElementById("input");
let button = document.getElementById("btn");
let container = document.getElementById("todoContainer");

button.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("para-styling");
  paragraph.innerText = inputField.value;
  container.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    container.removeChild(paragraph);
  });
});
