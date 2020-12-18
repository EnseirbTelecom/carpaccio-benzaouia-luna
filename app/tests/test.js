/* eslint-env jest */

const Bill = require('../src/functions')

test('calcul bill with 0 0', () => {
  expect(Bill.calculBill([0, 0], [0, 0], 20)).toBe(0)
})
test('calcul bill with different sizes', () => {
  expect(Bill.calculBill([0], [0, 0], 20)).toMatchObject(Error('Error Bill'))
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
test('calcul de la tva avec un pays qui n est pas dans la liste', () => {
  expect(Bill.calculTVA('A')).toMatchObject(Error('Error Tva'))
})
test('calcul de la tva avec rien en parametre', () => {
  expect(Bill.calculTVA()).toMatchObject(Error('Error Tva'))
})
test('calcul du prix total avec NO_DISCOUNT', () => {
  expect(Bill.calculDiscount('NO_DISCOUNT', 10)).toBe(10)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total entre 1000 et 5000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 2000)).toBe(1940)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total entre 5000 et 7000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 6000)).toBe(5700)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total entre 7000 et 10000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 8000)).toBe(7440)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total entre 10000 et 50000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 20000)).toBe(18000)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total supérieur à 50000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 60000)).toBe(51000)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total de 1000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 1000)).toBe(970)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total de 5000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 5000)).toBe(4750)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total de 7000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 7000)).toBe(6510)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total de 10000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 10000)).toBe(9000)
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total de 50000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', 50000)).toBe(42500)
})
test('calcul du prix total avec FLAT_DISCOUNT et total de 100', () => {
  expect(Bill.calculDiscount('FLAT_DISCOUNT', 100)).toBe(70)
})
test('calcul du prix total avec FIXED_DISCOUNT et total de 200', () => {
  expect(Bill.calculDiscount('FIXED_DISCOUNT', 200)).toBe(190)
})
test('calcul du prix total avec FIXED_DISCOUNT et total de 500', () => {
  expect(Bill.calculDiscount('FIXED_DISCOUNT', 500)).toBe(450)
})
test('calcul du prix total avec FIXED_DISCOUNT et total de 1200', () => {
  expect(Bill.calculDiscount('FIXED_DISCOUNT', 1200)).toBe(1000)
})
test('calcul du prix total avec FIXED_DISCOUNT et total de -1200', () => {
  expect(Bill.calculDiscount('FIXED_DISCOUNT', -1200)).toMatchObject(Error('Error Discount'))
})
test('calcul du prix total avec PROGRESSIVE_DISCOUNT et total de -50000', () => {
  expect(Bill.calculDiscount('PROGRESSIVE_DISCOUNT', -50000)).toMatchObject(Error('Error Discount'))
})
test('calcul du prix total avex faux discount', () => {
  expect(Bill.calculDiscount('test_discount', 1200)).toMatchObject(Error('Error Discount'))
})
