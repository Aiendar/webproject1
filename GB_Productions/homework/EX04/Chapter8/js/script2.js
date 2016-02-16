$(function(){

	var $content = $('<section> </section>');
	$content.addClass('content');
	$('nav').after($content);

	

	 function formFunction($theContent){
		var line1 = "<form id = 'userInput' method = 'get'>";
		var line2 = "<input type = 'text' id = 'text'>";
		var line3 = "<input type = 'submit' value = 'Submit'>";
		var line4 = "</from>";
		var $form = $(line1 + line2 + line3 + line4);
		$($theContent).append($form);
		$('#userInput').submit(function(e){
			e.preventDefault();
			var text = $('input:text').val();
			console.log(text);
			localStorage.setItem('userInput', text);
			location.reload();
		});
	}


	document.onload = $(function(){
		var $container = $('<div></div>');
	$container.addClass('container');

		console.log('I executed on load');
		formFunction($container);
		$($content).append($container);
	})

	$(function(){
	  console.log("Script is running.");
	  $('nav a').on('click', function(e) {                 // User clicks nav link
		  e.preventDefault();                                // Stop loading new link
		  var url = this.href;                               // Get value of href

		  $('nav a.current').removeClass('current');         // Clear current indicator
		  $(this).addClass('current');                       // New current indicator

		  $($container).hide();                          // Remove old content
		  var $container = $('<div></div>');
			$container.addClass('container');
			$($content).empty();
		  if(url === 'http://cs1/sgolan15/EX04/Chapter8/index.html'){
		  	$($content).append($container);
		  	formFunction($container);
		  	console.log(url);

		  }
		  else
		  {
		  	$($content).load(url + ' #content').hide().fadeIn('slow');
		  }

	});


	

	
	});

	

});