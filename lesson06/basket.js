


function putBasket(obj,number) {
    var count = 1;
    var cell = document.getElementById("table_basket");
    var tr = document.createElement("tr");
    cell.appendChild(tr);
    var td = document.createElement("td");
    td.innerHTML = count;
    tr.appendChild(td);
    td = document.createElement("td");
    var nn = 'dress' + number;
    var str = document.getElementsByClassName(nn)[0].innerHTML;
    td.innerHTML = str;
    console.log(str);
    tr.appendChild(td);
    td = document.createElement("td");
    str = document.getElementsByClassName('name' + number)[0].innerHTML;
    td.innerHTML = str;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = document.getElementsByClassName('art' + number)[0].innerHTML;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = document.getElementsByClassName('price' + number)[0].innerHTML;
    tr.appendChild(td);
}

