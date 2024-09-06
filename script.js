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

  li.innerHTML = userInput;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  listData.appendChild(li);
  li.appendChild(deleteBtn);

  document.getElementById("userInput").value = "";
});

/**  Delete Item   */
listData.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const listItem = e.target.closest("li");
    listItem.remove();
  }
});

/**Cross Off Item
    1) addClassName to li 
    2) add CSS styling 'crossing off effect' 
      a) ul li.(className here): text-decoration-line-through
    3) toggleClassNames (on click)
    4) magic

*/
/**  Add To Local Storage
    1) create function with localstorage('data', innerHTML)
    2) render local storage function
*/
