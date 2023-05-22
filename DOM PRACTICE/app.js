// Rules: Don’t make any changes to HTML file directly. Only write JavaScript code to do the following below:

// Change the color of the h1 text to red through JavaScript when the page loads
// If user clicks on button with text “Click me to change text to green”, change the text of h1 tag to green.
// If user clicks on button with text “Click me to change text to blue”, change the text of h1 tag to blue.
// Create a paragraph tag with the text “Footer Text” and add it as the last element INSIDE of the DIV with the ID of section.
// If user clicks on button with text “I don't have a class or ID”, then create an alert to the user saying “I don't have a class or ID”
// If user clicks on the button with text “Click to enlarge buttons to the left”, then add the class of “btn-lg” to the 2 buttons on the left of it. Accomplish this by creating a loop and adding the class to the buttons with a loop.

const firstItem = document.querySelector("h1");

// ################## 1 ####################
// function textColor(){
//     firstItem.style.color = 'red'
// }

// window.addEventListener('load' , textColor)
window.addEventListener("load", () => (firstItem.style.color = "red"));

// ################## 2 ####################
const green = document.querySelector(".btn-success");

function changeColor() {
  firstItem.style.color = "green ";
}

green.addEventListener("click", changeColor);

// ################## 3 ####################

const blue = document.querySelector(".btn-primary");

blue.addEventListener("click", () => (firstItem.style.color = "blue"));

// ################## 4 ####################

function insertElement() {
  const div = document.getElementById("section");
  const para = document.createElement("p");
  para.textContent = "Footer Text";

  div.insertAdjacentElement("beforeend", para);
}

insertElement();

// ################## 5 ####################

const div = document.getElementById("section");
const firstChild = div.children[0];
function firstClick() {
  firstItem.innerText = "I don't have a class or ID";
}

firstChild.addEventListener("click", firstClick);

const enlarge = document.querySelector("#enlargeBtn");

function engulf() {
  const btn = document.querySelectorAll(".changeColorBtn")
  btn.forEach((item) => {
    item.classList.add("btn-lg");
  });
}

enlarge.addEventListener("click", engulf);

