function password(input) {

    let index = 0;
    let userName = input[index];
    index++;
    let password = input[index];
    index++;
    let guess = input[index];
    index++;

    while (guess !== password) {
        guess = input[index];
        index++;
    }

    console.log(`Welcome ${userName}!`);


}
//password(["Nakov","1234","Pass","1324","1234"]);
password(["Gosho", "secret", "secret"]);