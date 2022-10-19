const User = {
  _username: "Max",
  _password: "Frontend303!",
  get username() {
    return this._username;
  },
  get password() {
    return this._password;
  },
};

// let logIn = document.querySelector('#logIn');
// logIn.addEventListener('submit',attempt)

document.querySelector("#logIn").addEventListener("submit", attempt);

function attempt(event) {
  event.preventDefault();
  let usernameTry = document.querySelector("#username").value;
  let passwordTry = document.querySelector("#password").value;
  if (usernameTry === User.username && passwordTry === User.password) {
    document.querySelector("#auth").classList.toggle("hide");
  } else {
    document.querySelector("#nonAuth").classList.toggle("hide");
  }
}
