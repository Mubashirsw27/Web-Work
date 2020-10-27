function printtable(num)
{
for(var i=1;i<=10;i++)
{
document.write(num+" x "+i+" = "+(num*i)+"<br>");
}
}
printtable(+prompt("Enter number u want to print table of : "));