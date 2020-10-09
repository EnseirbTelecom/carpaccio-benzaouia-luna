const express = require('express')
const app = express()
const id = require('./id.json')
const bill = require('./bill.json')
fct = require('./fonction.js')

app.get('/id', (req,res) => {
    res.status(200).json(id)
})

app.listen(8080, () => {
    console.log(`Serveur à l'écoute`)
  })

app.post('/bill', (req,res) => {
    //bill.push(req.body)
    res.status(200).json(bill.prices)
})


/*function bill(json){
    const obj = JSON.parse(json);
    prices = obj.prices;
    quantities = obj.quantities; 
    const bill = 0;
    if (prices.length == quantities.length){
        prices.forEach ((element, indice) => 
            bill += element*quantities[indice])
    }*/