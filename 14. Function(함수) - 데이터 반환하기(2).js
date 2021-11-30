// way1
function getTax(price) {
  return price * 0.1;
}

function calculateTotal(price) {
  return price + getTax(price);
}

function getTotal(price1, price2) {
  let totalPrice1 = calculateTotal(price1);
  let totalPrice2 = calculateTotal(price2);
  return totalPrice1 + totalPrice2;
}

const result = getTotal(1000, 1000);
console.log(result);

// way2
function getTax(num) {
  return num * 0.1;
}

function calculateTotal(num) {
  return getTax(num) + num;
}

function getTotal(num1, num2) {
  return calculateTotal(num1) + calculateTotal(num2);
}
