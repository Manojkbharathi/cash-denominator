"use strict";

const btnCalculate = document.getElementById("btn-calculate");

const billAmt = document.getElementById("bill-amount");

const amountPaid = document.getElementById("amount-paid");
const balAmt = document.getElementById("balance-amt");
const valueEl = document.getElementById("value");
const countEl = document.getElementById("count");
// global var
const currencies = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
const denominations = [];

function showDenomination(balance) {
  denominations.length = 0;
  let copyOfBalance = balance;
  currencies.forEach((currency) => {
    const count = Math.trunc(copyOfBalance / currency);

    denominations.push(count);
    copyOfBalance = copyOfBalance % currency;
  });
}
function showValue() {
  let ul = document.createElement("ul");
  currencies.forEach((currency) => {
    const li = document.createElement("li");
    li.classList.add("currency-notes");
    li.innerHTML = `<span class = "value">${currency}</span>`;
    valueEl.appendChild(li);
  });
}
function showCount() {
  let ul = document.createElement("ul");
  denominations.forEach((denomination) => {
    const li = document.createElement("li");
    li.classList.add("balance-amt");
    li.innerHTML = `<span class = "count">${denomination}</span>`;
    countEl.appendChild(li);
  });
}

btnCalculate.addEventListener("click", (e) => {
  e.preventDefault();
  const billAmount = Number(billAmt.value);
  const paidAmt = Number(amountPaid.value);

  if (billAmount && paidAmt) {
    const balance = billAmount - paidAmt;
    balAmt.innerHTML = `Balance : ${balance}`;
    showDenomination(balance);
    showValue();
    showCount();
  } else {
    alert("fields are mandatory");
  }
});
