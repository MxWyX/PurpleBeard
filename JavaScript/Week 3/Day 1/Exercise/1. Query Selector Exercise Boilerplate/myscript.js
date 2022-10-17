//////////////// Query Selector Exercise //////////////////
/*
1. Given the boiler plate use query selector console log the following items on the page:​

    - The text Content of the H1 element​
    - The text content of the id “Hero”​
    -The text content of the first instance of the class “list”​

2. Add some text to the p tag with the id “dynamic-text”​
​*/

// Add Your JavaScript Below

console.log(document.querySelector("h1").textContent);
console.log(document.querySelector("#hero").textContent);
console.log(document.querySelector(".list").textContent);

document.querySelector("#dynamic-text").textContent = "This text is dynamic!";
