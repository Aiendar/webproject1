function getStoredController($scope, $http){
	var site = "http://localhost";
  	var page = "/xampp/EX06/EventScheduler/getStored.php";
	data = "the dater";
	$http.post(site + page, data )
    .success(function(response, status) {
      $scope.day2 = response;
      $scope.status = status;
    })
    .error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });
	$scope.go = function(item){
    page = "/xampp/EX06/EventScheduler/removeEvent.php";

   

    theDater = $scope.result.splice(item, 1);

    console.log(theDater[0][0]);
    console.log(theDater[0][1]);
    data = {
      "thisEvent" : theDater[0][0],
      "thisDate" : theDater[0][1]
    }
    
    $http.post(site + page, data );

  }
}