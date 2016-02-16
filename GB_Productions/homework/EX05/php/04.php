<html>
<body>


<?php
	$name = $_POST["name"];
	$addd = ", ";
	echo $name;
	$test = $name;
	$email = $_POST["email"];
	$test .= $addd;
	$test .= $email;
	$thing1 = $_POST["thing1"];
	$test .= $addd;
	$test .= $thing1;
	$thing2 = $_POST["thing2"];
	$test .= $addd;
	$test .= $thing2;
	$thing3 = $_POST["thing3"];
	$test .= $addd;
	$test .= $thing3;
	$thing4 = $_POST["thing4"];
	$test .= $addd;
	$test .= $thing4;
	$thing5 = $_POST["thing5"];
	$test .= $addd;
	$test .= $thing5;
	$test .= " / ";
	$myfile = fopen("text.txt", "w");
	fwrite($myfile, $test);
	fclose($myfile);
?>
</body>
</html>