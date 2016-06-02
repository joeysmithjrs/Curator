var sliderBackgroundPic = [ 'images/displayPic1.jpg', 'images/displayPic2.jpg', 'images/displayPic3.jpg', 'images/displayPic4.jpg', 'images/displayPic5.jpg' ]; 
var sliderProfilePic = [ 'images/prof1.jpg', 'images/prof2.png', 'images/prof3.jpg', 'images/prof4.png', 'images/prof5.jpeg' ];    
var sliderArticleTitle = [ 'United Nations Kicks out America Because of Possible Trump Presidency', 'Kangaroos burn down Australian Federal Reserve','Hillary mocks bernie for looking like Doc from Back 2 The Future','NSA calls for mandatory brain micropchipping in 2017', 'Elon Musk Decides to quit Innovating to become a ballet dancer' ];  
var authorNameArray = ['Joey Smith', 'HM Mike', 'TBJkicks.com', 'Dr. Kup', 'Mr. Dogs']
var picCounter = 0;
var picTimer;
var changeIt = ""


function setPic() { 
	
	$('.slider').css('background-image', 'url("' + sliderBackgroundPic[picCounter % sliderBackgroundPic.length] + '")');
	 $('.authorSlideCircle').css('background-image', 'url("' + sliderProfilePic[picCounter %  sliderProfilePic.length] + '")');
	 $('.slideArticleName').html(sliderArticleTitle[picCounter %  sliderProfilePic.length])
	 $('.authorName').html(authorNameArray[picCounter %  authorNameArray.length])
   
    picCounter++;
}

$(document).ready(function(){
	
	picTimer = setInterval(setPic, 6000);
    setPic();
	
	$('.slideArticleName').hover(function() {
		$(this).css('background-color', 'rgba(189,220,240,1.00)');
	});
	$('.slideArticleName').mouseout(function() {
		$(this).css('background-color', 'rgba(189,220,240,0.75)');
	});
	$('.authorName').hover(function() {
		$(this).css('background-color', 'rgba(189,200,240,1.00)');
	});
	$('.authorName').mouseout(function() {
		$(this).css('background-color', 'rgba(189,200,240,0.75)');
	});



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
			   $(this).animate({'height': '112%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '18.5%'}, { duration: 100, queue: false });
			   var changeIt = "Science & Technology"
				$('#catChange').append(changeIt);
				$('#catChange').css("border-style", "solid");
	 	});
	
	 $("#midCat").mouseout(function () { 
			   $(this).animate({'height': '110%'}, { duration: 100, queue: false });
			   $(this).animate({'width': '18%'}, { duration: 100, queue: false });
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