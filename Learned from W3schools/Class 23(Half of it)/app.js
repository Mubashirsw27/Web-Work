// THE ES6

//Template literals
// let fname="Mubashir";
// let lname="Ibrahim";
// console.log(`My Name is ${fname} ${lname}`);

//The spread Operator
// var stud=["Mubi",12,'ausj']; 
// var stud1=[...stud,"Mubi",12,'ausj']; 
// var stud2=["Mubi1",...stud1,122,'3ausj']; 
// console.log(stud2)

//The Object Destructuring
// var stud={
//     name:"Mubi",
//     roll:27
// }
// let{name,roll}=stud;
// console.log(name,roll)

//The Ternary Operator
// let name = "Mubashir";
// let bool = name == "Mubashir" ? true : false;
// console.log(bool) 


//THE Promise
// let promise =new Promise(function(resolve,reject)
// {
//     let name="Mubashir";
//     if(name==="Mubasir")
//     {
//     resolve(true);
//     }
//     reject("Chutti kar");
// })
// promise.then(function(data)
// {
//     console.log(data)
// })
// .catch(function(err)
// {
//     console.log(err)
// })

//Adding Padding to the String

// var a="1";
// a=a.padStart(3,"H");
// // a=a.padEnd(3,"H");
// console.log(a);

// For returning String
// var a=4.1221;
// a=a.toExponential(0);
// console.log(a)

//For Precision
// var a=3.131;
// a=a.toPrecision(21);
// console.log(a)

//For Numbers Array Sort
// var arr = [3, 12, 3, 1, 41];
// // arr.sort(function (a, b) { return a - b; }); For Ascending
// // arr.sort(function (a, b) { return b - a; }); For Descending
// console.log(arr)

//THE Fisher Yates Sort
// var points = [40, 100, 1, 5, 25, 10];
// for (i = points.length -1; i > 0; i--) {
//   j = Math.floor(Math.random() * i)
//   k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }
// console.log(points)

//Some JS Methods

//.valueOf()
// var a=3;
// console.log(((3*12+a+12*4)/2).valueOf());//Used for Retrieving Complex Expressions answers(DOESN'T Effect the Original value).

//.join()
// var arr = ['1', 1, 123, "Hi"];
// console.log(arr.join(" Geo "))//For Converting the Array into String(DOESN'T Effect the Original value).

//THE finding Highest and lowest number from an Array.

//The MATH.max.apply()
// var arr=[12313,1,2133,1,314,12];
// console.log(Math.max.apply(null,arr));

//I am Writing the Functionality of above Code below :-
// var arr=[12313,1,2133,1,314,12];
// var result=-Infinity;
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]>result)
//     {
//         result=arr[i];
//     }
// }
// console.log(`Your Highest Number : ${result}`)

//The MATH.min.apply()
// var arr=[12313,-1,2133,1,314,12];
// console.log(Math.min.apply(null,arr));

//I am Writing the Functionality of above Code below :-
// var arr=[12313,-1,0,12.1,2133,1,314,12];
// var result=Infinity;
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]<result)
//     {
//         result=arr[i];
//     }
// }
// console.log(`Your Lowest Number : ${result}`)

//.map()
// var arr=[1,113,5,7];
// var arr1= arr.map(function(a,b){ return a*b})//This Map function multiplies the Element with its Index Number.
// console.log(arr1);

//.filter()
// var arr=[111,113,25,7];
// var arr1=arr.filter(function(a){
//     if(a>18){return a;}
// });
// console.log(arr1)

//.reduce() //Work from left to Right
// var arr=[1,2,3,4];
// var arr1=arr.reduce(function(total,value){return total*value})
// console.log(arr1)

//.reduceRight() //Work from right to left
// var arr=[1,2,3,4];
// var arr1=arr.reduceRight(function(total,value){return total+value})
// console.log(arr1)

//.every() //Checks that every element satisfies the condition or not
// var arr = [1, 2, 3, 4];
// console.log(arr.every(function (value) { return value > 0 }))

//.some() //Checks that any element satisfies the conditon or not
// var arr=[1,2,3,4];
// console.log(arr.some(function (value) {
//     return value>5;
// }))



