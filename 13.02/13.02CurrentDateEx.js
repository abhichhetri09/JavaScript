var date = new Date(); 
var day = date.getDay(); 
var weekday; 
if(day === 0) {
    weekday = "Sunday"; 
} else if(day === 1) {
    weekday = "Monday"; 
} else if(day === 2) {
    weekday = "Tuesday"; 
} else if(day === 3) {
    weekday = "Wednesday"; 
} else if(day === 4) {
    weekday = "Thursday"; 
} else if(day === 5) {
    weekday = "Friday"; 
} else {
    weekday = "Saturday"; 
}
var dayOfMonth = date.getDate(); 
var month = date.getMonth() + 1; 
var year = date.getFullYear(); 
var hours = date.getHours(); 
var minutes = date.getMinutes(); 
var seconds = date.getSeconds(); 

document.getElementById("answer").innerHTML = 
weekday + "<br />" + dayOfMonth + "." + month + "." + year + "<br/>" + hours + ":" + minutes + ":" + seconds; 