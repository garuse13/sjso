
const balanceEl = document.getElementById("balance");
const logEl = document.getElementById("log");
const stocksEl = document.getElementById("stocks");

let balance = parseInt(localStorage.getItem("balance")) || 10000;
balanceEl.textContent = balance;

function updateBalance(amount) {
  balance += amount;
  balanceEl.textContent = balance;
  localStorage.setItem("balance", balance);
}

function addLog(message) {
  const li = document.createElement("li");
  li.textContent = message;
  logEl.prepend(li);
}

function playRoulette() {
  const win = Math.random() < 0.47;
  const amount = win ? 1000 : -500;
  updateBalance(amount);
  addLog(`🎡 Roulette: ${win ? "Win" : "Lose"} ${amount}₩`);
}

function playCrash() {
  const multiplier = (Math.random() * 3 + 1).toFixed(2);
  const win = Math.random() < 0.5;
  const amount = win ? Math.floor(1000 * multiplier) : -1000;
  updateBalance(amount);
  addLog(`💥 Crash: ${win ? "Multiplied x" + multiplier : "Crashed"} → ${amount}₩`);
}

function rollDice() {
  const win = Math.random() > 0.5;
  const amount = win ? 500 : -500;
  updateBalance(amount);
  addLog(`🎲 Dice: ${win ? "Win" : "Lose"} ${amount}₩`);
}

function renderStocks() {
  stocksEl.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const value = Math.floor(Math.random() * 9000 + 1000);
    const div = document.createElement("div");
    div.textContent = `📊 STK${i}: ${value}₩`;
    stocksEl.appendChild(div);
  }
}
renderStocks();
