function clock(){


    for(let h = 0; h<24; h++){
        if(h<10){
            h="0"+h;}
        for(let m = 0;m<60; m++){
            
            if(m<10){
                m = "0"+m;
            }
            console.log(`${h}:${m}`);
        }

    }
}
clock();