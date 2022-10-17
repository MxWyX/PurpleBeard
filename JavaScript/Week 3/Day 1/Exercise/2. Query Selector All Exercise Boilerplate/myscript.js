////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below

console.log(document.querySelectorAll("p")[1]);

const x = document.querySelectorAll(".list");
x.forEach((i) => {
  console.log(i.textContent);
});

console.log(document.querySelectorAll(".list")[2].textContent);

console.log(document.querySelectorAll(".list").length);
