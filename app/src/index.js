const express = require('express')
const app = express()
const id = require('../data/id.json')
const Bill = require('./bill')

app.use(express.json())

app.get('/id', (req, res) => {
  res.status(200).json(id)
})

app.post('/bill', async (req, res) => {
  const prices = req.body.prices
  const quantities = req.body.quantities
  const country = req.body.country
  const discount = req.body.discount
  const currency = req.body.currency
  const tva = Bill.calculationTVA(country)
  let bill = Bill.calculationBill(prices, quantities, tva)
  if (bill.constructor === Error) {
    res.status(400).json({ error: 'error in bill' })
  } else {
    if (discount) {
      bill = Bill.calculationDiscount(discount, bill)
      if (bill.constructor === Error) {
        res.status(400).json({ error: 'error in discount' })
      }
    } if (currency) {
      bill = await Bill.calculationCurrency(currency, bill)
      if (bill.constructor === Error) {
        res.status(400).json({ error: 'error in currency' })
      }
    }
    res.status(200).json({ total: bill })
  }
})

app.listen(8080, () => {
  console.log('Server listening')
})
