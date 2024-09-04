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

/**  Delete Item
    1) render delete btn to li items
    2) addEventListener to button that will...
    3) removeChild()
    */

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
