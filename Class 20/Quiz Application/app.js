function check(){
    var score = 0;
    var ans_1 = document.getElementById("pk");
    var ans_2 = document.getElementById("islam");
    var ans_3 = document.getElementById("science");
    var arr = new Array();
    if (ans_1.checked == true) {
        arr[0] = "right";
        score++;
    }
    else {
        arr[0] = "wrong";
    } 
    if (ans_2.checked == true) {
        arr[1] = "right";
        score++;
    }
    else {
        arr[1] = "wrong";
    } if (ans_3.checked == true) {
        arr[2] = "right";
        score++;
    }
    else {
        arr[2] = "wrong";
    }
    alert("Answer 1 is "+arr[0]+"\n"+"Answer 2 is "+arr[1]+"\n"+"Answer 3 is "+arr[2]+"\nYour Score is : "+score);
}