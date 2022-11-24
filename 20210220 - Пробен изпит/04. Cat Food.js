function catFood(input) {

    let catsCount = Number(input[0]);
    let group1Counter = 0;
    let group2Counter = 0;
    let group3Counter = 0;
    let totalFootInGrams = 0;

    for (let i = 1; i < input.length; i++) {
        let tempWeight = Number(input[i]);
        if (tempWeight >= 100 && tempWeight < 200) {
            group1Counter++;
            totalFootInGrams += tempWeight;
        } else if (tempWeight >= 200 && tempWeight < 300) {
            group2Counter++;
            totalFootInGrams += tempWeight;
        } else {
            group3Counter++;
            totalFootInGrams += tempWeight;
        }

    }

    let total = (totalFootInGrams / 1000) * 12.45;

    console.log(`Group 1: ${group1Counter} cats.`);
    console.log(`Group 2: ${group2Counter} cats.`);
    console.log(`Group 3: ${group3Counter} cats.`);
    console.log(`Price for food per day: ${total.toFixed(2)} lv.`);
}
//catFood(["6","102","236","123","399","342","222"]);
catFood(["10", "256", "348", "198", "322", "186", "294", "321", "100", "200", "300"]);
//catFood(["7", "100", "200", "342", "300", "234", "123", "212"]);