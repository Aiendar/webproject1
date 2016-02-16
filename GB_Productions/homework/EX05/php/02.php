<html>

<?php
	$backround = $_POST["background"];
	$forround =  $_POST["forground"];

?>
<style>
body{
	background-color: <?php echo $backround;?>;
}

p{
	color: <?php echo $forround;?>;
}

</style>

<body>
	<p>text</p>
</body>
</html>