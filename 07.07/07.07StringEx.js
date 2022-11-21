function processName() {

    // read value of name from the input field
   var name = document.getElementById("name").value;

    // show it with "ALL CAPS" using toUpperCase()
   var upperCase = name.toUpperCase();
   var lowerCase = name.toLowerCase();
   var length = name.length;

    // show it with  "all small letters" using toLowerCase()
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + upperCase;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + lowerCase;
    document.getElementById("length").innerHTML = "Character count: " + length;

    var n = name.indexOf("munni");
    if(n == -1){
        document.getElementById("contains").innerHTML = "Doesn't contain the text muumi.";
    }
    document.getElementById("firstCharacter").innerHTML = "First character: " + name.charAt(0);
    document.getElementById("manyCharacters").innerHTML = "First three characters: " + name.substr(0,3);
    //tell how many characters are there (length, includes also all spaces) 
   

    // tell, whether the input string contains the word 'muumi'
    
    // tell the first character using charAt()
    

    // tell which ones are the first three characters using subStr().
   
}