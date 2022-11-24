function sumNumbers(input){
    
    let index = 0;
    let targetNum = Number(input[index]);
    index++;
    let nextNum = Number(input[index]);
    index++;

    while(nextNum < targetNum){
        nextNum += Number(input[index]);
        index++;
    }
    console.log(nextNum);
}
//sumNumbers(["100","10","20","30","40"]);
sumNumbers(["20","1","2","3","4","5","6"]);