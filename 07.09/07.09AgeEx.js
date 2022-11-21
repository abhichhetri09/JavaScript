function tellAge() {
    // Read value of yearOfBirth from the input field 
   var yearOfBirth = document.getElementById("yearOfBirth").value;
    // Figure out the current date into today variable 
  var today = new Date();
  today = today.getFullYear();
  var age = today - yearOfBirth;
  var outputText;
  if(age < 0){
      outputText = "Error!!";
  }
  else{
      outputText = "You are now " + age + " years old." + "<br />" + "(Current year is " + today + ".)"
  }
    // Use getFullYear() method to get the current year out from the today variable
   document.getElementById("answer").innerHTML = outputText;

    // Calculate the (rough estimate of the) age
    

    // If age is less than zero
 
        //  Show an error message
        
    // otherwise tell the age
   
}