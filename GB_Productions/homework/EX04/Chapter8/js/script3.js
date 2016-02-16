$(function(){

	var accordionControl = function(){
		$( function(){ // When clicked
		  //e.preventDefault();                    // Prevent default action of button
		  $(this)                                // Get the element the user clicked on
		    .next('.accordion-panel')            // Select following panel 
		    .not(':animated')                    // If it is not currently animating
		    .slideToggle();                      // Use slide toggle to show or hide it
		});
	}

	
	console.log("Script is running.");
	$('nav a').on('click', function(e) {                 // User clicks nav link
		
		e.preventDefault();                                // Stop loading new link
		var url = this.href;                               // Get value of href

		$('nav a.current').removeClass('current');         // Clear current indicator
		$(this).addClass('current');                       // New current indicator

		$('#content').empty();                          // Remove old content
		if (url !== null){
			console.log(url);
			$('#content').load(url + ' #content').hide().fadeIn('slow'); // New content
			
		}
		
		
		else if(url === 'http://cs1.whitworth.edu/sgolan15/EX04/Chapter8/index.html' || "http://cs1/sgolan15/EX04/Chapter8/index.html"){

			formFunction();
		}
		else if (url === 'http://cs1/sgolan15/EX04/Chapter8/accordion.html'){
			$('#content').load(url + ' #content').show();
			accordionControl();
		}
	});

	document.onload = $(function(){
		
		formFunction();
	});

	function formFunction()
	{
		var line1 = "<form id = 'userInput' method = 'get'>";
		var line2 = "<input type = 'text' id = 'text'>";
		var line3 = "<input type = 'submit' value = 'Submit'>";
		var line4 = "</form>";
		var $form = $(line1 + line2 + line3 + line4);
		$('#content').append($form).show();
		$('#content').css({'opacity':'100'});
		$('#userInput').submit(function(e){
			e.preventDefault();
			var text = $('input:text').val();
			console.log(text);
			localStorage.setItem('userInput', text);
			location.reload();
		});
	}
		
});

