//07. Магазин за детски играчки
function toyShop(input){

    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let order = (puzzles * 2.60) + (talkingDolls * 3) + (bear * 4.10) + (minion * 8.20) + (truck * 2);

    if((puzzles+talkingDolls+bear+minion+truck)>=50){

        order = order * 0.75;

    }

    let rent = order - (order * 0.9);

    let profit = order - rent;

    if(profit >= excursionPrice){
        console.log(`Yes! ${((Math.abs(profit-excursionPrice)).toFixed(2))} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(Math.abs(profit-excursionPrice)).toFixed(2)} lv needed.`);
    }
}
//toyShop(["320", "8", "2", "5", "5", "1"]);