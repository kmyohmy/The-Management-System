/*eslint-env browser*/
var i;
//
var $ = function (id) {
    return document.getElementById(id);
}
var array = [["Jim", "Manager", "123"], ["Carry", "Retired", "124"], ["Sally", "Receptionist", "333"], ["John", "CEO", "555"], ["Susan", "VP", "234"]];
window.addEventListener("load", appendTable);

function appendTable() {

    var tableId = window.document.getElementById("table");
    //   window.console.log(array.length); 
    for (i = 0; i < array.length; i = i + 1) {
        //        window.console.log(i);
        var tr = document.createElement("tr");
        tableId.appendChild(tr);

        for (var j = 0; j < array[i].length; j = j + 1) {
            var td = window.document.createElement("td");
            tr.appendChild(td);
            var text = window.document.createTextNode(array[i][j]);
            td.appendChild(text);
        }
        var btn = window.document.createElement("button");
        btn.innerHTML = "delete";
        td.appendChild(btn);
        btn.setAttribute("id", "delete");
    }

}


function add() {
    var inputs = [$("name").value, $("title").value, $("ext").value];
    window.console.log(inputs[0]);
    array.push(inputs);

    //        array.push(inputs[0].value);
    var tableId = document.getElementById("table");
    window.console.log(array);
    var tr = window.document.createElement("tr");
    tableId.appendChild(tr);

    for (var i = 0; i < inputs.length; i = i + 1) {
        var td = window.document.createElement("td");
        var text = window.document.createTextNode(inputs[i]);
        tr.appendChild(td)
        td.appendChild(text);
    }
    var button = window.document.createElement("button")
    button.innerHTML = "delete";
    td.appendChild(button);
    button.setAttribute("id", "delete");
    button.addEventListener("click", deleteFn);
    update();







}

function update() {
    var x = window.document.getElementsByTagName("tr");
    window.console.log(x.length - 1);
    var str = "Showing " + Number(x.length - 1) + " employees";
    var h3 = window.document.getElementById("employeeNumber");
    h3.innerHTML = str;
}

function deleteFn(e) {
    window.console.log("hi");
    var x = e.currentTarget;
    var y = x.parentElement.parentElement;
    y.remove();
    window.console.log(y);
    update();

}




function init() {
    var buttons = window.document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i = i + 1) {
        if (buttons[i].id !== "add") {
            buttons[i].addEventListener("click", deleteFn)
        } else {
            buttons[i].addEventListener("click", add);
        }
    }
    update();

}
window.addEventListener("load", init)
