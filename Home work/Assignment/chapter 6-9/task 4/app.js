function printt(num)
{
for(var i=1;i<=10;i++)
{
document.write(num+" x "+i+" = "+(num*i)+"<br>");
}
}
printt(+prompt("Enter a number",5));