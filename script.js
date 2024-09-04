//grab form data from user inputs
const formData = document.querySelector(".formContainer");
const listData = document.querySelector(".listContainer");

const displayInput = formData.addEventListener("submit", function (e) {
  e.preventDefault();

  const userInput = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";
  console.log(userInput);

  let li = document.createElement("li");

  li.innerHTML = userInput;
  listData.appendChild(li);
});
