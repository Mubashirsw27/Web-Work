var secret=Math.floor(Math.random()*10);
var userInput=+prompt("Guess the Number ranging from 1 to 10");
if(userInput===secret)
{
    document.write("Congrats!!! Treat Jaaanii")
}
else if((userInput+1)===secret||(userInput-1)===secret)
{
    document.write("Ohhhhh Close Enough!!!")
}
else{
    document.write("Chal mera Putar Shutti kar!!")
}
document.write("<br>"+secret)
