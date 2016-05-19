var changeIt = ""
var backgroundPic = new Array(4);

backgroundPic[0] = '(images/displayPic1.jpg)';
backgroundPic[1] = '(images/displayPic2.jpg)';
backgroundPic[2] = '(images/displayPic3.jpg)';
backgroundPic[3] = '(images/displayPic4.jpg)';
backgroundPic[4] = '(images/displayPic5.jpg)';

var picCounter = 0;
var numberOfPics = 5;
var picTimer;

function setPic(){
	//alert("hi I want this pic: " + backgroundPic[picCounter]);
	$('slider').css('background-image', url + "backgroundPic[picCounter]");

	picCounter += 1;
		if(picCounter >= numberOfPics){
		picCounter = 0;
	}
		
}

$(document).ready(function(){
	
	$('recentPosts').scrollNav();
	
	$('slider').css('background-image', backgroundPic[picCounter]);
	
	picTimer = setInterval(setPic, 2000);

	$("#firstCat").hover(function () { 
			   $(this).animate({'height': '104%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '16%'}, { duration: 100, queue: false });
			  	var changeIt = "Financial Markets"
				$('#catChange').append(changeIt);
				$('#catChange').css("border-style", "solid");
				$('#catChange').css("border-color", "#FEF9ED");
	 	});
	
	 $("#firstCat").mouseout(function () { 
			   $(this).animate({'height': '99%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '14%'}, { duration: 100, queue: false });
				$('#catChange').empty(changeIt);
				$('#catChange').css("border-style", "none");
		});
		
		
	$("#lastCat").hover(function () { 
			   $(this).animate({'height': '104%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '16%'}, { duration: 100, queue: false });
			   var changeIt = "Current Events"
				$('#catChange').append(changeIt);
				$('#catChange').css("border-style", "solid");
				$('#catChange').css("border-color", "#FEF9ED");
	 	});
	
	 $("#lastCat").mouseout(function () { 
			   $(this).animate({'height': '99%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '14%'}, { duration: 100, queue: false });
			   $('#catChange').empty(changeIt);
			   $('#catChange').css("border-style", "none");
			   $('#catChange').css("border-color", "#FEF9ED");
		});
	
	$("#midCat").hover(function () { 
			   $(this).animate({'height': '102%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '15%'}, { duration: 100, queue: false });
			   var changeIt = "Science & Technology"
				$('#catChange').append(changeIt);
				$('#catChange').css("border-style", "solid");
	 	});
	
	 $("#midCat").mouseout(function () { 
			   $(this).animate({'height': '98%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '14%'}, { duration: 100, queue: false });
			   $('#catChange').empty(changeIt);
			   $('#catChange').css("border-style", "none");
			   $('#catChange').css("border-color", "#FEF9ED");
	});
	
	$("#beforeMid").hover(function () { 
			   $(this).animate({'height': '106%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '15%'}, { duration: 100, queue: false });
			   var changeIt = "Politics"
				$('#catChange').append(changeIt);
				$('#catChange').css("border-style", "solid");
				$('#catChange').css("border-color", "#FEF9ED");
	 	});
	
	 $("#beforeMid").mouseout(function () { 
			   $(this).animate({'height': '100%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '14%'}, { duration: 100, queue: false });
			   $('#catChange').empty(changeIt);
			   $('#catChange').css("border-style", "none");
	});
		$("#afterMid").hover(function () { 
			   $(this).animate({'height': '106%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '15%'}, { duration: 100, queue: false });
			    var changeIt = "International Affairs"
				$('#catChange').append(changeIt);
				$('#catChange').css("border-style", "solid");
				$('#catChange').css("border-color", "#FEF9ED");
	 	});
	
	 $("#afterMid").mouseout(function () { 
			   $(this).animate({'height': '100%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '14%'}, { duration: 100, queue: false });
			   $('#catChange').empty(changeIt);
			   $('#catChange').css("border-style", "none");
			   
	});
});