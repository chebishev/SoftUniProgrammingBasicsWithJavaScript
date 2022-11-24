//02. Бонус точки
function bonusPoints(input){

    let num = Number(input[0]);
    let points = 0.0;
    if(num<=100){
        points = 5;
    } else if(num>1000){
        points = num*0.1;

    }else {
        points = num*0.2;
    }

    if(num%2 == 0){
        points += 1;
    }else if (num%10 == 5){
        points+=2;
    }
    console.log(points);
    console.log(num+points);
}
//bonusPoints(["15875"]);