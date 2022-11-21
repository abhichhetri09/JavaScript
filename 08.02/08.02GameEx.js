function calculateProfit() {
    // Read value of rounds from the input field
    var rounds = document.getElementById("rounds").value;
    var win = 0;

    for(var i = 1; i <= rounds; i++){
        var pips = Math.round((Math.random() * 5) + 1);
        if(pips == 1 || pips == 3 || pips == 5){
            win = win + 0;
        }
        else if(pips == 2 || pips == 4){
            win = win + 1.25 ;
        }
        else{
            win = win + 1.5;
        }
        var profit = rounds - win;
    }
    document.getElementById("answer").innerHTML = "Bet were altogether " + rounds + " euros" + "<br />" + "Wins were " + win + " euros" + "<br />" + "Profit was " + profit + " euros";
}