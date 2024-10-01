let stonks = 0;
let stonksPerClick = 1;
let upgradePrice = 10;
let upgradePrice2 = 50;
let upgradePrice3 = 150;
let upgradePrice4 = 250;

function updateUI() {
  document.getElementById('stonks').innerHTML = stonks.toFixed();
  document.getElementById('stonksPerClick').innerHTML =
    stonksPerClick.toFixed(0);
  document.getElementById('upgradePrice').innerHTML = upgradePrice.toFixed(0);
  document.getElementById('upgradePrice2').innerHTML = upgradePrice2.toFixed(0);
  document.getElementById('upgradePrice3').innerHTML = upgradePrice3.toFixed(0);
  document.getElementById('upgradePrice4').innerHTML = upgradePrice4.toFixed(0);
}

function increaseStonks() {
  stonks += stonksPerClick;
  updateUI();
}

//Upgrades

//+1
function increaseStonksPerClick() {
  if (stonks >= upgradePrice) {
    stonks -= upgradePrice;
    stonksPerClick += 1;
    upgradePrice *= 1.5;
    updateUI();
  }
}

//+5
function increaseStonksPerClick2() {
  if (stonks >= upgradePrice2) {
    stonks -= upgradePrice2;
    stonksPerClick += 5;
    upgradePrice2 *= 2;
    updateUI();
  }
}

//+15
function increaseStonksPerClick3() {
  if (stonks >= upgradePrice3) {
    stonks -= upgradePrice3;
    stonksPerClick += 15;
    upgradePrice3 *= 2.5;
    updateUI();
  }
}

//+25
function increaseStonksPerClick4() {
  if (stonks >= upgradePrice4) {
    stonks -= upgradePrice4;
    stonksPerClick += 25;
    upgradePrice4 *= 3;
    updateUI();
  }
}
