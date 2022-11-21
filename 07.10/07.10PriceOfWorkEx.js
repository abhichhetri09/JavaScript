function modifyTitle() {
	var workTitle = document.getElementById("title").value;

    // Read value of title from the input field
    // Call allCapsTitleTrimmed() function 
	workTitle = allCapsTitleTrimmed(workTitle);

}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
    var text = text.trim();
	var upper = text.toUpperCase();
	// Changes the text given to it to be ALL CAPS
    return text;
	// Return the changed text
	
}

function calculate() {
	var start = document.getElementById("startTime").value;
	var end = document.getElementById("endTime").value;
	var hour = end.substr(0,2) - start.substr(0,2);
	var min = end.substr(3,2) - start.substr(3,2);
	var totalHour = hour + min/60;
	var totalmin = hour * 60 + min;
	var date = document.getElementById("date").value;
	var day = isSunday(date);
	if(day === true){
		var pay1 = (72 * totalHour).toFixed(2);
		var outputText = "The hourly price is during the Sundays 72.00 euros. " + "<br />" + "The price of this repair work is " + pay1 + " euros.";
	}
	else{
		var pay2 = (48 * totalHour).toFixed(2);
		outputText = "The hourly price is during the workdays 48.00 euros. " + "<br />" + "The price of this repair work is " + pay2 + " euros."; 
	}
    // Calculate length of the work as minutes.
	document.getElementById("answer").innerHTML = "Length of the work was " + totalmin+ " minutes." + "<br />" + outputText;
    // If it is not Sunday  (Call isSunday() function)
        //Calculate and show price of the repair work during the workdays
    //otherwise			
        //Calculate and showprice of the repair work on Sundays

}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	// Split the given date text into day, month and year parts using the subStr() method
	dateText = dateText.substr(0,10);

	// Create a new Date object to a variable asDate
	var asDate = new Date(); 
	asDate.setDate(dateText.substr(0,2)); 
	asDate.setMonth(dateText.substr(3,2) - 1); 
	asDate.setFullYear(dateText.substr(6,4)); 
	

	// Get the day of the week with its getDay() method. Sunday is number 0 .
	
	var day = asDate.getDay(); 
	if(day === 0) {
		return true; 
	}
	else {
		return false; 
	}
	// If day of the week is Sunday 
	
		// return Boolean value true
		
	// otherwise	
	
       // return Boolean value false		
	
}


