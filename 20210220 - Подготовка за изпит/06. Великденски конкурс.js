function easterContest(input) {
    
    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;

    let number1Baker = "";
    let number1BakerPoints = 0;

    for(let i=0;i<easterBreadCount;i++){
        let name = input[index];
        index++;

        let tempPoints = 0;
        let command = input[index];
        index++;

        while(command!=="Stop"){
            let points = Number(command);
            tempPoints+=points;
            command = input[index];
            index++;
        }
        console.log(`${name} has ${tempPoints} points.`);

        if(tempPoints>number1BakerPoints){
            number1Baker = name;
            number1BakerPoints = tempPoints;
            console.log(`${number1Baker} is the new number 1!`);

    }
    }
    console.log(`${number1Baker} won competition with ${number1BakerPoints} points!`);
}
easterContest(["3","Chef Manchev","10","10","10","10","Stop","Natalie","8","2","9","Stop","George","9","2","4","2","Stop"]);