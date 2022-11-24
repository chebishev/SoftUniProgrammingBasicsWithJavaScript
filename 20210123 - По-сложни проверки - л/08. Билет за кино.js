function cinemaTicket(input){
    let weekDay = input[0];

    switch(weekDay){
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log(12);
            break;
        case "Wednesday":
        case "Thursday":
            console.log(14);
            break;
        default: console.log(16);
    }

}
cinemaTicket(["Sunday"]);