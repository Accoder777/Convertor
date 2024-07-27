const fromCurrency = document.getElementById('fromCurrancy')
const fromCurrancySelection = document.getElementById('fromCurrancySelection')
const toCurrancySelection = document.getElementById('toCurrancySelection')
const toCurrancyDisplay = document.getElementById('toCurrancyDisplay')
const btn = document.getElementById('btn')




btn.addEventListener('click',()=>{
    const url = `https://v6.exchangerate-api.com/v6/5a49f86244206351de71fb10/latest/${fromCurrancySelection.value}`

    fetch(url)
      .then(response => response.json())
      .then(data => getData(data));

})

const getData = (data)=>{
    const conversionRate = data.conversion_rates[toCurrancySelection.value];
    const SUM = conversionRate * fromCurrency.value
    if(Number.isInteger(SUM))
    {
        toCurrancyDisplay.value = SUM
    }
    else{    
        toCurrancyDisplay.value = SUM.toFixed(2)
    }
}