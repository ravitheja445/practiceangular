var app = angular
              .module("myModule", [])
              .controller("myController", function ($scope) {
                var countries = [
                  {
                    name: "UK",
                    cities: [
                      {name: "London"},
                      {name: "Machester"},
                      {name: "Liverpool"}
                    ]
                  },
                  {
                    name: "USA",
                    cities: [
                      {name: "Chicago"},
                      {name: "Washington"},
                      {name: "Newyork"}
                    ]
                  },
                  {
                    name: "India",
                    cities: [
                      {name: "Mumbai"},
                      {name: "Hyderabad"},
                      {name: "Delhi"}
                    ]
                  },
                ];
                $scope.countries = countries;
              });
