var myApp = angular
                .module("myModule",[])
                .controller("myController", function ($scope){
                  var employee = {
                    firstName: "ravitheja",
                    lastName: "reddy",
                    gender: "male"
                  };
                  $scope.employee = employee;

                });
