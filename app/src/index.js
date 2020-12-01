const express = require('express')
const app = express()
const id = require('../data/id.json')
const json = require('express')
const bodyParser = require('body-parser');
//const { calcul_bill } = require('./functions');
var Bill = require('./functions');


app.use(express.json());

app.get('/id', (req,res) => {
    res.status(200).json(id)
})

app.post('/bill', (req,res) => {
    prices = req.body.prices;
    quantities = req.body.quantities;
    bills = new Bill 
    bill = bills.calcul_bill(prices, quantities);
    if (bill == -1 ){
        res.status(400).json({error : 'error message'})
    }
    else {
        res.status(200).json({total: bill})
    }
    
})



app.listen(8080, () => {
    console.log(`Server listening`)
  })

