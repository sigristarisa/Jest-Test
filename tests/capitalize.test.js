const capitalize = require("../files/capitalize");

test("capitalize the first letter", () => {
  expect(capitalize("alaska")).toBe("Alaska");
});
