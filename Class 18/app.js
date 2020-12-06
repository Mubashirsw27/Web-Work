var pro_img = document.getElementById("product");
var pro_name = document.getElementById("name");
var pro_price = document.getElementById("price");
var cart_img = document.getElementById("cart-img");
var cart_name = document.getElementById("cart-name");
var cart_price = document.getElementById("cart-price");

function add() {

    cart_img.src = pro_img.src;
    cart_name.innerHTML = pro_name.innerHTML;
    cart_price.innerHTML = pro_price.innerHTML;

    var myDiv = document.getElementById("cart");

    // creating button element  
    var button = document.createElement('BUTTON');

    // creating text to be 
    //displayed on button 
    var text = document.createTextNode("Remove");

    // appending text to button 
    button.appendChild(text);

    button.setAttribute("onclick", "remove()");

    button.setAttribute("id", "remBtn");

    // appending button to div 
    myDiv.appendChild(button);
}
function remove() {
    var btn = document.getElementById("addBtn")
    btn.disabled = false;
    cart_img.src = "";
    cart_name.innerHTML = "";
    cart_price.innerHTML = "";
    var remBtn = document.getElementById("remBtn");
    remBtn.parentNode.removeChild(remBtn);
}