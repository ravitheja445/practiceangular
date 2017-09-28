var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

          var employees = [
            { name: "Ben", dateOfBirth: new Date("November 23,1980"), gender: "Male", salary: 30000.75 },
            { name: "Sara", dateOfBirth: new Date("May 09, 1989"), gender: "Female", salary: 31000.56 },
            { name: "Mark", dateOfBirth: new Date("August 18, 1994"), gender: "Male", salary:51000.98 },
            { name: "Ravi", dateOfBirth: new Date("November 24, 1988"), gender: "Male", salary:55000.55},
            { name: "Jones", dateOfBirth: new Date("September 5, 1990"), gender: "Male", salary:45000.65}
          ];
          $scope.employees = employees;
          
        });
