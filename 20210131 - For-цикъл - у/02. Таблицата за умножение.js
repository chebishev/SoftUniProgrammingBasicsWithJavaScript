function multiplicationTable(input){
    let number = Number(input[0]);
    let result = 0;

    for (let i = 1; i<=10; i++){

        result = i*number;

        console.log(`${i} * ${number} = ${result}`);
    }
}
multiplicationTable(["5"]);