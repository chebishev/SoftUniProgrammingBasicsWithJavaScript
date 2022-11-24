function fruitMarket(input){

    //input data
    let strawberriesPrice = Number(input[0]);
    let bananasQuantityKg = Number(input[1]);
    let orangesQuantityKg = Number(input[2]);
    let raspberriesQuantityKg = Number(input[3]);
    let strawberriesQuantityKg = Number(input[4]);

    //prices
    let raspberriesPrice = strawberriesPrice/2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice*0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice*0.8);

    //sum
    let raspberriesSum = raspberriesQuantityKg * raspberriesPrice;
    let orangesSum = orangesQuantityKg * orangesPrice;
    let bananasSum = bananasQuantityKg * bananasPrice;
    let strawberriesSum = strawberriesQuantityKg * strawberriesPrice;

    let total = raspberriesSum+orangesSum+bananasSum+strawberriesSum;

    console.log(total);

}
//fruitMarket(["63.5","3.57","6.35","8.15","2.5"]);