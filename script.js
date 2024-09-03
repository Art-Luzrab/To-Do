//grab form data from user inputs
document
  .querySelector(".formContainer")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    console.log(userInput);
  });
