function formController ($scope , $http) {
  $scope.submit = function(){
  var username = $scope.user.username;
  var password = $scope.user.password;
  var data = {
    "username":username,
    "password":password
  };
  $scope.user.username = null;
  $scope.user.password = null;
  console.log(data);
}

};
