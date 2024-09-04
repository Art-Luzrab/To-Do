//grab form data from user inputs
const formData = document.querySelector(".formContainer");
const listData = document.querySelector(".listContainer");
const userInput = document.getElementById("userInput").value;

// const displayInput = formData.addEventListener("submit", function (e) {
//   e.preventDefault();

//   document.getElementById("userInput").value = "";
//   console.log(userInput);
// });

//rendering html
let html = "<li>This is a task. <button>Delete</button></li>";

listData.insertAdjacentHTML("afterbegin", html);

const addItem = function () {
  let li = document.createElement("li");

  li.innerHTML = userInput.value;
  listData.appendChild(li);
};
