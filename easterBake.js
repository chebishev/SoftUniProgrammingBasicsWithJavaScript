function easterBake(input) {
    let index = 0;
    let countEasterBread = Number(input[index]);
    index++;
    let countSugarG = 0;
    let countFlourG = 0;
    let sugarNeeded = 0;
    let flourNeeded = 0;
    let maxFlour = 0;
    let maxSugar = 0;
    for (let i = 0; i < countEasterBread; i++) {
        let sugarQuantity = Number(input[index]);
        index++;
        let flourQuantity = Number(input[index]);
        index++;
        countSugarG += sugarQuantity;
        countFlourG += flourQuantity;
        if (sugarQuantity > maxSugar) {
            maxSugar = sugarQuantity;
        }
        if (flourQuantity > maxFlour) {
            maxFlour = flourQuantity;
        }
    }
    sugarNeeded = Math.ceil(countSugarG / 950.0);
    flourNeeded = Math.ceil(countFlourG / 750.0);
    console.log(`Sugar: ${sugarNeeded}`);
    console.log(`Flour: ${flourNeeded}`);
    console.log(`Max used flour is ${(Math.ceil)(maxFlour)} grams, max used sugar is ${(Math.ceil)(maxSugar)} grams.`);
}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);