const tva = require('../data/tva.json')

class Bill {
  static calculationBill (prices, quantities, tva) {
    let bills = 0
    try {
      if (tva.constructor !== Error && prices.length === quantities.length) {
        prices.forEach((element, indice) => {
          if (element >= 0 && quantities[indice] >= 0) {
            bills += element * quantities[indice]
          }
        })
        if (bills === 0 || bills < 0) {
          return bills
        } else {
          const tvasurbill = bills * tva / 100
          bills = bills + tvasurbill
          return bills
        }
      }
      throw new Error('Error Bill')
    } catch (e) {
      return e
    }
  }

  static calculationTVA (country) {
    try {
      if (tva[country] !== undefined) {
        return tva[country]
      }
      throw new Error('Error Tva')
    } catch (e) {
      return e
    }
  }

  static calculationDiscount (discount, total) {
    if (total < 0) {
      return new Error('Error Discount')
    }
    switch (discount) {
      case 'NO_DISCOUNT' :
        return total
      case 'PROGRESSIVE_DISCOUNT' :
        if (total >= 1000 && total < 5000) {
          return total - total * 3 / 100
        }
        if (total >= 5000 && total < 7000) {
          return total - total * 5 / 100
        }
        if (total >= 7000 && total < 10000) {
          return total - total * 7 / 100
        }
        if (total >= 10000 && total < 50000) {
          return total - total * 10 / 100
        }
        if (total >= 50000) {
          return total - total * 15 / 100
        }
        break
      case 'FLAT_DISCOUNT' :
        return total - total * 30 / 100
      case 'FIXED_DISCOUNT' :
        if (total >= 100 && total < 400) {
          return total - 10
        }
        if (total >= 400 && total < 1000) {
          return total - 50
        }
        if (total >= 1000) {
          return total - 200
        }
        break
      default :
        return new Error('Error Discount')
    }
  }
}

module.exports = Bill
