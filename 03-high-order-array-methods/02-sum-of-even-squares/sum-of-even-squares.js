function sumOfEvenSquares(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * n) // oppure n ** 2
    .reduce((acc, num) => acc + num, 0);
}

module.exports = sumOfEvenSquares;
