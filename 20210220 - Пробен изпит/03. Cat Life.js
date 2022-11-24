function catLife(input) {

    let type = input[0];
    let sex = input[1];
    let catMonths = 0;
    let isValidInput = true;

    switch (type) {

        case "British Shorthair":
            if (sex === "m") {
                catMonths = 13 * 2;
            } else {
                catMonths = 14 * 2;

            }
            break;

        case "Siamese":
            if (sex === "m") {
                catMonths = 15 * 2;
            } else {
                catMonths = 16 * 2;

            }
            break;

        case "Persian":
            if (sex === "m") {
                catMonths = 14 * 2;
            } else {
                catMonths = 15 * 2;

            }
            break;

        case "Ragdoll":
            if (sex === "m") {
                catMonths = 16 * 2;
            } else {
                catMonths = 17 * 2;

            }
            break;

        case "American Shorthair":
            if (sex === "m") {
                catMonths = 12 * 2;
            } else {
                catMonths = 13 * 2;

            }
            break;

        case "Siberian":
            if (sex === "m") {
                catMonths = 11 * 2;
            } else {
                catMonths = 12 * 2;

            }
            break;

        default:
            console.log(`${type} is invalid cat!`);
            isValidInput = false;
            break;
    }

    if (isValidInput) {
        console.log(`${catMonths} cat months`);
    }
}
//catLife(["Persian", "m"]);
//catLife(["Siamese","f"]);
catLife(["Siberian", "m"]);