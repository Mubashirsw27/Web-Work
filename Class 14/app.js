// var a = Math.random();//Math.random method gives a random float value b/w(0-1) every time executed.
// alert(a);
//Toss Game
// var hUser = prompt("Enter 1st User name : ");
// var tUser = prompt("Enter 2nd User name : ");
// var toss=Math.random()*2;
// if(Math.floor(toss)===0)
// {
//     document.write(hUser+" Wins the toss");
// }
// else
// {
//     document.write(tUser+" Wins the toss");

// }
// var a = "10"
// a=parseInt(a)//Converts Strings to int
//a=Number(a)//Does same as above
// alert(a)
// var a=10;
// a = a.toString()//Converts to String
// alert(a)
// var a = Math.random()*5;
// alert(a)

// a=a.toFixed(3);//Controls the no digits after decimal 
// alert(a)
// var a=new Date();
// alert(a);//Will print the current time of your PC.
// var dob= new Date("2000/4/15");//Some methods of
// var aj= new Date();
// var temp=new Date();
// aj.setFullYear(2000);
// alert(aj);
// document.write("You are "+(Math.floor(aj.getFullYear()-dob.getFullYear()))+" years "+(Math.floor((aj.getMonth()+1)-(dob.getMonth()+1)))+" months "+(Math.floor(aj.getDate()-dob.getDate()))+" Days old");


//******Functions******

// function greetings()//Basic Syntax
// {
// alert("Hello")    
// }
// greetings()

// function getMessage(a)//Functions by Parameter
// {
//     document.write(a)
// }
// getMessage("Hi Bhai")

// function add(a=2,b=2,c=2)//By Defaults values
// {
//    document.write(a+b+c) 
// }
// add(1,4)

// function add(a,b)
// {
//     return a+b;//returns the value
// }
// document.write(add(2,2));

// function add()//undefined
// {

// }
// document.write(add(12))

// function printtable(num=2)//Example
// {
// for( var i = 1;i<=10;i++)
// {
//     document.write(num+" x "+i+" = "+(num*i)+"<br>");
// }
// }
// printtable()

//******SWITCH Statement******
// var name = "Mubi"
// switch (name)
// {
//     case "Mubi":
//         alert("Hello Mubi");
//         break;
//     case "Avi":
//         alert("Hello Avi");
//     default:
//         alert("Hell oooo");    
// }