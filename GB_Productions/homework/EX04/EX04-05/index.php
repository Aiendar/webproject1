<!DOCTYPE html>
<html>
	<head>
		<meta charset = "UTF-8">
		<link rel = "stylesheet" href = "css/stylesheet.css">
		<title>Event Scheduler</title>
		<script src = 'js/jquery-1.11.2.js'></script>
	</head>
	<body>
		<div id = 'container'>
			<header>Event Scheduler</header>
			<table>
				<?php
					$db = new mysqli("127.0.0.1", "musicuser", "123456",  "events");
					$query = "SELECT event ";
					$query .= "WHERE event = '$event' AND theDate = '$date';";
					$res = $db->query($query);
					$row = $res->fetch_assoc();

				?>
			</table>
			<div id = 'main'>
		    	<form id = 'event' method = 'get'>
		        <input type = 'text' name = 'userInput' id = 'userInput' class = 'input' placeholder = 'Event...'>
		        <br>
		        <input type = 'datetime-local' name ='date' id = 'date' class = 'input' placeholder = 'Date...'>
		        <br>
		        <input type = 'submit' id = 'Submit' value = 'Submit' class = 'input'>
		    	</form>

	    	</div>
   		</div>
    	<script src = 'js/eventAdder.js'></script>

	</body>
</html>