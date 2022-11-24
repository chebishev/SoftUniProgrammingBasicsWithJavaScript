function christmasGifts(input) {

    let index = 0;
    let command = input[index];
    let kidsCounter = 0;
    let adultsCounter = 0;
    let toysTotalPrice = 0;
    let sweatersTotalPrice = 0


    while (command !== "Christmas") {
        let age = Number(input[index]);
        index++;
        if (age <= 16) {
            kidsCounter++;
        } else {
            adultsCounter++;
        }
        command = input[index];
    }

    toysTotalPrice = kidsCounter * 5;
    sweatersTotalPrice = adultsCounter * 15;

    console.log(`Number of adults: ${adultsCounter}`);
    console.log(`Number of kids: ${kidsCounter}`);
    console.log(`Money for toys: ${toysTotalPrice}`);
    console.log(`Money for sweaters: ${sweatersTotalPrice}`);
}
//christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);
christmasGifts(["16","16","16","16","16","Christmas"]);