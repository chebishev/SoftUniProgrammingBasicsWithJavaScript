function yardGreening(input){
    let meters = input[0];
    let finalPrice = meters * 7.61; ;
    let discount = 0.18 * finalPrice;
    console.log("The final price is: "+ (finalPrice-discount) + " lv.");
    console.log("The discount is: " + discount + " lv.");
}
yardGreening(550);