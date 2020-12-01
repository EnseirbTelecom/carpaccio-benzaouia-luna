/* eslint-env jest */

const Bill = require('../src/functions')

test('calcul bill with 0 0', () => {
  expect(Bill.calculBill([0, 0], [0, 0])).toBe(0)
})
test('calcul bill with different sizes', () => {
  expect(Bill.calculBill([0], [0, 0])).toBe(-1)
})
test('calcul bill with negative values for prices', () => {
  expect(Bill.calculBill([-10, 5], [10, 2])).toBe(10)
})
test('calcul bill with negative values for quantities', () => {
  expect(Bill.calculBill([10, 5], [-10, 2])).toBe(10)
})
test('calcul bill with normal values', () => {
  expect(Bill.calculBill([10, 5], [10, 2])).toBe(110)
})
