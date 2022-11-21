// Function returns the four digit key codes between min-max 
function generateKeyCode(min, max) {
   
    // Randomize the key code with Math.random() function
    var keyCode = Math.round(Math.random() * ((max - min) + 1) + min); 
   

    // Convert a number to a string with the toString() method.
    var keyCodeNum = keyCode.toString();
    // Use the length property of the text string.
    
    // Add leading zeros to keyCode, if needed (eg. 9 -> 0009)

    // with loop
    
    // Return four digit key code as a text
    var leadingZeroCount = 4 - keyCodeNum.length; 
    for(var i = 0; i <= leadingZeroCount; i++) {
        keyCode = "0" + keyCode; 
    }
    return keyCode; 
}

// For hundred times
var codes = ""; 
for(var i = 0; i < 10; i++) {
    codes += generateKeyCode(0,9999) + " " + generateKeyCode(0,9999) + " " + generateKeyCode(0,9999) + 
    " " + generateKeyCode(0,9999) + " " + generateKeyCode(0,9999) + " " + generateKeyCode(0,9999) + " " + generateKeyCode(0,9999)
    + " " + generateKeyCode(0,9999) + " " + generateKeyCode(0,9999) + " " + generateKeyCode(0,9999) + "<br />"; 

}


document.getElementById("keycodes").innerHTML = codes; 

    // Call generateKeyCode() function 
    // Print key code to the document
    
    // If ordinal number of the keyCode MODULO (%) 10 equals zero

        // Print html line break to the document

//Show result in html page (div with id value "keycodes")