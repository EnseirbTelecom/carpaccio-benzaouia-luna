const express = require('express')
const app = express()
const id = require('../data/id.json')
const Bill = require('./functions')

app.use(express.json())

app.get('/id', (req, res) => {
  res.status(200).json(id)
})

app.post('/bill', (req, res) => {
  const prices = req.body.prices
  const quantities = req.body.quantities
  const country = req.body.country
  const discount = req.body.discount
  const tva = Bill.calculTVA(country)
  const bill = Bill.calculBill(prices, quantities, tva)
  if (bill.constructor === Error) {
    res.status(400).json({ error: 'error message' })
  } else {
    if (discount) {
      console.log(discount)
      const finalBill = Bill.calculDiscount(discount, bill)
      res.status(200).json({ total: finalBill })
    } else {
      res.status(200).json({ total: bill })
    }
  }
})

app.listen(8080, () => {
  console.log('Server listening')
})
