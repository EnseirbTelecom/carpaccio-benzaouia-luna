const express = require('express')
const app = express()
const id = require('../data/id.json')
const json = require('express')
const bodyParser = require('body-parser');


app.use(express.json());

app.get('/id', (req,res) => {
    res.status(200).json(id)
})

app.post('/bill', (req,res) => {
    prices = req.body.prices;
    quantities = req.body.quantities; 
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

