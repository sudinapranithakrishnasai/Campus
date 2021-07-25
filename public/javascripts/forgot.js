
var app=angular.module('myLogin',[])
app.controller('myCntrl',function($scope,$http){
   $scope.forget={};
   $scope.hide=false;
   $scope.key=true;
   $scope.pass=false;
   $scope.checkmail=function(value){
$http({
       method:'post',
       url:'/check',
       data:value
   }).then(function(success){
    //console.log(success)
    $scope.hide=true;
   },function(error){
    alert("Something went wrong");
   })

  }

  $scope.validate=function(value){
    $http({
      method:'post',
      url:'/valid',
      data:value
    }).then(function(success){
      alert('OTP matched');
      //console.log(success);
      $scope.key=false;
      $scope.pass=true;
   },function(error){
      alert('OTP did not match');

  })
}

 $scope.password=function(value){
  if(value.password != value.cpassword){
    alert("Passwords did not match")
  }else if(value.password==null || value.cpassword==null) {
    alert("Password field is empty")
  }else{
    $http({
      method:'post',
      url:'/password',
      data:value
    }).then(function(success){
      console.log(success)
      alert('Password updated successfully')
   },function(error){
      alert('Password not Updated');

  })
  }
}





})