const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];

function calculateTotalSalesWithTax(products, tax) {
    const sales = products
    .map(item => item.price * item.quantity)
    .reduce((acc, num) => acc + num, 0);

    return +(sales + (sales * tax / 100)).toFixed(2);
}

module.exports = calculateTotalSalesWithTax;
