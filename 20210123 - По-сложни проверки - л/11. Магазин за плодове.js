function fruitShop(input){
   let fruit = input[0];
   let weekDay = input[1];
   let quantity = Number(input[2]);
   let price = 0;
   let validInput = true;
   
   if(weekDay=="Saturday" || weekDay == "Sunday"){
       switch(fruit){
           case "banana": price = quantity * 2.70;
           break;
           case "apple": price = quantity * 1.25; break;
           case "orange": price = quantity * 0.90;
           break;
           case "grapefruit": price = quantity * 1.60; break;
           case "kiwi": price = quantity * 3.00; break;
           case "pineapple": price = quantity * 5.60;
           break;
           case "grapes": price = quantity * 4.20; 
           break;
           default: validInput = false;
           
       }
       
    }
    
       else if(weekDay == "Monday" || weekDay == "Tuesday" || weekDay == "Wednesday" ||weekDay == "Thursday" || weekDay == "Friday"){
           switch(fruit){
           case "banana": price = quantity * 2.50;
           break;
           case "apple": price = quantity * 1.20; break;
           case "orange": price = quantity * 0.85;
           break;
           case "grapefruit": price = quantity * 1.45; break;
           case "kiwi": price = quantity * 2.70; break;
           case "pineapple": price = quantity * 5.50;
           break;
           case "grapes": price = quantity * 3.85; 
           break;
           default: validInput = false;
       }
       
   }
   else{
    validInput = false;
}
   if (validInput==false){
       console.log("error");
   }else{
       console.log(price.toFixed(2));
   }
}
fruitShop(["pineapple","Wednesday","1.600"]);