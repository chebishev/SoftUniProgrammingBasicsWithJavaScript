function numberInRange(input){
    let number = Number(input[0]);

    if(number===0){
        console.log("No");
    
    }else if(number>100){
        console.log("No");
    }else if(number<-100){
        console.log("No");
    }
    else{
        console.log("Yes");
    }
    }
numberInRange(["50"]);