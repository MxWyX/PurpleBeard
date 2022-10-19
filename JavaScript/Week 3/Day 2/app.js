// const link = document.querySelector("a");

// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org";

// const sect = document.querySelector("section");

// const para = document.createElement("p");
// para.textContent = "We hope you enjoyed the ride";
// sect.appendChild(para);

// const text = document.createTextNode(
//   " - the premier source for web development knowledge."
// );
// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);

const addToMain = () => {
  let add = document.querySelector("#log");
  add.textContent = Math.floor(Math.random() * 1000) + 1;
};

const button = document.querySelector("#button");

button.addEventListener("click", addToMain);
