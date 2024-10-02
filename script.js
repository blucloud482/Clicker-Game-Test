let stonks = 0;
let stonksPerClick = 1;
let upgradePrice = 10;
let upgradePrice2 = 50;
let upgradePrice3 = 150;
let upgradePrice4 = 250;
let upgradePrice5 = 500;
let upgradePrice6 = 1000;
let totalClicks = 0;
let upgradesBought = 0;

function updateUI() {
  document.getElementById('stonks').innerHTML = stonks.toFixed();
  document.getElementById('stonksPerClick').innerHTML =
    stonksPerClick.toFixed(0);
  document.getElementById('upgradePrice').innerHTML = upgradePrice.toFixed(0);
  document.getElementById('upgradePrice2').innerHTML = upgradePrice2.toFixed(0);
  document.getElementById('upgradePrice3').innerHTML = upgradePrice3.toFixed(0);
  document.getElementById('upgradePrice4').innerHTML = upgradePrice4.toFixed(0);
  document.getElementById('upgradePrice5').innerHTML = upgradePrice5.toFixed(0);
  document.getElementById('upgradePrice6').innerHTML = upgradePrice6.toFixed(0);
  document.getElementById('upgradesBought').innerHTML =
    upgradesBought.toFixed(0);
  document.getElementById('totalClicks').innerHTML = totalClicks.toFixed(0);
}

function increaseStonks() {
  stonks += stonksPerClick;
  totalClicks += 1;
  updateUI();
}

//Upgrades

//+1
function increaseStonksPerClick() {
  if (stonks >= upgradePrice) {
    stonks -= upgradePrice;
    stonksPerClick += 1;
    upgradePrice *= 1.5;
    upgradesBought += 1;
    updateUI();
  }
}

//+5
function increaseStonksPerClick2() {
  if (stonks >= upgradePrice2) {
    stonks -= upgradePrice2;
    stonksPerClick += 5;
    upgradePrice2 *= 2;
    upgradesBought += 1;
    updateUI();
  }
}

//+15
function increaseStonksPerClick3() {
  if (stonks >= upgradePrice3) {
    stonks -= upgradePrice3;
    stonksPerClick += 15;
    upgradePrice3 *= 2.5;
    upgradesBought += 1;
    updateUI();
  }
}

//+25
function increaseStonksPerClick4() {
  if (stonks >= upgradePrice4) {
    stonks -= upgradePrice4;
    stonksPerClick += 25;
    upgradePrice4 *= 3;
    upgradesBought += 1;
    updateUI();
  }
}

//+50
function increaseStonksPerClick5() {
  if (stonks >= upgradePrice5) {
    stonks -= upgradePrice5;
    stonksPerClick += 50;
    upgradePrice5 *= 4;
    upgradesBought += 1;
    updateUI();
  }
}

//*2
function increaseStonksPerClick6() {
  if (stonks >= upgradePrice6) {
    stonks -= upgradePrice6;
    stonksPerClick *= 2;
    upgradePrice6 *= 5;
    upgradesBought += 1;
    updateUI();
  }
}
