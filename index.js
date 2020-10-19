const express = require('express')
const app = express()
const id = require('./id.json')
const bill = require('./bill.json')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/id', (req,res) => {
    res.status(200).json(id)
})

app.post('/bill', (req,res) => {
    prices = bill.prices;
    quantities = bill.quantities; 
    var bills = 0;
    if (prices.length == quantities.length){
        prices.forEach ((element, indice) => 
            bills += element*quantities[indice])
        res.status(200).json({total: bills})
    }
    else {
        res.status(404).json({error : 'error message'})
    }
    
})



app.listen(8080, () => {
    console.log(`Server listening`)
  })




