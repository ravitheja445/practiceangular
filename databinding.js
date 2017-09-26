var myApp = angular.module("myModule",[]);

myApp.controller("myController", function ($scope){
 var employee = {
   firstname: "ravitheja"
   lastname: "reddy"
   gender: "male"
 };
 $scope.employee = employee;
});
