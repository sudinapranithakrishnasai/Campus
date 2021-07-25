var app=angular.module('myform',[])
app.controller('control',function($scope,$http){
 $scope.user={};
    $scope.post=function(value){
    if(value.name==null)
    {
      alert("Fields Cannot Be Empty");
    }
    else if((value.name.length>=3)&&(value.email.length>=3)&&(value.phone.length>=3)&&(value.pwd.length>=3)&&(value.cpwd.length>=3))
    {
      $http({
        method:"post",
        url:'/postdata',
        data:value   //api
        }).then(function(success){
        //console.log(success)
        console.log(value)
        alert('Successfully Registered')
        $scope.user={};
        },function(error){
        console.log(error)
        alert("Already same value is present please try another one")
      })
      }else{
        alert("Please enter fields with minimum length")
      } 
    }


  $scope.login={};
  $scope.logins=function(value){
    $http({
      method:'post',
      url:'/login',
      data:value  
    }).then(function(success){
     // console.log(value)
      alert("Redirecting to home page!!!");
      window.location.href="/home"
    },function(error){
      alert("Please enter valid details")
    })
  
 }
 

})