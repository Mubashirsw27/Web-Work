var temp = prompt("Enter a character : ")
if(temp.charCodeAt(0)>=49 & temp.charCodeAt(0)<=57){
document.write("It is Number")
}
else if(temp.charCodeAt(0)>=65 & temp.charCodeAt(0)<=90)
{
    document.write("It is Upper Case Alphabet")
}
else if(temp.charCodeAt(0)>=97 & temp.charCodeAt(0)<=122)
{
    document.write("It is Lower Case Alphabet")
}
else
{
    document.write("Enter Correct Character. not this = ' " + temp+" '" )
}