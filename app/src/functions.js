const tva = require('../data/tva.json')

class Bill {
  static calculBill (prices, quantities, tva) {
    let bills = 0
    try {
      if (tva !== "error tva" && prices.length === quantities.length) {
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
    throw "error"
  } catch(e) {
      return e;
    }
  }

  static calculTVA (country) {
    try{
      if (tva[country] !== undefined){
          return tva[country]
      }
      throw "error tva"
    }
    catch(e) {
     return e;
    }
  } 
}

module.exports = Bill
