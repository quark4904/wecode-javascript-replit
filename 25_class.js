class MyMath {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  getNumber(arr) {
    return [this.num1, this.num2];
  }

  add(addNumber) {
    return this.num1 + this.num2;
  }

  substract(subNumber) {
    return this.num1 - this.num2;
  }

  multiply(mulNumber) {
    return this.num1 * this.num2;
  }
}
