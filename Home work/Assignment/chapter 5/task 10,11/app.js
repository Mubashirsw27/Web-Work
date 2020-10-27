// Task 10

// var a=5;
// a=((a+5)*10)/2;
// document.write(a)

//Task 11
var dob = new Date();
dob.setFullYear(+prompt("Enter Birth year : "));
var today =new Date();
document.write("Current year : "+today.getFullYear()+"<br>");
document.write("Your Birth year : "+dob.getFullYear()+"<br>");
document.write("You are "+(today.getFullYear() - dob.getFullYear())+" years old");  