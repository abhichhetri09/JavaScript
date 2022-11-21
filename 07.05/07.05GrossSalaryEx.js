function calculateSalary(hours, hourlySalary) {
	// calculate salary
	var salary = hours * hourlySalary;
	// return the gross salary with the return statement
	return salary;
}

function showGrossSalary() {
	// assign the input field value to the variable hours
	// assign the second input field value to the variable hourlySalary
	// call the calculateSalary function
	// write the answer on the html page
var hours = document.getElementById("hours").value;
var hourlySalary = document.getElementById("hourlySalary").value;
var salary = calculateSalary(hours,hourlySalary);
document.getElementById("answer").innerHTML = "Gross salary is " + salary.toFixed(2) + " euros."
}

