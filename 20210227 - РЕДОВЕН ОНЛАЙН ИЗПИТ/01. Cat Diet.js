function catDiet(input) {

    let percentFat = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbs = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWater = Number(input[4]);
    let gramsFat = (totalCalories * (percentFat / 100)) / 9;
    let gramsProteins = (totalCalories * (percentProtein / 100)) / 4;
    let gramsCarbs = (totalCalories * (percentCarbs / 100)) / 4;
    let gramsFood = gramsFat + gramsProteins + gramsCarbs;
    let calories = (totalCalories / gramsFood) * ((100 - percentWater) / 100);

    console.log(calories.toFixed(4));
}
//catDiet(['60', '25', '15', '2500', '60']);
//catDiet(['40', '40', '20', '3000', '40']);
catDiet(['20', '60', '20', '1800', '50']);