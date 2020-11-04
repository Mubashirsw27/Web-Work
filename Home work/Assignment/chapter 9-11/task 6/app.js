var sub1=+prompt("Enter subject 1 marks : ")
var sub2=+prompt("Enter subject 2 marks : ")
var sub3=+prompt("Enter subject 3 marks : ")
var grade="none";
var remarks="none"
var percentage=((sub1+sub2+sub3)/300)*100;
document.write("Total Marks : "+300+"<br>")
document.write("Marks Obtained : "+(sub1+sub2+sub3)+"<br>")
document.write("Marks Percentage : "+(percentage.toFixed(2))+"%<br>")
if(percentage>=80)
{
grade="A-1"
remarks="Excellent"
}
else if(percentage>=70)
{
grade="A"
remarks="Good"

}
else if(percentage>=60)
{
grade="B"
remarks="You need to Improve"

}
else{
    grade="Fail"
remarks="Chal mera putar shutti kar"

}
document.write("Grade : "+grade+"<br>")
document.write("Remarks : "+remarks+"<br>")





