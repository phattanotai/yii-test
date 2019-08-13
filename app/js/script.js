var app = angular.module('myApp', []);
app.controller('mianController', function($scope,$http) {

      $scope.data = new Array();

      
      $http.post(
                "index.php?r=Data/Look"
              ).success(function(data){
                 $scope.data= data;
                 console.log(data)
              }).error(function(data){
                  console.log(data);
      });
      
      
      $scope.random = function(){
        //if($scope.status == 0){
              $http.post(
                "index.php?r=Data/Random"
              ).success(function(data){
                 $scope.data= data;
                 $scope.status = 1;
              }).error(function(data){
                  console.log(data);
              });
       //}
      }

      $scope.look = function(){
            $scope.i = document.getElementById("sc").value;
              if($scope.i == $scope.data[0]){
                  if($scope.i.substring(1,3) == $scope.data[6]){
                      alert($scope.i+ " ถูกรางวัลที่ 1 และ รางวัลเลขท้าย 2 ตัว"); 
                  }else{
                      alert($scope.i+ " ถูกรางวัลที่ 1");
                  }                 
              }else if($scope.i == $scope.data[1]){
                  if($scope.i.substring(1,3) == $scope.data[6]){
                      alert($scope.i+ " ถูกรางวัลเลขข้างเคียงรางวัลที่ 1 และ รางวัลเลขท้าย 2 ตัว"); 
                  }else{
                      alert($scope.i+ " ถูกรางวัลเลขข้างเคียงรางวัลที่ 1");
                  }     
              }else if($scope.i == $scope.data[2]){
                  if($scope.i.substring(1,3) == $scope.data[6]){
                      alert($scope.i+ " ถูกรางวัลเลขข้างเคียงรางวัลที่ 1  และ รางวัลเลขท้าย 2 ตัว"); 
                  }else{
                      alert($scope.i+ " ถูกรางวัลเลขข้างเคียงรางวัลที่ 1");
                  }     
              }else if($scope.i == $scope.data[3]){
                  if($scope.i.substring(1,3) == $scope.data[6]){
                      alert($scope.i+ " ถูกรางวัลที่ 2 และ รางวัลเลขท้าย 2 ตัว"); 
                  }else{
                      alert($scope.i+ " ถูกรางวัลที่ 2");
                  }     
              }else if($scope.i == $scope.data[4]){
                  if($scope.i.substring(1,3) == $scope.data[6]){
                      alert($scope.i+ " ถูกรางวัลที่ 2 และ รางวัลเลขท้าย 2 ตัว"); 
                  }else{
                      alert($scope.i+ " ถูกรางวัลที่ 2");
                  }     
              }else if($scope.i == $scope.data[5]){
                  if($scope.i.substring(1,3) == $scope.data[6]){
                      alert($scope.i+ " ถูกรางวัลที่ 2 และ รางวัลเลขท้าย 2 ตัว"); 
                  }else{
                      alert($scope.i+ " ถูกรางวัลที่ 2");
                  }     
              }else if($scope.i.substring(1,3) == $scope.data[6]){
                      alert($scope.i+ " รางวัลเลขท้าย 2 ตัว"); 
              }else{
                  alert($scope.i+ " ไม่ถูกรางวัลใดเลย");
              }
          
              document.getElementById('sc').value = "";
      }

      $scope.checkInt = function(e){
          alert(e.keyCode)
      }
});

function random(){
  alert(2)
   $.ajax({     
                type:"post",         
                url: "index.php?r=Data/Random",   
                success:function(data){
                                  
                     // $scope.data = data;
                       console.log(data)  
  
                }
             });
}