const getFullName = require("./index");

test("Suraj Kumar is Suraj Kumar", () => {
  expect(getFullName("Suraj", "Kumar")).toMatch("Suraj Kumar");
});
