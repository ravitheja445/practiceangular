var myApp = angular.module("myModule",[]);

myApp.controller("myController", function ($scope) {
 var flower = {
   name: "Rose",
   color: "watery",
   image: "images/flower.png"
 };
 $scope.flower = flower;
});
