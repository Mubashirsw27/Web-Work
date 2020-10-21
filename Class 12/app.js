// var a="Mubash";
// document.write(a);
// var a = "B";
// document.write(a);
// var a = ["mubi",12];
// document.write(a);
// let a = "Mubi";
// document.write(a); 
//  a = "b";
// document.write(a); 
// let a = ["As"];
// document.write(a); 
// const a = 4;
// document.write(a); 
// a=12;
// const a =["a"];
// document.write(a);  
// for(var a=1;a<10;a++)
// {
//     document.write(a); 

// }
// var arr = ["1","2","3","4","5","6","7","8","9","10"];
// var arr1=arr.slice(0,arr.length);
// for(var i=0;i < arr.length;i++)
// {
//     document.write(arr[i]+"'s Table <br>");
// for(var j=0;j<arr1.length;j++)
// {
//     document.write(arr[i]+" x "+arr[j]+" = "+(arr[i]*arr1[j])+"<br>");
// }
// }
// for (var a = 0; a < 7; a++) {     *
//     for(var b = 0; b <= a; b++) { * *
//         document.write("* ");     * * *
//     }                             * * * *
//     document.write("<br>");       * * * * *

// }
// for(var a = 7;a>0;a--)
// {                                    * * * * *
//     for(var b=a;b>0;b--)               * * * *
//     {                                    * * * 
//         document.write("* ");              * *
//     }                                        *
//     document.write("<br>");
// }
var temp=1;
for(var a=1;a<=5;a++)
{
    for(var b=5;b>=0;b--)
    {
        document.write(" ");
        for(var c=(5-b);c<=5;c--)
        {
            document.write("*");
        }
    document.write("<br>");

    }
}
