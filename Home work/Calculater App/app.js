var sign="";
var value1="";
var value2=""; 
// function getNumber(value)
// {   
// var result = document.getElementById("in");
// if(value===[0-9] && value1==="")
// {
// value1=value;
// result+=value1;
// }
// else if(value===[0-9] && value2==="")
// {
// value2=value;
// result+=value2;
// }
// else if(value==="*"||value==="/"||value==="+"||value==="-")
// {
// sign=value;
// result+=sign;
// }

// }


function getNumber(num)
{
    
var result=document.getElementById('result');
result.value+=num
}


function solve()
{
    var ans=document.getElementById('ans');
    ans.value=eval(result.value)
    result.value=""
}