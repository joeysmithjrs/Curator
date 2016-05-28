var sliderBackgroundPic = [ 'images/displayPic1.jpg', 'images/displayPic2.jpg', 'images/displayPic3.jpg', 'images/displayPic4.jpg', 'images/displayPic5.jpg' ]; 
var sliderProfilePic = [ 'images/prof1.jpg', 'images/prof2.png', 'images/prof3.jpg', 'images/prof4.png', 'images/prof5.jpeg' ];    
var sliderArticleTitle = [ 'Hillary mocks bernie for looking like Doc from B2TF', 'United Nations Kicks out America Because of Possible Trump Presidency', 'Kangaroos burn down Australian Federal Reserve', 'NSA calls for mandatory brain micropchipping in 2017', 'Elon Musk Decides to quit Innovating to become a ballet dancer' ];    
var picCounter = 0;
var picTimer;
var changeIt = ""


function setPic() { 
	
	$('.sliderArticleTitle').empty();
	$('.slider').css('background-image', 'url("' + sliderBackgroundPic[picCounter % sliderBackgroundPic.length] + '")');
	 $('.authorSlideCircle').css('background-image', 'url("' + sliderProfilePic[picCounter %  sliderProfilePic.length] + '")');
	 $('.sliderArticleTitle').append(sliderArticleTitle[picCounter %  sliderArticleTitle.length] + '")');
   
    picCounter++;
}

$(document).ready(function(){
	
	picTimer = setInterval(setPic, 6000);
    setPic();

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