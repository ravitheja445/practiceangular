var myApp = angular.module("myModule",[]);

myApp.controller("myController", function ($scope) {
 var employee = {
   firstName: "Ravitheja",
   lastName: "Reddy",
   gender: "Male"
 };
 $scope.employee = employee;
});
