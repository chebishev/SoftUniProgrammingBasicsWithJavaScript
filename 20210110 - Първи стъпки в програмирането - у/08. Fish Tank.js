function fishTank(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percents = Number(input[3]);

    let volume = length*width*hight;
    let liters = volume*0.001;
    let percentageSum = percents/100;

    let neededLiters = liters*(1-percentageSum);

    console.log(neededLiters);
}
//fishTank(["105","77","89","18.5"]);