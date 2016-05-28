// JavaScript Document
var backgroundCol = new Array(53);
var alphaVar = 0;

backgroundCol[0] = 'rgba(255,192,192,';
backgroundCol[1] = 'rgba(255,199,192,';
backgroundCol[2] = 'rgba(255,206,192,';
backgroundCol[3] = 'rgba(255,213,192,';
backgroundCol[4] = 'rgba(255,220,192,';
backgroundCol[5] = 'rgba(255,227,192,';
backgroundCol[6] = 'rgba(255,234,192,';
backgroundCol[7] = 'rgba(255,241,192,';
backgroundCol[8] = 'rgba(255,249,192,';
backgroundCol[9] = 'rgba(255,255,192,';
backgroundCol[10] = 'rgba(248,255,192,';
backgroundCol[11] = 'rgba(241,255,192,';
backgroundCol[12] = 'rgba(234,255,192,';
backgroundCol[13] = 'rgba(227,255,192,';
backgroundCol[14] = 'rgba(220,255,192,';
backgroundCol[15] = 'rgba(213,255,192,';
backgroundCol[16] = 'rgba(206,255,192,';
backgroundCol[17] = 'rgba(199,255,192,';
backgroundCol[18] = 'rgba(192,255,192,';
backgroundCol[19] = 'rgba(192,255,199,';
backgroundCol[20] = 'rgba(192,255,206,';
backgroundCol[21] = 'rgba(192,255,213,';
backgroundCol[22] = 'rgba(192,255,220,';
backgroundCol[23] = 'rgba(192,255,227,';
backgroundCol[24] = 'rgba(192,255,234,';
backgroundCol[25] = 'rgba(192,255,241,';
backgroundCol[26] = 'rgba(192,255,249,';
backgroundCol[27] = 'rgba(192,255,255,';
backgroundCol[28] = 'rgba(192,248,255,';
backgroundCol[29] = 'rgba(192,241,255,';
backgroundCol[30] = 'rgba(192,234,255,';
backgroundCol[31] = 'rgba(192,227,255,';
backgroundCol[32] = 'rgba(192,220,255,';
backgroundCol[33] = 'rgba(192,213,255,';
backgroundCol[34] = 'rgba(192,206,255,';
backgroundCol[35] = 'rgba(192,199,255,';
backgroundCol[36] = 'rgba(192,192,255,';
backgroundCol[37] = 'rgba(199,192,255,';
backgroundCol[38] = 'rgba(206,192,255,';
backgroundCol[39] = 'rgba(213,192,255,';
backgroundCol[40] = 'rgba(220,192,255,';
backgroundCol[41] = 'rgba(227,192,255,';
backgroundCol[42] = 'rgba(235,192,255,';
backgroundCol[43] = 'rgba(242,192,255,';
backgroundCol[44] = 'rgba(249,192,255,';
backgroundCol[45] = 'rgba(255,192,255,';
backgroundCol[46] = 'rgba(255,192,248,';
backgroundCol[47] = 'rgba(255,192,241,';
backgroundCol[48] = 'rgba(255,192,234,';
backgroundCol[49] = 'rgba(255,192,227,';
backgroundCol[50] = 'rgba(255,192,220,';
backgroundCol[51] = 'rgba(255,192,213,';
backgroundCol[52] = 'rgba(255,192,206,';
backgroundCol[53] = 'rgba(255,192,199,';

var colorCounter = -1;
var numberOfColors = 53;
var colorTimer;
var alphaTimer;
var sinCounter = 0;

function setColor(){
	
	$('body.page1').css('background-color', backgroundCol[colorCounter] + alphaVar + ')');
	$('#sliderCont').css('background-color', backgroundCol[colorCounter] + alphaVar + ')');
	$('.authorSlideContainer').css('background-color', backgroundCol[colorCounter] + alphaVar + ')');
	colorCounter += 1;
		if(colorCounter >= numberOfColors){
		colorCounter = -1;
		}
		
}

function manageAlpha() {
    sinCounter = sinCounter + Math.PI / 30.5;
    alphaVar = Math.abs(Math.sin(sinCounter));
	
	if (Math.abs(Math.sin(sinCounter))<=0.15) {
		alphaVar = (Math.abs(Math.sin(sinCounter)) + .035)
	}
}

$(document).ready(function(){	

	$('body.page1').css('background-color', backgroundCol[colorCounter] + alphaVar + ')');
	
	colorTimer = setInterval(setColor, 600);
	alphaTimer = setInterval(manageAlpha, 20);

});