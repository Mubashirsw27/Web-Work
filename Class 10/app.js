// var a = +prompt("Enter 1st value : ", 2);
// var b = +prompt("Enter 2nd value : ", 2); 
// var c = +prompt("Enter 3rd value : ", 2);
// var a = 3 ;
// var b =2;
// if (a < b ) {
//     document.write("a<=b");
// }
// else {
//     document.write("a>b");
// }
var student=[1,2,3,4,5,6];
console.log(student);
student.splice(0,2,"2","@");
console.log(student);
student.pop();
console.log(student);
student.push(6);
console.log(student);
student.shift();
console.log(student);
student.unshift("2");
console.log(student);

