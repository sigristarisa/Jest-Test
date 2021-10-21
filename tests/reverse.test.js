const reverseString = require("../files/reverse");

test("reverse the string", () => {
  expect(reverseString("alaska")).toBe("aksala");
});
