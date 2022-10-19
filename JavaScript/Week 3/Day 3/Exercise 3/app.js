const Conv = {
  _pound: 0.8,
  _dollar: 1.2,
  get pound() {
    return this._pound;
  },
  get dollar() {
    return this._dollar;
  },
};

document.querySelector("#logIn").addEventListener("submit", attempt);

let usd = document.querySelector("#USD").value;
document.querySelector("#GBP").value = usd * Conv.pound;

function attempt(event) {
  event.preventDefault();
  const amount = document.querySelector("#amount");
  const show = document.querySelector("#answer");
  let answer = amount;
  document.querySelector("#convert").classList.toggle("hide");
}
