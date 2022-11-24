function birthDay(input) {

    let rent = Number(input[0]);

    let cake = 0.2 * rent;
    let beverages = cake - (0.45 * cake);
    let animator = rent / 3;

    let result = rent + cake + beverages + animator;

    console.log(result);

}
//birthDay(["3720"]);