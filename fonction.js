function bill(json){
    const obj = JSON.parse(json);
    prices = obj.prices;
    quantities = obj.quantities; 
    const bill = 0;
    if (prices.length == quantities.length){
        prices.forEach ((element, indice) => 
            bill += element*quantities[indice])
    }
}