function diceGameSimulation(numSimulations) {
  let games = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const dice2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const sum = dice1 + dice2;

    let result = "";

    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    games.push({ dice1, dice2, sum, result });
  }

  return games;
}

module.exports = diceGameSimulation;
