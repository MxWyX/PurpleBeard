const Conv = {
  _pound: 0.89,
  _dollar: 1.13,
  get pound() {
    return this._pound;
  },
  get dollar() {
    return this._dollar;
  },
};

document.querySelector("#convert").addEventListener("submit", attempt);

function attempt(event) {
  event.preventDefault();
  document.querySelector("#final").removeChild(ans);
  const gbp = document.querySelector("#GBP").value;
  const usd = gbp * Conv.dollar;
  let ans = document.createElement("p");
  ans.textContent = `$${usd.toFixed(2)}`;
  document.querySelector("#final").appendChild(ans);
  document.querySelector("#final").classList.toggle("hide");
}
