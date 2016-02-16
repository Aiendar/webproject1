<?php
	$data = file_get_contents("php://input");
 	$objdata = json_decode($data);
 	//$output = (string)$objdata;
 	$thisEvent = $objdata->thisEvent;
 	$thisDate = $objdata ->thisDate;
 	error_log($thisEvent);
 	$db = new mysqli("127.0.0.1", "eventscheduler", "123456", "events");
	if (!$db) {die('Could not connect: ' . mysql_error());}
	$query = "DELETE FROM event ";
	$query.= "WHERE theEvent = '$thisEvent' AND theDate = '$thisDate'";
	$db->query($query)
		or die("I'm dead". $db->error);
	echo 'Something';
?>