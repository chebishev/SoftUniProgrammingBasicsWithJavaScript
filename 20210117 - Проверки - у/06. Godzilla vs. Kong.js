//06. Годзила срещу Конг
function movieCosts(input){

    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothesPerStatistPrice = Number(input[2]);

    let decors = budget*0.1;
    let clothes = statistCount*clothesPerStatistPrice;
    
    if(statistCount>150){
        clothes = clothes * 0.9;
    }
 
    
    total = decors+clothes;

    if(budget>=total){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-total).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(Math.abs(total-budget).toFixed(2))} leva more.`);
    }
    
}
//movieCosts(["9587.88","222","55.68"]);