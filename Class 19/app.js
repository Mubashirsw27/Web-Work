var totalNodes = 0
function add() {
    var work = document.getElementById("val");
    var list = document.getElementById("list");
    var task = document.createElement("li");
    var textNode = document.createTextNode(work.value);
    var editBtn = document.createElement('BUTTON');
    var delBtn = document.createElement('BUTTON');
    var delallBtn = document.getElementById("delAllBtn");
    delallBtn.disabled = false;
    editBtn.setAttribute("onclick", "edit(this)");
    delBtn.setAttribute("onclick", "del(this)");
    task.appendChild(textNode);
    textNode.value = "Edit";
    editBtn.innerHTML = textNode.value;
    task.appendChild(editBtn);
    textNode.value = "Delete";
    delBtn.innerHTML = textNode.value;
    task.appendChild(delBtn);
    list.appendChild(task);
    work.value = ""
    totalNodes += 1;
}
function edit(e) {
    var newText = prompt("Enter...", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = newText;
}
function del(e) {
    e.parentNode.remove();
    totalNodes -= 1;
    check();
}
function check() {
    var delallBtn = document.getElementById("delAllBtn");
    if (totalNodes <= 0) {
        delallBtn.disabled = true
    }
}
function delAll() {
    var list = document.getElementById("list");
    var delallBtn = document.getElementById("delAllBtn");
    delallBtn.disabled = true;
    list.innerHTML = ""
    totalNodes = 0;
}