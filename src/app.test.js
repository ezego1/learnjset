const { TestScheduler } = require('jest')
const cal = require('./app')


test("Test should return the sum of a given numbers", () => {
     expect(cal.sum(1, 2)).toBe(3);
})



test("Test should return result of subracting", () => {
  expect(cal.subract(8, 2)).toBe(6);
});



test("Test should return result of multiplying to numbers", () => {
  expect(cal.multiply(4, 4)).toBe(16);
});