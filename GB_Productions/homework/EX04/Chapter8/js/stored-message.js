console.log("script is running.");
$(function() {
	console.log("Form function is running.");
	$("#messages").submit(function(e){
		console.log("Submit is being caught.");
		e.preventDefault();
		var newText = $('input:text').val();
		console.log(newText);
		localStorage.setItem('userInput', newText);
		//location.reload();
	});
});


$(function(){
	var text = localStorage.getItem('userInput');
	var $newDiv = $("<div><p>" + text + "</p></div>")
	$('div:last').after($newDiv)
});


var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When response has loaded
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // If server status was ok
    document.getElementById('content').innerHTML = xhr.responseText; // Update
  }
};

xhr.open('GET', 'cap-message.html', true);        // Prepare the request
xhr.send(null);                                 // Send the request


// NOTE: If you run this file locally
// You will not get a server status
// You can set the conditional statement to true on line 5 as shown below
// if(true) {