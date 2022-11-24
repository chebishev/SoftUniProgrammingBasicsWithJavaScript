function travelAgency(input) {

    let town = input[0];
    let type = input[1];
    let isVip = input[2];
    let days = Number(input[3]);
    let isPositiveDays = true;
    let isPositiveInput = true;
    if (days > 7) {
        days--;
    } else if (days <= 0) {
        isPositiveDays = false;
    }
    let price = 0;

    if (town === "Bansko" || town === "Borovets") {

        if (type === "noEquipment") {
            price = days * 80;
        } else if (type === "withEquipment") {
            price = days * 100;
        } else {
            isPositiveInput = false;
        }
        if (isVip === "yes" && type === "noEquipment") {
            price *= 0.95;
        } else if (isVip === "yes" && type === "withEquipment") {
            price *= 0.9;
        }
    } else if (town === "Varna" || town === "Burgas") {
        if (type === "noBreakfast") {
            price = days * 100;
        } else if (type === "withBreakfast") {
            price = days * 130;

        } else {
            isPositiveInput = false;
        }
        if (isVip === "yes" && type === "noBreakfast") {
            price *= 0.93;
        } else if (isVip = "yes" && type === "withBreakfast") {
            price *= 0.88;
        }
    }
    else {
        isPositiveInput = false;
    }

    if (isPositiveDays == false) {
        console.log("Days must be positive number!");
    } else if (isPositiveInput == false) {
        console.log("Invalid input!");
    }
    else {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
//travelAgency(["Borovets","noEquipment","yes","6"]);
//travelAgency(["Bansko","withEquipment","no","2"]);
//travelAgency(["Varna", "withBreakfast", "yes", "5"]);
//travelAgency(["Burgas", "noBreakfast", "no", "4"]);
//travelAgency(["Varna","withBreakfast","no","0"]);
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);