var picList = new Array (2);

var bButtonListener;
var fButtonListener;

picList[0] = "images/appleparkman.png";
picList[1] = "images/wmts.png";

var whatPicture;

window.onload = function() {

var whatPicture = 0;
	
	document.getElementById("pictureView").src = picList[whatPicture];
	
	fButtonListener = document.getElementById("")
	bButtonListener = document.getElementById("")
	
	fButtonListener.addEventListener('click', function(event) {
		whatPicture++
		whatCaption++
		whatLocation++
		if(whatPicture >= picList.length - 1) {
		whatPicture = 0;
		whatCaption = 0;
		whatLocation = 0;
	}
	document.getElementById("pictureView").src = picList[whatPicture];
	
	});
	
	bButtonListener.addEventListener('click', function(event) {
		whatPicture--
		whatCaption--
		whatLocation--
	if(whatPicture < 0) {
		whatPicture = picList.length - 1;
		whatCaption = captionData.length - 1;
		whatLocation = locationData.length - 1;
	}
	document.getElementById("pictureView").src = picList[whatPicture];
	});

}
