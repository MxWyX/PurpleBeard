let food = ["chippies", "burger", "hot dog", "cola"];

let list = document.querySelector("#dynamicContent");

const lister = (food, list) => {
  list.innerHTML = "<ul>";
  food.forEach((scran) => {
    list.innerHTML += `<li>${scran}</li>`;
  });
  list.innerHTML = "</ul>";
};

lister(food, list);

let body = document.querySelector("body");
body.classList.add("#darkMode");
