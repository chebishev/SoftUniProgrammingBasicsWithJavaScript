function footballKit(input) {

    let tshirtPrice = Number(input[0]);
    let targetAmount = Number(input[1]);
    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = (tshirtPrice + shortsPrice) * 2;
    let discountCard = (tshirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.15;
    let total = tshirtPrice + shortsPrice + socksPrice + shoesPrice - discountCard;

    if (total >= targetAmount) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${total.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(targetAmount - total).toFixed(2)} lv. more.`);

    }
}
//footballKit(["25", "100"]);
//footballKit(["55", "310"]);
footballKit(["59.99", "500"]);