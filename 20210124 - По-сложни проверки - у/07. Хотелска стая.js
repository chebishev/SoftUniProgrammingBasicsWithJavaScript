function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);
    let totalApartment = 0;
    let totalStudio = 0;


    if (month == "May" || month == "October") {

        totalStudio = nights * 50;
        totalApartment = nights * 65;

        if (nights > 14) {
            totalStudio = totalStudio * 0.70;
            totalApartment = totalApartment * 0.90;

        } else if (nights > 7) {
            totalStudio = totalStudio * 0.95;

        }

    } else if (month == "June" || month == "September") {
        totalStudio = nights * 75.20;
        totalApartment = nights * 68.70;
        if (nights > 14) {
            totalStudio = totalStudio * 0.80;

            totalApartment = totalApartment * 0.90;

        }
    } else if (month == "July" || month == "August") {

        totalStudio = nights * 76;
        totalApartment = nights * 77;
        if (nights > 14) {
            totalApartment = totalApartment * 0.90;

        }

    }

    console.log(`Apartment: ${(totalApartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(totalStudio).toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);