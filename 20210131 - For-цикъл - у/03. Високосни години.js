function leapYears(input){
    let leapYear = Number(input[0]);
    let targetYear = Number(input[1]);

    for(let i = leapYear;i<=targetYear;i+=4){
        console.log(i);
    }

}
leapYears(["2020","2032"]);