function calcEur(){
    let euro = euroField.value;
    let result = euro * 1.0678;
    usd.value = result.toFixed(2).replace('.', ',');
}

function calcUsd(){
    let usd = usdField.value;
    let result = usd * 0.9365;
    eur.value = result.toFixed(2).replace('.', ',');
}