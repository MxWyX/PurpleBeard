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

document.querySelector("show").addEventListener("click", show);

const show = () => {
  let data = sessionStorage.getItem("userData");
  data = JSON.parse(data);
  document.querySelector(".display").textContent = data;
};
