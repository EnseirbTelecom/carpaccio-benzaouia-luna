const express = require('express')
const app = express()
const got = require('got')
const id = require('../data/id.json')
const Bill = require('./bill')

app.use(express.json())

app.get('/id', (req, res) => {
  res.status(200).json(id)
})

async function getCurrency () {
  try {
    const response = await got('https://api.exchangeratesapi.io/latest')
    // console.log(response.body);
    return response.body
  } catch (error) {
    console.log(error.response.body)
  }
}

getCurrency().then((a) => console.log(a))

app.post('/bill', (req, res) => {
  const prices = req.body.prices
  const quantities = req.body.quantities
  const country = req.body.country
  const discount = req.body.discount
  const tva = Bill.calculationTVA(country)
  const bill = Bill.calculationBill(prices, quantities, tva)
  if (bill.constructor === Error) {
    res.status(400).json({ error: 'error message' })
  } else {
    if (discount) {
      console.log(discount)
      const discountBill = Bill.calculationDiscount(discount, bill)
      if (discountBill.constructor === Error) {
        res.status(400).json({ error: 'error message' })
      }
      res.status(200).json({ total: discountBill })
    } else {
      res.status(200).json({ total: bill })
    }
  }
})

app.listen(8080, () => {
  console.log('Server listening')
})
