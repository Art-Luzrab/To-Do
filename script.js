"use strict";
// Grabbing DOM Elements
const formData = document.querySelector(".formContainer");
const listData = document.querySelector(".listContainer");

// Adding List Item When there is a submission
const displayInput = formData.addEventListener("submit", function (e) {
  e.preventDefault();

  const userInput = document.getElementById("userInput").value;

  console.log(userInput);

  let li = document.createElement("li");
  // li.classList.add("crossed");

  if (userInput === "") {
    alert("You must input a task!");
  } else {
    li.innerHTML = userInput;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    listData.appendChild(li);
    li.appendChild(deleteBtn);

    document.getElementById("userInput").value = "";
    saveData();
  }
});

/**  Delete Item   */
listData.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const listItem = e.target.closest("li");
    listItem.remove();
    saveData();
  }
});

//Cross Off Item
listData.addEventListener("click", function (e) {
  if ((e.target.htmlElement = "LI")) {
    e.target.classList.toggle("crossed");
    saveData();
  }
});

/**  Add To Local Storage
    1) create function with localstorage('data', innerHTML)
    2) render local storage function
*/

const saveData = function () {
  localStorage.setItem("data", listData.innerHTML);
};

const getData = function () {
  listData.innerHTML = localStorage.getItem("data");
};
getData();
