class Bill {
  static calculBill (prices, quantities) {
    let bills = 0
    if (prices.length === quantities.length) {
      prices.forEach((element, indice) => {
        if (element >= 0 && quantities[indice] >= 0) {
          bills += element * quantities[indice]
        }
      })
      return bills
    } else {
      return -1
    }
  }
}

module.exports = Bill
