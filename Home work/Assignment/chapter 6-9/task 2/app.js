var a=2,b=1;
var result = --a - --b + ++b + b--;
//--a(this is predecrement so the value of "a" will be = 1 even at this assignment)
//--b(Same goes for  "b" so the value will be = 0)
//++b(this is preincrement so the value of "b" will be = 1 even at this assignment)
//b--(this is postdecrement so the value of "b" will be = 0 But after the assignment on next line)
document.write("The value of a : "+a+"<br>");
document.write("The value of b : "+b+"<br>");
document.write("The result after these operations will be : "+result);