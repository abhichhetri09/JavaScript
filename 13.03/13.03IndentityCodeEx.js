// function shows details about Identity Number
function show() {
    // Read value of identity number from the input field
    var idNumber = document.getElementById("identityNumber").value; 
    if(idNumber.trim() === "") {
        alert("Please insert your identity number!")
    } else {
    var secondLastNumber = idNumber.charAt(9);
    var secondLastNUm = parseInt(secondLastNumber);

    //Gender deciding
    var gender; 
    if(secondLastNUm % 2 === 0) {
        gender = "Female"; 
    } else {
        gender = "Male"; 
    }

    //Finding month, day, finding character and year 210891-2717
    var day = idNumber.substring(0,2); 
    var month = idNumber.substring(2,4); 
    var partialPartOfYear = parseInt(idNumber.substring(4,6)); 
    var character = idNumber.substring(6,7);
    var birthYear; 
    if(character === "+") {
        birthYear = 1800 + partialPartOfYear; 
    } else if(character === "-") {
        birthYear = 1900 + partialPartOfYear; 
    } else {
        birthYear = 2000 + partialPartOfYear; 
    }


    document.getElementById("answer").innerHTML = 
    "<p>" + gender + ", born " + day + "." + month + "." + birthYear + "." + "</p>"; 
}
}
    //Check gender
    // Get the second last character with charAt() method 
    // Convert digit text to number with parseInt() function
    // Check gender with modulo (%) operation (even number-> female, odd number-> male)
    

    // Parse birth day information
    // Take certain characters (dd, mm, yy and separator character)) from the string with subString() method 
    // Calculate the year with four digits
    // Concatenate birth day text

    // Write the answer on the page, to the answer div, as content of the div
    