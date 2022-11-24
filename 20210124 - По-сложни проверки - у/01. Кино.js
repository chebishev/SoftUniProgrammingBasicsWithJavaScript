function cinema(input){
    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let fullHall = rows*columns;
    let total = 0;

    switch(projectionType){
        case "Premiere": total = fullHall * 12; break;
        case "Normal": total = fullHall * 7.50; break;
        case "Discount": total = fullHall * 5; break;
    }

    console.log(`${total.toFixed(2)} leva`);

}
cinema(["Discount",
"12",
"30"])
;