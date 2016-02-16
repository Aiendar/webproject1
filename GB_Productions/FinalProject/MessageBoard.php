<?php
  session_start();
  if(isset($_SESSION['access'])){
    if($_SESSION['access'] == 'yes'){}
    else{
      header( 'Location: http://localhost/xampp/FinalProject/login.php' ) ;
    }
  }
  else{
     header(  'Location: http://localhost/xampp/FinalProject/login.php'  ) ;
  }
?>

<html>
	<head>
		<meta charset = "utf-8">
		<link rel = 'stylesheet' href = 'css/theBase.css'/>
		<link rel = 'stylesheet' href = 'css/MessageBoard.css'/>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
		<title>Message Board</title>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
		<script src='js/jquery-1.11.2.js'></script>
		<script src='js/NewPost.js'></script>
		<script src='js/messageBoardController.js'></script>
	</head>
	<body ng-app='' ng-controller='messageBoardController'>

		<!--Independant header -->
		<header>
			<ul>
				<li><a href = 'messageboard.php' id = 'first'><div id = 'logolink' class = 'container'><img src = "img/newlogo.png"/></div></a></li>
				<a href = "messageboard.php"><li>Message Board</li></a>
				<a href = "Schedule.php"><li>Schedule</li></a>
				<a href = "PrivateMessages.php"><li>Private Messages</li></a>
				<a href = "InfoPage.php"><li>Info Page</li></a>
				<a href = "Logout.php"><li>Logout</li></a>
				<li/>
			</ul>
		</header>

		<div id = 'maindiv'>
			<div id = 'messageStream'>
				<div id = 'newPost'>
					<form>
						<textarea ng-model = 'user.theContent'></textarea value = 'something' placeholder = 'New post...'><br>
						<input type = 'submit' value ='Submit' ng-click = 'submitPost()'>
						<input type = 'submit' value ='Cancel' id = 'cancel'>
					</form>
				</div>
				<ul>
					<li>
						<div id ='message' ng-repeat = 'x in result'>
							<p id = 'thePoster'> {{ x.3 }} </p>
							<span id = 'content'> {{ x.1 }} </span>
						</div>


					</li>
				</ul>
			</div>

		</div>
</html>