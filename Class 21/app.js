var key = 1;
function saveData() {
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");
    var student = {
        name: name.value,
        roll: roll.value,
        key:key
    }
    firebase.database().ref('student/key:' + key).set(student);
    key++;
}

function getData() {
    if(key>1){
    firebase.database().ref('student/key:' + (key - 1
    )).once('value', function (data) {
        console.log(data.val());
    })
}
else{
    console.log("No data\nZero Entries")
}
}

function deleteData()
{

    if(key>1){
    firebase.database().ref('student/key:'+(key-1)).remove();
    key--;}
    else{
        key=1;
    }
}
function editData(){
    if(key>1){
 firebase.database().ref('student/key:'+(key-1)).set({
     key :key-1,
     name:prompt("Edit it....."),
     roll:prompt("Edit it.....")
 })}
 else{
     alert("There is no Data Available....")
 }
}