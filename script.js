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
let prestigeLevel = 0;
let prestigeBonus = 1;
let prestigePrice = 100000;

function updateUI() {
  document.getElementById('stonks').innerHTML =
    Math.floor(stonks).toLocaleString();
  document.getElementById('stonksPerClick').innerHTML =
    Math.floor(stonksPerClick).toLocaleString();
  document.getElementById('upgradePrice').innerHTML =
    Math.floor(upgradePrice).toLocaleString();
  document.getElementById('upgradePrice2').innerHTML =
    Math.floor(upgradePrice2).toLocaleString();
  document.getElementById('upgradePrice3').innerHTML =
    Math.floor(upgradePrice3).toLocaleString();
  document.getElementById('upgradePrice4').innerHTML =
    Math.floor(upgradePrice4).toLocaleString();
  document.getElementById('upgradePrice5').innerHTML =
    Math.floor(upgradePrice5).toLocaleString();
  document.getElementById('upgradePrice6').innerHTML =
    Math.floor(upgradePrice6).toLocaleString();
  document.getElementById('upgradesBought').innerHTML =
    Math.floor(upgradesBought).toLocaleString();
  document.getElementById('totalClicks').innerHTML =
    Math.floor(totalClicks).toLocaleString();
  document.getElementById('presigePrice').innerHTML =
    Math.floor(prestigePrice).toLocaleString();
  document.getElementById('prestigeLevel').innerHTML =
    Math.floor(prestigeLevel).toLocaleString();
}

function increaseStonks() {
  stonks += stonksPerClick *= prestigeBonus;
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

//Prestige

function prestige() {
  if (stonks >= prestigePrice) {
    stonks -= prestigePrice;
    prestigeBonus *= 2;
    prestigePrice *= 10;
    prestigeLevel += 1;
    stonks = 0;
    stonksPerClick = 1;
    upgradePrice = 10;
    upgradePrice2 = 50;
    upgradePrice3 = 150;
    upgradePrice4 = 250;
    upgradePrice5 = 500;
    upgradePrice6 = 1000;
    updateUI();
  }
}

//DevTool

function devTool() {
  score += 1000000000;
  totalClicks += 1000000000;
}

window.onload = updateUI;
