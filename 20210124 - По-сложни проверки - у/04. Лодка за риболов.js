function fishingBoat(input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);
    let boatPrice = 0;
    let discount = 0;

    if (season == "Spring") {
        boatPrice = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        boatPrice = 4200;
    } else if (season == "Winter") {
        boatPrice = 2600;
    }

    if (fishermenCount <= 6) {
        discount = boatPrice * 0.90;
    } else if (fishermenCount >= 7 && fishermenCount <= 11) {
        discount = boatPrice * 0.85;
    } else if (fishermenCount >= 12) {
        discount = boatPrice * 0.75;
    }

    if (fishermenCount % 2 == 0 && season != "Autumn") {
        discount = discount * 0.95;
    }

    if (groupBudget >= discount) {
        console.log(`Yes! You have ${(groupBudget - discount).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(discount - groupBudget).toFixed(2)} leva.`);
    }
}
fishingBoat(["2000", "Winter", "13"]);