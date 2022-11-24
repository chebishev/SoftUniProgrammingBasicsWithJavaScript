function tradeComissions(input) {
    let city = input[0];
    let sellsVolume = Number(input[1]);
    let commission = 0;
    let positiveVolume = false;
    let correctCity = true;

    if (sellsVolume >= 0 && sellsVolume <= 500) {
        positiveVolume = true;
        switch (city) {
            case "Sofia": commission = sellsVolume * 0.05; break;
            case "Varna": commission = sellsVolume * 0.045; break;
            case "Plovdiv": commission = sellsVolume * 0.055; break;
            default: correctCity = false; break;
        }
    } else if (sellsVolume > 500 && sellsVolume <= 1000) {
        positiveVolume = true;

        switch (city) {
            case "Sofia": commission = sellsVolume * 0.07; break;
            case "Varna": commission = sellsVolume * 0.075; break;
            case "Plovdiv": commission = sellsVolume * 0.08; break;
            default: correctCity = false; break;
        }
    } else if (sellsVolume > 1000 && sellsVolume <= 10000) {
        positiveVolume = true;

        switch (city) {
            case "Sofia": commission = sellsVolume * 0.08; break;
            case "Varna": commission = sellsVolume * 0.1; break;
            case "Plovdiv": commission = sellsVolume * 0.12; break;
            default: correctCity = false; break;
        }
    }

    else if (sellsVolume > 10000) {
        positiveVolume = true;

        switch (city) {
            case "Sofia": commission = sellsVolume * 0.12; break;
            case "Varna": commission = sellsVolume * 0.13; break;
            case "Plovdiv": commission = sellsVolume * 0.145; break;
            default: correctCity = false; break;
        }
    } else {
        positiveVolume = false;
    }

    if (positiveVolume == false || correctCity == false) {
        console.log("error");
    } else {
        console.log(commission.toFixed(2));
    }

}

tradeComissions(["Varna", "3874.50"]);