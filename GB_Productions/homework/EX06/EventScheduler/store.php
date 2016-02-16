<html>
	<?php 
		$db = new mysqli("127.0.0.1", "eventscheduler", "123456", "events");
		if (!$db) {die('Could not connect: ' . mysql_error());}


		$event = $_POST['event'];
		$date = $_POST['date'];

		$query = "SELECT theEvent ";
		$query .= "FROM event ";
		$query .= "WHERE theEvent = '$event' AND theDate = '$date'";
		$db->query($query);

		if($db->affected_rows == 0 && $event != null && $date != null){
			$query = 'INSERT INTO event ';
			$query .= "VALUES('$event', '$date');";
			$db->query($query)
			or die($db->error);
			header( 'Location: http://localhost/xampp/EX06/EventScheduler/' ) ;
		}
		else{
			$string ='<script>var txt;var r = window.alert("Event already exists, or one of the fields was empty.")';
			$string .=';if (r == true) {console.log("something"); }';
			 $string .= 'else {console.log("error");window.location.replace("http://localhost/xampp/EX06/EventScheduler/index.html");}</script>';
			 echo $string; 
		}
		 
	?>
</html>