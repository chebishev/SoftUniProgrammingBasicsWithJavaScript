//04. Конвертор за мерни единици
function metricConvertor(input){
    let number = Number(input[0]);
    let firstLenght = input[1];
    let secondLenght = input[2];

    if(firstLenght==="mm"){
        number = number/1000;
       
    }else if(firstLenght==="cm"){
        number = number/100;
    }else{
        number = number;
    }

    if(secondLenght==="m"){
        console.log(number.toFixed(3));
    }else if (secondLenght==="cm"){
        console.log((number*100).toFixed(3));
    }else if(secondLenght==="mm"){
        console.log((number*1000).toFixed(3));
    }
}
//metricConvertor(["150","m","cm"]);