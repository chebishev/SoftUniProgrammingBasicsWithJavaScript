function sumOfTwoNumbers(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for(let i = x; i<=y;i++){
        for(let j = x;j<=y;j++){
            counter++;
            if(i+j===magicNumber){
                isFound = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                break;
        }
        }
        if(isFound){
            break;
        }
        
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`);

     }


}
//sumOfTwoNumbers(["1","10","5"]);
//sumOfTwoNumbers(["23","24","20"]);
sumOfTwoNumbers(["88","888","1000"]);
sumOfTwoNumbers(["88","888","2000"]);