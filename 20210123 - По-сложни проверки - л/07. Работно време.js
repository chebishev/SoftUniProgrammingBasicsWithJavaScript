function workingHours(input){
    let hour = Number(input[0]);
    let weekDay = input[1];

    if((hour<10) || (hour>18) || (weekDay == "Sunday")){
        console.log("closed");
    }else{
        console.log("open");
    }


}
workingHours(["11","Sunday"]);