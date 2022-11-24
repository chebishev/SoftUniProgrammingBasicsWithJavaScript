function summerOutfit(input) {
    let degrees = Number(input[0]);
    let dayPart = input[1];
    let outfit = "";
    let shoes = "";

    if (degrees >= 10 && degrees <= 18) {
        if (dayPart == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (dayPart == "Afternoon" || dayPart == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    if (degrees > 18 && degrees <= 24) {
        if (dayPart == "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayPart == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";

        }
    }

    if (degrees >= 25) {
        if (dayPart == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayPart == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (dayPart == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["28","Evening"]);