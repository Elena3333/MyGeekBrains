var count = 0;
var chessWhite = ["&#9814", "&#9816", "&#9815", "&#9813", "&#9812", "&#9815", "&#9816", "&#9814"];
var chessWh = "&#9817";
var chessBl = "&#9823";
var chessBlack = ["&#9820", "&#9822", "&#9821", "&#9818", "&#9819", "&#9821", "&#9822", "&#9820"];

var parentElem = document.body;
var div = document.createElement("div");
parentElem.appendChild(div);
div.innerHTML = "<h1>    A    B    C  D  E  F  G </h1>";
parentElem.appendChild(div);

var table = document.createElement("table");
table.className = "myTable";
div.appendChild(table);
addTr(8, table);



function addTr(num, table) {
	for (var i = 0; i < num; i++) {
		var tr = document.createElement("tr");
		if (i % 2 == 0) tr.className = "first";
		else tr.className = "second";
		table.appendChild(tr);
		addTd(num + 1, tr, i);
	}
}

function addTd(num, tr, i) {
	for (var y = 0; y < num; y++) {
		var td = document.createElement("td");

		if (y == 0) {
			td.innerHTML = ++count;

		} else
			switch (i) {
				case 0:
					td.innerHTML = chessBlack[y - 1];
					break;
				case 1:
					td.innerHTML = chessBl;
					break;
				case 6:
					td.innerHTML = chessWh;
					break;
				case 7:
					td.innerHTML = chessWhite[y - 1];
					break;
					break;
			}
		tr.appendChild(td);

	}

}
