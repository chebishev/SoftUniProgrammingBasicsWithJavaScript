function changeBureau(args){

  let bitcoin = Number(args[0]);
  let yuan = Number(args[1]);
  let commission = Number(args[2]);
                       
  let bitcoinToLv = bitcoin * 1168;
  let yuanToLv = (yuan * 0.15) * 1.76;
  
  let totalInEuro = (bitcoinToLv + yuanToLv) / 1.95;
  let pureSum = totalInEuro - ((commission/100)*totalInEuro);
                       
console.log(pureSum.toFixed(2));
                  
  
}
changeBureau([20,
    5678,
    2.4]);