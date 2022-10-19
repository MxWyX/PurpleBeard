// const button = document.querySelector("#button");

// // Adding an event listener
// button.addEventListener("click", () => {
//   console.log("Button clicked");
// });

// // Event listener which console logs the event
// button.addEventListener("click", (event) => {
//   console.log(event);
// });

// // event to get the selector element
// button.addEventListener("click", (event) => {
//   console.log(event.currentTarget);
// });

// // event to get the selector element
// button.addEventListener("click", (event) => {
//   event.currentTarget.textContent = "I changed";s
// });

const button = document.querySelector("#button");

button.addEventListener("click", reveal);

function reveal() {
  let target = document.querySelector("#dynamicContent");
  target.classList.toggle("hide");
}
