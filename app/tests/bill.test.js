/* eslint-env jest */

const Bill = require('../src/bill')

test('get bill with 0 0', () => {
  expect(Bill.calculationBill([0, 0], [0, 0], 20)).toBe(0)
})
test('get bill with different sizes', () => {
  expect(Bill.calculationBill([0], [0, 0], 20)).toMatchObject(Error('Error Bill'))
})
test('get bill with negative values for prices', () => {
  expect(Bill.calculationBill([-10, 5], [10, 2], 20)).toBe(12)
})
test('get bill with negative values for quantities', () => {
  expect(Bill.calculationBill([10, 5], [-10, 2], 20)).toBe(12)
})
test('get bill with normal values', () => {
  expect(Bill.calculationBill([1, 2], [10, 20], 20)).toBe(60)
})
test('get TVA', () => {
  expect(Bill.calculationTVA('FR')).toBe(20)
})
test('get TVA when a country is not in the list', () => {
  expect(Bill.calculationTVA('A')).toMatchObject(Error('Error Tva'))
})
test('get TVA with no arguments', () => {
  expect(Bill.calculationTVA()).toMatchObject(Error('Error Tva'))
})
test('get total price with  NO_DISCOUNT', () => {
  expect(Bill.calculationDiscount('NO_DISCOUNT', 10)).toBe(10)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill between 1000 and 5000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 2000)).toBe(1940)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill between 5000 and 7000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 6000)).toBe(5700)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill between 7000 and 10000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 8000)).toBe(7440)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill between 10000 and 50000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 20000)).toBe(18000)
})
test('get total price with PROGRESSIVE_DISCOUNT and a bill more then 50000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 60000)).toBe(51000)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill equal to 1000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 1000)).toBe(970)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill 5000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 5000)).toBe(4750)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill 7000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 7000)).toBe(6510)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill 10000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 10000)).toBe(9000)
})
test('get total price with PROGRESSIVE_DISCOUNT and bill 50000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', 50000)).toBe(42500)
})
test('get total price FLAT_DISCOUNT and bill equal to 100', () => {
  expect(Bill.calculationDiscount('FLAT_DISCOUNT', 100)).toBe(70)
})
test('get total price FIXED_DISCOUNT and bill equal to 200', () => {
  expect(Bill.calculationDiscount('FIXED_DISCOUNT', 200)).toBe(190)
})
test('get total price FIXED_DISCOUNT and bill equal to 500', () => {
  expect(Bill.calculationDiscount('FIXED_DISCOUNT', 500)).toBe(450)
})
test('get total price FIXED_DISCOUNT and bill equal to 1200', () => {
  expect(Bill.calculationDiscount('FIXED_DISCOUNT', 1200)).toBe(1000)
})
test('get total price FIXED_DISCOUNT and bill equal to -1200', () => {
  expect(Bill.calculationDiscount('FIXED_DISCOUNT', -1200)).toMatchObject(Error('Error Discount'))
})
test('get total price with PROGRESSIVE_DISCOUNT and bill equal to -50000', () => {
  expect(Bill.calculationDiscount('PROGRESSIVE_DISCOUNT', -50000)).toMatchObject(Error('Error Discount'))
})
test('get total bill with wrong discount', () => {
  expect(Bill.calculationDiscount('test_discount', 1200)).toMatchObject(Error('Error Discount'))
})
