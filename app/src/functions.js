const tva = require('../data/tva.json')

class Bill {
  static calculBill (prices, quantities, tva) {
    let bills = 0
    if (prices.length === quantities.length) {
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
    } else {
      return -1
    }
  }

  static calculTVA (country) {
    if (country !== undefined) {
      return tva[country]
    } else {
      return 'error no country give'
    }
  }
}

module.exports = Bill
