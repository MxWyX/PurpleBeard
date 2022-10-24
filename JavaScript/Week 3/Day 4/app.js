document.querySelector("form").addEventListener("submit", attempt);

function attempt() {
  event.preventDefault();
  let fName = document.querySelector("#fName").value;
  let lName = document.querySelector("#lName").value;
  let DOB = document.querySelector("#DOB").value;
  let email = document.querySelector("#email").value;

  let userData = {
    firstName: fName,
    lastName: lName,
    dob: DOB,
    email: email,
  };

  userDate = JSON.stringify(userData);
  sessionStorage.setItem("userData", userData);

  console.log(userData);
}

let hidden = document.querySelector("show");

console.log(typeof hidden);

hidden.addEventListener("click", show);

const show = () => {
  debugger;
  let data = sessionStorage.getItem("userData");
  data = JSON.parse(data);
  document.querySelector(".display").textContent = data;
};
