$(function(){
	var liString1 = '<li class = "singleEvent" id = "';
	var p1Begin1 = '<p id = value = "';
	var p1Begin2 = '">';
	var pEnd = '</p>';

	if(localStorage.getItem('num_events') == null)
	{
		localStorage.setItem('num_events', '0');
	}

	var num_events = localStorage.getItem('num_events');
	var inc= parseInt(num_events); 
	var $list;
	$list = $('ul');

	$('#event').submit(function(e){
		e.preventDefault();
		var theEvent = $('#userInput').val();//$('#event').serialize();
		var theDate = $('#date').val();
		//console.log(text);
		if(theEvent != '' && theDate != ''){
			inc++;
			$('ul').append(liString1+ parseInt(inc)+'">'+p1Begin1 +'Event '+parseInt(increment+1)+p1Begin2+
					theEvent+pEnd+p1Begin1+
					'Date '+parseInt(increment+1)+p1Begin2+theDate+pEnd+'</li>');
			localStorage.setItem("Event " + inc, theEvent);
			localStorage.setItem("Date " + inc, theDate);
			localStorage.setItem('num_events', ''+inc);
		}

	});
	$($list).on('click', 'li', function(){
	
		var id = $(this).attr('id');
		if(id < inc){

			var tempEvent = localStorage.getItem('Event ' + inc);
			localStorage.setItem('Event ' + id, tempEvent);
			var tempDate = localStorage.getItem('Date ' + inc);
			localStorage.setItem('Date ' + id, tempDate);
		}

		localStorage.removeItem('Event ' + inc);
		localStorage.removeItem('Date ' + inc);
		var num = localStorage.getItem('num_events');
		num--;
		inc--;
		localStorage.setItem('num_events', parseInt(num));

		$(this).remove();
	});

	for(var increment = 0; increment < num_events; increment++){
		if(localStorage.getItem('Event '+parseInt(1+increment)) != null)
		{
			$('ul').append(liString1 + parseInt(increment+1)+'">'+p1Begin1 +'Event '+parseInt(increment+1)+p1Begin2+
				localStorage.getItem('Event '+parseInt(1+increment))+pEnd+p1Begin1+
				'Date '+parseInt(increment+1)+p1Begin2+localStorage.getItem('Date '+parseInt(1+increment))+pEnd+'</li>');
		}
	}
});
