function combinations(input){
    let targetNumber = Number(input[0]);
    let counter = 0;

    for(let x1 = 0;x1<=targetNumber;x1++){
        for(let x2 = 0;x2<=targetNumber;x2++){
            for(let x3 = 0;x3<=targetNumber;x3++){
                
                if((x1+x2+x3)===targetNumber){
                    counter++;
                    
                }
            }
        }
    }
    console.log(counter);

}
combinations(["25"]); //expected 351
combinations(["20"]); //expected 231
combinations(["5"]); //expected 21