function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let restingPlace = "";
    let expenses = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {

            case "summer":
                expenses = budget * 0.70;
                restingPlace = "Camp";
                break;

            case "winter":
                restingPlace = "Hotel";
                expenses = budget * 0.30;
                break;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        switch (season) {

            case "summer":
                expenses = budget * 0.60;
                restingPlace = "Camp";
                break;

            case "winter":
            expenses = budget * 0.20;
                restingPlace = "Hotel";
                break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        restingPlace = "Hotel";
        expenses = budget * 0.10;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${restingPlace} - ${(budget-expenses).toFixed(2)}`);
}
journey(["1500", "summer"]);