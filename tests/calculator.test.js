const calculator = require("../files/calculator");

test("add two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("divide two numbers", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
