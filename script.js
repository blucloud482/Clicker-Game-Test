let stonks = 0;
let stonksPerClick = 1;
let upgradePrice = 10;
let upgradePrice2 = 50;

function updateUI() {
  document.getElementById('stonks').innerHTML = stonks.toFixed();
  document.getElementById('stonksPerClick').innerHTML =
    stonksPerClick.toFixed(0);
  document.getElementById('upgradePrice').innerHTML = upgradePrice.toFixed(0);
  document.getElementById('upgradePrice2').innerHTML = upgradePrice2.toFixed(0);
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
