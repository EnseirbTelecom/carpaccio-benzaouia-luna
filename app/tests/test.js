/* eslint-env jest */

const Bill = require('../src/functions')

test('calcul bill with 0 0', () => {
  expect(Bill.calculBill([0, 0], [0, 0], 20)).toBe(0)
})
test('calcul bill with different sizes', () => {
  expect(Bill.calculBill([0], [0, 0], 20)).toBe("error")
})
test('calcul bill with negative values for prices', () => {
  expect(Bill.calculBill([-10, 5], [10, 2], 20)).toBe(12)
})
test('calcul bill with negative values for quantities', () => {
  expect(Bill.calculBill([10, 5], [-10, 2], 20)).toBe(12)
})
test('calcul bill with normal values', () => {
  expect(Bill.calculBill([1, 2], [10, 20], 20)).toBe(60)
})
test('calcul de la tva', () => {
  expect(Bill.calculTVA('FR')).toBe(20)
})
test('calcul de la tva avec rien en parametre', () => {
  expect(Bill.calculTVA()).toBe('error no country given')
})

