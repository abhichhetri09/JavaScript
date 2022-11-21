function convert() {
    var givenTemp = Number(document.getElementById("temperature").value); 
    
    var tempGiven = document.getElementById("conversion");
    if(tempGiven.selectedIndex === 0) {
        result = fahrenheitToCelcius(givenTemp);
    } else if(tempGiven.selectedIndex === 1) {
        result = celsiusToFahrenheit(givenTemp); 
    
    }  
    document.getElementById("result").value = Math.floor(result); 
    }
    
    function celsiusToFahrenheit(celsius) {
        outPutTemp  = (celsius * 1.8) + 32;
        return outPutTemp;   
    }
    
    function fahrenheitToCelcius(fahrenheit) {
        outPutTemp = (fahrenheit - 32) * 5/9;
        return outPutTemp;  
    }