// Grabbing DOM Elements
const formData = document.querySelector(".formContainer");
const listData = document.querySelector(".listContainer");

// Adding List Item When there is a submission
const displayInput = formData.addEventListener("submit", function (e) {
  e.preventDefault();

  const userInput = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";
  console.log(userInput);

  let li = document.createElement("li");

  li.innerHTML = userInput;
  listData.appendChild(li);
});

// Delete Item

// Cross Off Item

// Add To Local Storage
