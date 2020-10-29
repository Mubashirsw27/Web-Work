var subject1 = document.getElementById("subject1");
subject1.innerHTML = prompt("Enter Subject 1  : ");
var subject2 = document.getElementById("subject2");
subject2.innerHTML = prompt("Enter Subject 2  : ")
var subject3 = document.getElementById("subject3");
subject3.innerHTML = prompt("Enter Subject 1  : ");
var sub1marks = document.getElementById("sub1ob");
sub1marks.innerHTML = +prompt("Enter Subject 1 Marks : ");
var sub2marks = document.getElementById("sub2ob");
sub2marks.innerHTML = +prompt("Enter Subject 2 Marks : ");
var sub3marks = document.getElementById("sub3ob");
sub3marks.innerHTML = +prompt("Enter Subject 3 Marks : ");
function percentage(obt)
{
return ((obt/100)*100)+"%";
}
var sub1per = document.getElementById("sub1per");
sub1per.innerHTML=percentage(sub1marks.innerHTML);
var sub2per = document.getElementById("sub2per");
sub2per.innerHTML=percentage(sub2marks.innerHTML);
var sub3per = document.getElementById("sub3per");
sub3per.innerHTML=percentage(sub3marks.innerHTML);





