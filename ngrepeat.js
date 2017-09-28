var app = angular
              .module("myModule", [])
              .controller("myController", function ($scope) {
                var employees = [
                  {firstName: "ravitheja", lastName: "reddy", gender: "male", salary: 3000 },
                  {firstName: "kryJash", lastName: "reddy", gender: "male", salary: 4000 },
                  {firstName: "dhiraj", lastName: "kumar", gender: "male", salary: 3500 },
                  {firstName: "Jones", lastName: "nethala", gender: "male", salary: 4000 },
                  {firstName: "karthik", lastName: "jyothula", gender: "male", salary: 3000 }
                ];

                $scope.employees = employees;

              });
