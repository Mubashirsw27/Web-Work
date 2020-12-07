// //Add to Cart property
// var pro_img = document.getElementById("product");
// var pro_name = document.getElementById("name");
// var pro_price = document.getElementById("price");
// var cart_img = document.getElementById("cart-img");
// var cart_name = document.getElementById("cart-name");
// var cart_price = document.getElementById("cart-price");

// function add() {

//     cart_img.src = pro_img.src;
//     cart_name.innerHTML = pro_name.innerHTML;
//     cart_price.innerHTML = pro_price.innerHTML;

//     var myDiv = document.getElementById("cart");

//     // creating button element  
//     var button = document.createElement('BUTTON');

//     // creating text to be 
//     //displayed on button 
//     var text = document.createTextNode("Remove");

//     // appending text to button 
//     button.appendChild(text);

//     button.setAttribute("onclick", "remove()");

//     button.setAttribute("id", "remBtn");

//     // appending button to div 
//     myDiv.appendChild(button);
// }
// function remove() {
//     var btn = document.getElementById("addBtn")
//     btn.disabled = false;
//     cart_img.src = "";
//     cart_name.innerHTML = "";
//     cart_price.innerHTML = "";
//     var remBtn = document.getElementById("remBtn");
//     remBtn.parentNode.removeChild(remBtn);
// }
// var target=document.getElementById("lorem");
// if(target.hasAttribute("class"))//For Checking whether it has the Specified attribute or not.
// {
// alert("yes")
// }
// else
// {
//     alert("No")
// }
// alert(target.getAttribute("id"))//It will return the value of the specified attribute.
// target.setAttribute("class","target");//for setting an attribute
// console.log(target.attributes)//It will return the number of attributes.
// console.log(target.attributes[0].nodeName);//It will return the name of Node
// console.log(target.attributes[0].nodeValue)//It will return the value of the specified attribute.
//  var newItem=document.createElement("p");//For creating a tag of p
// var text =document.createTextNode("Hi");//For creating a text node
// newItem.appendChild(text)//It will append it node

