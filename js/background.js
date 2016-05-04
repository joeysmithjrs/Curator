// JavaScript Document
var backgroundCol = new array(20);
var changeColor = 0;

backgroundCol[0] = "rgba(255,193,193,1.00)";
backgroundCol[1] = "rgba(255,223,193,1.00)";
backgroundCol[2] = "rgba(255,255,193,1.00)";
backgroundCol[3] = "rgba(235,255,193,1.00)";
backgroundCol[4] = "rgba(205,255,193,1.00)";
backgroundCol[5] = "rgba(193,255,200,1.00)";
backgroundCol[6] = "rgba(193,255,220,1.00)";
backgroundCol[7] = "rgba(193,255,235,1.00)";
backgroundCol[8] = "rgba(193,245,255,1.00)";
backgroundCol[9] = "rgba(193,235,255,1.00)";
backgroundCol[10] = "rgba(193,215,255,1.00)";
backgroundCol[11] = "rgba(193,200,255,1.00)";
backgroundCol[12] = "rgba(193,193,255,1.00)";
backgroundCol[13] = "rgba(208,193,255,1.00)";
backgroundCol[14] = "rgba(223,193,255,1.00)";
backgroundCol[15] = "rgba(243,193,255,1.00)";
backgroundCol[16] = "rgba(255,193,245,1.00)";
backgroundCol[17] = "rgba(255,193,229,1.00)";
backgroundCol[18] = "rgba(255,193,213,1.00)";
backgroundCol[19] = "rgba(255,193,200,1.00)";
backgroundCol[20] = "rgba(255,193,193,1.00)";

window.onload = function() {
	
	setTimeout(myFunction, 3000)
	
	var backgroundColor = rgba(255,193,193,1.00);
	
	var changeColor = 0;
	
	document.body.style.backgroundColor = backgroundCol[changeColor];
	
	myFunction();

}

function myFunction() {
	changeColor++
	if(changeColor < backgroundCol.length){
		document.body.style.backgroundColor = background[changeColor];
	} else {
		changeColor =0;
	}
}
