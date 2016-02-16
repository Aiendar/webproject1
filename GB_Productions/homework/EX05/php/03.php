<html>
<body>

<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$department = $_POST["department"];
	$desc = htmlentities(stripslashes($_POST["desc"]));
	if ($desc == null){
		$desc = "desc is null";
	}
	$deco = html_entity_decode($desc);
	echo "thank you for your input $name"; 
	$message = "thank you for your input $name";
	echo "<br>";
		if ($department == "Trans")
		{
			echo "the Wahbulance Transit department has been notified regarding your complaint: <br>"; 
			$message .= "the Wahbulance Transit department has been notified regarding your complaint: ";
			echo $deco;
		}
		else if ($department == "Coun")
		{
			echo "the Wahbulance Counceling services has been notified regarding your complaint: <br>"; 
			$message .= "the Wahbulance Counceling services has been notified regarding your complaint: " ;
			echo $deco;
		}
		else if ($department == "Comp")
		{
			echo "the Wahbulance Complainers Corner has been notified regarding your complaint: <br>"; 
			$message .= "the Wahbulance Complainers Corner has been notified regarding your complaint: " ;
			echo $deco;
		}
		else {
			echo "error: you broke me you jerk<br>";
			echo $deco;
		}
		echo "<br>";
	echo $email;
	echo "<br>";
	$message .= $deco;
	echo $message;
?>

</body>
</html>