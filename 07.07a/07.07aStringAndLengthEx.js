function processName() {

    // read value of name from the input field
    var name = document.getElementById("name").value;
    var upperCase = name.toUpperCase();
    var lowerCase = name.toLowerCase();
    var length = name.length;

    // show it with "ALL CAPS" using toUpperCase()
   

    // show it with  "all small letters" using toLowerCase()
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + upperCase;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lowerCase;
    document.getElementById("length").innerHTML = "Character count: " + length;
    //tell how many characters are there (length, includes also all spaces) 
   
   
}